"use client";

import { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { FaPlay } from "react-icons/fa";
import "./InfoCard.css";

export default function MobileInfoCard() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="mic-scope reveal reveal-2">
      <div className="mic-header">
        <div className="mic-location-badge">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mic-icon"
          >
            <title>Location</title>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>CE Muttathara</span>
        </div>
      </div>

      <div className="mic-title-block reveal reveal-3">
        <div className="mic-title-wrapper">
          <div className="mic-year-wrapper">
            <span className="mic-year">'26</span>
          </div>
          <h1 className="mic-title">SATHWA</h1>
        </div>
        <p className="mic-subtitle">where tradition meets technology</p>
      </div>

      <p className="mic-description reveal reveal-4">
        A three-day techno-cultural fest celebrating innovation, creativity, and
        engineering—where tradition meets modern technology through workshops,
        competitions, and cultural experiences.
      </p>

      <button
        type="button"
        className="mic-trailer-cta reveal reveal-4"
        onClick={() => setIsVideoOpen(true)}
      >
        <span className="mic-trailer-icon" aria-hidden="true">
          <FaPlay />
        </span>
        <span className="mic-trailer-text">Play trailer</span>
      </button>

      <div className="mic-date-card reveal reveal-5">
        {/* Background year mark */}
        <div className="mic-date-bg-year">2026</div>

        {/* Content */}
        <div className="mic-date-content">
          <span className="mic-date-label">Event Dates</span>

          <div className="mic-date-row">
            <span className="mic-month">February</span>

            <span className="mic-day-range">26–28</span>
          </div>
        </div>
      </div>
    </div>

      <VideoPlayer isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </>
  );
}
