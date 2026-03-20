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
          background-color: #0D0203;
          background-image:
    linear-gradient(rgba(13, 2, 3, 0.84), rgba(13, 2, 3, 0.84)),
      url("/assets/marble-2.webp");
          background-size: cover;
          background-position: center;
          mix-blend-mode: multiply;
        }
      `}</style>
    </div>
  );
}
