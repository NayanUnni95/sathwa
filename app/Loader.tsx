'use client';

import React, { useState, useEffect } from 'react';

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Force play on mount to bypass some browser restriction
        if (videoRef.current) {
            console.log("Attempting to play video...");
            videoRef.current.play().then(() => {
                console.log("Video playing successfully");
            }).catch((err) => {
                console.error("Video autoplay failed:", err);
            });
        }

        const timeout = setTimeout(() => {
            console.log("Loader timeout reached");
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    const handleVideoEnd = () => {
        console.log("Video ended");
        setTimeout(() => setIsLoading(false), 500);
    };

    if (!isLoading) return null;

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-700 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {/* Optional: Loading Text in case video is slow to start */}
            <div className="absolute text-white/20 font-mono text-sm tracking-widest animate-pulse z-0">
                INITIALIZING...
            </div>

            <video
                ref={videoRef}
                src="/assets/upscaled-video.mp4"
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={handleVideoEnd}
                onLoadedData={() => console.log("Video loaded data")}
                onError={(e) => {
                    console.error("Video error:", e);
                    setIsLoading(false);
                }}
                className="relative w-full h-full object-cover z-10"
            />
        </div>
    );
}
