"use client";

import React, {
    useState,
    useCallback,
    useEffect,
    useRef,
    useMemo,
} from "react";
import Image from "next/image";
import type { FestMedia, GalleryResponse } from "@/app/api/gallery/route";
import "./Gallery.css";

type ViewMode = "masonry" | "grid" | "cinematic";
type SlideDir = "left" | "right" | null;

interface GalleryClientProps {
    initialItems: FestMedia[];
    initialNextPage: number | null;
    totalCount: number;
}

export default function GalleryClient({
    initialItems,
    initialNextPage,
    totalCount,
}: GalleryClientProps) {
    const [items, setItems] = useState<FestMedia[]>(initialItems);
    const [nextPage, setNextPage] = useState<number | null>(initialNextPage);
    const [isLoading, setIsLoading] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [isDownloading, setIsDownloading] = useState(false);
    const [viewMode, setViewMode] = useState<ViewMode>("masonry");
    const [slideDir, setSlideDir] = useState<SlideDir>(null);
    const [shareStatus, setShareStatus] = useState<"idle" | "copied">("idle");

    const touchStartX = useRef<number | null>(null);
    const lightboxRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    // IntersectionObserver for scroll-reveal
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("gallery-item--visible");
                        observerRef.current?.unobserve(entry.target);
                    }
                }
            },
            { threshold: 0.08 }
        );
        const cards = document.querySelectorAll(".gallery-item");
        for (const card of cards) observerRef.current.observe(card);
        return () => observerRef.current?.disconnect();
    }, [items, viewMode]);

    // Load More
    const loadMore = useCallback(async () => {
        if (!nextPage || isLoading) return;
        setIsLoading(true);
        try {
            const res = await fetch(`/api/gallery?page=${nextPage}`);
            const data: GalleryResponse = await res.json();
            setItems((prev) => [...prev, ...data.items]);
            setNextPage(data.nextPage);
        } catch (err) {
            console.error("Failed to load more gallery items:", err);
        } finally {
            setIsLoading(false);
        }
    }, [nextPage, isLoading]);

    // Lightbox navigation helpers
    const closeLightbox = useCallback(() => {
        setLightboxIndex(null);
        setSlideDir(null);
        if (document.fullscreenElement) document.exitFullscreen();
    }, []);

    const goTo = useCallback((index: number, dir: SlideDir) => {
        setSlideDir(dir);
        setTimeout(() => {
            setLightboxIndex(index);
            setSlideDir(null);
        }, 200);
    }, []);

    const prevImage = useCallback(() => {
        if (lightboxIndex !== null && lightboxIndex > 0) {
            goTo(lightboxIndex - 1, "right");
        }
    }, [lightboxIndex, goTo]);

    const nextImage = useCallback(() => {
        if (lightboxIndex !== null && lightboxIndex < items.length - 1) {
            goTo(lightboxIndex + 1, "left");
        }
    }, [lightboxIndex, items.length, goTo]);

    // Keyboard
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

    // Body scroll lock
    useEffect(() => {
        document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [lightboxIndex]);

    // Touch swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 50) {
            delta > 0 ? nextImage() : prevImage();
        }
        touchStartX.current = null;
    };



    // Share / Copy
    const handleShare = useCallback(async () => {
        const item = lightboxIndex !== null ? items[lightboxIndex] : null;
        if (!item) return;
        const shareText = item.caption ?? "Check out this moment from Sathwa '26!";
        if (navigator.share) {
            try {
                await navigator.share({ title: "Sathwa '26 Gallery", text: shareText, url: item.url });
            } catch { /* cancelled */ }
        } else {
            await navigator.clipboard.writeText(item.url);
            setShareStatus("copied");
            setTimeout(() => setShareStatus("idle"), 2000);
        }
    }, [lightboxIndex, items]);

    // Download
    const handleDownload = useCallback(async (url: string, caption?: string) => {
        setIsDownloading(true);
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);
            const ext = blob.type.split("/")[1] ?? "jpg";
            const filename = caption
                ? `${caption.replace(/[^a-z0-9]/gi, "-").toLowerCase()}.${ext}`
                : `sathwa26-moment.${ext}`;
            const link = document.createElement("a");
            link.href = objectUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(objectUrl);
        } catch (err) {
            console.error("Download failed:", err);
        } finally {
            setIsDownloading(false);
        }
    }, []);

    const loadedPercent = Math.round((items.length / totalCount) * 100);

    return (
        <>

            {/* Stats */}
            <div className="gallery-stats">
                <div className="gallery-stats-left">
                    <span className="gallery-stats-count">
                        {items.length}
                        <span className="gallery-stats-of"> / {totalCount}</span>
                    </span>
                    <span className="gallery-stats-label">MOMENTS CAPTURED</span>
                </div>

                {/* View Mode Toggle — sits inline with stats */}
                <div className="gallery-view-toggle" role="group" aria-label="View mode">
                    {(["masonry", "grid", "cinematic"] as const).map((mode) => (
                        <button
                            key={mode}
                            type="button"
                            className={`gallery-view-btn${viewMode === mode ? " gallery-view-btn--active" : ""}${mode === "cinematic" ? " gallery-view-btn--cinematic" : ""}`}
                            onClick={() => setViewMode(mode)}
                            aria-label={`${mode} view`}
                            title={mode.charAt(0).toUpperCase() + mode.slice(1)}
                        >
                            {mode === "masonry" && (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <rect x="0" y="0" width="7" height="4" rx="1" />
                                    <rect x="0" y="6" width="7" height="10" rx="1" />
                                    <rect x="9" y="0" width="7" height="9" rx="1" />
                                    <rect x="9" y="11" width="7" height="5" rx="1" />
                                </svg>
                            )}
                            {mode === "grid" && (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <rect x="0" y="0" width="7" height="7" rx="1" />
                                    <rect x="9" y="0" width="7" height="7" rx="1" />
                                    <rect x="0" y="9" width="7" height="7" rx="1" />
                                    <rect x="9" y="9" width="7" height="7" rx="1" />
                                </svg>
                            )}
                            {mode === "cinematic" && (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <rect x="0" y="0" width="16" height="4" rx="1" />
                                    <rect x="0" y="6" width="16" height="4" rx="1" />
                                    <rect x="0" y="12" width="16" height="4" rx="1" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Gallery Grid */}
            {items.length === 0 && !isLoading ? (
                <div className="gallery-empty">
                    <p className="gallery-empty-text">No moments captured yet.</p>
                </div>
            ) : (
                <div className={`gallery-grid gallery-grid--${viewMode}`}>
                    {items.map((item, index) => (
                        <button
                            key={item.id}
                            type="button"
                            className="gallery-item"
                            onClick={() => setLightboxIndex(index)}
                            aria-label={item.caption ?? `Gallery image ${index + 1}`}
                        >
                            <div className="gallery-item-inner">
                                <Image
                                    src={item.url}
                                    alt={item.caption ?? `Sathwa 26 - image ${index + 1}`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="gallery-item-img"
                                    loading={index < 6 ? "eager" : "lazy"}
                                />
                                <div className="gallery-item-overlay">
                                    {item.caption && (
                                        <p className="gallery-item-caption">{item.caption}</p>
                                    )}
                                    <div className="gallery-item-actions">
                                        <div className="gallery-item-zoom">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {/* Rank badge */}
                                <div className="gallery-item-rank">#{item.imageRank}</div>
                            </div>
                        </button>
                    ))}

                    {/* Skeleton placeholders while loading more */}
                    {isLoading && Array.from({ length: 3 }).map((_, i) => (
                        <div key={`skeleton-${i}`} className="gallery-item gallery-skeleton">
                            <div className="gallery-item-inner gallery-skeleton-inner" />
                        </div>
                    ))}
                </div>
            )}

            {/* Load More */}
            {nextPage !== null && (
                <div className="gallery-load-more-wrap">
                    <button
                        type="button"
                        className="gallery-load-more-btn"
                        onClick={loadMore}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="gallery-loader-ring" />
                        ) : (
                            <>
                                <span className="gallery-load-more-text">LOAD MORE</span>
                                <span className="gallery-load-more-sub">
                                    {totalCount - items.length} moments left
                                </span>
                                <span className="gallery-load-more-arrow">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 5v14M5 12l7 7 7-7" />
                                    </svg>
                                </span>
                            </>
                        )}
                    </button>
                </div>
            )}

            {/* End State */}
            {nextPage === null && items.length > 0 && (
                <div className="gallery-end">
                    <div className="gallery-end-line" />
                    <p className="gallery-end-text">All {totalCount} moments</p>
                    <div className="gallery-end-line" />
                </div>
            )}

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    ref={lightboxRef}
                    className="lightbox-overlay"
                    onClick={closeLightbox}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image viewer"
                >
                    {/* Top bar */}
                    <div className="lightbox-topbar" onClick={(e) => e.stopPropagation()}>
                        <p className="lightbox-counter">
                            {lightboxIndex + 1} <span>/ {items.length}</span>
                        </p>
                        <div className="lightbox-actions">
                            {/* Share/Copy */}
                            <button
                                type="button"
                                className={`lightbox-action-btn ${shareStatus === "copied" ? "lightbox-action-btn--success" : ""}`}
                                onClick={(e) => { e.stopPropagation(); handleShare(); }}
                                aria-label="Share or copy link"
                                title={shareStatus === "copied" ? "Copied!" : "Share"}
                            >
                                {shareStatus === "copied" ? (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                    </svg>
                                )}
                            </button>
                            {/* Download */}
                            <button
                                type="button"
                                className="lightbox-action-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDownload(
                                        items[lightboxIndex].url,
                                        items[lightboxIndex].caption ?? undefined
                                    );
                                }}
                                aria-label="Download image"
                                disabled={isDownloading}
                                title="Download"
                            >
                                {isDownloading ? (
                                    <span className="gallery-loader-ring gallery-loader-ring--sm" />
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 3v13M7 11l5 5 5-5" /><path d="M5 21h14" />
                                    </svg>
                                )}
                            </button>
                            {/* Close */}
                            <button
                                type="button"
                                className="lightbox-action-btn lightbox-action-btn--close"
                                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                                aria-label="Close"
                                title="Close (Esc)"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Prev */}
                    <button
                        type="button"
                        className="lightbox-nav lightbox-nav--prev"
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        aria-label="Previous image"
                        disabled={lightboxIndex === 0}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    {/* Image */}
                    <div
                        className={`lightbox-content lightbox-content--${slideDir ?? "idle"}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="lightbox-img-wrap">
                            <Image
                                src={items[lightboxIndex].url}
                                alt={items[lightboxIndex].caption ?? `Sathwa 26 - image ${lightboxIndex + 1}`}
                                fill
                                className="lightbox-img"
                                sizes="90vw"
                                priority
                            />
                        </div>
                        {items[lightboxIndex].caption && (
                            <p className="lightbox-caption">{items[lightboxIndex].caption}</p>
                        )}
                    </div>

                    {/* Next */}
                    <button
                        type="button"
                        className="lightbox-nav lightbox-nav--next"
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        aria-label="Next image"
                        disabled={lightboxIndex === items.length - 1}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>

                    {/* Thumbnail strip */}
                    <div className="lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
                        {items.map((item: FestMedia, i: number) => (
                            <button
                                key={item.id}
                                type="button"
                                className={`lightbox-thumb ${i === lightboxIndex ? "lightbox-thumb--active" : ""}`}
                                onClick={() => goTo(i, i > lightboxIndex ? "left" : "right")}
                                aria-label={`Go to image ${i + 1}`}
                            >
                                <Image
                                    src={item.url}
                                    alt={item.caption ?? `thumb ${i + 1}`}
                                    fill
                                    sizes="80px"
                                    className="lightbox-thumb-img"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
