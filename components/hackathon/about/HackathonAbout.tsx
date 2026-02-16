"use client";

import React from "react";
import "./HackathonAbout.css";

const HackathonAbout = () => {
    return (
        <section className="hackathon-about">
            {/* Vertical Lines Background (Brighter than Expo) */}
            <div className="about-grid-bg">
                {[...Array(9)].map((_, i) => (
                    <div
                        key={i}
                        className="vertical-line"
                        style={{
                            background: `repeating-linear-gradient(
                                to bottom,
                                rgba(255, 255, 255, 0.6) 0,
                                rgba(255, 255, 255, 1) 15%,
                                rgba(255, 255, 255, 0.5) 30%,
                                rgba(255, 255, 255, 1) 45%,
                                rgba(31, 7, 7, 0.5) 60%,
                                rgba(255, 255, 255, 1) 75%,
                                rgba(255, 255, 255, 0.5) 100%
                            )`,
                            backgroundSize: '100% 300px'
                        }}
                    />
                ))}
            </div>

            <div className="about-container">
                {/* Mobile: Title first, then Card. Desktop: Title Left, Card Right */}

                <div className="about-content-wrapper">
                    {/* Left Side (Desktop) / Top (Mobile) */}
                    <div className="about-text-section">
                        <h2 className="about-title">
                            <span className="text-red">Agentic AI</span><br />
                            <span className="text-white">For the Win!</span>
                        </h2>
                        <div className="title-underline"></div>
                    </div>

                    {/* Right Side (Desktop) / Bottom (Mobile) */}
                    <div className="about-card-section">
                        <div className="red-info-card">
                            <div className="card-badge">Agentic AI</div>

                            <img
                                src="/assets/kaizen-asset.png"
                                alt="Samurai Robot"
                                className="card-asset-img"
                            />

                            <div className="card-text-content">
                                <p>
                                    We are looking for <span className="font-bold">Open Innovation</span>.
                                    Whether it’s transforming FinOps, automating complex workflows,
                                    or creating self-evolving AI agents, your mission is to build
                                    solutions that are innovative, creative, and ground-breaking.
                                    This isn’t just a competition; it’s a 24-hour sprint to define
                                    the future of autonomy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Marquee Footer */}
            <div className="about-marquee-footer mb-8">
                <div className="marquee-track">
                    {/* Duplicate for infinite scroll */}
                    {[...Array(6)].map((_, i) => (
                        <div className="marquee-item" key={i}>
                            <span>COLLEGE OF ENGINEERING MUTTATHARA</span>
                            <span className="star-icon">✦</span>
                            <span>FEBRUARY 21, 22</span>
                            <span className="star-icon">✦</span>
                            <span>AGENTIC AI HACKATHON</span>
                            <span className="star-icon">✦</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HackathonAbout;
