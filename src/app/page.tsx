import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-12">
      {/* Hero section with lace border frame */}
      <div className="w-full max-w-2xl mb-8">
        {/* Top lace */}
        <div style={{ height: "60px", backgroundImage: "url('/lace-border.png')", backgroundRepeat: "repeat-x", backgroundSize: "auto 100%" }} />

        {/* Hero content */}
        <div
          className="flex flex-col items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #fde8ef 0%, #fce4f4 50%, #f0d6f5 100%)",
            borderLeft: "3px solid #f0c4d4",
            borderRight: "3px solid #f0c4d4",
            minHeight: "350px",
            padding: "2rem",
          }}
        >
          {/* Text logo */}
          <div className="mb-4">
            <Image
              src="/trinaslogo.png"
              alt="Little Trina's Dollhouse"
              width={400}
              height={120}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Character illustration */}
          <div>
            <Image
              src="/trina-girl-new.png"
              alt="Princess Trina"
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        {/* Bottom lace (flipped) */}
        <div style={{ height: "60px", backgroundImage: "url('/lace-border.png')", backgroundRepeat: "repeat-x", backgroundSize: "auto 100%", transform: "scaleY(-1)" }} />
      </div>

      {/* Welcome text */}
      <div className="text-center max-w-lg">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "'Sacramento', cursive", color: "#e75480" }}
        >
          ♡ Living in a world of dollies and dreams ♡
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
