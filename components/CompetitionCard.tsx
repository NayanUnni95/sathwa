import Image from "next/image";
import Link from "next/link";
import type { CompetitionCardProps } from "@/types/types"; 


export default function CompetitionCard({
  id,
  title,
  description,
  date,
//   day,
  imageUrl = "/assets/dummy2.jpg",
  details = false,
}: CompetitionCardProps) {
  const [dayNum, month, year] = date.split("/");

  // Safely parse month for display
  const monthIndex = parseInt(month) - 1;
  const dateObj = new Date(parseInt(year), monthIndex);
  const monthName = dateObj
    .toLocaleString("en-us", { month: "short" })
    .toUpperCase();

  return (
    <div className="group relative w-full h-auto min-h-[450px] max-w-sm mx-auto bg-[#050505] flex flex-col border border-white/10 hover:border-[#BC002D] transition-colors duration-500">
      {/* 1. IMAGE SECTION (Standard, No Overlay) */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#111] border-b border-white/5">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out"
        />
      </div>

      {/* 2. BODY SECTION */}
      <div className="flex flex-col flex-grow relative bg-[#050505]">
        {/* DATE & TITLE ROW */}
        <div className="flex w-full border-b border-white/10">
          {/* Date Box - High Visual Weight */}
          <div className="w-20 md:w-24 flex-shrink-0 flex flex-col items-center justify-center border-r border-white/10 bg-[#0a0a0a] py-4 group-hover:bg-[#BC002D] group-hover:text-white transition-colors duration-300">
            <span className="text-2xl md:text-3xl font-['KyivTypeTitling'] font-bold leading-none">
              {dayNum}
            </span>
            <span className="text-[9px] md:text-[10px] tracking-widest uppercase mt-1 opacity-80">
              {monthName}
            </span>
          </div>

          {/* Title Area */}
          <div className="flex-grow p-4 md:p-5 flex flex-col justify-center">
            <span className="text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-[#BC002D] mb-1 group-hover:text-[#BC002D] transition-colors">
              Competition
            </span>
            <h3 className="text-xl md:text-2xl font-['KyivTypeTitling'] text-white uppercase leading-none tracking-wide group-hover:translate-x-1 transition-transform duration-300">
              {title}
            </h3>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="p-6">
          <p className="text-xs text-zinc-500 font-sans leading-relaxed line-clamp-3 group-hover:text-zinc-400 transition-colors">
            {description}
          </p>
        </div>

        {/* 3. DATA GRID (Tech Specs Style) */}
        <div className="mt-auto">
          {details && (
            <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10">
              <div className="p-3 flex flex-col items-center">
                <span className="text-[8px] uppercase tracking-widest text-zinc-600 mb-1">
                  Time
                </span>
                <span className="text-xs font-mono text-zinc-300 uppercase">
                  10:30 AM
                </span>
              </div>

              <div className="p-3 flex flex-col items-center">
                <span className="text-[8px] uppercase tracking-widest text-zinc-600 mb-1">
                  Venue
                </span>
                <span className="text-xs font-mono text-zinc-300 uppercase">
                  Seminar Hall
                </span>
              </div>
            </div>
          )}

          <Link
            href={`/competitions/${id}`}
            className="flex items-center justify-between border-t border-white/10 bg-[#080808] px-4 py-5 group-hover:bg-[#BC002D]/10 transition-colors duration-300"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400">
                Registrations Open
              </span>
            </div>

            <div className="flex items-center gap-1 group/btn cursor-pointer">
              <span className="text-[10px] uppercase tracking-widest text-zinc-300 group-hover:text-[#BC002D] transition-colors">
                Details
              </span>
              <svg
                className="w-3 h-3 text-zinc-300 group-hover:text-[#BC002D] transform group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Redirect</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
