"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import {
  FiArrowUpRight,
  FiShare2,
  FiUsers,
  FiClock,
  FiAward,
} from "react-icons/fi";
import { BiRupee } from "react-icons/bi";
import gsap from "gsap";
import type { IndividualCompProps } from "@/types/types";

export default function IndividualComp({ compData }: IndividualCompProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = (url: string) => window.open(url, "_blank");

  const shareItem = async () => {
    const shareData = {
      title: compData.name,
      text: `Check out ${compData.name} at Sathwa!`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error(err);
      }
    } else {
      await navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard!");
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(".reveal-item", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.to(".image-reveal", {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [compData]);

  if (!compData) return null;

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#BC002D] selection:text-white pb-20"
    >
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#BC002D]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#BC002D]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 pt-24 md:pt-32">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="reveal-item opacity-0 translate-y-8 text-[#BC002D] text-sm md:text-base tracking-[0.3em] uppercase font-medium mb-4">
            Sathva'26 Presents
          </span>
          <h1 className="reveal-item opacity-0 translate-y-8 font-[KyivTypeTitling] text-4xl md:text-6xl lg:text-7xl uppercase leading-none mb-6">
            {compData.name}
          </h1>
          <div className="reveal-item opacity-0 translate-y-8 w-24 h-1 bg-gradient-to-r from-transparent via-[#BC002D] to-transparent opacity-80" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image & Quick Stats */}
          <div className="xl:col-span-5 flex flex-col gap-8 relative xl:sticky xl:top-24">
            <div className="image-reveal opacity-0 scale-95 relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group">
              <Image
                src={compData.url}
                alt={compData.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Floating Status Badge */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${compData.isRegOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
                />
                <span className="text-xs font-medium tracking-wider uppercase">
                  {compData.isRegOpen ? "Open" : "Closed"}
                </span>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div
              className={`reveal-item opacity-0 translate-y-8 grid ${compData.pricePool ? "grid-cols-2" : "grid-cols-1"} gap-4`}
            >
              <div className="bg-[#0A0A0A] border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-center group hover:border-[#BC002D]/30 transition-colors">
                <BiRupee className="text-[#BC002D] text-xl" />
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Reg Fee
                </span>
                <span className="font-[KyivTypeTitling] text-xl">
                  Rs. {compData.price}
                </span>
              </div>
              {compData.pricePool && (
                <div className="bg-[#0A0A0A] border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-center group hover:border-[#BC002D]/30 transition-colors">
                  <FiAward className="text-[#BC002D] text-xl" />
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                    Prize Pool
                  </span>
                  <span className="font-[KyivTypeTitling] text-xl">
                    Rs. {compData.pricePool}
                  </span>
                </div>
              )}
              <div className="bg-[#0A0A0A] border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-center group hover:border-[#BC002D]/30 transition-colors col-span-2">
                <FiClock className="text-[#BC002D] text-xl" />
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Date
                </span>
                <span className="font-[KyivTypeTitling] text-xl">
                  {compData.date}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Content */}
          <div className="xl:col-span-7 flex flex-col gap-10">
            {/* About Section */}
            <div className="reveal-item opacity-0 translate-y-8 bg-[#0A0A0A] border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-[#BC002D]/20 transition-all duration-300">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <FiUsers size={120} />
              </div>
              <h2 className="font-[KyivTypeTitling] text-2xl mb-4 text-[#BC002D]">
                About The Event
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg font-light">
                {compData.about}
              </p>
            </div>

            {/* Guidelines */}
            {compData.guidelines && (
              <div className="reveal-item opacity-0 translate-y-8 bg-[#0A0A0A] border border-white/5 p-8 rounded-2xl group hover:border-[#BC002D]/20 transition-all duration-300">
                <h2 className="font-[KyivTypeTitling] text-2xl mb-6 text-[#BC002D]">
                  Guidelines
                </h2>
                <ul className="space-y-4">
                  {compData.guidelines
                    .split(".")
                    .filter((g) => g.trim())
                    .map((g, i) => (
                      <li
                        key={i}
                        className="flex gap-4 text-zinc-400 group/item"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-[#BC002D] mt-0.5 group-hover/item:bg-[#BC002D] group-hover/item:text-white transition-colors">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{g.trim()}.</span>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* Contact & Actions */}
            <div className="reveal-item opacity-0 translate-y-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contacts */}
              <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl flex flex-col justify-center">
                <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-4">
                  Contact Organizers
                </h3>
                <div className="flex flex-col gap-3">
                  {compData.contact.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <span className="font-medium text-zinc-300">
                        {c.name}
                      </span>
                      <a
                        href={`tel:${c.no}`}
                        className="text-[#868384] hover:text-white transition-colors font-mono text-sm"
                      >
                        {c.no}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <button
                  onClick={() =>
                    compData.isRegOpen && navigate(compData.regLink)
                  }
                  disabled={!compData.isRegOpen}
                  type="button"
                  className={`flex-1 h-full min-h-[60px] rounded-xl flex items-center justify-center gap-3 text-lg font-bold uppercase tracking-widest transition-all duration-300 ${
                    compData.isRegOpen
                      ? "bg-[#BC002D] hover:bg-[#a00026] text-white shadow-lg shadow-[#BC002D]/20 hover:shadow-[#BC002D]/40 translate-y-0 hover:-translate-y-1"
                      : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                  }`}
                >
                  {compData.isRegOpen ? "Register Now" : "Closed"}
                  {compData.isRegOpen && <FiArrowUpRight size={22} />}
                </button>

                <button
                  onClick={shareItem}
                  type="button"
                  className="h-[60px] rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/5 flex items-center justify-center gap-3 text-zinc-300 hover:text-white transition-all uppercase tracking-widest text-sm font-medium"
                >
                  <FiShare2 size={18} />
                  Share Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
