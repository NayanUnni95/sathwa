import Image from "next/image";
import DatePanel from "../DatePanel/DatePanel";
import "./HeroFeatures.css";

export default function HeroFeatures() {
  return (
    <div className="hf-container">
      <div className="hf-scope-top z-20">
        {/* <p className="hf-description">
          A three-day techno-cultural fest blending innovation, creativity, and engineering.
        </p> */}
      </div>

      <div className="hf-scope-main">
        {/* Left Section: Hero Circle and Text */}
        <div className="hf-left reveal reveal-1">
          <div className="hf-2026">2026</div>
          <div className="hf-circle">
            <div className="hf-img-wrapper">
              <Image
                src="/assets/hero-image.png"
                alt="Sathwa Hero"
                fill
                className="hf-img"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Section: Title and Subtitle */}
        <div className="hf-right">
          <p className="hf-description">
            A three-day techno-cultural fest blending innovation, creativity, and engineering with events, workshops, competitions
          </p>
          <div className="hf-title-block">
            <div className="hf-year-wrapper">
              <span className="hf-year">'26</span>
            </div>

            <h1 className="hf-play-title">SATHWA</h1>

            <p className="hf-subtitle">where tradition meets technology</p>
          </div>
          <DatePanel />
        </div>
      </div>
    </div>
  );
}
