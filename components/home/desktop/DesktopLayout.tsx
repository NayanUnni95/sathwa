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

import KaizenSection from "../../kaizen/KaizenSection";

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
        <div className="dl-tech-section mt-30">
          <TechCompetitionsSection />
        </div>

        <div className="mt-40">
          <TechFestHero />
        </div>


        <div className="dl-tech-section mt-40">
          <WorkshopSection />
        </div>

        <div className="mt-30">
          <AutoShowHero />

        </div>

        <div className="mt-40">
          <KaizenSection />
        </div>


        {/* <div className="dl-cultural-section">
          <CulturalContainer />
        </div> */}

        {/* Countdown Section - Desktop placement */}
        <div className="dl-countdown-section mt-20">
          <CountdownSection />
        </div>
      </div>
    </div>
  );
}
