import CountdownSection from "@/components/CountdownSection";
import DatePanel from "./DatePanel";
import HeroFeatures from "./HeroFeatures";

export default function DesktopLayout() {
  return (
    <>
      <div className="hidden lg:flex flex-col items-center px-12 h-screen relative reveal reveal-3">
        <HeroFeatures />
        <DatePanel />
      </div>

      {/* Countdown Section - Desktop placement */}
      <div className="hidden lg:block w-full z-10">
        <CountdownSection />
      </div>
    </>
  );
}
