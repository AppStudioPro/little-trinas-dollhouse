import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Little Trina's Dollhouse 🏡",
  description: "Welcome to Princess Trina's whimsical world — music, books, games & more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Sacramento&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen" style={{ fontFamily: "'Quicksand', sans-serif" }}>
        {/* Header / Nav */}
        <header className="relative">
          <nav
            className="flex items-center justify-between px-6 py-4"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div
              className="text-2xl font-bold tracking-wide"
              style={{ fontFamily: "'Sacramento', cursive", color: "#e75480", fontSize: "2rem" }}
            >
              ♡ Little Trina&apos;s Dollhouse ♡
            </div>
            <div className="flex gap-2">
              {[
                { label: "🏠 Home", href: "/" },
                { label: "🎵 Music", href: "/music" },
                { label: "🎮 Game", href: "/game" },
                { label: "💖 About Me", href: "/about" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
                  style={{
                    backgroundColor: "#fff9fb",
                    color: "#e75480",
                    border: "2px solid #f0c4d4",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
          <div className="lace-border-bottom" />
        </header>

        {/* Floating hearts decoration */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          {["💗", "💕", "💖", "🩷", "♡", "💗", "💕", "💖"].map((heart, i) => (
            <span
              key={i}
              className={`absolute text-xl heart-float heart-float-delay-${i % 5}`}
              style={{
                left: `${8 + i * 12}%`,
                top: `${15 + (i * 17) % 70}%`,
                opacity: 0.25,
                fontSize: `${1 + (i % 3) * 0.5}rem`,
              }}
            >
              {heart}
            </span>
          ))}
        </div>

        {/* Main content */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <div className="lace-border-top" />
        <footer
          className="text-center py-6 text-sm"
          style={{ backgroundColor: "#ffffff", color: "#9e6b8a" }}
        >
          <p>♡ Made with love by Princess Trina ♡</p>
          <p className="text-xs mt-1" style={{ color: "#c4899e" }}>
            © {new Date().getFullYear()} Little Trina&apos;s Dollhouse
          </p>
        </footer>
      </body>
    </html>
  );
}
