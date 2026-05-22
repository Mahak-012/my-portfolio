import { useState, useEffect } from "react";

function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const roles = [
    "Frontend Developer",
    "Graphic Designer",
    "Video Editor",
  ];

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
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "#10b981" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#059669" }}
      />

      {/* ✅ UPDATED: Top padding increased (pt-28 / md:pt-36) to push content below navbar */}
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-12 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="lg:w-[60%]">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 border"
                style={{
                  background: "rgba(16,185,129,0.08)",
                  borderColor: "rgba(16,185,129,0.25)",
                  color: "#6ee7b7",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                🚀 Fast Growing | Consistent Performer
              </div>

              <p className="text-gray-400 text-base mb-1">Hi, I'm</p>

              {/* Mahak */}
              <h1
                className="text-6xl sm:text-7xl md:text-8xl font-black leading-tight mb-3"
                style={{
                  background: "linear-gradient(135deg,#10b981,#34d399,#6ee7b7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 25px rgba(16,185,129,0.4))",
                }}
              >
                Mahak
              </h1>

              {/* Role with typewriter */}
              <div className="flex items-center flex-wrap gap-2 mb-4">
                <span className="text-white-400 text-xl sm:text-2xl font-bold">{text}</span>
                <span className="w-0.5 h-6 rounded-full animate-pulse bg-emerald-500" />
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                A <span className="text-emerald-400 font-semibold">multi-talented creative professional</span> from{" "}
                <span className="text-emerald-400 font-semibold">Lahore 🇵🇰</span> — specializing in{" "}
                <span className="text-emerald-400 font-semibold">Frontend Development, Graphic Design & Video Editing</span>. 
                I bring <span className="text-emerald-400 font-semibold">consistency, creativity, and fast growth</span> to every project. 
                My goal? Build <span className="text-emerald-400 font-semibold">impactful digital experiences</span> that stand out.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="#projects"
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg,#10b981,#059669)",
                    boxShadow: "0 0 20px rgba(16,185,129,0.3)",
                  }}
                >
                  View My Work →
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 border"
                  style={{
                    color: "#10b981",
                    borderColor: "rgba(16,185,129,0.4)",
                    background: "rgba(16,185,129,0.05)",
                  }}
                >
                  Hire Me →
                </a>
                
                {/* Download Resume Button */}
                <a
                  href="/Mahak_Resume.pdf" 
                  download="Mahak_Resume.pdf"
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 border"
                  style={{
                    color: "#10b981",
                    borderColor: "rgba(16,185,129,0.4)",
                    background: "rgba(16,185,129,0.05)",
                  }}
                >
                  Download Resume 📄
                </a>
              </div>

              {/* Stats */}
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

            {/* Right Side - Circle Design */}
            <div className="lg:w-[40%] flex justify-center lg:justify-end">
              <div className="relative w-72 h-72">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-40"
                  style={{
                    background: "radial-gradient(circle,#10b981,transparent)",
                    transform: "scale(1.2)",
                  }}
                />
                <div
                  className="relative w-full h-full rounded-full flex flex-col items-center justify-center border-2"
                  style={{
                    background: "linear-gradient(135deg,#041a0f,#020806)",
                    borderColor: "rgba(16,185,129,0.4)",
                    boxShadow: "0 0 60px rgba(16,185,129,0.2)",
                  }}
                >
                  <div
                    className="text-8xl font-black mb-1"
                    style={{
                      background: "linear-gradient(135deg,#10b981,#34d399)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    M
                  </div>
                  <div className="text-white font-bold text-lg">Mahak</div>
                  <div
                    className="text-xs mt-1 px-3 py-1 rounded-full"
                    style={{
                      color: "#10b981",
                      background: "rgba(16,185,129,0.15)",
                    }}
                  >
                    Creative Professional
                  </div>
                </div>

                {/* Orbiting Badges */}
                {[
                  { label: "React", angle: 0 },
                  { label: "Design", angle: 72 },
                  { label: "Video", angle: 144 },
                  { label: "SEO", angle: 216 },
                  { label: "Code", angle: 288 },
                ].map(({ label, angle }) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 50;
                  const top = 50 - r * Math.cos(rad);
                  const left = 50 + r * Math.sin(rad);
                  return (
                    <div
                      key={label}
                      className="absolute w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold border"
                      style={{
                        top: `${top}%`,
                        left: `${left}%`,
                        transform: "translate(-50%,-50%)",
                        background: "rgba(16,185,129,0.15)",
                        borderColor: "rgba(16,185,129,0.4)",
                        color: "#10b981",
                        boxShadow: "0 0 12px rgba(16,185,129,0.2)",
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
      </div>
    </section>
  );
}

export default Hero;