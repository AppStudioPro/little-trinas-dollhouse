export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-12">
      {/* Hero section - image placeholder */}
      <div
        className="w-full max-w-2xl rounded-3xl overflow-hidden mb-8 flex items-center justify-center"
        style={{
          backgroundColor: "#f8e0e6",
          border: "3px solid #f0c4d4",
          minHeight: "350px",
        }}
      >
        {/* Replace this div with Trina's image once provided */}
        <div className="text-center p-8">
          <p className="text-6xl mb-4">🏡</p>
          <p
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "'Sacramento', cursive", color: "#e75480" }}
          >
            Welcome to the Dollhouse
          </p>
          <p className="text-sm" style={{ color: "#9e6b8a" }}>
            ✨ Hero image coming soon ✨
          </p>
        </div>
      </div>

      {/* Welcome text */}
      <div className="text-center max-w-lg">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "'Sacramento', cursive", color: "#e75480" }}
        >
          ♡ Welcome, Little One ♡
        </h1>
        <p className="text-base leading-relaxed" style={{ color: "#6b3a5a" }}>
          Step inside Princess Trina&apos;s whimsical world of music, stories, games,
          and all things soft and sparkly. Make yourself at home! 🎀
        </p>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-2xl w-full">
        {[
          { emoji: "🎵", label: "Music", href: "/music" },
          { emoji: "📚", label: "Books", href: "#", soon: true },
          { emoji: "🎮", label: "Game", href: "/game" },
          { emoji: "🎨", label: "Coloring", href: "#", soon: true },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex flex-col items-center p-6 rounded-2xl transition-all hover:scale-105"
            style={{
              backgroundColor: "#fdf2f5",
              border: "2px solid #f0c4d4",
            }}
          >
            <span className="text-3xl mb-2">{item.emoji}</span>
            <span className="font-semibold text-sm" style={{ color: "#e75480" }}>
              {item.label}
            </span>
            {item.soon && (
              <span className="text-xs mt-1" style={{ color: "#c4899e" }}>
                coming soon
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
