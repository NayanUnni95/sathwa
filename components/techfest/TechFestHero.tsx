"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TechFestHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Define the animation setup function to reuse for breakpoints
      const runAnimation = (
        targetOuter: number,
        targetInner: number,
        hugeOuter: number,
        hugeInner: number,
      ) => {
        // Reset any existing props
        gsap.set(".joystick-layer", { clearProps: "all" });

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" }, // Smooth easing basics
        });
        // const tl = gsap.timeline({
        //   defaults: { ease: "power2.inOut" },
        //   scrollTrigger: {
        //     trigger: containerRef.current,
        //     start: "top 75%",
        //     once: true
        //   }
        // });

        // 1. Initial State: Jammed 1 & 4 only, small and hidden
        // Layers 2 & 3 are strictly hidden (internal)
        gsap.set(".joystick-layer", {
          // scale: 0.5,
          opacity: 0,
          filter: "blur(10px)",
          y: 0,
        });
        gsap.set(".layer-2, .layer-3", { opacity: 0, display: "none" });

        // gsap.set(".layer-4", {
        //   y: -20,
        // });

        // 2. Entrance: Fade In + Grow to Size (Assembled 1 & 4)
        tl.to(".layer-1, .layer-4", {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power2.out",
        });

        // 3. Damped Oscillation Sequence

        // Step A: Expand Huge (Reveal 2 & 3)
        // Turn on display for internals right before explosion
        tl.add(() => {
          gsap.set(".layer-2, .layer-3", { display: "block" });
        }, ">-0.1");

        tl.to(".layer-1", { y: -hugeOuter, duration: 1.2 }, "expand1")
          .to(".layer-4", { y: hugeOuter, duration: 1.2 }, "expand1")
          .to(
            ".layer-2",
            {
              y: -hugeInner,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.2,
            },
            "expand1",
          ) // Fade in internals
          .to(
            ".layer-3",
            {
              y: hugeInner,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.2,
            },
            "expand1",
          );

        // Step B: Contract Deeply (Compression)
        const compressOuter = targetOuter * 0.6;
        const compressInner = targetInner * 0.6;
        tl.to(".layer-1", { y: -compressOuter, duration: 0.8 })
          .to(".layer-2", { y: -compressInner, duration: 0.8 }, "<")
          .to(".layer-3", { y: compressInner, duration: 0.8 }, "<")
          .to(".layer-4", { y: compressOuter, duration: 0.8 }, "<");

        // Step C: Expand Medium
        const mediumOuter = targetOuter * 1.3;
        const mediumInner = targetInner * 1.3;
        tl.to(".layer-1", { y: -mediumOuter, duration: 0.8 })
          .to(".layer-2", { y: -mediumInner, duration: 0.8 }, "<")
          .to(".layer-3", { y: mediumInner, duration: 0.8 }, "<")
          .to(".layer-4", { y: mediumOuter, duration: 0.8 }, "<");

        // Step D: Contract to Target
        tl.to(".layer-1", { y: -targetOuter, duration: 0.8 })
          .to(".layer-2", { y: -targetInner, duration: 0.8 }, "<")
          .to(".layer-3", { y: targetInner, duration: 0.8 }, "<")
          .to(".layer-4", { y: targetOuter, duration: 0.8 }, "<");

        // Step E: Expand Small (Micro-bounce)
        const smallOuter = targetOuter * 1.1;
        const smallInner = targetInner * 1.1;
        tl.to(".layer-1", { y: -smallOuter, duration: 0.6, ease: "sine.out" })
          .to(
            ".layer-2",
            { y: -smallInner, duration: 0.6, ease: "sine.out" },
            "<",
          )
          .to(
            ".layer-3",
            { y: smallInner, duration: 0.6, ease: "sine.out" },
            "<",
          )
          .to(
            ".layer-4",
            { y: smallOuter, duration: 0.6, ease: "sine.out" },
            "<",
          );

        // Step F: Final Settle (Target)
        tl.to(".layer-1", {
          y: -targetOuter,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        })
          .to(
            ".layer-2",
            { y: -targetInner, duration: 0.8, ease: "elastic.out(1, 0.5)" },
            "<",
          )
          .to(
            ".layer-3",
            { y: targetInner, duration: 0.8, ease: "elastic.out(1, 0.5)" },
            "<",
          )
          .to(
            ".layer-4",
            { y: targetOuter + 20, duration: 0.8, ease: "elastic.out(1, 0.5)" },
            "<",
          );

        // 4. UI Reveal (Synced with final settle)
        tl.from(
          ".ui-reveal",
          {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
          },
          "-=1.0",
        );

        // 5. Floating/Suspension Effect
        gsap.to(".joystick-layer", {
          yPercent: 3,
          duration: 2.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          stagger: {
            each: 0.15,
            from: "center",
          },
          delay: 6.5,
        });

        // gsap.set(".joystick-layer", {
        //   transformOrigin: "50% 50%",
        // });
      };

      gsap.to(containerRef.current, {
        backgroundPositionY: "60px",
        duration: 40,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Breakpoints
      mm.add("(max-width: 768px)", () => {
        // Mobile: Target (80, 30) | Huge (160, 60)
        runAnimation(100, 50, 170, 85);
      });

      mm.add("(min-width: 769px)", () => {
        // Desktop: Target (210, 70) | Huge (350, 120)
        runAnimation(210, 70, 350, 120);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#050505] overflow-hidden flex flex-col items-center justify-center font-sans text-white"
    >
      {/* Soft focus vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.85))]" />

      {/* 1. Background Grid */}
      <div
        className={`absolute inset-0 z-[1] pointer-events-none opacity-[0.03]
                bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_1px,transparent_1px)]
                bg-[length:60px_60px]`}
      />

      {/* Film Grain */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* FADES */}
      {/* <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-40 pointer-events-none" /> */}

      {/* Section framing rails
      <div className="absolute left-6 md:left-12 top-0 h-full w-px bg-white/5 z-20 pointer-events-none" />
      <div className="absolute right-6 md:right-12 top-0 h-full w-px bg-white/5 z-20 pointer-events-none" /> */}

      <div className="absolute top-1/3 left-0 w-64 h-px bg-gradient-to-r from-transparent via-[#BC002D] to-transparent opacity-40" />
      <div className="absolute bottom-1/3 right-0 w-72 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* 2. Top Typography (Behind Joystick potentially) */}
      <div className="absolute top-[12%] z-10 w-full px-4 md:px-12 flex justify-between items-start pointer-events-none select-none">
        <h1 className="text-[15vw] leading-[0.8] font-extrabold tracking-[0.035em] mix-blend-exclusion text-zinc-100 font-['var(--font-space-grotesk)']">
          EXPO
        </h1>
        <h1 className="text-[15vw] leading-[0.8] font-medium tracking-[0.04em] mix-blend-exclusion text-zinc-100 font-['var(--font-space-grotesk)']">
          26
        </h1>
      </div>

      <div className="absolute top-10 left-6 md:left-12 z-30 flex items-center gap-3">
        <span className="w-6 h-px bg-[#BC002D]" />
        <span className="text-xs tracking-[0.4em] text-zinc-400 font-mono uppercase">
          Tech Expo Showcase
        </span>
      </div>

      {/* 3. Scrolling Marquee (The "Element behind the image and below tathva") */}
      {/* Positioned slightly below the main title, z-index behind joystick */}
      <div
        className={`absolute top-[20%] w-full z-10 overflow-hidden
                bg-white/10 backdrop-blur-lg
                border-y border-white/10`}
      >
        {/* Edge fades */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-24
                  bg-gradient-to-r from-black to-transparent z-20`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-24
                  bg-gradient-to-l from-black to-transparent z-20`}
        />

        <div className="flex w-max animate-marquee whitespace-nowrap py-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10 mx-8">
              {[
                "Civil Expo",
                "Robotics Expo",
                "KSEB Expo",
                "Keltron Expo",
                "Nail Expo",
                "Hobby Circuit Expo",
              ].map((text, idx) => (
                <React.Fragment key={idx}>
                  <span
                    className={`text-sm md:text-base
                             font-medium
                             tracking-[0.25em]
                             text-zinc-400 uppercase
                             font-['var(--font-space-grotesk)']`}
                  >
                    {text}
                  </span>

                  <span
                    className={`w-1.5 h-1.5 rounded-full
                             bg-[#BC002D]
                             shadow-[0_0_10px_rgba(188,0,45,0.9)]`}
                  />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Joystick Container */}
      <div className="relative z-[60] w-full h-[80vh] flex items-center justify-center mt-4 pointer-events-none">
        <div
          className={`relative w-[420px] md:w-[520px] aspect-[4/3] isolate overflow-visible
                after:absolute after:inset-0
                after:bg-[radial-gradient(circle_at_center,rgba(188,0,45,0.15),transparent_70%)]
                after:blur-2xl after:-z-10`}
        >
          {/* Layers: 4 (Bottom) -> 1 (Top) */}
          {/* Added opacity-0 class to hide initial FOUC */}
          <div className="joystick-layer layer-4 absolute inset-0 drop-shadow-2xl opacity-0">
            <Image
              src="/assets/homepage/drone image section4 new.png"
              alt="Joystick Layer 4"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="joystick-layer layer-3 absolute inset-0 z-10 drop-shadow-xl opacity-0">
            <Image
              src="/assets/homepage/drone image section3.png"
              alt="Joystick Layer 3"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="joystick-layer layer-2 absolute inset-0 z-20 drop-shadow-lg opacity-0">
            <Image
              src="/assets/homepage/drone image section2 new2.png"
              alt="Joystick Layer 2"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="joystick-layer layer-1 absolute inset-0 z-30 drop-shadow-2xl opacity-0">
            <Image
              src="/assets/homepage/drone image section1.png"
              alt="Joystick Layer 1"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* 5. Date Card (Bottom Left) - Specific Design */}
      <div className="absolute bottom-5 left-6 md:bottom-10 md:left-12 z-40 ui-reveal pb-3">
        <div className="border border-white/20 bg-gradient-to-br from-white/10 to-black/80 shadow-[0_0_40px_rgba(188,0,45,0.15)] backdrop-blur-md p-4 w-[280px]">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-thin text-3xl text-zinc-400 font-sans">
              2026
            </span>
            <span className="font-black text-3xl text-white font-sans tracking-wide">
              FEB
            </span>
          </div>

          <div className="flex justify-between items-center text-[10px] tracking-[0.2em] text-zinc-400 font-mono mb-4 border-b border-white/10 pb-2">
            <span>26TH.</span>
            <span>27TH.</span>
          </div>

          {/* Footer decoration: Circles + Barcode */}
          <div className="flex justify-between items-end h-8">
            {/* 3 Interlocking Circles */}
            <div className="flex -space-x-2 opacity-50">
              <div className="w-6 h-6 rounded-full border border-zinc-300" />
              <div className="w-6 h-6 rounded-full border border-zinc-300" />
              <div className="w-6 h-6 rounded-full border border-zinc-300" />
            </div>

            {/* Dotted Line */}
            <div className="flex-1 border-b border-dotted border-white/30 mx-4 mb-2" />

            {/* Barcode Rectangle */}
            {/* <div className="flex gap-0.5 h-6">
              <div className="w-1 bg-white" />
              <div className="w-2 bg-white" />
              <div className="w-0.5 bg-white" />
              <div className="w-3 bg-white" />
              <div className="w-1 bg-white" />
            </div> */}
          </div>
        </div>
      </div>

      {/* 6. Big Techfest Badge (Bottom Right) - Chamfered */}
      <div className="absolute bottom-5 md:bottom-10 right-6 md:right-12 z-40 ui-reveal">
        <div
          className="relative bg-zinc-200 text-black px-6 py-4 flex items-center gap-4"
          style={{
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 45%)",
          }}
        >
          <div className="flex flex-col gap-1">
            <div className="w-8 h-1 bg-black rounded-full" />
            <div className="w-12 h-1 bg-black rounded-full ml-4" />
          </div>

          <div className="flex flex-col align-center">
            <span className="text-[15px] font-bold tracking-widest uppercase leading-tight">
              10+
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-bold tracking-widest uppercase">
                Expos
              </span>
              <div className="h-[1px] w-12 bg-black" />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom section fade
      <div className="absolute bottom-0 left-0 w-full h-32 z-40 pointer-events-none 
                bg-gradient-to-t from-black to-transparent" /> */}

      <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-40%); }
                }
                .animate-marquee {
                    animation: marquee 60s linear infinite;
                }
            `}</style>
    </section>
  );
}
