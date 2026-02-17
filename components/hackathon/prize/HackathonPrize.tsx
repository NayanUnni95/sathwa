"use client";

import React from "react";
import Image from "next/image";
import "./HackathonPrize.css";

const HackathonPrize = () => {
    return (
        <section className="hackathon-prize-section">
            <div className="prize-container">
                {/* Title for Mobile (Hidden on Desktop, shown via CSS) */}
                <h2 className="prize-title-mobile">
                    Meet Our<br />
                    <span className="text-white">Prize Pool</span>
                </h2>

                <div className="prize-grid">
                    {/* Left Column: Red Card */}
                    <div className="prize-card red-card">
                        <div className="red-card-grid-bg"></div>
                        <div className="red-card-content">
                            <span className="red-card-label">Total Prize Pool</span>
                            <div className="red-card-amount-container">
                                <h3 className="red-card-amount">₹30K</h3>
                                <span className="red-card-sub">prizes in total</span>
                            </div>

                            <div className="red-card-footer-logo">
                                KAIZEN<span className="text-black ml-[-1px]"> '26</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contains Title+White Card (Row 1) and Blue Card (Row 2) */}
                    <div className="prize-right-column">

                        {/* Row 1: Title and White Card */}
                        <div className="prize-right-top-row">
                            <div className="prize-title-desktop">
                                <h2>
                                    Meet Our<br />
                                    <span className="text-white">Prize Pool</span>
                                </h2>
                            </div>

                            {/* White Prize Breakdown Card */}
                            <div className="prize-card white-card">
                                <div className="white-card-bg" style={{ backgroundImage: "url('/assets/hackathon/white-layer.png')" }}></div>
                                <div className="white-card-content">
                                    <div className="prize-tier first-prize">
                                        <h4 className="tier-amount text-red">₹15k</h4>
                                        <span className="tier-label">first prize</span>
                                    </div>

                                    <div className="lower-tiers">
                                        <div className="prize-tier second-prize">
                                            <h4 className="tier-amount">₹10k</h4>
                                            <span className="tier-label">second prize</span>
                                        </div>
                                        <div className="prize-tier third-prize">
                                            <h4 className="tier-amount">₹5k</h4>
                                            <span className="tier-label">third prize</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Blue Sponsor Card */}
                        <div className="prize-card blue-card">
                            <div className="blue-card-content">
                                <span className="sponsor-label">Our Sponsor</span>
                                <div className="sponsor-logo-container">
                                    <Image
                                        src="/assets/hackathon/logo-origial.png"
                                        alt="Leventate Labs"
                                        width={850}
                                        height={120}
                                        className="sponsor-logo"
                                    />
                                    {/* <span className="sponsor-name">Leventae Labs</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HackathonPrize;
