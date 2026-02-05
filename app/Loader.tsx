"use client";

import { useEffect, useRef, useState } from "react";

const MIN_LOADER_TIME = 4000;
const HARD_TIMEOUT = 7000;

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const startTime = useRef(Date.now());
  const closed = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile properly (SSR safe)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const closeLoader = () => {
    if (closed.current) return;
    closed.current = true;

    const elapsed = Date.now() - startTime.current;
    const remaining = Math.max(MIN_LOADER_TIME - elapsed, 0);

    setTimeout(() => setIsLoading(false), remaining);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;

      videoRef.current.play().catch(() => {
        // autoplay blocked → fallback
        closeLoader();
      });
    }

    const hardTimeout = setTimeout(closeLoader, HARD_TIMEOUT);
    return () => clearTimeout(hardTimeout);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
      style={{
        width: "100vw",
        height: "100dvh", // iOS safe viewport
      }}
    >
      <video
        ref={videoRef}
        src="/assets/upscaled-video.mp4"
        muted
        autoPlay
        playsInline
        preload="auto"
        poster="/assets/poster.jpg"
        onEnded={closeLoader}
        onError={closeLoader}
        style={{
          position: "absolute",
          inset: 0,

          /* 🔥 responsive behavior */
          width: "auto",
          height: "auto",
          maxWidth: isMobile ? "min(70vw, 300px)" : "min(60vw, 400px)",
          maxHeight: isMobile ? "min(70vh, 300px)" : "min(60vh, 400px)",
          objectFit: "contain",

          margin: "auto",
        }}
      />
    </div>
  );
}
