"use client";

import Background from "@/components/home/Background";
import DesktopLayout from "@/components/home/desktop/DesktopLayout";
import MobileLayout from "@/components/home/mobile/MobileLayout";
import FooterSecondary from "@/components/FooterSecondary/FooterSecondary";
import "@/app/styles/home.css";

export default function Home() {
  return (
    <div className="home-scope">
      {/* Marble Background Texture */}
      <Background />

      <main className="home-main">
        {/* Mobile/Tablet View Layout */}
        <MobileLayout />

        {/* Desktop View Layout */}
        <DesktopLayout />
      </main>

      <FooterSecondary />
    </div>
  );
}
