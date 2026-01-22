export default function Background() {
  return (
    <div
      className="fixed inset-0 opacity-100 pointer-events-none z-0"
      style={{
        backgroundImage: 'url("/assets/marble.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        mixBlendMode: "multiply",
      }}
    />
  );
}
