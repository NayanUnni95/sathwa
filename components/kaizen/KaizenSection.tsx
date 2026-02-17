"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import "./KaizenSection.css";

const KaizenSection = () => {
    const router = useRouter();

    // separate refs for desktop and mobile sliders
    const desktopSliderRef = useRef<HTMLDivElement | null>(null);
    const mobileSliderRef = useRef<HTMLDivElement | null>(null);
    const thumbRef = useRef<HTMLDivElement | null>(null);

    const [isDragging, setIsDragging] = useState(false);
    const [dragProgress, setDragProgress] = useState(0);

    const marquee1Ref = useRef<HTMLDivElement | null>(null);
    const marquee2Ref = useRef<HTMLDivElement | null>(null);

    const HANDLE_WIDTH = 60;

    // GSAP marquees (unchanged)
    useEffect(() => {
        if (marquee1Ref.current && marquee2Ref.current) {
            const m1 = marquee1Ref.current;
            const m2 = marquee2Ref.current;

            gsap.to(m1, {
                xPercent: -50,
                repeat: -1,
                duration: 30,
                ease: "none",
            });

            gsap.to(m2, {
                xPercent: -50,
                repeat: -1,
                duration: 25,
                ease: "none",
            });
        }
    }, []);

    // when user starts drag, ensure we recalc sizes immediately
    const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
        // recalc size immediately (helps in cases of dynamic layout)
        const activeSlider =
            window.innerWidth >= 769 ? desktopSliderRef.current : mobileSliderRef.current;
        if (activeSlider) activeSlider.getBoundingClientRect(); // force measurement

        setIsDragging(true);
    };

    useEffect(() => {
        const handleMouseUp = () => {
            if (!isDragging) return;

            if (dragProgress > 0.8) {
                setDragProgress(1);
                setTimeout(() => {
                    window.location.href = "https://makemypass.com/event/kaizen26";
                }, 300);
            } else {
                // animate back to zero
                gsap.to({ val: dragProgress }, {
                    val: 0,
                    duration: 0.3,
                    onUpdate: function () {
                        setDragProgress(this.targets()[0].val);
                    }
                });
            }
            setIsDragging(false);
        };

        const handleMouseMove = (e: MouseEvent | TouchEvent) => {
            if (!isDragging) return;

            const activeSlider =
                window.innerWidth >= 769 ? desktopSliderRef.current : mobileSliderRef.current;

            if (!activeSlider) return;

            const rect = activeSlider.getBoundingClientRect();
            const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;

            const max = Math.max(0, rect.width - HANDLE_WIDTH);
            if (max === 0) {
                setDragProgress(0);
                return;
            }

            let x = clientX - rect.left - HANDLE_WIDTH / 2;
            x = Math.max(0, Math.min(x, max));

            setDragProgress(x / max);
        };

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
            window.addEventListener("touchmove", handleMouseMove, { passive: true });
            window.addEventListener("touchend", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchmove", handleMouseMove);
            window.removeEventListener("touchend", handleMouseUp);
        };
    }, [isDragging, dragProgress, router]);

    const marqueeText1 = "REGISTER NOW • KAIZEN ’26 • 24 HOUR HACKATHON ";
    const marqueeText2 = "BUILD WITH PURPOSE • CREATE REAL IMPACT • CODE THE FUTURE ";

    // helper to compute pixel translate; used in JSX so it always reflects the current slider width
    const computeTranslateFor = (sliderEl: HTMLDivElement | null) => {
        if (!sliderEl) return 0;
        const width = sliderEl.getBoundingClientRect().width;
        const max = Math.max(0, width - HANDLE_WIDTH);
        return dragProgress * max;
    };

    const handleSliderClick = () => {
        if (isDragging || window.innerWidth < 769) return;
        gsap.to({ val: dragProgress }, {
            val: 1,
            duration: 0.5,
            ease: "power2.out",
            onUpdate: function () {
                setDragProgress(this.targets()[0].val);
            },
            onComplete: () => {
                setTimeout(() => {
                    window.location.href = "https://makemypass.com/event/kaizen26";
                }, 200);
            }
        });
    };

    return (
        <section className="kaizen-section">
            <div className="kaizen-bg-marble" />

            {/* Desktop layout */}
            <div className="kaizen-desktop-layout">
                <div className="kaizen-header-desktop">
                    <div className="kaizen-title-container">
                        <div className="kaizen-title-wrapper">
                            <span className="kai-text">KAI</span>
                            <span className="zen-text">ZEN</span>
                            <div className="year-group-desktop ml-2">
                                <span className="red-quote-mark">'</span>
                                <span className="year-number">26</span>
                                <button className="circled-arrow-btn small desktop-arrow" onClick={() => router.push("/hackathon")}>
                                    <div className="circle">
                                        <FiArrowRight size={40} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="badge-wrap">
                        <div className="kaizen-badge">
                            <span>a 24 hour hackathon</span>
                        </div>
                    </div>
                </div>

                <div className="kaizen-visual-desktop">
                    <div className="marquee-layer dark-marquee">
                        <div className="marquee-inner-desktop-scroll" ref={marquee1Ref}>
                            {[...Array(12)].map((_, i) => (
                                <span key={i}>{marqueeText1}&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                            ))}
                        </div>
                    </div>

                    <div className="marquee-layer red-marquee">
                        <div className="marquee-inner-desktop-scroll reverse" ref={marquee2Ref}>
                            {[...Array(12)].map((_, i) => (
                                <span key={i}>{marqueeText2}&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                            ))}
                        </div>
                    </div>

                    <div className="asset-container-desktop">
                        <img src="/assets/kaizen-asset.png" alt="Kaizen Asset" className="character-img-desktop" />
                    </div>
                </div>

                <div className="kaizen-footer-desktop">
                    <div
                        ref={desktopSliderRef}
                        className="register-slider-new"
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleMouseDown}
                        onClick={handleSliderClick}
                        role="slider"
                        aria-valuenow={Math.round(dragProgress * 100)}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        <div className="slider-bg-fill" style={{ width: `${dragProgress * 100}%` }} />

                        {/* anchor left: 8px so thumb starts at left, then translateX moves it right */}
                        <div
                            ref={thumbRef}
                            className="slider-handle"
                            style={{
                                left: 8,
                                transform: `translateX(${computeTranslateFor(desktopSliderRef.current)}px)`
                            }}
                            onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e); }}
                            onTouchStart={(e) => { e.stopPropagation(); handleMouseDown(e); }}
                            aria-hidden={false}
                        >
                            <FiArrowRight />
                        </div>

                        <div className="slider-label">
                            <span className="red">R</span>EGISTER <span className="red">N</span>OW
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile layout */}
            <div className="kaizen-mobile-layout">
                <div className="kaizen-header-mobile">
                    <div className="mobile-title-row">
                        <span className="kai-text-mobile">KAI</span>
                        <div className="zen-wrapper-mobile">
                            <span className="zen-text-mobile">ZEN</span>
                            <div className="mobile-year-box-absolute">
                                <span className="mobile-quote">'</span>
                                <span className="mobile-year">26</span>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-badge-row">
                        <div className="kaizen-badge">
                            <p>a <span className="font-bold text-xl text-white">24 hour</span> hackathon</p>
                        </div>
                    </div>
                </div>

                <div className="kaizen-visual-mobile">
                    <div className="asset-container-mobile">
                        <img src="/assets/kaizen-asset.png" alt="Kaizen Asset" className="character-img-mobile" />
                    </div>

                    <div className="marquee-mobile dark-marquee-mobile">
                        <div className="marquee-inner-mobile-scroll">
                            {[...Array(12)].map((_, i) => (
                                <span key={i} className="text-black">{marqueeText1}&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                            ))}
                        </div>
                    </div>
                    <div className="marquee-mobile red-marquee-mobile">
                        <div className="marquee-inner-mobile-scroll reverse">
                            {[...Array(12)].map((_, i) => (
                                <span key={i}>{marqueeText2}&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="kaizen-see-more-mobile">
                    <button className="circled-arrow-btn mobile-arrow" onClick={() => router.push("/hackathon")}>
                        <div className="circle">
                            <FiArrowUpRight size={80} />
                        </div>
                    </button>
                    <span className="see-more-label">View More</span>
                </div>

                <div className="kaizen-footer-mobile">
                    <div
                        className="register-slider-new mobile p-2"
                        ref={mobileSliderRef}
                        onTouchStart={handleMouseDown}
                        role="slider"
                        aria-valuenow={Math.round(dragProgress * 100)}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        <div className="slider-bg-fill" style={{ width: `${dragProgress * 100}%` }} />

                        <div
                            className="slider-handle ml-2"
                            style={{
                                left: 8,
                                transform: `translateX(${computeTranslateFor(mobileSliderRef.current)}px)`,
                                width: 45,
                                height: 45
                            }}
                            onTouchStart={(e) => { e.stopPropagation(); handleMouseDown(e); }}
                        >
                            <FiArrowRight />
                        </div>

                        <div className="slider-label ml-12">
                            <span>REGISTER NOW</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KaizenSection;
