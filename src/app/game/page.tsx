export default function Game() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-12">
      <div className="text-center max-w-lg">
        <p className="text-6xl mb-6">🎮</p>
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "'Sacramento', cursive", color: "#e75480" }}
        >
          ♡ The Game ♡
        </h1>
        <div
          className="rounded-2xl p-10"
          style={{ backgroundColor: "#fdf2f5", border: "2px solid #f0c4d4" }}
        >
          <p className="text-2xl font-bold mb-3" style={{ color: "#e75480" }}>
            ✨ Coming Soon ✨
          </p>
          <p className="text-base" style={{ color: "#9e6b8a" }}>
            Something magical is being built... 🌸
          </p>
          <p className="text-sm mt-4" style={{ color: "#c4899e" }}>
            A cozy world of farming, adventure & friendship awaits~
          </p>
        </div>
      </div>
    </div>
  );
}
