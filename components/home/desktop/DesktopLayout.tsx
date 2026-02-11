import CountdownSection from "@/components/CountdownSection/CountdownSection";
import DatePanel from "./DatePanel/DatePanel";
import HeroFeatures from "./HeroFeatures/HeroFeatures";
import EsportsSection from "../EsportsSection";
import TechCompetitionsSection from "../TechCompetitionsSection";
import "./DesktopLayout.css";
// import CulturalContainer from "@/components/CulturalContainer/CulturalContainer";
import WorkshopSection from "../WorkshopSection";
import AutoShowHero from "@/components/autoshow/AutoShowHero";
import TechFestHero from "@/components/techfest/TechFestHero";

export default function DesktopLayout() {
  return (
    <div className="dl-scope">
      <div className="dl-main-content reveal reveal-3">
        <HeroFeatures />
        <DatePanel />
      </div>

      {/* Black Background Wrapper for Lower Sections */}
      <div className="w-full bg-black flex flex-col relative z-20">
        {/* Esports Section */}
        <div className="dl-esports-section">
          <EsportsSection />
        </div>

        {/* Tech Competitions Section */}
        <div className="dl-tech-section">
          <TechCompetitionsSection />
        </div>

        <div className="dl-tech-section">
          <WorkshopSection />
        </div>

        {/* <TechFestHero /> */}

        {/* <AutoShowHero /> */}

        {/* <div className="dl-cultural-section">
          <CulturalContainer />
        </div> */}

        {/* Countdown Section - Desktop placement */}
        <div className="dl-countdown-section">
          <CountdownSection />
        </div>
      </div>
    </div>
  );
}
