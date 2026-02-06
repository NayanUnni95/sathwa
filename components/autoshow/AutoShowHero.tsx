'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function AutoShowHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Refs for entire ROWS now, not just split elements, to move them as a block
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);
    const row3Ref = useRef<HTMLDivElement>(null);
    const row3WheelRef = useRef<HTMLDivElement>(null); // Keep wheel separate for its own rotation
    const row4Ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power2.out" } }); // Heavie, slower ease

            // --- INITIAL STATES ---

            // ROW 1: ENTIRE ROW moves Left -> Right
            gsap.set(row1Ref.current, { xPercent: -120, opacity: 0, skewX: -10 }); // Reduced skew for slower move

            // ROW 2: ENTIRE ROW moves Right -> Left
            gsap.set(row2Ref.current, { xPercent: 120, opacity: 0, skewX: 10 });

            // ROW 3: ENTIRE ROW moves Left -> Right (Wheel handled separately for spin)
            gsap.set(row3Ref.current, { xPercent: -120, opacity: 0, skewX: -10 });
            gsap.set(row3WheelRef.current, { scale: 0, rotation: -180 });

            // ROW 4: ENTIRE ROW moves Right -> Left
            gsap.set(row4Ref.current, { xPercent: 120, opacity: 0, skewX: 10 });


            // --- ANIMATION SEQUENCE (Driving In) ---
            // Increased duration to 3s for "heavy vehicle" feel

            // Row 1: Drive In (L->R)
            tl.to(row1Ref.current, {
                xPercent: 0,
                opacity: 1,
                skewX: 0,
                duration: 3,
            }, 0);

            // Row 2: Drive In (R->L)
            tl.to(row2Ref.current, {
                xPercent: 0,
                opacity: 1,
                skewX: 0,
                duration: 3,
            }, 0.2);

            // Row 3: Drive In (L->R)
            tl.to(row3Ref.current, {
                xPercent: 0,
                opacity: 1,
                skewX: 0,
                duration: 3,
            }, 0.4)
                // Wheel Pop-in and Spin
                .to(row3WheelRef.current, {
                    scale: 1,
                    rotation: 0,
                    duration: 2.5,
                    ease: "back.out(1.2)"
                }, 0.6)
                .add(() => {
                    // Infinite Spin Loop
                    gsap.to(row3WheelRef.current, {
                        rotation: 360,
                        duration: 2, // Slower spin
                        repeat: -1,
                        ease: "none"
                    });
                }, 1.5);

            // Row 4: Drive In (R->L)
            tl.to(row4Ref.current, {
                xPercent: 0,
                opacity: 1,
                skewX: 0,
                duration: 3,
            }, 0.6);


            // --- IDLE SUSPENSION LOOP ---
            const floatingElements = [
                row1Ref.current?.querySelector('.car-img'),
                row2Ref.current?.querySelector('.car-img'),
                row3Ref.current?.querySelector('.car-img'),
                row4Ref.current?.querySelector('.car-img')
            ];

            floatingElements.forEach((el, i) => {
                if (!el) return;
                gsap.to(el, {
                    y: i % 2 === 0 ? -5 : 5,
                    duration: 3 + (i * 0.5), // Slower idle
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 2 + (i * 0.2)
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const containerHeight = "h-[18vh] md:h-[22vh]";
    // Increased size: w-full md:w-[1600px] and height > 100% to allow overlap
    const carWrapperClass = "car-img relative h-full md:h-[160%] w-full md:w-[1600px] flex items-center transition-transform z-20";

    return (
        <section ref={containerRef} className="relative w-full min-h-screen bg-black flex flex-col justify-center overflow-hidden py-4 md:py-0">

            {/* ROW 1: ENTIRE ROW MOVES L -> R (Leading: Right) */}
            <div ref={row1Ref} className={`flex w-full ${containerHeight} items-center relative overflow-visible px-2 md:px-0`}>
                <div className="w-[60%] md:w-1/2 flex justify-start pl-2 md:pl-20 items-center z-10">
                    <div className="bg-[#CCFF00] text-black px-2 py-1 md:px-10 md:py-6 clip-path-slant flex items-end gap-1 md:gap-2 shadow-[4px_4px_0px_rgba(255,255,255,0.1)] md:shadow-[10px_10px_0px_rgba(255,255,255,0.1)]">
                        <span className="text-2xl md:text-7xl font-bold font-mono">27</span>
                        <span className="text-xl md:text-5xl font-bold">FEB</span>
                        <span className="text-[10px] md:text-xl mb-0.5 md:mb-1 font-mono">2026</span>
                    </div>
                </div>
                <div className="w-[40%] md:w-1/2 flex justify-end pr-0 md:pr-0 h-full mb-8 md:mb-14">
                    <div className={carWrapperClass}>
                        <Image src="/assets/cars/car_dummy4.png" alt="Vehicle 1" fill className="object-contain object-right md:object-center" style={{ transform: 'scaleX(-1)' }} priority />
                    </div>
                </div>
            </div>

            {/* ROW 2: ENTIRE ROW MOVES R -> L (Leading: Left) */}
            <div ref={row2Ref} className={`flex w-full ${containerHeight} items-center relative bg-white/5 mx-auto border-t border-b border-white/10 overflow-visible px-2 md:px-0`}>
                <div className="w-[40%] md:w-1/2 flex justify-start pl-0 md:pl-0 h-full mb-8 md:mb-14">
                    <div className={carWrapperClass}>
                        <Image src="/assets/cars/car_dummy2.png" alt="Vehicle 2" fill className="object-contain object-left md:object-center" priority />
                    </div>
                </div>
                <div className="w-[60%] md:w-1/2 flex justify-end flex-col items-end pr-2 md:pr-10 z-10">
                    <h2 className="text-white text-3xl md:text-9xl font-black tracking-tighter uppercase italic drop-shadow-lg text-right leading-none">
                        WHEELS<span className="text-[#CCFF00]">*</span>
                    </h2>
                    <div className="bg-[#0033CC] text-white px-2 py-1 md:p-3 font-mono text-[10px] md:text-lg transform skew-x-[-12deg] mt-1 md:mt-2 shadow-lg">
                        ★ (20+) VINTAGE CARS
                    </div>
                </div>
            </div>

            {/* ROW 3: ENTIRE ROW MOVES L -> R (Leading: Right) */}
            <div ref={row3Ref} className={`flex w-full ${containerHeight} items-center relative overflow-visible px-2 md:px-0`}>
                {/* Trailing Text (Left) */}
                <div className="w-1/3 flex justify-start pl-2 md:pl-10">
                    <h2 className="text-white/80 text-lg md:text-6xl font-mono tracking-widest text-left break-words">
                        [AUTO<br className="md:hidden" />SHOW]
                    </h2>
                </div>

                {/* Center Wheel */}
                <div className="w-1/3 relative flex justify-center items-center z-20 h-full">
                    <div ref={row3WheelRef} className="relative h-[100%] md:h-[140%] aspect-square">
                        <Image src="/assets/cars/wheel_dummy.png" alt="Hero Wheel" fill className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" priority />
                    </div>
                </div>

                {/* Leading Car (Right) */}
                <div className="w-1/3 flex justify-end h-full pr-0 md:pr-0">
                    <div className="car-img relative h-full w-full md:w-[600px]">
                        <Image src="/assets/cars/car_dummy3.png" alt="Vehicle 3" fill className="object-contain object-right" style={{ transform: 'scaleX(-1)' }} priority />
                    </div>
                </div>
            </div>

            {/* ROW 4: ENTIRE ROW MOVES R -> L (Leading: Left) */}
            <div ref={row4Ref} className={`flex w-full ${containerHeight} items-center relative overflow-visible px-2 md:px-0`}>
                <div className="w-[40%] md:w-1/2 flex justify-start pl-0 md:pl-0 h-full mb-8">
                    <div className={carWrapperClass}>
                        <Image src="/assets/cars/car_dummy1.png" alt="Vehicle 4" fill className="object-contain object-left md:object-center" priority />
                    </div>
                </div>
                <div className="w-[60%] md:w-1/2 flex justify-end items-center pr-2 md:pr-10 z-10">
                    <div className="bg-[#6600FF] text-white px-3 py-2 md:px-12 md:py-6 text-sm md:text-5xl font-bold italic transform -skew-x-12 border-2 md:border-4 border-white/20 shadow-2xl text-right">
                        * (15+) <span className="text-white/70 font-normal block md:inline">SUPER BIKES</span>
                    </div>
                </div>
            </div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        </section>
    );
}
