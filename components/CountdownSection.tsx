"use client";

import Image from "next/image";
import Countdown from "./Countdown";

const CountdownSection = () => {
  return (
    <section
      id="CountdownSection"
      className="relative z-10 w-full h-screen lg:min-h-[80vh] flex flex-col items-center justify-center pt-0 pb-20 lg:py-20 overflow-hidden bg-[#F5F5F5] lg:bg-transparent"
    >
      {/* Section-only Marble Background */}
      {/* <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/assets/marble.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
          mixBlendMode: "multiply",
        }}
      /> */}

      {/* Left Branch - Desktop */}
      {/* <div className="hidden lg:block absolute -left-15 -top-28 w-[950px] h-[850px] z-50 pointer-events-none rotate-15">
        <Image
          src="/assets/left-branch.png"
          alt="Decorative Branch"
          fill
          className="object-contain object-left"
        />
      </div> */}
      <div
        className="hidden lg:block absolute -left-15 -top-28 
             w-[950px] h-[850px] z-50 pointer-events-none
             rotate-15 wind"
        style={{
          animation: "wind-sway-strong 18s infinite",
          transformOrigin: "8% 88%",
        }}
      >
        <Image
          src="/assets/left-branch.png"
          alt="Decorative Branch"
          fill
          className="object-contain object-left"
        />
      </div>

      {/* Left Branch - Mobile */}
      {/* <div className="lg:hidden absolute -left-25 top-25 w-[360px] h-[250px] z-50 pointer-events-none">
        <Image
          src="/assets/left-branch.png"
          alt="Decorative Branch"
          fill
          className="object-contain"
        />
      </div> */}
      <div
        className="lg:hidden absolute -left-25 top-9 
             w-[360px] h-[250px] z-50 pointer-events-none
             wind"
        style={{
          animation: "wind-sway-strong 20s infinite",
          transformOrigin: "10% 25%",
        }}
      >
        <Image
          src="/assets/left-branch.png"
          alt="Decorative Branch"
          fill
          className="object-contain"
        />
      </div>

      {/* Right Branch - Desktop */}
      {/* <div className="hidden lg:block absolute -right-7 top-18 w-[950px] h-[950px] z-50 pointer-events-none">
        <Image
          src="/assets/right-branch.png"
          alt="Decorative Branch"
          fill
          className="object-contain object-right"
        />
      </div> */}
      <div
        className="hidden lg:block absolute -right-7 top-18 
             w-[950px] h-[950px] z-50 pointer-events-none
             wind"
        style={{
          animation: "wind-sway-strong-reverse 20s infinite",
          transformOrigin: "92% 12%",
        }}
      >
        <Image
          src="/assets/right-branch.png"
          alt="Decorative Branch"
          fill
          className="object-contain object-right"
        />
      </div>

      {/* Right Branch - Mobile */}
      {/* <div className="lg:hidden absolute -right-40 bottom-40 w-[450px] h-[250px] z-50 pointer-events-none">
        <Image
          src="/assets/right-branch.png"
          alt="Decorative Branch"
          fill
          className="object-contain"
        />
      </div> */}
      {/* Right Branch – Mobile */}
      <div
        className="lg:hidden absolute -right-40 bottom-34 
             w-[450px] h-[250px] z-50 pointer-events-none wind"
        style={{
          animation: `
      wind-sway-strong-reverse 22s cubic-bezier(0.4, 0, 0.2, 1) infinite,
      wind-breath 14s ease-in-out infinite
    `,
          transformOrigin: "88% 20%",
        }}
      >
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
        <div className="relative flex justify-center items-center mb-0 pt-24">
          <Countdown />
        </div>

        {/* Text Below */}
        <div className="text-center -mt-10 min-[375px]:-mt-20 sm:-mt-16 md:-mt-10 lg:-mt-20">
          <h2 className="text-3xl sm:text-5xl font-['JapanRamen'] text-black tracking-[0.1em] uppercase mb-6">
            Coming Soon
          </h2>
          <div className="mt-6 flex flex-col items-center gap-3">
            {/* Thin divider */}
            <div className="w-10 h-[1px] bg-black/20" />

            <p className="max-w-md mx-auto text-xs sm:text-sm font-sans leading-relaxed px-4 text-black/70 text-center">
              <strong className="block text-black font-semibold mb-1">
                The story of SATHWA ’26 is just beginning.
              </strong>

              <span className="block text-[#D90404] mb-1">
                This is only the first glimpse.
              </span>

              <span className="block text-black/60">
                The rest — events, ideas, and experiences — will unfold in time.
              </span>
            </p>

            {/* Cadence dots */}
            <div className="flex gap-2 mt-1 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D90404] dot dot-delay-1" />
              <span className="w-1.5 h-1.5 rounded-full bg-black/40 dot dot-delay-2" />
              <span className="w-1.5 h-1.5 rounded-full bg-black/40 dot dot-delay-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
