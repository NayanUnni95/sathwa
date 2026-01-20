import StaggeredMenu from "@/components/StaggeredMenu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#fdfaf1] overflow-hidden">
      {/* Marble Background Texture */}
      <div
        className="fixed inset-0 opacity-100 pointer-events-none z-0"
        style={{
          backgroundImage: 'url("/assets/marble.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
        }}
      />

      <StaggeredMenu
        items={[
          { label: "Home", ariaLabel: "Home", link: "/" },
          { label: "Tracks", ariaLabel: "Tracks", link: "/tracks" },
          { label: "Contact", ariaLabel: "Contact", link: "/contact" },
        ]}
        socialItems={[
          { label: "Instagram", link: "https://instagram.com" },
          { label: "Twitter", link: "https://twitter.com" },
        ]}
      />

      <main className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Mobile/Tablet View Layout */}
        <div className="lg:hidden flex flex-col">
          {/* Header already handled by Navbar component */}

          {/* Hero Section (Circle + Image) - Fixed Background */}
          <div className="fixed inset-0 h-screen flex flex-col items-center w-full px-1 z-0 animate-fade-up delay-1">
            <div className="relative w-full aspect-square bg-[#C40404] rounded-full z-10 overflow-visible mt-30 sm:mt36">
              <div className="absolute inset-0 -top-10 sm:-top-16 scale-125 z-20">
                <Image
                  src="/assets/hero-image.png"
                  alt="Sathwa Hero"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Spacer to push content below fixed hero */}
          {/* <div className="h-screen w-full pointer-events-none" /> */}

          {/* Info Card Section - Scrolls Over Hero */}
          <div className="relative z-10 bg-[#F5F5F5] rounded-t-[40px] px-7 pt-7 pb-3 flex flex-col shadow-[0_-10px_30px_rgba(0,0,0,0.1)] mt-[60vh] animate-fade-up">
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>College of Engineering, Muttathara</span>
              </div>
              {/* <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-[#C40404] mb-3" />
                <div className="w-2 h-2 rounded-full border border-black/30 mb-3" />
                <div className="w-2 h-2 rounded-full border border-black/30 mb-3" />
                <div className="w-2 h-2 rounded-full border border-black/30" />
              </div> */}
            </div>

            <div className="relative mb-6 animate-fade-up delay-2">
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

            <p className="text-[13px] text-black leading-relaxed font-sans mb-6 animate-fade-up delay-3">
              A three-day techno-cultural fest celebrating innovation,
              creativity, and engineering—where tradition meets modern
              technology through workshops, competitions, and cultural
              experiences.
            </p>

            <button className="w-[80%] bg-[#D90404] hover:bg-[#A00303] shadow-[0_0_12px_rgba(217,4,4,0.45)] text-white rounded-full py-3 px-4 flex items-center space-x-3 transition-colors mb-4 active:scale-95 duration-200">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="rotate-[230deg]"
                  color="black"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>
              <span className="text-xs font-bold font-sans tracking-wide flex items-center justify-center animate-fade-up delay-4">
                View Event Countdown
              </span>
            </button>

            <div
              className="mt-auto w-full rounded-2xl py-6 px-4 flex items-center justify-center 
                bg-[#F5F5F5] 
                border border-black/20 
                border-l-4 border-l-[#D90404]
                shadow-sm"
            >
              <span className="text-[14px] text-black/80 font-sans font-medium tracking-wide animate-fade-up delay-4">
                Event Dates: February{" "}
                <span className="font-bold text-black">26, 27, 28</span>
              </span>
            </div>
          </div>
        </div>

        {/* Desktop View Layout */}
        <div className="hidden lg:flex flex-col items-center px-12 h-screen relative">
          <div className="w-full flex justify-end pt-24 pr-12 z-20">
            <p className="max-w-[350px] text-right text-xs text-black/70 leading-relaxed font-sans uppercase tracking-wider">
              A three-day techno-cultural fest celebrating innovation,
              creativity, and engineering—where tradition meets modern
              technology through workshops, competitions, and cultural
              experiences.
            </p>
          </div>

          <div className="w-full flex-grow flex items-center justify-center">
            {/* Left Section: Hero Circle and Text */}
            <div className="relative w-1/2 flex items-center justify-center">
              <div className="absolute left-10 top-1/2 -translate-y-1/2 z-0">
                {/* <h2 className="text-[120px] lg:text-[150px] font-sans font-black text-black opacity-90 tracking-[-0.05em] leading-none select-none">
                  2026
                </h2> */}
              </div>

              <div className="relative w-[320px] h-[320px] lg:w-[450px] lg:h-[450px] bg-[#C40404] rounded-full z-10">
                <div className="absolute inset-0 -top-24 scale-125 z-20">
                  <Image
                    src="/assets/hero-image.png"
                    alt="Sathwa Hero"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Section: Title and Subtitle */}
            <div className="w-1/2 flex flex-col items-start space-y-4 lg:space-y-6 z-30 ml-[-50px]">
              <div className="relative">
                <div className="absolute -top-12 -right-4 flex flex-col items-center">
                  <span className="text-[#BC002D] font-['JapanRamen'] font-bold text-4xl lg:text-5xl tracking-[2px]">
                    ' 26
                  </span>
                </div>

                <h1 className="text-[90px] lg:text-[120px] font-['JapanRamen'] text-black tracking-[0.1em] leading-[0.8] mt-3">
                  SATHWA
                </h1>

                <p className="text-xl lg:text-2xl font-sans font-medium text-[#BC002D] tracking-[0.2em] mt-6 lg:mt-8 uppercase whitespace-nowrap">
                  where tradition meets technology
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Panel */}
          <div className="w-full flex items-center justify-between pb-12 z-50">
            <div className="flex-grow" /> {/* Spacer */}
            <div className="flex items-center space-x-12">
              <div className="flex items-center bg-[#512222] rounded-full p-2 pr-10 lg:pr-14 shadow-2xl transition-transform hover:scale-105 duration-300">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border border-white/30 flex items-center justify-center mr-6 lg:mr-8 hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/60 font-sans tracking-[0.3em] font-bold uppercase mb-1 font-japan-ramen">
                    February
                  </span>
                  <span className="text-3xl lg:text-4xl text-white font-['JapanRamen'] font-bold tracking-wider">
                    26, 27, 28
                  </span>
                </div>
              </div>

              <div className="flex flex-col space-y-4 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#C40404]" />
                <div className="w-2 h-2 rounded-full border border-black/30" />
                <div className="w-2 h-2 rounded-full border border-black/30" />
                <div className="w-2 h-2 rounded-full border border-black/30" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
