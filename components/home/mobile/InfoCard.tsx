export default function MobileInfoCard() {
  return (
    <div className="relative z-10 bg-[#F5F5F5] rounded-t-[40px] px-7 pt-7 pb-3 flex flex-col shadow-[0_-10px_30px_rgba(0,0,0,0.1)] mt-[60vh] reveal reveal-2">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center space-x-2 text-[10px] font-sans font-bold text-black uppercase tracking-wider">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
          >
            <title>Location</title>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>College of Engineering, Muttathara</span>
        </div>
      </div>

      <div className="relative mb-6 reveal reveal-3">
        <div className="absolute -top-6 right-4 sm:right-3 scale-75 origin-right">
          <span className="text-[#BC002D] font-['JapanRamen'] font-bold text-4xl tracking-[1px]">
            26
          </span>
        </div>
        <h1 className="text-5xl font-['JapanRamen'] text-black tracking-[0.1em] leading-none mb-2 mt-1">
          SATHWA
        </h1>
        <p className="text-[10px] font-sans font-medium text-[#BC002D] tracking-[0.2em] uppercase">
          where tradition meets technology
        </p>
      </div>

      <p className="text-[13px] text-black leading-relaxed font-sans mb-4 reveal reveal-4">
        A three-day techno-cultural fest celebrating innovation, creativity, and
        engineering—where tradition meets modern technology through workshops,
        competitions, and cultural experiences.
      </p>

      <div
        className="mt-auto w-full rounded-2xl px-6 py-3
             relative overflow-hidden
             bg-[#F6F6F6]
             border border-black/15
             border-l-[5px] border-l-[#D90404]
             shadow-[0_8px_26px_rgba(0,0,0,0.10)]
             reveal reveal-5"
      >
        {/* Background year mark */}
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2
               text-[75px] font-serif font-black
               text-black/5 tracking-wider select-none"
        >
          2026
        </div>

        {/* Content */}
        <div className="relative flex flex-col">
          <span
            className="text-[11px] uppercase tracking-[0.3em]
                  text-black/50 font-sans"
          >
            Event Dates
          </span>

          <div className="flex items-baseline">
            <span
              className="text-[26px] font-serif font-bold
                    text-black tracking-[1px]"
            >
              February
            </span>

            <span
              className="pl-3 text-[32px] font-serif font-black
                    text-[#D90404] tracking-[0.1em]"
            >
              26–28
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
