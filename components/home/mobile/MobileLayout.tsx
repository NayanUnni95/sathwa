import CountdownSection from "@/components/CountdownSection/CountdownSection";
import MobileHeroSection from "./HeroSection/HeroSection";
import MobileInfoCard from "./InfoCard/InfoCard";
import EsportsSection from "../EsportsSection";
import TechCompetitionsSection from "../TechCompetitionsSection";
import WorkshopSection from "../WorkshopSection";
import "./MobileLayout.css";
import TechFestHero from "@/components/techfest/TechFestHero";
// import CulturalContainer from "@/components/CulturalContainer/CulturalContainer";
import AutoShowHero from "@/components/autoshow/AutoShowHero";

export default function MobileLayout() {
  return (
    <div className="ml-scope">
      {/* Hero Section (Circle + Image) - Fixed Background */}
      <MobileHeroSection />

      {/* Info Card Section - Scrolls Over Hero */}
      <MobileInfoCard />

      {/* Black Background Wrapper for Lower Sections */}
      <div className="w-full bg-black flex flex-col relative z-20">
        <EsportsSection />

        <TechCompetitionsSection />

        <WorkshopSection />

        <TechFestHero />

        <AutoShowHero />

        {/* <CulturalContainer /> */}

        <CountdownSection />
      </div>
    </div>
  );
}
