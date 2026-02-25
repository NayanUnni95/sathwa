"use client";

import React, { useRef, useState, useEffect } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import { gsap } from "gsap";
import "./HackathonHero.css";

const HackathonHero = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragProgress, setDragProgress] = useState(0);

    const HANDLE_WIDTH = 60;

    const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
    };

    useEffect(() => {
        const handleMouseUp = () => {
            if (!isDragging) return;

            if (dragProgress > 0.8) {
                setDragProgress(1);
                // Redirect to registration page
                window.location.href = "https://makemypass.com/event/kaizen26";
                setTimeout(() => setDragProgress(0), 1000);
            } else {
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
            if (!isDragging || !sliderRef.current) return;

            const slider = sliderRef.current;
            const rect = slider.getBoundingClientRect();
            const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;

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
            window.addEventListener("touchmove", handleMouseMove, { passive: false });
            window.addEventListener("touchend", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchmove", handleMouseMove);
            window.removeEventListener("touchend", handleMouseUp);
        };
    }, [isDragging, dragProgress]);

    const computeTranslate = () => {
        if (!sliderRef.current) return 0;
        const width = sliderRef.current.getBoundingClientRect().width;
        const max = Math.max(0, width - HANDLE_WIDTH);
        return dragProgress * max;
    };

    const handleSliderClick = () => {
        if (isDragging) return;
        gsap.to({ val: dragProgress }, {
            val: 1,
            duration: 0.3,
            ease: "power2.out",
            onUpdate: function () {
                setDragProgress(this.targets()[0].val);
            },
            onComplete: () => {
                // Redirect to registration page
                window.location.href = "https://makemypass.com/event/kaizen26";
                setTimeout(() => setDragProgress(0), 10);
            }
        });
    };

    return (
        <section className="hackathon-hero">
            <div className="hackathon-grid-bg"></div>

            <div className="hackathon-top-logos">
                <img src="/assets/hackathon/mulearn.png" alt="Mulearn" className="hero-logo-mulearn" />
                <img src="/assets/hackathon/iedc-new.png" alt="IEDC" className="hero-logo-iedc" />
            </div>

            <div className="hackathon-content">
                <div className="hackathon-date-pill">
                    February 21 – February 22
                </div>

                <div className="hackathon-title">
                    <span className="text-white">KAiZEN</span>
                    <span className="text-red">'26</span>
                </div>

                <p className="hackathon-subtitle">
                    In an era where AI is moving from passive tools to active agents,
                    <span className="font-bold"> KAIZEN’26</span> challenges the brightest student minds to build the next generation of autonomous systems.
                </p>

                <div
                    ref={sliderRef}
                    className="hackathon-register-slider registration-closed"
                >
                    <div className="slider-fill" style={{ width: `0%` }}></div>
                    <div
                        ref={thumbRef}
                        className="slider-thumb"
                        style={{
                            left: 8,
                            transform: `translateX(0px)`
                        }}
                    >
                        <FiArrowRight />
                    </div>
                    <div className="slider-text">
                        REGISTRATION CLOSED
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <p>scroll down to view more</p>
                <FiChevronDown className="animate-bounce" />
            </div>
        </section>
    );
};

export default HackathonHero;
