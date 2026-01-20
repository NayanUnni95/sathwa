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
          <div className="fixed inset-0 h-screen flex flex-col items-center justify-center w-full px-0 z-0">
            <div className="relative w-full aspect-square bg-[#C40404] rounded-full z-10 overflow-visible mt-20 sm:mt-24">
              <div className="absolute inset-0 -top-12 sm:-top-16 scale-125 z-20">
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
          <div className="h-screen w-full pointer-events-none" />

          {/* Info Card Section - Scrolls Over Hero */}
          <div className="relative z-10 bg-[#D9D9D9] rounded-t-[40px] px-8 py-10 flex flex-col shadow-[0_-10px_30px_rgba(0,0,0,0.1)] min-h-screen">
            <div className="flex justify-between items-start mb-4">
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
                <span>CEM</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-[#C40404] mb-3" />
                <div className="w-2 h-2 rounded-full border border-black/30 mb-3" />
                <div className="w-2 h-2 rounded-full border border-black/30 mb-3" />
                <div className="w-2 h-2 rounded-full border border-black/30" />
              </div>
            </div>

            <div className="relative mb-6">
              <div className="absolute -top-4 right-0 scale-75 origin-right">
                <span className="text-[#BC002D] font-['JapanRamen'] font-bold text-4xl tracking-tighter">
                  &lsquo; 26
                </span>
              </div>
              <h1 className="text-5xl font-['JapanRamen'] text-black tracking-[0.1em] leading-none mb-2">
                SATHWA
              </h1>
              <p className="text-[10px] font-sans font-medium text-[#BC002D] tracking-[0.2em] uppercase">
                where tradition meets technology
              </p>
            </div>

            <p className="text-[11px] text-black leading-relaxed font-sans mb-10 max-w-[90%]">
              Lorem ipsum loresm ipsum as if I wanted to do this. But hey! Put a
              description here. It'll really smoothen things out.
            </p>

            <button className="w-full bg-[#C40404] hover:bg-[#A00303] text-white rounded-full py-4 px-6 flex items-center justify-center space-x-3 transition-colors mb-6 shadow-lg active:scale-95 duration-200">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="rotate-[-45deg]"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>
              <span className="text-xs font-bold font-sans tracking-wide">
                View Event Countdown
              </span>
            </button>

            <div className="mt-auto w-full bg-black/5 rounded-2xl py-6 flex items-center justify-center border border-black/10">
              <span className="text-[11px] text-black/70 font-sans font-medium">
                Event Dates: February{" "}
                <span className="font-bold text-black">27, 28, 29</span>
              </span>
            </div>
          </div>
        </div>

        {/* Desktop View Layout */}
        <div className="hidden lg:flex flex-col items-center px-12 h-screen relative">
          <div className="w-full flex justify-end pt-24 pr-12 z-20">
            <p className="max-w-[350px] text-right text-xs text-black/70 leading-relaxed font-sans uppercase tracking-wider">
              Lorem ipsum loresm ipsum as if I wanted to do this. But hey! Put a
              description here. It'll really smoothen things out.
            </p>
          </div>

          <div className="w-full flex-grow flex items-center justify-center">
            {/* Left Section: Hero Circle and Text */}
            <div className="relative w-1/2 flex items-center justify-center">
              <div className="absolute left-10 top-1/2 -translate-y-1/2 z-0">
                <h2 className="text-[120px] lg:text-[150px] font-sans font-black text-black opacity-90 tracking-[-0.05em] leading-none select-none">
                  2026
                </h2>
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
                <div className="absolute -top-12 -right-16 flex flex-col items-center">
                  <span className="text-[#BC002D] font-['JapanRamen'] font-bold text-4xl lg:text-5xl tracking-tighter">
                    &lsquo; 26
                  </span>
                </div>

                <h1 className="text-[90px] lg:text-[120px] font-['JapanRamen'] text-black tracking-[0.1em] leading-[0.8]">
                  SATHWA
                </h1>

                <p className="text-2xl lg:text-3xl font-sans font-medium text-[#BC002D] tracking-[0.2em] mt-6 lg:mt-8 uppercase whitespace-nowrap">
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
