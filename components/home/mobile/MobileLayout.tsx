import CountdownSection from "@/components/CountdownSection";
import MobileHeroSection from "./HeroSection";
import MobileInfoCard from "./InfoCard";

export default function MobileLayout() {
  return (
    <div className="lg:hidden flex flex-col">
      {/* Hero Section (Circle + Image) - Fixed Background */}
      <MobileHeroSection />

      {/* Info Card Section - Scrolls Over Hero */}
      <MobileInfoCard />

      <CountdownSection />
    </div>
  );
}
