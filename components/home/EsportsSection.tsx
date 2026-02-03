'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMinimize2 } from 'react-icons/fi'; // Using a tech-y icon

export default function EsportsSection() {
    return (
        <section className="relative w-full pt-12 pb-16 bg-[#080808] overflow-hidden border-y border-white/5">

            {/* Tech Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:26px_26px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* Left: Text Content - Cyber Aesthetic */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    <div className="flex items-center gap-3">
                        <div className="px-3 py-1 bg-[#BC002D]/10 border border-[#BC002D] text-[#BC002D] font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#BC002D] rounded-full animate-pulse" />
                            Live Ops
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-6xl md:text-7xl lg:text-8xl font-['var(--font-orbitron)'] font-black text-white leading-none tracking-tighter uppercase glitch-text" data-text="ESPORTS">
                            ESPORTS
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-['var(--font-orbitron)'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600 uppercase tracking-widest">
                            ARENA
                        </h3>
                    </div>

                    <p className="text-zinc-400 text-lg font-mono leading-relaxed border-l-2 border-white/20 pl-6">
                        Precision. Strategy. Glory. <br />
                        The servers are running. The brackets are set. <br />
                        <span className="text-white">Are you ready to engage?</span>
                    </p>

                    <Link href="/competitions" className="group w-fit relative px-8 py-4 bg-white text-black font-['var(--font-orbitron)'] font-bold uppercase tracking-wider hover:bg-[#BC002D] hover:text-white transition-colors duration-300 clip-path-slant">
                        <span className="relative z-10 flex items-center gap-2">
                            Register Now <FiMinimize2 />
                        </span>
                        <div className="absolute inset-0 bg-zinc-200 translate-x-1 translate-y-1 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
                    </Link>
                </div>

                {/* Right: Asymmetrical Image Container */}
                <div className="lg:col-span-7 relative h-[400px] md:h-[500px] w-full group">

                    {/* Main Image with Clip Path */}
                    <div className="absolute inset-0 z-10 clip-path-polygon filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                        <Image
                            src="/assets/esports/esports_1080p.png"
                            alt="Esports"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[#BC002D]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Decorative 'Ghost' Image for Glitch Effect */}
                    <div className="absolute inset-0 z-0 translate-x-4 translate-y-4 border border-white/10 clip-path-polygon bg-zinc-900/50" />

                    {/* Tech HUD Elements
                    <div className="absolute -top-4 -right-4 text-[#BC002D] font-mono text-xs hidden md:block">
                // SYSTEM_READY
                    </div>
                    <div className="absolute -bottom-6 left-10 text-zinc-600 font-mono text-xs hidden md:block">
                        COORDS: 8.49, 76.95
                    </div> */}

                </div>

            </div>

            <style jsx global>{`
        .clip-path-slant {
            clip-path: polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%);
        }
        .clip-path-polygon {
            clip-path: polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 15%);
        }
      `}</style>
        </section>
    );
}
