"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

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
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 40%",
            once: true,
          },
        });

        // 1. Initial State
        gsap.set(".joystick-layer", {
          opacity: 0,
          filter: "blur(10px)",
          y: 0,
        });
        gsap.set(".layer-2, .layer-3", { opacity: 0, display: "none" });

        // 2. Entrance
        tl.to(".layer-1, .layer-4", {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power2.out",
        });

        // 3. Damped Oscillation Sequence

        // Step A: Expand Huge (Reveal 2 & 3)
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
          )
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

        // Step B: Contract Deeply
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

        // Step E: Expand Small
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

        // Step F: Final Settle
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
        });
      };

      // Breakpoints
      mm.add("(max-width: 768px)", () => {
        runAnimation(100, 50, 170, 85);
      });

      mm.add("(min-width: 769px)", () => {
        runAnimation(210, 70, 350, 120);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center font-sans text-white"
    >
      {/* 1. Background Vertical Lines */}
      {/* 
         Pattern: "Full then shaded..." 
         Implementing as repeating gradient lines.
      */}
      <div className="absolute top-[18%] bottom-0 inset-x-0 flex justify-between px-4 md:px-20 pointer-events-none z-0">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="h-full w-[2px] lg:w-[3px] opacity-[0.15]"
            style={{
              background: `repeating-linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.4) 0,
                rgba(255, 255, 255, 1) 15%,
                rgba(255, 255, 255, 0.3) 30%,
                rgba(255, 255, 255, 1) 45%,
                rgba(255, 255, 255, 0.3) 60%,
                rgba(255, 255, 255, 1) 75%,
                rgba(255, 255, 255, 0.3) 100%
              )`,
              backgroundSize: '100% 500px'
            }}
          />
        ))}
      </div>

      {/* 2. Top Typography */}
      <div className="absolute top-6 left-6 md:left-20 w-full z-10 flex flex-col items-start justify-start text-left pointer-events-none select-none">
        <div className="flex items-center gap-6">
          <p className="text-xl md:text-2xl font-medium text-[#4ADE80] tracking-wider">
            Powering The
          </p>
          {/* Date Badge (Desktop Only) */}
          <div className="hidden lg:block">
            <div className="bg-white text-black px-6 py-2 rounded-full">
              <span className="text-sm font-bold tracking-tight">Feb 26, 27</span>
            </div>
          </div>
        </div>
        <h1 className="text-[12vw] md:text-[7.5vw] leading-[0.85] font-normal text-white font-[family-name:var(--font-japan-ramen)] tracking-wide mt-4">
          EXPO 2026
        </h1>
      </div>


      {/* 3. Scrolling Marquee (White Strip) */}
      <div
        className="absolute top-[16.5%] md:top-[17.2%] lg:top-[30%] w-full z-10 overflow-hidden bg-white py-2 md:py-3"
      >
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10 mx-8">
              {[
                "ROBOTICS EXPO",
                "CIVIL EXPO",
                "KELTRON EXPO",
                "HOBBY CIRCUIT EXPO",
                "RAIL EXPO",
              ].map((text, idx) => (
                <React.Fragment key={idx}>
                  <span
                    className="text-sm md:text-lg font-400 tracking-[0.1em] text-black uppercase font-plus-jakarta-sans"
                  >
                    {text}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full bg-[#4ADE80]"
                  />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Joystick Container */}
      <div className="relative z-20 w-full h-[80vh] flex items-center justify-center -mt-10 lg:-mt-20 lg:translate-x-[25%] pointer-events-none transition-transform duration-700">
        <div
          className="relative w-[420px] md:w-[520px] lg:w-[650px] aspect-[4/3] isolate overflow-visible"
        >
          {/* Layers: 4 (Bottom) -> 1 (Top) */}
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

          {/* Floating Description Box (Desktop Only) */}
          <div className="hidden lg:block absolute -left-[45%] -bottom-[20%] z-40 ui-reveal">
            <div
              className="
    backdrop-blur-md
    border border-white/5
    bg-[#7A7A7A30]
    p-12
    flex flex-col justify-center
    text-white
  "
              style={{
                width: "455.4876px",
                height: "280px",
                clipPath: `
      polygon(
        60px 0%,                 /* top-left cut */
        calc(100% - 60px) 0%,   /* top-right cut */
        100% 60px,
        100% 100%,
        140px 100%,             /* bottom-left notch start */
        100px 85%,
        0% 85%,
        0% 60px
      )
    `,
                borderRadius: "18.32px"
              }}
            >

              <p className="text-base leading-relaxed mb-10 pr-10">
                A curated showcase where ideas take form through real-world projects and cutting-edge prototypes.
              </p>

              <div className="flex justify-end pr-4">
                <Link
                  href="/events"
                  className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase group cursor-pointer"
                >
                  Explore Details
                  <span className="transition-transform group-hover:translate-x-1">›</span>
                </Link>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* 5. Date Card / Info Card */}
      <div className="absolute bottom-10 left-6 md:left-20 z-40 ui-reveal">
        {/* Desktop Version: White Chamfered Card */}
        <div className="hidden lg:flex items-center bg-white text-black px-10 py-5 gap-10"
          style={{ clipPath: "polygon(0 0, 85% 0, 100% 25%, 100% 100%, 0 100%)" }}>
          <div className="flex flex-col items-start gap-1">
            <span className="text-4xl font-black leading-none">10+</span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">EXPOS</span>
          </div>
          <div className="w-[2px] h-12 bg-black/10" />
          <div className="flex flex-col gap-3">
            <div className="w-20 h-1.5 bg-black" />
            <div className="w-14 h-[3px] bg-black" />
          </div>
        </div>

        {/* Mobile/Tablet Version: Original Dark Card */}
        <div className="lg:hidden border border-white/20 bg-gradient-to-br from-white/10 to-black/80 backdrop-blur-md p-4 w-[280px]">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-thin text-3xl text-zinc-400 font-sans">2026</span>
            <span className="font-black text-3xl text-white font-sans tracking-wide">FEB</span>
          </div>
          <div className="flex justify-between items-center text-[10px] tracking-[0.2em] text-zinc-400 font-mono mb-4 border-b border-white/10 pb-2">
            <span>26TH.</span>
            <span>27TH.</span>
          </div>
          <div className="flex justify-between items-end h-8">
            <div className="flex -space-x-2 opacity-50">
              <div className="w-6 h-6 rounded-full border border-zinc-300" />
              <div className="w-6 h-6 rounded-full border border-zinc-300" />
              <div className="w-6 h-6 rounded-full border border-zinc-300" />
            </div>
            <div className="flex-1 border-b border-dotted border-white/30 mx-4 mb-2" />
          </div>
        </div>
      </div>

      {/* 6. Big Techfest Badge (Mobile/Tablet Only) */}
      <div className="absolute bottom-5 md:bottom-10 right-6 md:right-12 z-40 ui-reveal lg:hidden">
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

      <style>{`
            @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 30s linear infinite;
            }
        `}</style>
    </section >
  );
}
