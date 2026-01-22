export default function DatePanel() {
  return (
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
  );
}
