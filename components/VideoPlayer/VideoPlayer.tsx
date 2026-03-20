"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./VideoPlayer.css";
import type Hls from "hls.js";

type QualityOption = {
  index: number;
  label: string;
};

type VideoPlayerProps = {
  isOpen: boolean;
  onClose: () => void;
  src?: string;
  poster?: string;
  title?: string;
};

const DEFAULT_HLS_SRC = "/assets/trailer/master.m3u8";
const SEEK_SECONDS = 10;
const CONTROLS_AUTO_HIDE_MS = 3000;

const formatTime = (value: number) => {
  if (!Number.isFinite(value) || value < 0) {
    return "00:00";
  }

  const totalSeconds = Math.floor(value);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const getQualityLabel = (height: number) => {
  if (!height) return "Unknown";
  return `${height}p`;
};

export default function VideoPlayer({
  isOpen,
  onClose,
  src = DEFAULT_HLS_SRC,
  poster,
  title = "Sathwa Trailer",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const qualityMenuId = useId();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isBuffering, setIsBuffering] = useState(false);
  const [qualityOptions, setQualityOptions] = useState<QualityOption[]>([]);
  const [selectedQuality, setSelectedQuality] = useState<number>(-1);
  const [isQualityMenuOpen, setIsQualityMenuOpen] = useState(false);
  const [statusText, setStatusText] = useState("Loading stream...");
  const [areControlsVisible, setAreControlsVisible] = useState(true);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  const progressPercent = duration > 0 ? `${(currentTime / duration) * 100}%` : "0%";

  const selectedQualityLabel = useMemo(() => {
    if (selectedQuality === -1) {
      return "Auto";
    }

    const match = qualityOptions.find((option) => option.index === selectedQuality);
    return match?.label ?? "Auto";
  }, [qualityOptions, selectedQuality]);

  const clearControlsTimer = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
      controlsTimeoutRef.current = null;
    }
  };

  const showControls = (autoHide = true) => {
    setAreControlsVisible(true);
    clearControlsTimer();

    if (!autoHide || !isPlaying || isQualityMenuOpen) {
      return;
    }

    controlsTimeoutRef.current = setTimeout(() => {
      setAreControlsVisible(false);
      setIsQualityMenuOpen(false);
    }, CONTROLS_AUTO_HIDE_MS);
  };

  const hideControls = () => {
    clearControlsTimer();
    setIsQualityMenuOpen(false);
    setAreControlsVisible(false);
  };

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  useEffect(() => {
    return () => {
      clearControlsTimer();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      const video = videoRef.current;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      setIsPlaying(false);
      setIsMuted(false);
      setCurrentTime(0);
      setDuration(0);
      setIsBuffering(false);
      setIsQualityMenuOpen(false);
      setQualityOptions([]);
      setSelectedQuality(-1);
      setStatusText("Loading stream...");
      setAreControlsVisible(true);
      clearControlsTimer();
      return undefined;
    }

    const video = videoRef.current;
    if (!video) {
      return undefined;
    }

    let cancelled = false;

    const attachSource = async () => {
      setStatusText("Loading stream...");
      const HlsModule = await import("hls.js");
      const Hls = HlsModule.default;

      if (!cancelled && Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
        });

        hlsRef.current = hls;
        hls.loadSource(src);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (cancelled) return;

          const uniqueLevels = hls.levels.reduce<Array<{ index: number; label: string }>>(
            (levels, level, index) => {
              const label = getQualityLabel(level.height ?? 0);

              if (!levels.some((entry) => entry.label === label)) {
                levels.push({ index, label });
              }

              return levels;
            },
            []
          );

          setQualityOptions(uniqueLevels);
          setSelectedQuality(-1);
          setStatusText("Streaming adaptive quality");

          video.play().catch(() => {
            setStatusText("Tap play to start");
          });
        });

        hls.on(Hls.Events.LEVEL_SWITCHED, (_event, data) => {
          if (cancelled || typeof data !== "object" || data === null) return;
          const level = "level" in data && typeof data.level === "number" ? data.level : -1;
          setSelectedQuality(level);
        });

        hls.on(Hls.Events.ERROR, (_event, data) => {
          if (cancelled) return;
          const fatal =
            typeof data === "object" && data !== null && "fatal" in data && Boolean(data.fatal);

          if (fatal) {
            setStatusText("Playback error. Please try again.");
          }
        });

        return;
      }

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        setQualityOptions([]);
        setSelectedQuality(-1);
        setStatusText("Playing native HLS stream");
        video.play().catch(() => {
          setStatusText("Tap play to start");
        });
        return;
      }

      setStatusText("This browser does not support HLS playback");
    };

    attachSource();

    return () => {
      cancelled = true;
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
      video.removeAttribute("src");
      video.load();
    };
  }, [isOpen, src]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    if (isPlaying) {
      showControls(true);
      return;
    }

    showControls(false);
  }, [isOpen, isPlaying, isQualityMenuOpen]);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    showControls(!video.paused);

    if (video.paused) {
      try {
        await video.play();
        setStatusText("Playing");
      } catch {
        setStatusText("Playback was blocked");
      }
      return;
    }

    video.pause();
  };

  const skipBy = (delta: number) => {
    const video = videoRef.current;
    if (!video) return;

    showControls(true);
    const nextTime = Math.min(Math.max(video.currentTime + delta, 0), duration || video.duration || 0);
    video.currentTime = nextTime;
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    showControls(true);
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const changeQuality = (levelIndex: number) => {
    const hls = hlsRef.current;
    if (!hls) {
      setSelectedQuality(-1);
      setIsQualityMenuOpen(false);
      return;
    }

    showControls(true);
    hls.currentLevel = levelIndex;
    hls.nextLevel = levelIndex;
    setSelectedQuality(levelIndex);
    const nextLabel =
      levelIndex === -1
        ? "Adaptive quality enabled"
        : `Switched to ${
            qualityOptions.find((option) => option.index === levelIndex)?.label ?? "selected quality"
          }`;
    setStatusText(nextLabel);
    setIsQualityMenuOpen(false);
  };

  const handleVideoClick = () => {
    if (areControlsVisible && isPlaying) {
      hideControls();
      return;
    }

    showControls(true);
  };

  if (!isOpen) {
    return null;
  }

  if (!portalTarget) {
    return null;
  }

  return createPortal(
    <div className="vp-overlay" role="dialog" aria-modal="true" aria-label={title}>
      <div className="vp-surface">
        <div
          className="vp-video-shell"
          data-controls-visible={areControlsVisible}
        >
          <video
            ref={videoRef}
            className="vp-video"
            poster={poster}
            playsInline
            onClick={handleVideoClick}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
            onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
            onDurationChange={(event) => setDuration(event.currentTarget.duration)}
            onWaiting={() => setIsBuffering(true)}
            onPlaying={() => setIsBuffering(false)}
            onCanPlay={() => setIsBuffering(false)}
            onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
          />

          <div className="vp-tint" />

          <div className="vp-topbar">
            <div className="vp-brand">
              <Image
                src="/assets/sathwa-short-logo-white.png"
                alt="Sathwa"
                width={64}
                height={64}
                className="vp-brand-mark"
              />
              <span>{title}</span>
            </div>

            <button type="button" className="vp-close" onClick={onClose} aria-label="Close video player">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {isBuffering ? (
            <div className="vp-loading" aria-hidden="true">
              <div className="vp-spinner" />
            </div>
          ) : null}

          <div className="vp-bottom">
            <div className="vp-progress-row">
              <span className="vp-time">{formatTime(currentTime)}</span>

              <input
                className="vp-progress"
                type="range"
                min="0"
                max={duration || 0}
                step="0.1"
                value={Math.min(currentTime, duration || 0)}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  const video = videoRef.current;
                  if (!video) return;
                  showControls(true);
                  video.currentTime = value;
                  setCurrentTime(value);
                }}
                style={{ ["--progress-percent" as string]: progressPercent }}
                aria-label="Seek video"
              />

              <span className="vp-time">{formatTime(duration)}</span>
            </div>

            <div className="vp-controls-row">
              <div className="vp-side vp-side-left">
                <div className="vp-quality-wrap">
                  <button
                    type="button"
                    className="vp-btn vp-quality-btn"
                    onClick={() => setIsQualityMenuOpen((open) => !open)}
                    aria-haspopup="menu"
                    aria-expanded={isQualityMenuOpen}
                    aria-controls={qualityMenuId}
                  >
                    <span>{selectedQualityLabel}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {isQualityMenuOpen ? (
                    <div className="vp-quality-menu" id={qualityMenuId} role="menu">
                      <button
                        type="button"
                        className="vp-quality-option"
                        data-active={selectedQuality === -1}
                        onClick={() => changeQuality(-1)}
                      >
                        Auto
                      </button>
                      {qualityOptions.map((option) => (
                        <button
                          key={option.index}
                          type="button"
                          className="vp-quality-option"
                          data-active={selectedQuality === option.index}
                          onClick={() => changeQuality(option.index)}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>

                {statusText ? <div className="vp-status">{statusText}</div> : null}
              </div>

              <div className="vp-center">
                <button
                  type="button"
                  className="vp-btn vp-btn-small"
                  onClick={() => skipBy(-SEEK_SECONDS)}
                  aria-label="Skip backward 10 seconds"
                >
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M11 7L6 12L11 17V7ZM18 7L13 12L18 17V7Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  className="vp-btn vp-btn-primary"
                  onClick={togglePlayback}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M7 5H10V19H7V5ZM14 5H17V19H14V5Z" fill="currentColor" />
                    </svg>
                  ) : (
                    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M8 5L19 12L8 19V5Z" fill="currentColor" />
                    </svg>
                  )}
                </button>

                <button
                  type="button"
                  className="vp-btn vp-btn-small"
                  onClick={() => skipBy(SEEK_SECONDS)}
                  aria-label="Skip forward 10 seconds"
                >
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M13 7L18 12L13 17V7ZM6 7L11 12L6 17V7Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>

              <div className="vp-side vp-side-right">
                <button
                  type="button"
                  className="vp-btn vp-btn-ghost"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M11 5L6 9H3V15H6L11 19V5ZM16 9L21 14M21 9L16 14"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M11 5L6 9H3V15H6L11 19V5ZM15.5 8.5C16.8 9.3 17.5 10.5 17.5 12C17.5 13.5 16.8 14.7 15.5 15.5M18 6C20 7.3 21 9.4 21 12C21 14.6 20 16.7 18 18"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>

                <button
                  type="button"
                  className="vp-btn vp-close-inline"
                  onClick={onClose}
                  aria-label="Close video player"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M6 6L18 18M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    portalTarget
  );
}
