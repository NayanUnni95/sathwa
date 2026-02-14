"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AutoShowHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Refs for rows
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const row3WheelRef = useRef<HTMLDivElement>(null);
  const row4Ref = useRef<HTMLDivElement>(null);

  const row1CarRef = useRef<HTMLDivElement>(null);
  const row1MotionRef = useRef<HTMLDivElement>(null);
  const row1TextRef = useRef<HTMLDivElement>(null);
  const row1TextInnerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      //commented for hero
      // const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true, // plays once (clean + premium)
          end: "top 40%",
          // scrub: 0.6,
        },
      });

      // --- INITIAL STATES ---
      // gsap.set(row1Ref.current, { xPercent: -100, opacity: 0 });
      gsap.set(row2Ref.current, { xPercent: 100, opacity: 0 });
      gsap.set(row3Ref.current, { xPercent: -100, opacity: 0 });
      gsap.set(row3WheelRef.current, { scale: 0, rotation: 0 });
      gsap.set(row4Ref.current, { xPercent: 100, opacity: 0 });

      //const ropeSvgRef = useRef<SVGSVGElement>(null);
      //const ropePathRef = useRef<SVGPathElement>(null);

      gsap.set(row1MotionRef.current, { x: -1000 });
      gsap.set(row1TextInnerRef.current, { x: -300 }); // local lag only

      // function updateRope() {
      //   const path = ropePathRef.current;
      //   if (!path) return;

      //   const progress = gsap.getProperty(row1MotionRef.current, "x") as number;

      //   // sag increases when pulling
      //   const sag = Math.min(12, Math.abs(progress) / 80);

      //   path.setAttribute(
      //     "d",
      //     `M0 10 Q160 ${10 + sag} 320 10`
      //   );
      // }

      // commented for hero
      // const towTL = gsap.timeline();

      // towTL.to(row1MotionRef.current, {
      //   x: 0,
      //   duration: 1.4,
      //   ease: "power3.out",
      //   // onUpdate: updateRope
      // });

      // towTL.to(
      //   row1TextInnerRef.current,
      //   {
      //     x: 0,
      //     duration: 0.6,
      //     ease: "elastic.out(1, 0.45)",
      //   },
      //   "-=1.0",
      // );

      tl.to(row1MotionRef.current, {
        x: 0,
        duration: 2.0,
        ease: "power2.out",
      });

      tl.to(
        row1TextInnerRef.current,
        {
          x: 0,
          duration: 1.7,
          ease: "elastic.out(1, 0.45)",
        },
        "-=1.0",
      );

      gsap.set(row1TextInnerRef.current, {
        scale: 1,
      });

      // gsap.to(row1TextInnerRef.current, {
      //   x: 0,
      //   duration: 0.65,
      //   ease: "none",
      // });

      // Rope tension (optional but 🔥)
      const ropePath = row1MotionRef.current?.querySelector("path");

      if (ropePath) {
        gsap.fromTo(
          ropePath,
          { scaleX: 0.5, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1.1,
            ease: "elastic.out(1, 0.4)",
            delay: 0.3,
          },
        );
      }

      // --- ENTRANCE ANIMATION ---
      // tl.to(row1Ref.current, { xPercent: 0, opacity: 1, duration: 1.5 }, 0)
      tl.to(row2Ref.current, { xPercent: 0, opacity: 1, duration: 2.1 }, 0.2)
        .to(row3Ref.current, { xPercent: 0, opacity: 1, duration: 2.1 }, 0.4)
        .to(row4Ref.current, { xPercent: 0, opacity: 1, duration: 2.1 }, 0.6);

      // --- WHEEL SPIN (High Speed -> Stop over 30s)
      // Scale up the wheel first
      gsap.to(row3WheelRef.current, {
        scale: 1,
        duration: 2.8,
        ease: "back.out(1.2)",
        delay: 0.8,
      });

      // Spin Animation
      // gsap.to(row3WheelRef.current, {
      //   rotation: 360 * 40, // Spin many times
      //   duration: 80, // Over 30 seconds
      //   ease: "power2.out", // Decelerate gradually (start fast, end slow/stop)
      //   delay: 0.8,
      // });

      tl.add(() => {
        gsap.to(row3WheelRef.current, {
          scale: 1,
          duration: 2.5,
          ease: "back.out(1.2)",
        });

        gsap.to(row3WheelRef.current, {
          rotation: 360 * 40,
          duration: 80,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen hero-bg hero-grain flex flex-col font-sans select-none overflow-hidden"
    >
      <div className="hero-content">
        {/* === ROW 1: VINTAGE CARS === */}
        {/* "27oct and 20 vintage cars should be below and same level of the first section car" */}
        <div
          ref={row1Ref}
          className="w-full flex relative border-b border-white/20 h-[28vh] overflow-hidden group"
        >
          <div
            ref={row1MotionRef}
            className="absolute inset-0 pointer-events-none"
          >
            {/* TEXT (dragged object) */}

            {/* BIG BACKGROUND NUMBER */}

            <div className="absolute left-[5%] bottom-[5%] pointer-events-none z-0">
              <span className="hero-date-bg">27</span>
            </div>

            {/* CAR (leader) */}
            <div className="absolute right-[-30%] bottom-0 w-[60%] h-[100%] z-10">
              <Image
                src="/assets/cars/car right image3.png"
                alt="Vintage Car"
                fill
                className="object-contain object-right-bottom scale-[1.6]"
                priority
              />
            </div>
            <div className="car-shadow" />

            {/* <div className="absolute right-[-30%] bottom-[-6%] w-[50%] h-[10%] bg-black/40 blur-3xl rounded-full" /> */}
            {/* 🔗 TOW STRING (ADD THIS) */}

            {/* <svg
              className="absolute bottom-[40px] left-[130px] z-0"
              width="320"
              height="20"
              viewBox="0 0 320 20"
            >
              <path
                d="M0 10 Q160 10 320 10"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="2 6" //this what causes dashed rope
                style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.4))" }}
              />
            </svg> */}

            <div
              ref={row1TextInnerRef}
              className="absolute bottom-6 z-20 flex flex-col gap-3"
            >
              <div className="will-change-transform transform-none">
                <div className="flex items-center gap-3">
                  <div className="bg-[#0047FF] text-white px-1 py-1 font-mono text-sm font-bold border border-white/20 shadow-[4px_4px_0px_black]">
                    * (15+)
                  </div>
                  <span className="text-white font-[Geist Mono] text-xs md:text-base tracking-[0.3em] uppercase font-medium mt-1">
                    MODIFIED CARS
                  </span>
                </div>

                {/* <div className="bg-[#CCFF00] text-black inline-flex w-fit whitespace-nowrap pl-3 pr-7 py-3 clip-path-label items-baseline gap-2 relative">
                  <span className="text-2xl md:text-5xl font-[Orbitron] font-black tracking-tighter leading-none">
                    27. FEB
                  </span>
                  <span className="text-xs font-mono font-bold opacity-80">
                    2026
                  </span>
                  <div className="absolute bottom-2 left-4 w-[50%] h-[3px] bg-black"></div>
                </div> */}
                <div className="relative z-20 ml-[18%] mb-12 flex items-end gap-3">
                  <span className="text-[#CCFF00] font-[Orbitron] text-6xl md:text-7xl font-black tracking-tight">
                    FEB
                  </span>
                  <span className="text-white font-mono text-sm md:text-base opacity-70 mb-2">
                    2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === ROW 2: WHEELS TITLE (Small Section) === */}
        {/* "the second section text wheels etc must be small section as per the image" */}
        <div
          ref={row2Ref}
          className="w-full relative border-b border-white/20 h-[15vh] overflow-hidden flex items-center justify-center bg-black"
        >
          <div className="relative w-full flex flex-col items-center justify-center z-10 scale-75 md:scale-100">
            {/* Top Label Group */}
            <div className="flex items-center justify-end w-full gap-3 mb-[-15px] pr-[15%] z-20">
              <span className="text-white/60 font-[Geist Mono] text-[10px] md:text-xs uppercase tracking-widest">
                SUPER BIKES
              </span>
              <div className="bg-[#0047FF] text-white px-2 py-0.5 font-mono text-sm font-bold border border-white/10 shadow-[2px_2px_0px_black]">
                * (15+)
              </div>
            </div>

            {/* Massive White Slab - Reduced height/padding for "small section" */}
            <div className="bg-[#f2f2f2] w-[100%] transform -skew-x-12 py-3 md:py-2 flex justify-center items-center relative border-y-2 border-black">
              <h1 className="text-black font-[Orbitron] font-black text-[8vh] tracking-tighter leading-[0.8] transform skew-x-12 mt-1">
                WHEELS
                <span className="align-top text-[6vh] leading-[0.5]">*</span>
              </h1>
            </div>
          </div>
        </div>

        {/* === ROW 3: AUTO SHOW + WHEEL === */}
        {/* "no need to like split the car and wheel... as i can see a line there splitting verticaaly" -> removed vertical border */}
        <div
          ref={row3Ref}
          className="w-full flex relative border-b border-white/20 h-[25vh] overflow-hidden bg-black"
        >
          {/* Left: [AUTOSHOW] + Car Nose */}
          <div className="w-[50%] h-full relative overflow-visible z-10">
            {/* Text "above the frontsection" removed left-[10%] */}
            {/* <div className="absolute top-[20%] z-20 mix-blend-difference pb-2">
              <span className="text-white font-[Geist Mono] text-3xl md:text-5xl tracking-tighter font-light block text-right">
                [AUTOSHOW]
              </span>
            </div> */}
            <div className="absolute top-[15%] z-20 mix-blend-difference pb-4">
              <div className="autoshow-tag">AUTOSHOW</div>
            </div>

            {/* Cropped Nose */}
            <div className="absolute left-[-80%] bottom-[-18%] w-[180%] h-[100%]">
              <Image
                src="/assets/cars/car right image2.png"
                alt="Auto Show Car"
                fill
                className="object-contain object-left-bottom scale-[1.3]"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
          </div>

          {/* Right: Wheel Zoom */}
          {/* "wheel be only visible 70% from the right and its top and bottom be also out from the section" */}
          <div className="w-[60%] h-full relative overflow-hidden">
            <div
              ref={row3WheelRef}
              className="absolute right-[-80%] top-[-20%] w-[170%] h-[130%]"
            >
              <div className="wheel-wrap relative z-10">
                <Image
                  src="/assets/cars/wheel_dummy.png"
                  alt="Wheel"
                  fill
                  className="object-contain scale-[1.1]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === ROW 4: STUNTS + BIKE === */}
        {/* "stunts text... be small and aligned in the same level of the car" */}
        <div
          ref={row4Ref}
          className="w-full flex relative h-[15vh] overflow-hidden bg-black items-end pb-8"
        >
          {/* Left Text : removed pl-6 md:pl-12 and replaced with relative */}
          <div className="relative z-10 mb-2">
            {/* <h2 className="text-white font-[Geist Mono] text-2xl md:text-4xl italic font-light tracking-widest opacity-80">
              /STUNTS/
            </h2> */}
            <h2 className="stunts-label">STUNTS</h2>
          </div>

          {/* Right Bike */}
          <div className="absolute right-[15%] bottom-[-30%] w-[120%] h-[160%]">
            <Image
              src="/assets/cars/car left image3-Photoroom.png"
              alt="Stunt Bike"
              fill
              // style={{ transform: "scaleX(-1)" }}
              className="object-contain object-right-bottom scale-[1.8]"
            />
          </div>
        </div>

        {/* === TICKER FOOTER === */}

        <div className="w-full bg-[#E6E6E6] mt-5 border-t-4 border-black z-20 relative">
          <div className="animate-marquee1 whitespace-nowrap flex gap-10 items-center text-black font-black font-mono text-md uppercase tracking-widest py-1 leading-none">
            {Array(6)
              .fill(
                "ENGINE ROARS ✶ BURNT RUBBER ✶ LIVE STUNTS ✶ PURE ADRENALINE",
              )
              .map((text, i) => (
                <span key={i} className="flex items-center gap-6 md:gap-12">
                  {text}{" "}
                  <span className="w-10 h-10 bg-black text-[#CCFF00] flex items-center justify-center text-sm font-bold shadow-[2px_2px_0px_#CCFF00]">
                    {" "}
                    27
                  </span>
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
