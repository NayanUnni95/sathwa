import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FashionShowModal from "./FashionShowModal";
import "./FashionShowSection.css";

gsap.registerPlugin(ScrollTrigger);

const FashionShowSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const mainTextRef = useRef<HTMLHeadingElement>(null);
    const asteriskRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Initial states
            gsap.set(".fs-main-text span", { y: "110%", skewY: 10, opacity: 0 });
            gsap.set(".fs-logo-wrapper, .fs-description, .fs-top-right, .fs-date-badge, .fs-view-more-btn", {
                y: 30,
                opacity: 0,
                filter: "blur(10px)"
            });

            // Entrance Animations
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    once: true,
                }
            });

            // Cinematic BG Entrance
            tl.fromTo(bgRef.current,
                { scale: 1.2, opacity: 0, filter: "blur(20px)" },
                { scale: 1, opacity: 1, filter: "blur(0px)", duration: 2.5, ease: "expo.out" }
            );

            // Light Ray Atmosphere
            tl.fromTo(".fs-light-ray",
                { rotate: -20, opacity: 0, scale: 0.8 },
                { rotate: 20, opacity: 1, scale: 1, duration: 4, ease: "sine.inOut", repeat: -1, yoyo: true },
                0
            );

            // Refined Staggered Entrance for Metadata
            tl.to(".fs-logo-wrapper, .fs-top-right, .fs-description, .fs-date-badge, .fs-view-more-btn", {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1.5,
                stagger: 0.15,
                ease: "power4.out"
            }, "-=1.8");

            // Elite "VELOURA" Text Reveal
            tl.to(".fs-main-text span", {
                y: "0%",
                skewY: 0,
                opacity: 1,
                duration: 1.8,
                ease: "expo.out",
                stagger: {
                    each: 0.08,
                    from: "center"
                }
            }, "-=1.2");

            // Asterisk Back-Out Animation
            tl.fromTo(asteriskRef.current,
                { scale: 0, rotate: -270, opacity: 0 },
                { scale: 1, rotate: 0, opacity: 1, duration: 1.5, ease: "back.out(2)" },
                "-=1.0"
            );

            // Elegant Continuous Asterisk Rotation
            gsap.to(asteriskRef.current, {
                rotate: 360,
                duration: 15,
                repeat: -1,
                ease: "none"
            });

            // High-End Multi-Layered Mouse Parallax
            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const xPct = (clientX / window.innerWidth - 0.5);
                const yPct = (clientY / window.innerHeight - 0.5);

                // Deep Background - Moves slow
                gsap.to(bgRef.current, {
                    x: xPct * 30,
                    y: yPct * 20,
                    rotation: xPct * 1,
                    duration: 2,
                    ease: "power2.out"
                });

                // Content Layer - Moves slightly faster in opposite direction
                gsap.to(".fs-content", {
                    x: -xPct * 40,
                    y: -yPct * 30,
                    duration: 1.5,
                    ease: "power3.out"
                });

                // Subtle tilt for the text
                gsap.to(".fs-main-text-wrapper", {
                    rotationY: xPct * 5,
                    rotationX: -yPct * 5,
                    duration: 1.5,
                    ease: "power3.out"
                });

                // Atmosphere follows mouse
                gsap.to(".fs-light-ray", {
                    x: xPct * 100,
                    duration: 3,
                    ease: "sine.out"
                });
            };

            if (window.innerWidth > 1024) {
                window.addEventListener("mousemove", handleMouseMove);
                return () => window.removeEventListener("mousemove", handleMouseMove);
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="fashionshow-section">
            {/* Grain Overlay */}
            {/* <div className="fs-grain" /> */}
            {/* <div className="fs-vignette" /> */}
            {/* <div className="fs-light-ray" /> */}

            <div className="fs-container">
                {/* Background Image */}
                <div ref={bgRef} className="fs-bg-wrapper">
                    <Image
                        src="/assets/fashionshow/fashionshow-image.png"
                        alt="Fashion Show Background"
                        fill
                        className="fs-bg-image desktop-bg"
                        priority
                    />
                    <Image
                        src="/assets/fashionshow/fashionshow-image-mobile.png"
                        alt="Fashion Show Background Mobile"
                        fill
                        className="fs-bg-image mobile-bg"
                        priority
                    />
                </div>

                {/* Overlay Content */}
                <div ref={contentRef} className="fs-content">
                    {/* Logo */}
                    <div className="fs-logo-wrapper">
                        <Image
                            src="/assets/fashionshow/fashionshow-logo.png"
                            alt="IFE Logo"
                            width={130}
                            height={130}
                            className="fs-logo"
                        />
                    </div>

                    {/* Description Text */}
                    <div className="fs-description">
                        <span className="fs-desc-line">Slay the Runway</span>
                        <span className="fs-desc-accent">SHOW OFF YOUR STYLE</span>
                    </div>

                    {/* Top Right Title */}
                    <div className="fs-top-right">
                        <div className="fs-title-wrapper">
                            <h2 ref={titleRef} className="fs-title font-playfair">Fashion Show</h2>
                            <div className="fs-title-underline" />
                        </div>
                    </div>

                    {/* Center/Bottom Huge Text */}
                    <div className="fs-main-text-wrapper lg:ml-[-15vh] lg:mb-7">
                        <h1 ref={mainTextRef} className="fs-main-text font-playfair">
                            <div className="fs-text-reveal">
                                {"VELOURA".split("").map((char, i) => (
                                    <span key={i} className="inline-block">{char}</span>
                                ))}
                            </div>
                            <div ref={asteriskRef} className="fs-asterisk-wrapper">
                                <Image
                                    src="/assets/fashionshow/Asterisk 2.png"
                                    alt="Fashion Show Asterisk"
                                    width={70}
                                    height={80}
                                    className="fs-asterisk"
                                />
                            </div>
                        </h1>
                    </div>

                    {/* Date Badge and View More Button Container */}
                    <div className="fs-bottom-controls lg:mb-20">
                        <div className="fs-date-badge">
                            <span className="fs-date-value">FEB 27, 2026</span>
                        </div>

                        <button
                            className="fs-view-more-btn"
                            onClick={() => setIsModalOpen(true)}
                        >
                            View More
                        </button>
                    </div>
                </div>
            </div>

            <FashionShowModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default FashionShowSection;