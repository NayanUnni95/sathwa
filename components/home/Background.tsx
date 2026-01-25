export default function Background() {
  return (
    <div className="bg-scope z-0">
      <style>{`
        .bg-scope {
          position: fixed;
          inset: 0;
          opacity: 1;
          pointer-events: none;
          z-index: 0;
          background-image: url("/assets/marble.png");
          background-size: cover;
          background-position: center;
          mix-blend-mode: multiply;
        }
      `}</style>
    </div>
  );
}
