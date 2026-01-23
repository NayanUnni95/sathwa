import Image from "next/image";

export default function HeroFeatures() {
  return (
    <>
      <div className="w-full flex justify-end pt-24 pr-12 z-20">
        <p className="max-w-[350px] text-right text-xs text-black/70 leading-relaxed font-sans uppercase tracking-wider">
          A three-day techno-cultural fest celebrating innovation, creativity,
          and engineering—where tradition meets modern technology through
          workshops, competitions, and cultural experiences.
        </p>
      </div>

      <div className="w-full flex-grow flex items-center justify-center">
        {/* Left Section: Hero Circle and Text */}
        <div className="relative w-1/2 flex items-center justify-start reveal reveal-1">
          <div className="relative w-[320px] h-[320px] lg:w-[480px] lg:h-[450px] bg-[#C40404] rounded-full z-10">
            <div className="absolute inset-0 -top-23  scale-125 z-20">
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
    </>
  );
}
