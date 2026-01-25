"use client";

import Image from "next/image";
import Countdown from "@/components/CountdownSection/Countdown";
import "./CountdownSection.css";

const CountdownSection = () => {
  return (
    <section id="CountdownSection" className="cds-scope cds-section">
      {/* Left Branch - Desktop */}
      <div
        className="cds-branch cds-branch-left-desktop wind"
        style={{
          animation: "wind-sway-strong-reverse 20s infinite",
          transformOrigin: "8% 80%",
        }}
      >
        <Image
          src="/assets/left-branch.png"
          alt="Decorative Branch"
          fill
          className="cds-img-contain cds-img-left"
        />
      </div>

      {/* Left Branch - Mobile */}
      <div
        className="cds-branch cds-branch-left-mobile wind"
        style={{
          animation: "wind-sway-strong 20s infinite",
          transformOrigin: "10% 25%",
        }}
      >
        <Image
          src="/assets/left-branch.png"
          alt="Decorative Branch"
          fill
          className="cds-img-contain"
        />
      </div>

      {/* Right Branch - Desktop */}
      <div
        className="cds-branch cds-branch-right-desktop wind"
        style={{
          animation: "wind-sway-strong-reverse 16s infinite",
          transformOrigin: "92% 12%",
        }}
      >
        <Image
          src="/assets/right-branch.png"
          alt="Decorative Branch"
          fill
          className="cds-img-contain cds-img-right"
        />
      </div>

      {/* Right Branch – Mobile */}
      <div
        className="cds-branch cds-branch-right-mobile wind"
        style={{
          animation: `
      wind-sway-strong-reverse 20s cubic-bezier(0.4, 0, 0.2, 1) infinite,
      wind-breath 14s ease-in-out infinite
    `,
          transformOrigin: "88% 20%",
        }}
      >
        <Image
          src="/assets/right-branch.png"
          alt="Decorative Branch"
          fill
          className="cds-img-contain"
        />
      </div>

      {/* Countdown Board Container */}
      <div className="cds-content-container">
        {/* Replaced manual countdown with Component */}
        <div className="cds-countdown-wrap">
          <Countdown />
        </div>

        {/* Text Below */}
        <div className="cds-text-content">
          <h2 className="cds-title">Coming Soon</h2>
          <div className="cds-info-block">
            {/* Thin divider */}
            <div className="cds-divider" />

            <p className="cds-description">
              <strong className="cds-desc-strong">
                The story of SATHWA ’26 is just beginning.
              </strong>

              <span className="cds-desc-highlight">
                This is only the first glimpse.
              </span>

              <span className="cds-desc-sub">
                The rest — events, ideas, and experiences — will unfold in time.
              </span>
            </p>

            {/* Cadence dots */}
            <div className="cds-dots">
              <span className="cds-dot cds-dot-red dot dot-delay-1" />
              <span className="cds-dot cds-dot-dark dot dot-delay-2" />
              <span className="cds-dot cds-dot-dark dot dot-delay-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
