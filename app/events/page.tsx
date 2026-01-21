export default function EventsPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#fdfaf1] overflow-hidden flex flex-col">
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
          <div className="text-center mb-12">
            <h1 className="text-6xl sm:text-8xl lg:text-[120px] font-['JapanRamen'] text-black tracking-[0.1em] leading-none mb-6">
              EVENTS
            </h1>
            <p className="text-sm sm:text-base font-sans font-medium text-[#C40404] tracking-[0.2em] uppercase max-w-xl mx-auto">
              weaving the threads of tradition and technology into a grand
              spectacle
            </p>
          </div>
          <div className="mt-16 text-center max-w-md">
            <p className="text-[11px] font-sans text-black/50 leading-relaxed uppercase tracking-widest">
              Please check back soon. We are preparing something extraordinary
              for you.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
