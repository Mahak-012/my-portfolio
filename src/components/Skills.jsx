import React, { useEffect, useRef, useState } from "react";

/* ---------------------------------- Data ----------------------------------- */

const frontendSkills = [
  { name: "HTML5 / Semantic Markup", level: "Advanced", icon: "🌐", color: "#e34f26", width: 95 },
  { name: "CSS3 / Modern Architecture", level: "Advanced", icon: "🎨", color: "#264de4", width: 90 },
  { name: "JavaScript (ES6+ / DOM)", level: "Advanced", icon: "⚡", color: "#f7df1e", width: 88 },
  { name: "React.js Ecosystem", level: "Expert", icon: "⚛️", color: "#61dafb", width: 85 },
  { name: "Tailwind CSS / PostCSS", level: "Advanced", icon: "💨", color: "#38bdf8", width: 92 },
  { name: "Bootstrap 5 / UI Frameworks", level: "Advanced", icon: "📦", color: "#7952b3", width: 85 },
];

const otherSkills = [
  { name: "SEO & Web Performance", level: "Advanced", icon: "🔍", color: "#10b981", width: 82 },
  { name: "Figma UI/UX & Prototyping", level: "Intermediate", icon: "🎯", color: "#a259ff", width: 78 },
  { name: "Responsive Mobile-First Design", level: "Expert", icon: "📱", color: "#34d399", width: 90 },
  { name: "Git, GitHub & Version Control", level: "Advanced", icon: "🐙", color: "#f05032", width: 85 },
];

const learningStack = ["MongoDB", "Express.js", "Node.js", "REST APIs", "JWT Auth"];

const skillTags = [
  "React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3",
  "Bootstrap", "Git & GitHub", "RESTful APIs", "SEO Optimization", "Figma",
  "Responsive Design", "VS Code", "Vite", "Performance Tuning",
];

const REDUCED_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------- Hook ------------------------------------ */

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
};

/* -------------------------------- Count-up ---------------------------------- */

const CountUp = ({ end, suffix = "", duration = 1400 }) => {
  const [display, setDisplay] = useState(REDUCED_MOTION ? end : 0);

  useEffect(() => {
    if (REDUCED_MOTION) return;
    const start = performance.now();
    let raf;
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  return <>{display}{suffix}</>;
};

/* ------------------------------ Skill Bar ------------------------------------ */

const SkillBar = ({ skill, index, inView }) => (
  <div
    className="relative"
    style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(-16px)",
      transition: REDUCED_MOTION ? "none" : `all 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.08}s`,
    }}
  >
    <div className="mb-2.5 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <span className="text-lg filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{skill.icon}</span>
        <span className="text-sm font-medium tracking-wide text-zinc-300">{skill.name}</span>
      </div>
      <span
        className="rounded-md border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest shadow-sm"
        style={{
          background: `${skill.color}15`,
          borderColor: `${skill.color}40`,
          color: skill.color,
        }}
      >
        {skill.level}
      </span>
    </div>

    <div className="relative h-2 w-full overflow-hidden rounded-full border border-zinc-900/60 bg-zinc-950/80 shadow-inner">
      {/* Animated fill — scroll pe 0 → width */}
      <div
        className="glow-progress-bar relative h-full rounded-full"
        style={{
          width: inView ? `${skill.width}%` : "0%",
          background: `linear-gradient(90deg, ${skill.color}, #10b981)`,
          "--bar-color": `${skill.color}70`,
          transition: REDUCED_MOTION
            ? "none"
            : `width 1.3s cubic-bezier(0.22,1,0.36,1) ${0.3 + index * 0.1}s`,
        }}
      >
        {/* Moving shine on bar tip */}
        {!REDUCED_MOTION && (
          <span
            className="absolute right-0 top-0 h-full w-6 animate-pulse"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5))",
              borderRadius: "9999px",
            }}
          />
        )}
      </div>
    </div>

    {/* Percentage label */}
    <span
      className="absolute -top-1 font-mono text-[9px] text-zinc-600 transition-opacity duration-500"
      style={{
        right: inView ? `calc(${100 - skill.width}% - 2px)` : "0px",
        opacity: inView ? 1 : 0,
        transition: REDUCED_MOTION
          ? "none"
          : `all 1.3s cubic-bezier(0.22,1,0.36,1) ${0.3 + index * 0.1}s`,
      }}
    >
      {skill.width}%
    </span>
  </div>
);

/* ------------------------------ Skill Panel ---------------------------------- */

const SkillPanel = ({ icon, title, subtitle, skills, delay }) => {
  const [ref, inView] = useInView(0.2);
  const cardRef = useRef(null);

  /* Cursor spotlight */
  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: REDUCED_MOTION ? "0s" : `${delay}ms` }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMove}
        className="cyber-skill-card group relative h-full overflow-hidden rounded-3xl p-6 sm:p-8"
      >
        {/* Cursor spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(16,185,129,0.07), transparent 65%)",
          }}
        />

        {/* Corner accents */}
        <div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-emerald-500/30 transition-colors duration-500 group-hover:border-emerald-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-emerald-500/30 transition-colors duration-500 group-hover:border-emerald-400/70" />

        <div className="relative">
          <div className="mb-8 flex items-center gap-4 border-b border-emerald-950/60 pb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-xl shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-wide text-zinc-100">{title}</h3>
              <p className="mt-0.5 text-xs font-light text-zinc-500">{subtitle}</p>
            </div>
            <span className="ml-auto font-mono text-[9px] tracking-widest text-emerald-700">
              [{String(skills.length).padStart(2, "0")} MODULES]
            </span>
          </div>

          <div className="space-y-6">
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* --------------------------------- Skills ------------------------------------ */

function Skills() {
  const [headRef, headInView] = useInView(0.3);
  const [learnRef, learnInView] = useInView(0.3);
  const [cloudRef, cloudInView] = useInView(0.2);
  const [metricsRef, metricsInView] = useInView(0.3);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#010403] px-4 py-24 text-white selection:bg-emerald-500/30 sm:px-12 md:py-32 md:px-16 lg:px-24"
    >
      <style>{`
        .cyber-skill-card {
          background: linear-gradient(135deg, rgba(4, 12, 9, 0.7) 0%, rgba(2, 8, 6, 0.8) 100%);
          border: 1px solid rgba(16, 185, 129, 0.2);
          backdrop-filter: blur(24px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(16, 185, 129, 0.04);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cyber-skill-card:hover {
          border-color: rgba(52, 211, 153, 0.7);
          transform: translateY(-6px);
          box-shadow: 0 0 50px rgba(16, 185, 129, 0.2), inset 0 0 15px rgba(16, 185, 129, 0.08);
        }
        .glow-progress-bar {
          box-shadow: 0 0 15px var(--bar-color);
        }
        @keyframes advancedPulse {
          0%, 100% { transform: scale(1); opacity: 0.12; }
          50% { transform: scale(1.15); opacity: 0.22; }
        }
        .animate-advanced-glow { animation: advancedPulse 8s ease-in-out infinite; }

        /* ✨ Radar scan line on learning strip */
        @keyframes radarScan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .radar-scan {
          animation: radarScan 4s ease-in-out infinite;
        }

        /* ✨ Learning chips pulse */
        @keyframes learnGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(16,185,129,0); }
          50% { box-shadow: 0 0 18px rgba(16,185,129,0.25); }
        }
        .learn-chip { animation: learnGlow 3s ease-in-out infinite; }

        @keyframes skillShimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-advanced-glow, .radar-scan, .learn-chip { animation: none !important; }
        }
      `}</style>

      {/* ─── AMBIENT BACKGROUND ─── */}
      <div
        className="animate-advanced-glow pointer-events-none absolute right-[-5%] top-[-10%] z-0 h-[350px] w-[350px] rounded-full blur-[140px] mix-blend-screen sm:h-[750px] sm:w-[750px]"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.15), transparent 70%)" }}
      />
      <div
        className="animate-advanced-glow pointer-events-none absolute bottom-[-10%] left-[-10%] z-0 h-[350px] w-[350px] rounded-full blur-[120px] sm:h-[650px] sm:w-[650px]"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.1), transparent 70%)", animationDelay: "-4s" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* ─── SECTION HEADER ─── */}
        <div
          ref={headRef}
          className={`mb-16 flex flex-col items-center text-center transition-all duration-700 ease-out md:mb-20 ${
            headInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-emerald-500">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-emerald-500" />
            <span>// Skills</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-emerald-500" />
          </div>

          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-4 py-2 shadow-lg shadow-emerald-950/50 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-300">
              🚀 Technical Expertise &amp; Stack
            </span>
          </div>

          <h2
            className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl"
            style={{
              background: "linear-gradient(135deg, #ffffff 30%, #a7f3d0 70%, #10b981 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0px 15px 35px rgba(16,185,129,0.2))",
            }}
          >
            Engineering Capabilities
          </h2>

          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_14px_rgba(16,185,129,0.6)]" />

          <p className="mt-5 max-w-2xl text-sm font-light leading-relaxed tracking-wide text-zinc-400 sm:text-base">
            Equipped with <span className="font-medium text-emerald-400">14+ modern production tools</span> and
            scalable architecture frameworks. Built for absolute performance and seamless UI execution.
          </p>
        </div>

        {/* ─── SKILLS MATRIX GRID ─── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <SkillPanel
            icon="💻"
            title="Frontend Engineering"
            subtitle="Scalable components & reactive layouts"
            skills={frontendSkills}
            delay={0}
          />
          <SkillPanel
            icon="⚡"
            title="Architecture & Tools"
            subtitle="Performance optimization & design systems"
            skills={otherSkills}
            delay={120}
          />
        </div>

        {/* ─── ✨ CURRENTLY LEARNING STRIP (MERN path) ─── */}
        <div
          ref={learnRef}
          className={`mt-8 transition-all duration-700 ease-out ${
            learnInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div
            className="relative overflow-hidden rounded-3xl border p-5 sm:p-6"
            style={{
              background: "linear-gradient(135deg, rgba(16,185,129,0.05) 0%, rgba(2,8,6,0.6) 100%)",
              borderColor: "rgba(16,185,129,0.2)",
            }}
          >
            {/* Radar scan line */}
            {!REDUCED_MOTION && (
              <div
                className="radar-scan pointer-events-none absolute inset-y-0 w-24"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.08), transparent)",
                }}
              />
            )}

            <div className="relative flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <p className="font-mono text-xs tracking-widest text-emerald-400 sm:text-sm">
                  $ currently_learning:
                  <span className="ml-2 text-zinc-500">// Full-Stack MERN path</span>
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {learningStack.map((tech, i) => (
                  <span
                    key={tech}
                    className="learn-chip rounded-lg border border-emerald-500/25 bg-emerald-950/40 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-emerald-300"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── TECH CLOUD ─── */}
        <div
          ref={cloudRef}
          className={`cyber-skill-card mt-8 rounded-3xl p-6 text-center transition-all duration-700 ease-out sm:p-10 ${
            cloudInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-6 font-mono text-[10px] tracking-[0.25em] text-emerald-600 sm:text-xs">
            $ ls ./production_stack --integrated
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skillTags.map((tech, i) => (
              <span
                key={tech}
                className="cursor-default rounded-xl border border-emerald-900/40 bg-emerald-950/20 px-4 py-2.5 text-xs font-medium tracking-wide text-emerald-300 shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-emerald-500/60 hover:bg-emerald-500/15 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] sm:text-sm"
                style={{
                  opacity: cloudInView ? 1 : 0,
                  transform: cloudInView ? "translateY(0) scale(1)" : "translateY(14px) scale(0.9)",
                  transition: REDUCED_MOTION
                    ? "none"
                    : `all 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.05}s`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ─── METRICS BANNER — count-up ─── */}
        <div
          ref={metricsRef}
          className={`relative mt-8 overflow-hidden rounded-3xl border p-6 shadow-2xl transition-all duration-700 ease-out sm:p-8 ${
            metricsInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{
            background: "linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(2,8,6,0.5) 100%)",
            borderColor: "rgba(16,185,129,0.25)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent" />
          <div className="relative z-10 grid grid-cols-1 items-center gap-6 text-center sm:grid-cols-3 sm:gap-4">

            <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <span className="text-3xl filter drop-shadow-[0_2px_10px_rgba(16,185,129,0.4)]">🚀</span>
              <div className="sm:text-left">
                <p className="font-mono text-base font-black text-emerald-400 sm:text-lg">
                  <CountUp end={100} suffix="%" />
                </p>
                <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                  Production Ready Code
                </p>
              </div>
            </div>

            <div className="mx-auto hidden h-10 w-px bg-emerald-900/50 sm:block" />

            <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <span className="text-3xl filter drop-shadow-[0_2px_10px_rgba(16,185,129,0.4)]">⚡</span>
              <div className="sm:text-left">
                <p className="font-mono text-base font-black text-emerald-400 sm:text-lg">
                  <CountUp end={14} suffix="+" />
                </p>
                <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                  Tools in Active Stack
                </p>
              </div>
            </div>

            <div className="mx-auto hidden h-10 w-px bg-emerald-900/50 sm:block" />

            <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <span className="text-3xl filter drop-shadow-[0_2px_10px_rgba(16,185,129,0.4)]">🎯</span>
              <div className="sm:text-left">
                <p className="font-mono text-base font-black text-emerald-400 sm:text-lg">
                  <CountUp end={15} suffix="+" />
                </p>
                <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                  Deployed Real-World Apps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;