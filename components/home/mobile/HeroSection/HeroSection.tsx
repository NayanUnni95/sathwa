import Image from "next/image";
import "./HeroSection.css";

export default function MobileHeroSection() {
  return (
    <div className="mhs-scope animate-fade-up delay-1">
      <div className="mhs-circle-wrapper">
        <div className="mhs-image-wrapper reveal reveal-1">
          <Image
            src="/assets/hero-image.png"
            alt="Sathwa Hero"
            fill
            className="mhs-image"
            priority
          />
        </div>
      </div>
    </div>
  );
}
