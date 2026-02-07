// // "use client";

// import React, { useRef, useLayoutEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FiArrowUpRight } from "react-icons/fi";

// gsap.registerPlugin(ScrollTrigger);

// const SLICES = 5;

// export default function TechCompetitionsSection() {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const slicesRef = useRef<(HTMLDivElement | null)[]>([]);
//     const textRef = useRef<HTMLDivElement>(null);
//     const [isHovered, setIsHovered] = useState(false);

//     useLayoutEffect(() => {
//         const ctx = gsap.context(() => {
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: containerRef.current,
//                     start: "top 75%", // Starts much later (when top of section is 75% down viewport)
//                     end: "bottom 90%",
//                     scrub: 1.5, // Slower scrub for smoother heavy feel
//                 },
//             });

//             // Animate Slices (Locking in from Top/Bottom)
//             slicesRef.current.forEach((slice, i) => {
//                 const direction = i % 2 === 0 ? -100 : 100; // Alternating direction

//                 // Initial set
//                 gsap.set(slice, { yPercent: direction, scale: 1.2 });

//                 // Animation to lock
//                 tl.to(slice, {
//                     yPercent: 0,
//                     scale: 1,
//                     ease: "power3.out",
//                     duration: 1,
//                 }, 0);
//             });

//             // Text Reveal
//             gsap.fromTo(
//                 textRef.current,
//                 { opacity: 0, scale: 0.9 },
//                 {
//                     opacity: 1,
//                     scale: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: containerRef.current,
//                         start: "top 60%",
//                         end: "center center",
//                         scrub: 0.5,
//                     },
//                 }
//             );

//         }, containerRef);

//         return () => ctx.revert();
//     }, []);

//     return (
//         <section
//             ref={containerRef}
//             className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-black flex items-center justify-center group"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             {/* --- TOP MARQUEE BREAKER --- */}
//             <div className="absolute top-0 left-0 w-full h-8 bg-[#0a0a0a] border-b border-white/10 z-30 flex items-center overflow-hidden mb-12">
//                 <div className="flex gap-8 animate-marquee whitespace-nowrap text-[10px] font-mono tracking-widest text-[#00ffcc]/80">
//                     {Array(15).fill(">>SYSTEM ONLINE // MULTI-DISCIPLINE CHALLENGES ACTIVE // ACCESS GRANTED").map((item, i) => (
//                         <span key={i} className="flex items-center gap-4">
//                             {item} <span className="w-2 h-2 bg-white/20 rounded-full"></span>
//                         </span>
//                     ))}
//                 </div>
//                 {/* Gradient fade for marquee edges */}
//                 <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none" />
//                 <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none" />
//             </div>

//             {/* Slices Container */}
//             <div className="absolute inset-0 flex w-full h-full pt-8"> {/* Added pt-8 to account for marquee */}
//                 {Array.from({ length: SLICES }).map((_, i) => (
//                     <div
//                         key={i}
//                         ref={(el) => { slicesRef.current[i] = el }}
//                         className="relative h-full flex-1 overflow-hidden border-r border-black/50 last:border-none"
//                     >
//                         {/* The Image is repeated in each slice but positioned to look continuous */}
//                         <div className="relative w-[100vw] h-full" style={{ left: `${i * -20}vw` }}>
//                             <Image
//                                 src="/assets/tech_competitions.jpeg"
//                                 alt="Tech Competitions"
//                                 fill
//                                 className="object-cover filter brightness-80 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out"
//                             />
//                         </div>
//                         {/* Slice Overlay for depth */}
//                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
//                     </div>
//                 ))}
//             </div>

//             {/* Content Overlay - Glassmorphism Card for better readability */}
//             <div
//                 ref={textRef}
//                 className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 md:p-16 max-w-4xl mx-auto rounded-3xl"
//                 style={{
//                     background: "radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)",
//                     backdropFilter: "blur(8px)",
//                     border: "1px solid rgba(255,255,255,0.05)"
//                 }}
//             >
//                 <h2 className="text-white font-['var(--font-orbitron)'] font-black text-5xl md:text-8xl tracking-tighter leading-none uppercase select-none drop-shadow-2xl">
//                     TECH <br />
//                     <span className="italic font-serif font-light tracking-wide text-3xl md:text-7xl block mt-2 md:mt-4 text-zinc-300">
//                         Competitions
//                     </span>
//                 </h2>

//                 <div className="mt-8 md:mt-10 overflow-hidden">
//                     <Link
//                         href="/competitions"
//                         className="group/btn relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold font-mono text-sm tracking-widest uppercase hover:bg-[#00ffcc] transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,204,0.5)]"
//                     >
//                         <span className="relative z-10">Enter The Arena</span>
//                         <FiArrowUpRight className="text-xl group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
//                     </Link>
//                 </div>
//             </div>

//             {/* Aesthetic Edges */}
//             <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
//             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

//             {/* Vertical Lines Decoration */}
//             <div className="absolute inset-0 flex w-full h-full pointer-events-none z-20">
//                 <div className="w-[1px] h-full bg-white/10 ml-[20%]" />
//                 <div className="w-[1px] h-full bg-white/10 ml-[20%]" />
//                 <div className="w-[1px] h-full bg-white/10 ml-[20%]" />
//                 <div className="w-[1px] h-full bg-white/10 ml-[20%]" />
//             </div>

//         </section>
//     );
// }

"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const SLICES = 5;

export default function TechCompetitionsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slicesRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%", // Starts much later (when top of section is 75% down viewport)
          end: "bottom 90%",
          scrub: 1.5, // Slower scrub for smoother heavy feel
        },
      });

      // Animate Slices (Locking in from Top/Bottom)
      slicesRef.current.forEach((slice, i) => {
        const direction = i % 2 === 0 ? -100 : 100; // Alternating direction

        // Initial set
        gsap.set(slice, { yPercent: direction, scale: 1.2 });

        // Animation to lock
        tl.to(
          slice,
          {
            yPercent: 0,
            scale: 1,
            ease: "power3.out",
            duration: 1,
          },
          0,
        );
      });

      // Text Reveal
      gsap.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "center center",
            scrub: 0.5,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-black flex items-center justify-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* --- TOP MARQUEE BREAKER --- */}
      <div className="absolute top-0 left-0 w-full h-8 bg-[#0a0a0a] border-b border-white/10 z-30 flex items-center overflow-hidden mb-12">
        <div className="flex gap-8 animate-marquee whitespace-nowrap text-[10px] font-mono tracking-widest text-[#00ffcc]/80">
          {Array(15)
            .fill(
              ">> SYSTEM ONLINE // MULTI-DISCIPLINE CHALLENGES ACTIVE // ACCESS GRANTED",
            )
            .map((item, i) => (
              <span key={i} className="flex items-center gap-4">
                {item}{" "}
                <span className="w-2 h-2 bg-white/20 rounded-full"></span>
              </span>
            ))}
        </div>
        {/* Gradient fade for marquee edges */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>

      {/* Slices Container */}
      <div className="absolute inset-0 flex w-full h-full pt-8">
        {" "}
        {/* Added pt-8 to account for marquee */}
        {Array.from({ length: SLICES }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              slicesRef.current[i] = el;
            }}
            className="relative h-full flex-1 overflow-hidden border-r border-black/50 last:border-none"
          >
            {/* The Image is repeated in each slice but positioned to look continuous */}
            <div
              className="relative w-[100vw] h-full"
              style={{ left: `${i * -20}vw` }}
            >
              <Image
                src="/assets/tech_competitions.jpeg"
                alt="Tech Competitions"
                fill
                className="object-cover filter brightness-80 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out"
              />
            </div>
            {/* Slice Overlay for depth */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        ))}
      </div>

      {/* Content Overlay - Mix Blend Difference for that "Fashion Tech" look */}
      <div
        ref={textRef}
        className="relative mt-12 z-10 flex flex-col items-center justify-center text-center mix-blend-difference px-4"
      >
        <h2 className="text-white font-['var(--font-orbitron)'] font-black text-5xl md:text-9xl tracking-tighter leading-none uppercase select-none mt-88">
          TECH <br />
          <span className="italic font-serif font-light tracking-wide text-4xl md:text-8xl block mt-2 md:mt-4">
            Competitions
          </span>
        </h2>

        <div className="mt-8 overflow-hidden">
          <Link
            href="/competitions"
            className="inline-flex items-center gap-2 text-white 
    bg-white/20 backdrop-blur-md 
    border border-white/30 
    px-4 py-4 rounded-full 
    font-mono text-sm md:text-sm tracking-[0.3em] uppercase
    shadow-lg shadow-white/10
    hover:bg-white/20 hover:border-white/60
    transition-all duration-500 hover:tracking-[0.5em]"
          >
            Enter The Arena <FiArrowUpRight className="text-lg" />
          </Link>
        </div>
      </div>

      {/* Aesthetic Edges */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

      {/* Vertical Lines Decoration */}
      <div className="absolute inset-0 flex w-full h-full pointer-events-none z-20">
        <div className="w-[1px] h-full bg-white/10 ml-[20%]" />
        <div className="w-[1px] h-full bg-white/10 ml-[20%]" />
        <div className="w-[1px] h-full bg-white/10 ml-[20%]" />
        <div className="w-[1px] h-full bg-white/10 ml-[20%]" />
      </div>
    </section>
  );
}
