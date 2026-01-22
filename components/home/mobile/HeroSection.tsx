import Image from "next/image";

export default function MobileHeroSection() {
  return (
    <div className="fixed inset-0 h-screen flex flex-col items-center w-full px-1 z-0 animate-fade-up delay-1">
      <div className="relative w-full aspect-square bg-[#C40404] rounded-full z-10 overflow-visible mt-24 sm:mt36">
        <div className="absolute inset-0 -top-10 sm:-top-16 scale-125 z-20 reveal reveal-1">
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
  );
}
