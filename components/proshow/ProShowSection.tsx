"use client";

import React, { useState, useEffect, useRef } from "react";
import "./ProShowSection.css";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

const ARTISTS = [
    {
        id: "artist-1",
        image: "/assets/proshow/pro-image2.jpg",
        name: "CHUMADU THANGI",
        className: "artist-1",
        config: {
            "--theme-border": "#243008",
            "--theme-text": "#D2EA73",
            // "--theme-shadow": "0px 15px 2px 0px #000000",
            "--badge-color": "#D2EA73",
            "--badge-border": "#4B3B0E",
            "--zigzag-color": "#4F4F4F",
            "--circle-glow": "#D2EA73",
            "--right-text-color": "#D2EA73"
        }
    },
    {
        id: "artist-2",
        image: "/assets/proshow/Group Pic 1.png",
        name: "CHUMADU THANGI",
        className: "artist-2",
        config: {
            "--theme-border": "#A42626",
            "--theme-text": "#FF0000",
            // "--theme-shadow": "0px 15px 2px 0px #000000",
            "--badge-color": "#FF0000",
            "--badge-border": "#5F0101",
            "--zigzag-color": "#4F4F4F",
            "--circle-glow": "#FF0000",
            "--right-text-color": "#FF0000"
        }
    },
    {
        id: "artist-3",
        image: "/assets/proshow/pro-image4new.png",
        name: "CHUMADU THANGI",
        className: "artist-3",
        config: {
            // "--theme-border": "#6B793E",
            "--theme-border": "#d04019ff",
            // "--theme-text": "#C2C2C2",
            "--theme-text": "#cc6211",
            // "--theme-shadow": "0px 15px 2px 0px #454545",
            "--badge-color": "#1f2320ff",
            // "--badge-border": "#4E6334",
            "--badge-border": "#cc6220",
            "--zigzag-color": "#898989",
            "--circle-glow": "#C2C2C2",
            "--right-text-color": "#cc6220"

        }
    }
];

const ProShowSection = () => {
    const [showArtists, setShowArtists] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const linkRef = useRef<HTMLAnchorElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const introRef = useRef<HTMLDivElement>(null);
    const micRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const bgTextRef = useRef<HTMLDivElement>(null);
    const isAnimating = useRef(false);

    const handleViewArtists = () => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        const tl = gsap.timeline({
            onComplete: () => {
                setShowArtists(true);
                isAnimating.current = false;
            }
        });

        // Intro Exit Animation: Elements move down and fade
        if (introRef.current) {
            tl.to(introRef.current, {
                y: 100,
                opacity: 0,
                duration: 0.6,
                ease: "power2.in"
            }, 0);
        }
        if (micRef.current) {
            tl.to(micRef.current, {
                y: 150,
                opacity: 0,
                duration: 0.7,
                ease: "power2.in"
            }, 0.1);
        }
        // Background text also fades/shifts slightly
        if (bgTextRef.current) {
            tl.to(bgTextRef.current, {
                opacity: 0.3,
                scale: 0.95,
                duration: 0.8,
                ease: "power2.inOut"
            }, 0);
        }
    };

    // ─── Artist Entrance Animation ───
    useEffect(() => {
        if (!showArtists) return;

        // Reveal the container and animate elements from top
        // immediateRender: true ensures GSAP takes control BEFORE the next paint
        const tl = gsap.timeline();

        if (containerRef.current) {
            gsap.set(containerRef.current, { opacity: 1 });
        }

        if (badgeRef.current) {
            tl.from(badgeRef.current, {
                y: -150,
                opacity: 0,
                duration: 1,
                ease: "expo.out"
            }, 0.2);
        }

        circleRefs.current.forEach((el, i) => {
            if (el) {
                tl.from(el, {
                    y: -300,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power4.out"
                }, 0.4 + (i * 0.1));
            }
        });

        if (nameRef.current) {
            tl.from(nameRef.current, {
                y: -60,
                opacity: 0,
                duration: 0.9,
                ease: "expo.out"
            }, 0.7);
        }

        if (linkRef.current) {
            tl.from(linkRef.current, {
                y: -40,
                opacity: 0,
                duration: 0.8,
                ease: "expo.out"
            }, 0.9);
        }

        if (bgTextRef.current) {
            tl.to(bgTextRef.current, {
                opacity: 0.15,
                scale: 1,
                duration: 1.5,
                ease: "power2.out"
            }, 0.5);
        }
    }, [showArtists]);

    // ─── GSAP Animation on index change ───
    const initialMount = useRef(true);

    useEffect(() => {
        if (!showArtists || circleRefs.current.length === 0) {
            initialMount.current = true;
            return;
        }

        // Skip the index-change animation if it's the first time entering the view
        if (initialMount.current) {
            initialMount.current = false;
            return;
        }

        const isMobile = window.innerWidth <= 768;

        // Animate name + link out then in
        const tl = gsap.timeline({
            onStart: () => { isAnimating.current = true; },
            onComplete: () => { isAnimating.current = false; },
        });

        // 1. Fade out name & link
        if (nameRef.current) {
            tl.to(nameRef.current, {
                opacity: 0, y: 20, duration: 0.3, ease: "power2.in"
            }, 0);
        }
        // Link remains static (user: "no need to change the instagram a tag all time")

        // 2. Animate badge color shift
        if (badgeRef.current) {
            tl.to(badgeRef.current, {
                scale: 0.85, duration: 0.2, ease: "power2.in"
            }, 0);
            tl.to(badgeRef.current, {
                scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)"
            }, 0.3);
        }

        // 3. Animate circles to new positions
        ARTISTS.forEach((_, index) => {
            const el = circleRefs.current[index];
            if (!el) return;

            const diff = (index - activeIndex + 3) % 3;
            let targetProps: gsap.TweenVars;

            if (isMobile) {
                // Mobile: vertical stack - matching new CSS offsets for 85vw circles
                if (diff === 0) {
                    targetProps = { y: '35vw', zIndex: 50, opacity: 1, duration: 0.8 };
                } else if (diff === 1) {
                    // right → top position
                    targetProps = { y: '-15vw', zIndex: 30, opacity: 1, duration: 0.8 };
                } else {
                    // left → middle position
                    targetProps = { y: '10vw', zIndex: 40, opacity: 1, duration: 0.8 };
                }
            } else {
                // Desktop: horizontal
                if (diff === 0) {
                    targetProps = { x: '0vw', zIndex: 55, duration: 0.8 };
                } else if (diff === 1) {
                    targetProps = { x: '18vw', zIndex: 51, duration: 0.8 };
                } else {
                    targetProps = { x: '-18vw', zIndex: 51, duration: 0.8 };
                }
            }

            tl.to(el, {
                ...targetProps,
                ease: "expo.inOut",
            }, 0.1);
        });

        // 4. Fade in name & link with new content (after positions settle)
        if (nameRef.current) {
            tl.fromTo(nameRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
                0.5
            );
        }
        // Link remains static

        return () => { tl.kill(); };
    }, [activeIndex, showArtists]);

    // ─── Auto-rotation ───
    useEffect(() => {
        if (!showArtists) return;
        const interval = setInterval(() => {
            if (!isAnimating.current) {
                setActiveIndex((prev) => (prev + 1) % ARTISTS.length);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [showArtists]);

    const nextArtist = () => {
        if (isAnimating.current) return;
        setActiveIndex((prev) => (prev + 1) % ARTISTS.length);
    };

    const prevArtist = () => {
        if (isAnimating.current) return;
        setActiveIndex((prev) => (prev - 1 + ARTISTS.length) % ARTISTS.length);
    };

    const activeArtist = ARTISTS[activeIndex];

    const getPositionClass = (index: number) => {
        const diff = (index - activeIndex + 3) % 3;
        if (diff === 0) return "position-center";
        if (diff === 1) return "position-right";
        return "position-left";
    };

    return (
        <section
            ref={sectionRef}
            className={`proshow-section ${showArtists ? "artist-view-active" : ""}`}
            style={activeArtist.config as React.CSSProperties}
        >
            <div className="proshow-bg-marble" />

            <div className="proshow-content-wrapper">
                {/* Background Text */}
                <div ref={bgTextRef} className="proshow-text-layer">
                    <span className="pro-text font-japan">PRO</span>
                    <span className="hyphen-text font-japan">-</span>
                    <span className="show-text font-japan">SHOW</span>
                </div>

                {!showArtists ? (
                    <>
                        {/* Intro: View Artists Button */}
                        <div ref={introRef} className="proshow-artist-layer">
                            <button className="view-artists-btn" onClick={handleViewArtists}>
                                <span className="artist-text">VIEW ARTISTS</span>
                                <div className="btn-circle">
                                    <FaArrowRight />
                                </div>
                            </button>
                        </div>

                        {/* Intro: Mic Image */}
                        <div ref={micRef} className="proshow-mic-layer">
                            <Image
                                src="/assets/proshow/mic.png"
                                alt="Pro Show Microphone"
                                width={600}
                                height={900}
                                className="proshow-mic"
                                priority
                            />
                        </div>
                    </>
                ) : (
                    <div ref={containerRef} className="artist-view-container">
                        {/* FEB 28 Badge */}
                        <div ref={badgeRef} className="date-badge" style={{ backgroundColor: "var(--badge-color)", borderColor: "var(--badge-border)" }}>
                            <span className="date-text" style={{ color: activeIndex === 2 ? 'white' : 'black' }}>FEB 28</span>
                            <div
                                className="wave-img-dynamic"
                                style={{
                                    backgroundColor: "var(--zigzag-color)",
                                    WebkitMaskImage: "url('/assets/proshow/Heavy Waves.png')",
                                    maskImage: "url('/assets/proshow/Heavy Waves.png')",
                                    WebkitMaskSize: "contain",
                                    maskSize: "contain",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskRepeat: "no-repeat",
                                    width: "100%",
                                    height: "100%"
                                }}
                            />
                        </div>

                        {/* Circles Container */}
                        <div className="artist-circles">
                            {ARTISTS.map((artist, index) => {
                                const positionClass = getPositionClass(index);
                                const isRight = positionClass === "position-right";

                                return (
                                    <div ref={(el) => { circleRefs.current[index] = el; }} key={artist.id} className={`artist-circle-wrapper-dynamic ${positionClass} ${isRight ? 'right-wrapper' : ''}`}>
                                        <div className={`artist-circle ${artist.id === 'artist-2' ? 'logo-circle' : ''}`}>
                                            <Image
                                                src={artist.image}
                                                alt={artist.name}
                                                fill
                                                className={`circle-img ${artist.id === 'artist-2' && positionClass !== 'position-center' ? 'logo-contain' : ''}`}
                                                priority={index === activeIndex}
                                            />
                                            {positionClass !== "position-center" && <div className="circle-overlay" />}
                                        </div>

                                        {/* SVG for Curved Text - Displayed on the Right Circle per design */}
                                        <svg className={`circle-text-svg ${isRight ? 'visible' : ''}`} viewBox="0 0 100 100">
                                            <path id={`curve-${artist.id}`} d="M 25, 25 A 35,35 0 1 1 25, 75" fill="transparent" />
                                            <text width="100%">
                                                <textPath
                                                    href={`#curve-${artist.id}`}
                                                    startOffset="50%"
                                                    textAnchor="middle"
                                                    className="curved-text-content"
                                                    style={{ fill: "var(--right-text-color)" }}
                                                >
                                                    CHUMADU THANGI
                                                </textPath>
                                            </text>
                                        </svg>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Mobile Only: Artist Name */}
                        <h2 ref={nameRef} className="mobile-artist-name font-japan" style={{ color: "var(--theme-text)" }}>
                            {activeArtist.name}
                        </h2>

                        {/* Pill Button */}
                        <a ref={linkRef} href="https://www.instagram.com/itschumaduthangi/" target="_blank" rel="noopener noreferrer" className="artist-link-btn mb-5 lg:mb-0">
                            <span>{activeArtist.name.toLowerCase()}</span>
                            <FiArrowUpRight className="arrow-icon" />
                        </a>

                        {/* Desktop Only: Navigation Arrows */}
                        <div className="nav-arrow-container">
                            <div className="nav-arrow-circle" onClick={nextArtist}>
                                <FaArrowRight />
                            </div>
                        </div>

                        {/* <div className="bottom-text-mobile">
                            Lorem ipsum Bazooka Masjid And Beijing works on being popular, but you got to show them who you are, where you are.
                        </div> */}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProShowSection;
