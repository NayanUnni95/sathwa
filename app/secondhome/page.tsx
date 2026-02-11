"use client";

import Image from "next/image";
import CountdownText from "@/components/secondhome/CountdownText";

export default function SecondHome() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/samurai new.png"
          alt="Samurai Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* SATHWA Title */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-[var(--font-orbitron)] font-black text-6xl md:text-8xl lg:text-9xl tracking-tight text-center">
            <span className="text-[#E3DDC1]">SATHWA</span>
            <span className="text-[#DC2626] ml-2">'25</span>
          </h1>
        </div>

        {/* Countdown Timer */}
        <CountdownText targetDate="2026-02-26T00:00:00" />
      </div>

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none" />
    </div>
  );
}
