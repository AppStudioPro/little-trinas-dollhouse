export default function Music() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-12">
      <div className="text-center max-w-lg">
        <p className="text-6xl mb-4">🎵</p>
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "'Sacramento', cursive", color: "#e75480" }}
        >
          ♡ Trina&apos;s Music ♡
        </h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: "#6b3a5a" }}>
          Songs from the heart, made with love and a little bit of magic. ✨
        </p>
        <div
          className="rounded-2xl p-8"
          style={{ backgroundColor: "#fdf2f5", border: "2px solid #f0c4d4" }}
        >
          <p className="text-lg" style={{ color: "#9e6b8a" }}>
            🎀 Music player & catalog coming soon 🎀
          </p>
          <p className="text-sm mt-2" style={{ color: "#c4899e" }}>
            Stay tuned, little one~
          </p>
        </div>
      </div>
    </div>
  );
}
