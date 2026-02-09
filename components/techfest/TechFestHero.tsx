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
          scale: 0.5,
          opacity: 0,
          filter: "blur(10px)",
          y: 0,
        });
        gsap.set(".layer-2, .layer-3", { opacity: 0, display: "none" });

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
            { y: targetOuter, duration: 0.8, ease: "elastic.out(1, 0.5)" },
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
          y: (i, target) => {
            const currentY = gsap.getProperty(target, "y") as number;
            return currentY + 15;
          },
          duration: 2.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          stagger: {
            each: 0.2,
            from: "center",
          },
          delay: 6.5, // Wait for long sequence
        });
      };

      // Breakpoints
      mm.add("(max-width: 768px)", () => {
        // Mobile: Target (80, 30) | Huge (160, 60)
        runAnimation(80, 30, 160, 60);
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
      className="relative w-full h-screen bg-[#050505] overflow-hidden flex flex-col items-center justify-center font-sans text-white selection:bg-[#BC002D] selection:text-white"
    >
      {/* 1. Background Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
                        linear-gradient(to right, #444 1px, transparent 1px),
                        linear-gradient(to bottom, #444 1px, transparent 1px)
                    `,
          backgroundSize: "80px 80px", // Wider grid
        }}
      />

      {/* Film Grain */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* 2. Top Typography (Behind Joystick potentially) */}
      <div className="absolute top-[12%] z-10 w-full px-4 md:px-12 flex justify-between items-start pointer-events-none select-none">
        <h1 className="text-[15vw] leading-[0.8] font-bold tracking-tighter mix-blend-exclusion text-zinc-100 font-['var(--font-orbitron)']">
          EXPO
        </h1>
        <h1 className="text-[15vw] leading-[0.8] font-light tracking-tighter mix-blend-exclusion text-zinc-100 font-['var(--font-orbitron)']">
          26
        </h1>
      </div>

      {/* 3. Scrolling Marquee (The "Element behind the image and below tathva") */}
      {/* Positioned slightly below the main title, z-index behind joystick */}
      <div className="absolute top-[20%] w-full z-10 overflow-hidden bg-black/50 border-y border-white/10 backdrop-blur-[2px]">
        <div className="flex w-max animate-marquee whitespace-nowrap py-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 mx-6">
              <span className="text-sm md:text-base font-mono tracking-[0.3em] text-zinc-300 uppercase">
                Civil EXpo
              </span>
              <span className="text-[#BC002D]">▸</span>
              <span className="text-sm md:text-base font-mono tracking-[0.3em] text-zinc-300 uppercase">
                Robotics Expo
              </span>
              <span className="text-[#BC002D]">▸</span>
              <span className="text-sm md:text-base font-mono tracking-[0.3em] text-zinc-300 uppercase">
                KSEB Expo
              </span>
              <span className="text-[#BC002D]">▸</span>
              <span className="text-sm md:text-base font-mono tracking-[0.3em] text-zinc-300 uppercase">
                Keltron Expo
              </span>
              <span className="text-[#BC002D]">▸</span>
              <span className="text-sm md:text-base font-mono tracking-[0.3em] text-zinc-300 uppercase">
                Nail Expo
              </span>
              <span className="text-[#BC002D]">▸</span>
              <span className="text-sm md:text-base font-mono tracking-[0.3em] text-zinc-300 uppercase">
                Hobby Circuit Expo
              </span>
              <span className="text-[#BC002D]">▸</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Joystick Container */}
      <div className="relative z-30 w-full h-[80vh] flex items-center justify-center mt-10 pointer-events-none">
        <div className="relative w-[300px] md:w-[450px] aspect-[3/4]">
          {/* Layers: 4 (Bottom) -> 1 (Top) */}
          {/* Added opacity-0 class to hide initial FOUC */}
          <div className="joystick-layer layer-4 absolute inset-0 z-0 drop-shadow-2xl opacity-0">
            <Image
              src="/assets/homepage/layer-4.webp"
              alt="Joystick Layer 4"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="joystick-layer layer-3 absolute inset-0 z-10 drop-shadow-xl opacity-0">
            <Image
              src="/assets/homepage/layer-3.webp"
              alt="Joystick Layer 3"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="joystick-layer layer-2 absolute inset-0 z-20 drop-shadow-lg opacity-0">
            <Image
              src="/assets/homepage/layer-2.webp"
              alt="Joystick Layer 2"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="joystick-layer layer-1 absolute inset-0 z-30 drop-shadow-2xl opacity-0">
            <Image
              src="/assets/homepage/layer-1.webp"
              alt="Joystick Layer 1"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* 5. Date Card (Bottom Left) - Specific Design */}
      <div className="absolute bottom-10 left-6 md:left-12 z-40 ui-reveal">
        <div className="border border-white/20 bg-black/60 backdrop-blur-md p-4 w-[280px]">
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
            <div className="flex gap-0.5 h-6">
              <div className="w-1 bg-white" />
              <div className="w-2 bg-white" />
              <div className="w-0.5 bg-white" />
              <div className="w-3 bg-white" />
              <div className="w-1 bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* 6. Big Techfest Badge (Bottom Right) - Chamfered */}
      <div className="absolute bottom-10 right-6 md:right-12 z-40 ui-reveal">
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
