import Image from "next/image";
import CompetitionCard from "@/components/CompetitionCard";
import { competition } from "@/data/competitions";

export default function CompetitionsPage() {
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

      {/* Competitions Grid Section */}
      <section className="relative z-10 px-4 md:px-12 py-16 mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-22 justify-items-center">
            {competition.map((comp) => (
              <CompetitionCard
                key={comp.searchKey}
                id={comp.searchKey}
                title={comp.name}
                description={comp.about}
                // Default date/day as not in data schema yet
                date="8-10/02/2026"
                day="Friday"
                imageUrl={comp.url}
                details={comp.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-20 bg-black"></div>
    </main>
  );
}
