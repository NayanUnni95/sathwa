"use client";

import Image from "next/image";
import Countdown from "./Countdown";

const CountdownSection = () => {
  return (
    <section className="relative z-10 w-full min-h-screen lg:min-h-[80vh] flex flex-col items-center justify-center py-20 overflow-hidden bg-[#F5F5F5] lg:bg-transparent">
      {/* Decorative Branches */}

      {/* Left Branch - Desktop */}
      <div className="hidden lg:block absolute -left-15 -top-28 w-[950px] h-[850px] z-50 pointer-events-none rotate-15">
        <Image
          src="/assets/left-branch.png"
          alt="Decorative Branch"
          fill
          className="object-contain object-left"
        />
      </div>

      {/* Left Branch - Mobile */}
      <div className="lg:hidden absolute -left-25 top-45 w-[350px] h-[250px] z-50 pointer-events-none">
        <Image
          src="/assets/left-branch.png"
          alt="Decorative Branch"
          fill
          className="object-contain"
        />
      </div>

      {/* Right Branch - Desktop */}
      <div className="hidden lg:block absolute -right-7 top-18 w-[950px] h-[950px] z-50 pointer-events-none">
        <Image
          src="/assets/right-branch.png"
          alt="Decorative Branch"
          fill
          className="object-contain object-right"
        />
      </div>

      {/* Right Branch - Mobile */}
      <div className="lg:hidden absolute -right-40 bottom-40 w-[450px] h-[250px] z-50 pointer-events-none">
        <Image
          src="/assets/right-branch.png"
          alt="Decorative Branch"
          fill
          className="object-contain"
        />
      </div>

      {/* Countdown Board Container */}
      <div className="relative z-10 max-w-4xl px-4 flex flex-col items-center">
        {/* Replaced manual countdown with Component */}
        <div className="relative flex justify-center items-center mb-0 pt-4">
          <Countdown />
        </div>

        {/* Text Below */}
        <div className="text-center -mt-20 min-[375px]:-mt-16 sm:-mt-12 md:-mt-10 lg:-mt-20">
          <h2 className="text-3xl sm:text-5xl font-['JapanRamen'] text-black tracking-[0.1em] uppercase mb-6">
            Coming Soon
          </h2>
          <p className="max-w-md mx-auto text-xs sm:text-sm text-black/70 font-sans leading-relaxed px-4">
            Where tradition collides with technology. A three-day
            techno-cultural fest packed with innovation, creativity, engineering
            brilliance, and unforgettable cultural experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
