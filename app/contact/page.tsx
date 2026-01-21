export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#fdfaf1] overflow-hidden flex flex-col">
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

      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 pt-20">
        <div className="relative w-full max-w-4xl flex flex-col items-center">
          {/* Large Header */}
          <div className="text-center mb-12">
            <h1 className="text-6xl sm:text-8xl lg:text-[120px] font-['JapanRamen'] text-black tracking-[0.1em] leading-none mb-6">
              CONTACT
            </h1>
            <p className="text-sm sm:text-base font-sans font-medium text-[#C40404] tracking-[0.2em] uppercase max-w-xl mx-auto">
              (coming soon) stay tuned for more updates
            </p>
          </div>

          <div className="w-full max-w-2xl bg-white/40 backdrop-blur-md rounded-[40px] p-10 sm:p-16 border border-black/5 shadow-2xl relative overflow-hidden group">
            {/* Aesthetic circle in background */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#C40404]/5 rounded-full blur-3xl transition-transform group-hover:scale-110 duration-700" />

            <div className="relative z-100 space-y-12">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xs font-bold font-sans text-black/40 uppercase tracking-[0.4em] mb-4">
                  Follow Our Journey
                </h3>
                <a
                  href="https://instagram.com/sathwa_cem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center space-x-4"
                >
                  <span className="text-xl sm:text-2xl font-sans font-medium text-black group-hover/link:text-[#C40404] transition-colors">
                    @sathwa_cem
                  </span>
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover/link:bg-[#C40404] group-hover/link:border-[#C40404] transition-all">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black group-hover/link:text-white transition-colors"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center max-w-md">
            <p className="text-[11px] font-sans text-black/50 leading-relaxed uppercase tracking-widest">
              College of Engineering Muttathara, Trivandrum, Kerala
            </p>
          </div>
        </div>
      </main>

      {/* Decorative vertical lines */}
      <div className="fixed top-0 left-12 h-screen w-px bg-black/5 hidden lg:block" />
      <div className="fixed top-0 right-12 h-screen w-px bg-black/5 hidden lg:block" />
    </div>
  );
}
