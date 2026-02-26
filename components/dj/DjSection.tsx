"use client";

import React from "react";
import Image from "next/image";
import "./DjSection.css";

const DjSection = () => {
    return (
        <section className="dj-section">
            <div className="dj-bg-layer" />

            <div className="dj-content-container">
                {/* Laptop Only Header */}
                <div className="dj-laptop-header">
                    <div className="dj-laptop-info-row">
                        <div className="dj-text-columns-wrapper">
                            <div className="dj-text-column">
                                <p>An electrifying night of bass, rhythm, and immersive soundscapes curated by top-tier artists.</p>
                            </div>
                            <div className="dj-text-column">
                                <p>Experience high-voltage performances, live mixes, and a crowd that moves as one.</p>
                            </div>
                        </div>

                        <a
                            href="https://www.instagram.com/_djsha_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dj-register-stamp"
                        >
                            <div className="dj-stamp-outer">
                                <svg viewBox="0 0 100 100" className="dj-stamp-svg">
                                    <path id="stampPath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="transparent" />
                                    <text className="dj-stamp-text">
                                        <textPath href="#stampPath">View Artists • View Artists•</textPath>
                                    </text>
                                </svg>
                            </div>
                            <div className="dj-stamp-inner-circle"></div>
                            <div className="dj-stamp-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Main Title - DJ Night (Laptop) */}
                <div className="dj-main-title">
                    <span className="pro-part">DJ</span>
                    <span className="dj-divider-new pr-5">-</span>
                    <span className="show-part">NIGHT</span>
                </div>

                {/* Background Text (Tablet/Mobile Only) */}
                <div className="dj-bg-text-layer">
                    <span className="dj-text">DJ</span>
                    <span className="dj-divider pl-5 pr-8">-</span>
                    <span className="night-text">NIGHT</span>
                </div>

                <div className="dj-visual-grid">
                    {/* Circle 1 */}
                    <div className="dj-shape dj-circle dj-shape-1">
                        <Image
                            src="/assets/dj/circle_1.png"
                            alt="Artist 1"
                            fill
                            className="dj-image"
                        />
                    </div>

                    {/* Square 1 */}
                    <div className="dj-shape dj-square dj-shape-2">
                        <Image
                            src="/assets/dj/square_1.png"
                            alt="Artist 2"
                            fill
                            className="dj-image"
                        />
                    </div>

                    {/* Center Vinyl Disk */}
                    <div className="dj-vinyl-disk-container">
                        <div className="dj-vinyl-disk">
                            <Image
                                src="/assets/dj/disk.jpg"
                                alt="Vinyl Disk"
                                fill
                                className="dj-vinyl-image"
                            />
                            {/* Curved Text on Disk: Artist Names + Date */}
                            <svg className="dj-disk-svg-text" viewBox="0 0 100 100">
                                <path id="diskCirclePath" d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                                <text>
                                    <textPath href="#diskCirclePath" startOffset="10%" className="dj-disk-text-path">
                                        DJ OZWEE x DJ SHA •FEB 27
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>

                    {/* Square 2 */}
                    <div className="dj-shape dj-square dj-shape-3">
                        <Image
                            src="/assets/dj/square_1new1.jpeg"
                            alt="Artist 3"
                            fill
                            className="dj-image"
                        />
                    </div>

                    {/* Circle 2 */}
                    <div className="dj-shape dj-circle dj-shape-4">
                        <Image
                            src="/assets/dj/circle_2.png"
                            alt="Artist 4"
                            fill
                            className="dj-image"
                        />
                    </div>
                </div>

                {/* Artist Names (Hidden on Laptop) */}
                <div className="dj-artist-names-container">
                    <h3 className="dj-artist-names">DJ OZWEE <span className="dj-x">x</span> DJ SHA</h3>
                </div>
            </div>
        </section>
    );
};

export default DjSection;
