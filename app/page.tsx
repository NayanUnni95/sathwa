import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#fdfaf1] overflow-hidden">
      {/* Marble Background Texture */}
      {/* <div
        className="absolute inset-0 opacity-100 pointer-events-none z-0"
        style={{
          backgroundImage: 'url("/assets/marble.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
        }}
      /> */}

      <Navbar />

      <main className="relative z-10 w-full min-h-screen flex flex-col items-center px-6 md:px-12 py-12 md:py-0">
        <div className="w-full flex-shrink-0 flex flex-col items-center md:items-end mb-10 md:mb-0 md:absolute md:top-24 md:right-12 z-20">
          <p className="max-w-[280px] sm:max-w-[320px] md:max-w-[350px] text-center md:text-right text-[10px] md:text-xs text-black/70 leading-relaxed font-sans uppercase tracking-[0.15em] md:tracking-wider">
            Lorem ipsum loresm ipsum as if I wanted to do this. But hey! Put a
            description here. It'll really smoothen things out.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center flex-grow space-y-16 md:space-y-0 md:space-x-4 lg:space-x-12">
          <div className="relative w-full md:w-1/2 flex items-center justify-center min-h-[250px] sm:min-h-[300px] md:min-h-0">
            <div className="absolute left-1/2 md:left-0 lg:left-10 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 md:translate-x-0 z-0">
              <h2 className="text-6xl sm:text-8xl md:text-[90px] lg:text-[120px] font-sans font-black text-black opacity-90 tracking-[-0.05em] leading-none select-none">
                2026
              </h2>
            </div>

            <div className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] bg-[#C40404] rounded-full z-10" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 z-30">
            <div className="relative">
              <div className="absolute -top-3 -right-6 sm:-top-4 sm:-right-8 md:-top-10 md:-right-12 lg:-top-12 lg:-right-16 flex flex-col items-center">
                <span className="text-[#BC002D] font-['JapanRamen'] font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tighter">
                  &lsquo; 26
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-[70px] lg:text-[90px] font-['JapanRamen'] text-black tracking-[0.1em] leading-[0.8]">
                SATHWA
              </h1>

              <p className="text-[10px] sm:text-xs md:text-2xl lg:text-3xl font-sans font-medium text-[#BC002D] tracking-[0.2em] mt-3 md:mt-4 uppercase">
                where tradition meets technology
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center md:justify-end space-y-10 md:space-y-0 md:space-x-8 mt-16 mb-12 md:mt-0 md:mb-12 md:absolute md:bottom-12 md:right-12 z-50">
          <div className="flex items-center bg-[#512222] rounded-full p-2 pr-6 md:p-1 md:pr-10 lg:pr-12 shadow-2xl scale-100 transition-transform hover:scale-105 duration-300">
            <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border border-white/30 flex items-center justify-center mr-4 md:mr-6 lg:mr-8 hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="w-0 h-0 border-t-[5px] md:border-t-[6px] border-t-transparent border-l-[9px] md:border-l-[10px] border-l-white border-b-[5px] md:border-b-[6px] border-b-transparent ml-1 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] text-white/60 font-sans tracking-[0.3em] font-bold uppercase mb-1 text-center font-japan-ramen">
                February
              </span>
              <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-white font-['JapanRamen'] font-bold tracking-wider">
                26, 27, 28
              </span>
            </div>
          </div>

          <div className="flex flex-row md:flex-col space-x-5 md:space-x-0 md:space-y-4 items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#C40404]" />
            <div className="w-2 h-2 rounded-full border border-black/30" />
            <div className="w-2 h-2 rounded-full border border-black/30" />
            <div className="w-2 h-2 rounded-full border border-black/30" />
          </div>
        </div>
      </main>
    </div>
  );
}
