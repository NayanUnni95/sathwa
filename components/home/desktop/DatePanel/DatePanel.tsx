"use client";

import { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import "./DatePanel.css";

export default function DatePanel() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="dp-scope">
        <div className="dp-container">
          <div className="dp-spacer" />
          <div className="dp-content">
            <button
              type="button"
              className="dp-badge-wrapper group"
              onClick={() => setIsVideoOpen(true)}
              aria-label="Open Sathwa trailer"
            >
              <div className="dp-play-btn group">
                <div className="dp-play-icon">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="6 4 20 12 6 20" />
                  </svg>
                </div>
              </div>

              <div className="dp-badge-text">
                <span className="dp-month font-japan-ramen">February</span>
                <span className="dp-dates font-japan-ramen">26, 27, 28</span>
              </div>
            </button>

            <div className="dp-dots">
              <div className="dp-dot dp-dot-red" />
              <div className="dp-dot dp-dot-border" />
              <div className="dp-dot dp-dot-border" />
              <div className="dp-dot dp-dot-border" />
            </div>
          </div>
        </div>
      </div>

      <VideoPlayer isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </>
  );
}
