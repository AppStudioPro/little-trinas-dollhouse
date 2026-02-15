export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-12">
      <div className="text-center max-w-lg">
        <p className="text-6xl mb-4">👑</p>
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "'Sacramento', cursive", color: "#e75480" }}
        >
          ♡ About Princess Trina ♡
        </h1>
        <div
          className="rounded-2xl p-8 text-left"
          style={{ backgroundColor: "#fdf2f5", border: "2px solid #f0c4d4" }}
        >
          <p className="text-base leading-relaxed mb-4" style={{ color: "#6b3a5a" }}>
            Hi there! I&apos;m Trina — a dreamer, a creator, and a lover of all things
            soft and whimsical. 🌸
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#6b3a5a" }}>
            I make music from the heart, write stories full of wonder, and I&apos;m
            building a cozy game world where magic is real and every day is an adventure.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#6b3a5a" }}>
            This little dollhouse is my corner of the internet — a place where you can
            explore my world, listen to my songs, read my stories, and maybe find a
            little bit of comfort along the way. 💖
          </p>
          <p
            className="text-center text-lg font-semibold mt-6"
            style={{ color: "#e75480" }}
          >
            Welcome home~ 🏡🎀
          </p>
        </div>
      </div>
    </div>
  );
}
