import Background from "@/components/home/Background";
import DesktopLayout from "@/components/home/desktop/DesktopLayout";
import MobileLayout from "@/components/home/mobile/MobileLayout";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#fdfaf1] overflow-x-hidden">
      {/* Marble Background Texture */}
      <Background />

      <main className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Mobile/Tablet View Layout */}
        <MobileLayout />

        {/* Desktop View Layout */}
        <DesktopLayout />
      </main>
    </div>
  );
}
