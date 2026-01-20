import Link from "next/link";
import StaggeredMenu from "@/components/StaggeredMenu";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full bg-[#fdfaf1] overflow-hidden flex flex-col items-center justify-center">
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
          { label: "Events", ariaLabel: "Events", link: "/events" },
          { label: "Contact", ariaLabel: "Contact", link: "/contact" },
        ]}
        socialItems={[
          { label: "Instagram", link: "https://instagram.com/sathwa_cem" },
        ]}
      />

      <main className="relative z-50 flex flex-col items-center text-center px-6">
        <div className="relative mb-8">
          <h1 className="text-[120px] sm:text-[180px] font-['JapanRamen'] text-[#C40404] leading-none opacity-20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl sm:text-6xl font-['JapanRamen'] text-black tracking-widest">
              NOT FOUND
            </h2>
          </div>
        </div>

        <Link
          href="/"
          className="group flex items-center bg-[#C40404] hover:bg-[#A00303] text-white rounded-full p-2 pr-12 transition-all duration-300 shadow-xl active:scale-95 hover:shadow-[#C40404]/40"
        >
          <div className="w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center mr-6 transition-transform group-hover:scale-105">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
          <span className="text-sm font-bold font-sans tracking-[0.2em] uppercase">
            Return Home
          </span>
        </Link>
      </main>
    </div>
  );
}
