import { useState, useEffect } from "react";
import profileImg from "../assets/profile.png";

function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const roles = ["Frontend Developer", "Graphic Designer", "Video Editor"];

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 90;
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#020806 0%,#041a0f 50%,#020806 100%)" }}
    >
      {/* Glow blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: "#10b981" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "#059669" }} />

      <div className="w-full pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-0">

          {/* Left Content */}
          <div className="lg:w-[55%] px-6 sm:px-10 md:px-14 lg:pl-16 lg:pr-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 border"
              style={{ background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.25)", color: "#6ee7b7" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              🚀 Fast Growing | Consistent Performer
            </div>

            <p
              className="text-gray-400 text-lg mb-0"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            >
              Hi, I'm
            </p>

            <h1
              className="font-black leading-none mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "clamp(4.5rem, 9vw, 8rem)",
                background: "linear-gradient(135deg,#10b981,#34d399,#6ee7b7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 30px rgba(16,185,129,0.45))",
              }}
            >
              Mahak
            </h1>

            <div className="flex items-center flex-wrap gap-2 mb-5">
              <span
                className="text-xl sm:text-2xl font-semibold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  color: "#a7f3d0",
                }}
              >
                {text}
              </span>
              <span className="w-0.5 h-6 rounded-full animate-pulse bg-emerald-400" />
            </div>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                  Not just a developer —{" "}
                  <span className="text-emerald-400 font-semibold">a creative who codes</span>.
                   I turn ideas into{" "}
                    <span className="text-emerald-400 font-semibold">experiences that inspire</span>.
                  Based in <span className="text-emerald-400 font-semibold">Lahore 🇵🇰</span> ✨
                </p>
            {/* Buttons — FIXED */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg,#10b981,#059669)", boxShadow: "0 0 20px rgba(16,185,129,0.3)" }}
              >
                View My Work →
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 border"
                style={{ color: "#10b981", borderColor: "rgba(16,185,129,0.4)", background: "rgba(16,185,129,0.05)" }}
              >
                Hire Me →
              </a>
              <a
                href="/Mahak_Resume.pdf"
                download="Mahak_Resume.pdf"
                className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 border"
                style={{ color: "#10b981", borderColor: "rgba(16,185,129,0.4)", background: "rgba(16,185,129,0.05)" }}
              >
                Download Resume 📄
              </a>
            </div>

            <div className="flex gap-8">
              <div>
                <p className="text-2xl font-black text-emerald-400">15+</p>
                <p className="text-xs text-gray-500">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-400">3+</p>
                <p className="text-xs text-gray-500">Skills Domains</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-400">Consistent</p>
                <p className="text-xs text-gray-500">Daily Growth 📈</p>
              </div>
            </div>
          </div>

          {/* Right Side — Circle */}
          <div className="lg:w-[45%] flex justify-center lg:justify-center">
            <div className="relative w-[420px] h-[420px]">

              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: "-40px",
                  background: "radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: "-18px",
                  border: "1.5px dashed rgba(16,185,129,0.35)",
                  animation: "spin 25s linear infinite",
                }}
              />

              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: "-10px",
                  border: "2px solid transparent",
                  borderTopColor: "rgba(16,185,129,0.8)",
                  borderRightColor: "rgba(16,185,129,0.3)",
                  borderBottomColor: "rgba(16,185,129,0.1)",
                  borderLeftColor: "rgba(16,185,129,0.5)",
                  animation: "spinReverse 4s linear infinite",
                }}
              />

              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: "-4px",
                  border: "2px solid rgba(16,185,129,0.5)",
                  boxShadow: "0 0 25px rgba(16,185,129,0.4), inset 0 0 25px rgba(16,185,129,0.05)",
                }}
              />

              <div
                className="relative w-full h-full rounded-full overflow-hidden"
                style={{
                  border: "3px solid rgba(16,185,129,0.7)",
                  boxShadow: "0 0 60px rgba(16,185,129,0.4), 0 0 120px rgba(16,185,129,0.15), inset 0 0 40px rgba(16,185,129,0.08)",
                }}
              >
                <img src={profileImg} alt="Mahak" className="w-full h-full object-cover object-top" />
              </div>

              {[
                { label: "React", angle: 0 },
                { label: "Design", angle: 72 },
                { label: "Video", angle: 144 },
                { label: "SEO", angle: 216 },
                { label: "Code", angle: 288 },
              ].map(({ label, angle }) => {
                const rad = (angle * Math.PI) / 180;
                const r = 54;
                const top = 50 - r * Math.cos(rad);
                const left = 50 + r * Math.sin(rad);
                return (
                  <div
                    key={label}
                    className="absolute w-14 h-14 rounded-full flex items-center justify-center text-xs font-bold border"
                    style={{
                      top: `${top}%`,
                      left: `${left}%`,
                      transform: "translate(-50%,-50%)",
                      background: "rgba(16,185,129,0.12)",
                      borderColor: "rgba(16,185,129,0.6)",
                      color: "#10b981",
                      boxShadow: "0 0 18px rgba(16,185,129,0.35)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* CSS for spin animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </section>
  );
}

export default Hero;