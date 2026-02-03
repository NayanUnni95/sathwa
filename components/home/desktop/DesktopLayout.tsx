import CountdownSection from "@/components/CountdownSection/CountdownSection";
import DatePanel from "./DatePanel/DatePanel";
import HeroFeatures from "./HeroFeatures/HeroFeatures";
import EsportsSection from "../EsportsSection";
import "./DesktopLayout.css";

export default function DesktopLayout() {
  return (
    <>
      <div className="dl-main-content reveal reveal-3">
        <HeroFeatures />
        <DatePanel />
      </div>

      {/* Esports Section */}
      <div className="dl-esports-section">
        <EsportsSection />
      </div>

      {/* Countdown Section - Desktop placement */}
      <div className="dl-countdown-section">
        <CountdownSection />
      </div>
    </>
  );
}
