"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import CompetitionCard from "@/components/CompetitionCard";
import { competition } from "@/data/competitions";

export default function CompetitionsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Dynamically derive categories from data for scalability
  const categories = useMemo(() => {
    const types = competition.map((comp) => comp.type);
    return ["all", ...Array.from(new Set(types))];
  }, []);

  // Filter logic
  const filteredCompetitions = useMemo(() => {
    if (activeFilter === "all") return competition;
    return competition.filter((comp) => comp.type === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-black text-[#EAE0D5] font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/dummy4.png"
            alt="Competitions Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* Gradient Overlay for better text visibility and smooth transition to dark content */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 mt-42 md:mt-50">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-['KyivTypeTitling'] text-[#EAE0D5] tracking-widest uppercase drop-shadow-2xl ">
            COMPETITIONS
          </h1>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-['KyivTypeTitling'] text-[#EAE0D5] tracking-widest uppercase mt-2 drop-shadow-2xl">
            2026
          </h2>
        </div>
      </section>

      {/* Filter & Competitions Grid Section */}
      <section className="relative z-10 px-4 md:px-12 py-16 mt-6">
        <div className="max-w-7xl mx-auto">
          {/* Scalable Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`group relative px-6 py-2.5 md:px-10 md:py-3.5 text-[10px] md:text-xs tracking-[0.3em] uppercase font-['KyivTypeTitling'] transition-all duration-500 overflow-hidden border ${
                  activeFilter === category
                    ? "border-[#BC002D] text-white"
                    : "border-white/10 text-[#EAE0D5]/60 hover:text-[#EAE0D5] hover:border-white/30"
                }`}
              >
                {/* Background Fill Animation */}
                <span
                  className={`absolute inset-0 bg-[#BC002D] transition-transform duration-500 ease-out -z-10 ${
                    activeFilter === category
                      ? "translate-y-0"
                      : "translate-y-full group-hover:translate-y-[90%]"
                  }`}
                />
                <span className="relative z-10">
                  {category === "all" ? "All Events" : category}
                </span>

                {/* Corner Accents for active state */}
                {activeFilter === category && (
                  <>
                    <span className="absolute top-0 left-0 w-1 h-1 bg-white" />
                    <span className="absolute bottom-0 right-0 w-1 h-1 bg-white" />
                  </>
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-22 justify-items-center transition-all duration-500">
            {filteredCompetitions.map((comp) => (
              <div
                key={comp.searchKey}
                className="w-full transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
              >
                <CompetitionCard
                  id={comp.searchKey}
                  title={comp.name}
                  description={comp.about}
                  // Default date/day as not in data schema yet
                  date={comp.dateShort}
                  day=""
                  // day="Friday"
                  imageUrl={comp.url}
                  details={comp.details}
                />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCompetitions.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#EAE0D5]/40 tracking-widest uppercase font-['KyivTypeTitling']">
                No competitions found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-20 bg-black"></div>
    </main>
  );
}
