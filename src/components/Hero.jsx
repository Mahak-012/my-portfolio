import React, { useState, useEffect, useRef } from "react";
// Exact dynamic image layout connection reference directly mapping from your asset tree setup
import profileImg from "../assets/profile.png";

// Static configs — defined OUTSIDE component so typewriter re-renders
// (every 50-100ms) don't re-randomize positions and cause flicker.
const PARTICLES = [
  { left: "4%",  size: 3, delay: "0s",    duration: "7s"  },
  { left: "11%", size: 2, delay: "1.2s",  duration: "9s"  },
  { left: "19%", size: 4, delay: "0.4s",  duration: "8s"  },
  { left: "27%", size: 2, delay: "2.1s",  duration: "10s" },
  { left: "35%", size: 3, delay: "0.8s",  duration: "7.5s"},
  { left: "44%", size: 2, delay: "1.6s",  duration: "9.5s"},
  { left: "53%", size: 4, delay: "0.2s",  duration: "8.5s"},
  { left: "61%", size: 2, delay: "2.6s",  duration: "11s" },
  { left: "69%", size: 3, delay: "1.1s",  duration: "7.8s"},
  { left: "77%", size: 2, delay: "0.6s",  duration: "9.2s"},
  { left: "85%", size: 4, delay: "1.9s",  duration: "8.2s"},
  { left: "92%", size: 2, delay: "0.3s",  duration: "10.5s"},
  { left: "8%",  size: 2, delay: "3.1s",  duration: "9.8s"},
  { left: "57%", size: 3, delay: "2.8s",  duration: "7.2s"},
];

const STARS = [
  { top: "12%", left: "18%", size: "10px", duration: "3.2s", delay: "0s"   },
  { top: "22%", left: "62%", size: "8px",  duration: "2.6s", delay: "0.6s" },
  { top: "8%",  left: "85%", size: "11px", duration: "3.8s", delay: "1.1s" },
  { top: "68%", left: "6%",  size: "9px",  duration: "3s",   delay: "0.3s" },
  { top: "78%", left: "48%", size: "7px",  duration: "2.8s", delay: "1.6s" },
  { top: "40%", left: "94%", size: "10px", duration: "3.4s", delay: "0.9s" },
  { top: "55%", left: "30%", size: "8px",  duration: "3.1s", delay: "2.1s" },
];

function Hero() {
  // Typewriter Core Logic
  const words = ["Frontend Developer", "MERN Stack Developer", "UI Designer"];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIdx];

      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, currentWordIdx]);

  // cursor-reactive spotlight glow
  const sectionRef = useRef(null);
  const [spot, setSpot] = useState({ x: 50, y: 40 });

  const handleSectionMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpot({ x, y });
  };

  // 3D tilt on the photo frame, following the cursor
  const frameRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleFrameMouseMove = (e) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -14, y: px * 14 });
  };
  const handleFrameMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      className="min-h-screen pt-28 sm:pt-32 lg:pt-36 pb-14 md:pb-20 px-4 sm:px-12 md:px-16 lg:px-24 relative overflow-hidden bg-gradient-to-b from-[#020a06] via-[#010704] to-[#020a06] text-white select-none"
    >
      {/* ─── CINEMATIC GREEN BACKGROUND MESH & EFFECTS ─── */}
      <style>{`
        .green-glow-card {
          border: 1px solid rgba(16, 185, 129, 0.2);
          background: rgba(2, 18, 10, 0.6);
          backdrop-filter: blur(16px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(16, 185, 129, 0.08);
          transition: all 0.4s ease;
        }
        .green-glow-card:hover {
          border-color: rgba(52, 211, 153, 0.6);
          transform: scale(1.05);
          box-shadow: 0 0 35px rgba(16, 185, 129, 0.3);
        }
        .green-glow-btn {
          background: linear-gradient(90deg, #0f766e, #10b981);
          box-shadow: 0 4px 25px rgba(16, 185, 129, 0.35);
          transition: all 0.3s ease;
        }
        .green-glow-btn:hover {
          box-shadow: 0 0 35px rgba(16, 185, 129, 0.6);
          transform: translateY(-2px);
        }
        @keyframes blink {
          50% { border-color: transparent; }
        }
        .typewriter-cursor {
          border-right: 2px solid #34d399;
          animation: blink 0.75s step-end infinite;
        }
        @keyframes floatNodes {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-node {
          animation: floatNodes 4s ease-in-out infinite;
        }

        /* ───────── ANIMATED BACKGROUND LAYER ───────── */
        @keyframes driftBlobA {
          0%   { transform: translate(0px, 0px) scale(1);     opacity: 0.18; }
          33%  { transform: translate(40px, 30px) scale(1.15); opacity: 0.26; }
          66%  { transform: translate(-20px, 50px) scale(0.95);opacity: 0.14; }
          100% { transform: translate(0px, 0px) scale(1);     opacity: 0.18; }
        }
        @keyframes driftBlobB {
          0%   { transform: translate(0px, 0px) scale(1);      opacity: 0.20; }
          50%  { transform: translate(-50px, -35px) scale(1.2);opacity: 0.30; }
          100% { transform: translate(0px, 0px) scale(1);      opacity: 0.20; }
        }
        .animate-drift-a { animation: driftBlobA 14s ease-in-out infinite; }
        .animate-drift-b { animation: driftBlobB 18s ease-in-out infinite; }

        @keyframes gridPan {
          0%   { background-position: 0px 0px; }
          100% { background-position: 0px 80px; }
        }
        .bg-circuit-grid {
          background-image:
            linear-gradient(rgba(16,185,129,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,0.07) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridPan 9s linear infinite;
        }

        @keyframes particleRise {
          0%   { transform: translateY(0)     translateX(0); opacity: 0; }
          10%  { opacity: 0.7; }
          85%  { opacity: 0.5; }
          100% { transform: translateY(-160px) translateX(8px); opacity: 0; }
        }
        .particle-rise { animation-name: particleRise; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }

        @keyframes beamSweep {
          0%   { transform: translateX(-60%) translateY(-60%) rotate(20deg); }
          100% { transform: translateX(60%)  translateY(60%)  rotate(20deg); }
        }
        .animate-beam-sweep { animation: beamSweep 10s linear infinite; }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spinSlow 7s linear infinite; }

        @keyframes breathe {
          0%, 100% { transform: scale(1);    opacity: 0.55; }
          50%      { transform: scale(1.09); opacity: 0.85; }
        }
        .animate-breathe { animation: breathe 4.5s ease-in-out infinite; }

        @keyframes scanSweep {
          0%   { transform: translateY(-120%); opacity: 0; }
          10%  { opacity: 0.55; }
          90%  { opacity: 0.4; }
          100% { transform: translateY(220%); opacity: 0; }
        }
        .animate-scan-sweep { animation: scanSweep 5s ease-in-out infinite; }

        /* ───────── NEXT-LEVEL POLISH ───────── */
        @keyframes fadeUpIn {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-entrance { animation: fadeUpIn 0.85s cubic-bezier(.22,1,.36,1) both; }

        @keyframes nameGlow {
          0%, 100% { filter: drop-shadow(0 15px 30px rgba(16,185,129,0.25)); }
          50%      { filter: drop-shadow(0 15px 48px rgba(16,185,129,0.6)); }
        }
        .animate-name-glow { animation: nameGlow 3.5s ease-in-out infinite; }

        @keyframes shimmerText {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: shimmerText 3.2s linear infinite;
        }

        @keyframes twinkleStar {
          0%, 100% { opacity: 0.15; transform: scale(0.7) rotate(0deg); }
          50%      { opacity: 1;    transform: scale(1.2) rotate(15deg); }
        }
        .twinkle-star {
          animation-name: twinkleStar;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes buttonShine {
          0%   { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(250%)  skewX(-20deg); }
        }
        .animate-button-shine { animation: buttonShine 3.2s ease-in-out infinite; }

        @keyframes softPulse {
          0%, 100% { box-shadow: 0 0 0px rgba(16,185,129,0); }
          50%      { box-shadow: 0 0 18px rgba(16,185,129,0.25); }
        }
        .animate-soft-pulse { animation: softPulse 3.6s ease-in-out infinite; }

        /* ───────── FRAME DEFINITION (white accents) ───────── */
        @keyframes whiteRingPulse {
          0%, 100% { opacity: 0.16; }
          50%      { opacity: 0.38; }
        }
        .animate-white-ring { animation: whiteRingPulse 4s ease-in-out infinite; }

        @keyframes cornerPulse {
          0%, 100% { opacity: 0.55; }
          50%      { opacity: 1; }
        }
        .animate-corner { animation: cornerPulse 2.6s ease-in-out infinite; }
      `}</style>

      {/* RICH EMERALD NEBULA AURA OVERLAYS — drifting */}
      <div className="absolute top-[-5%] left-[-10%] w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] rounded-full bg-radial from-[#10b981]/18 via-transparent to-transparent blur-[130px] pointer-events-none mix-blend-screen z-0 animate-drift-a" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[450px] sm:w-[850px] h-[450px] sm:h-[850px] rounded-full bg-radial from-[#047857]/20 via-transparent to-transparent blur-[150px] pointer-events-none z-0 animate-drift-b" />

      <div className="absolute inset-0 bg-circuit-grid opacity-40 pointer-events-none z-0" />

      <div
        className="absolute inset-[-50%] pointer-events-none z-0 animate-beam-sweep"
        style={{ background: "linear-gradient(100deg, transparent 45%, rgba(52,211,153,0.06) 50%, transparent 55%)" }}
      />

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="particle-rise absolute rounded-full bg-emerald-400"
            style={{
              left: p.left, bottom: "-10px", width: `${p.size}px`, height: `${p.size}px`,
              boxShadow: "0 0 6px rgba(52,211,153,0.8)",
              animationDelay: p.delay, animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden sm:block">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="twinkle-star absolute text-emerald-300"
            style={{
              top: s.top, left: s.left, fontSize: s.size,
              animationDuration: s.duration, animationDelay: s.delay,
              textShadow: "0 0 8px rgba(52,211,153,0.8)",
            }}
          >
            ✦
          </span>
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300 hidden md:block"
        style={{ background: `radial-gradient(circle at ${spot.x}% ${spot.y}%, rgba(52,211,153,0.10), transparent 32%)` }}
      />

      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)" }}
      />

      {/* Content wrapper — no forced vertical centering, sits naturally after top padding */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">

        {/* LEFT CONTENT COLUMN */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-5 md:space-y-7">

          <div className="animate-entrance inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-md" style={{ animationDelay: "0.05s" }}>
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
              • OPEN TO OPPORTUNITIES
            </span>
          </div>

          <div className="space-y-3 w-full animate-entrance" style={{ animationDelay: "0.18s" }}>
            <p className="text-zinc-400 font-light text-base sm:text-lg tracking-wide">Hello, I'm</p>
            <h1 className="animate-name-glow text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-white font-serif italic">
              Mahak
            </h1>
            <div className="flex items-center gap-3 pt-1">
              <span className="w-4 h-[2px] bg-emerald-400 rounded-full animate-pulse" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-zinc-100 min-h-[40px] flex items-center">
                <span className="animate-text-shimmer typewriter-cursor pr-1 text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-emerald-200 to-zinc-100">
                  {currentText}
                </span>
              </h2>
            </div>
          </div>

          <p className="animate-entrance text-emerald-100/70 text-sm sm:text-base leading-relaxed max-w-xl font-light tracking-wide" style={{ animationDelay: "0.30s" }}>
            Passionate Frontend Developer on the path to becoming a <span className="text-emerald-400 font-medium">Full-Stack MERN Developer</span>. Currently leveling up with <span className="text-emerald-300 font-medium">MongoDB, Express, React & Node.js</span> to craft complete web experiences. Based in <span className="text-emerald-400 underline decoration-emerald-500/40 underline-offset-4 font-medium">Lahore PK</span>
          </p>

          <div className="animate-entrance flex flex-wrap gap-4 pt-2 w-full" style={{ animationDelay: "0.42s" }}>
            <a href="#projects" className="green-glow-btn relative overflow-hidden px-6 py-3 rounded-xl text-white text-sm font-semibold tracking-wide">
              <span className="absolute top-0 left-0 h-full w-1/3 animate-button-shine pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)" }} />
              <span className="relative z-10">View My Work →</span>
            </a>

            <a href="#contact" className="animate-soft-pulse px-6 py-3 rounded-xl border border-emerald-500/20 bg-emerald-950/10 text-emerald-300 text-sm font-medium tracking-wide hover:border-emerald-500/50 hover:bg-emerald-950/30 transition-all duration-300">
              Let's Connect
            </a>

            <a href="/Mahak_Resume.pdf" download className="px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-950/30 text-zinc-300 text-sm font-medium tracking-wide hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 flex items-center gap-2">
              Download CV ↓
            </a>
          </div>

          <div className="animate-entrance grid grid-cols-3 gap-4 sm:gap-8 pt-7 border-t border-emerald-950/40 w-full max-w-md" style={{ animationDelay: "0.54s" }}>
            <div>
              <p className="text-2xl sm:text-3xl font-black font-mono text-white">15+</p>
              <p className="text-emerald-500/60 text-[10px] tracking-widest uppercase mt-1">PROJECTS</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black font-mono text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.35)]">MERN</p>
              <p className="text-emerald-500/60 text-[10px] tracking-widest uppercase mt-1">STACK PATH</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black font-mono text-white">∞</p>
              <p className="text-emerald-500/60 text-[10px] tracking-widest uppercase mt-1">PASSION</p>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE WITH MERN SQUARES — bigger, fluid frame (mobile-safe via max-w + aspect-square) */}
        <div className="lg:col-span-5 flex justify-center items-center lg:justify-end pt-4 lg:pt-0 animate-entrance" style={{ animationDelay: "0.3s" }}>
          <div
            ref={frameRef}
            onMouseMove={handleFrameMouseMove}
            onMouseLeave={handleFrameMouseLeave}
            className="relative w-full max-w-[270px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[480px] aspect-square mx-auto"
            style={{
              transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.15s ease-out",
              willChange: "transform",
            }}
          >

            {/* breathing glow — two-tone (white-hot core fading to emerald) */}
            <div
              className="absolute inset-2 rounded-[2.8rem] pointer-events-none animate-breathe z-0"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(16,185,129,0.32) 38%, transparent 70%)",
                filter: "blur(28px)",
              }}
            />

            {/* rotating conic-gradient glow ring */}
            <div
              className="absolute inset-3 sm:inset-4 rounded-[2.6rem] pointer-events-none animate-spin-slow z-[1]"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, rgba(16,185,129,0.9) 12%, transparent 28%, transparent 65%, rgba(52,211,153,0.7) 80%, transparent 100%)",
                filter: "blur(3px)",
              }}
            />

            {/* pale static ring — crisp edge against the dark bg */}
            <div
              className="animate-white-ring absolute inset-5 sm:inset-[1.1rem] rounded-[2.55rem] pointer-events-none z-[2]"
              style={{ border: "1.5px solid rgba(255,255,255,0.5)" }}
            />

            {/* Main Rounded Frame Setup Container */}
            <div className="absolute inset-6 rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-[#02130b] to-[#010704] p-3 shadow-[0_0_60px_rgba(4,120,87,0.2)] overflow-hidden z-10">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-zinc-950 relative border border-white/10">
                <img
                  src={profileImg}
                  alt="Mahak MERN Developer"
                  className="w-full h-full object-cover object-center transform scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020a06]/90 via-transparent to-black/10 pointer-events-none" />

                <div
                  className="absolute left-0 right-0 h-1/3 pointer-events-none animate-scan-sweep"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(52,211,153,0.4), transparent)", mixBlendMode: "screen" }}
                />
              </div>
            </div>

            {/* camera-viewfinder style white corner brackets */}
            <div className="absolute top-3 left-3 w-6 h-6 z-30 pointer-events-none animate-corner" style={{ animationDelay: "0s" }}>
              <span className="absolute top-0 left-0 w-5 h-[2.5px] bg-white rounded-full" style={{ boxShadow: "0 0 8px rgba(255,255,255,0.7)" }} />
              <span className="absolute top-0 left-0 w-[2.5px] h-5 bg-white rounded-full" style={{ boxShadow: "0 0 8px rgba(255,255,255,0.7)" }} />
            </div>
            <div className="absolute top-3 right-3 w-6 h-6 z-30 pointer-events-none animate-corner" style={{ animationDelay: "0.6s" }}>
              <span className="absolute top-0 right-0 w-5 h-[2.5px] bg-white rounded-full" style={{ boxShadow: "0 0 8px rgba(255,255,255,0.7)" }} />
              <span className="absolute top-0 right-0 w-[2.5px] h-5 bg-white rounded-full" style={{ boxShadow: "0 0 8px rgba(255,255,255,0.7)" }} />
            </div>
            <div className="absolute bottom-3 left-3 w-6 h-6 z-30 pointer-events-none animate-corner" style={{ animationDelay: "1.2s" }}>
              <span className="absolute bottom-0 left-0 w-5 h-[2.5px] bg-white rounded-full" style={{ boxShadow: "0 0 8px rgba(255,255,255,0.7)" }} />
              <span className="absolute bottom-0 left-0 w-[2.5px] h-5 bg-white rounded-full" style={{ boxShadow: "0 0 8px rgba(255,255,255,0.7)" }} />
            </div>
            <div className="absolute bottom-3 right-3 w-6 h-6 z-30 pointer-events-none animate-corner" style={{ animationDelay: "1.8s" }}>
              <span className="absolute bottom-0 right-0 w-5 h-[2.5px] bg-white rounded-full" style={{ boxShadow: "0 0 8px rgba(255,255,255,0.7)" }} />
              <span className="absolute bottom-0 right-0 w-[2.5px] h-5 bg-white rounded-full" style={{ boxShadow: "0 0 8px rgba(255,255,255,0.7)" }} />
            </div>

            {/* FLOATING MERN ACCENT SQUARES */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20 animate-float-node">
              <div className="green-glow-card rounded-xl p-2.5 flex flex-col items-center justify-center w-16 h-16 sm:w-18 sm:h-18">
                <span className="text-lg">⚛️</span>
                <span className="text-[9px] font-bold text-emerald-400 tracking-wider mt-1 uppercase">React</span>
              </div>
            </div>

            <div className="absolute right-0 top-[40%] transform translate-y-[-50%] z-20 animate-float-node" style={{ animationDelay: "-1s" }}>
              <div className="green-glow-card rounded-xl p-2.5 flex flex-col items-center justify-center w-16 h-16 sm:w-18 sm:h-18">
                <span className="text-lg">🟢</span>
                <span className="text-[9px] font-bold text-emerald-400 tracking-wider mt-1 uppercase">Node.js</span>
              </div>
            </div>

            <div className="absolute right-2 bottom-12 z-20 animate-float-node" style={{ animationDelay: "-2s" }}>
              <div className="green-glow-card rounded-xl p-2.5 flex flex-col items-center justify-center w-16 h-16 sm:w-18 sm:h-18">
                <span className="text-emerald-400 font-black text-sm">JS</span>
                <span className="text-[8px] font-medium text-emerald-500 tracking-tight mt-1 uppercase">Javascript</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
              <div className="green-glow-card rounded-xl px-4 py-1.5 flex flex-col items-center justify-center border-emerald-500/40">
                <span className="text-[8px] font-bold tracking-widest text-emerald-400 uppercase">MERN</span>
                <span className="text-[10px] font-bold text-white tracking-wide">Stack</span>
              </div>
            </div>

            <div className="absolute left-2 bottom-12 z-20 animate-float-node" style={{ animationDelay: "-1.5s" }}>
              <div className="green-glow-card rounded-xl p-2.5 flex flex-col items-center justify-center w-16 h-16 sm:w-18 sm:h-18">
                <span className="text-zinc-200 font-mono font-bold text-xs">ex</span>
                <span className="text-[9px] font-bold text-emerald-400 tracking-wider mt-1 uppercase">Express</span>
              </div>
            </div>

            <div className="absolute left-0 top-[40%] transform translate-y-[-50%] z-20 animate-float-node" style={{ animationDelay: "-0.5s" }}>
              <div className="green-glow-card rounded-xl p-2.5 flex flex-col items-center justify-center w-16 h-16 sm:w-18 sm:h-18">
                <span className="text-lg">🍃</span>
                <span className="text-[8px] font-bold text-emerald-400 tracking-tight mt-1 uppercase">MongoDB</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 animate-entrance" style={{ animationDelay: "0.7s" }}>
        <span className="text-emerald-500/50 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-emerald-500/30 flex justify-center pt-1.5">
          <span className="w-1 h-1.5 rounded-full bg-emerald-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default Hero;