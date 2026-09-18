import React, { useEffect, useRef, useState } from "react";

/* ---------------------------------- Data ----------------------------------- */

const growthMetrics = [
  { emoji: "📈", stat: 20, suffix: "+", label: "Projects Completed" },
  { emoji: "⚡", stat: 6, suffix: "+", label: "Core Technologies" },
  { emoji: "🎯", stat: 100, suffix: "%", label: "Client/User Focus" },
  { emoji: "🚀", stat: 2, suffix: "x", label: "Speed & Performance" },
];

const coreStrengths = [
  { icon: "⚛️", title: "Modern Frontend", desc: "Building highly interactive and reactive interfaces using React.js and modern JavaScript." },
  { icon: "📱", title: "Responsive & Clean UI", desc: "Crafting pixel-perfect, mobile-first designs with Tailwind CSS and custom layouts." },
  { icon: "🚀", title: "Performance Optimization", desc: "Writing clean code focused on fast loading speeds, smooth animations, and best practices." },
  { icon: "📚", title: "Continuous Learning", desc: "Constantly upgrading skills, exploring new libraries, and adapting to modern web standards." },
];

const tools = [
  "React", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3",
  "Bootstrap", "Git & GitHub", "REST APIs", "SEO & Optimization", "Figma",
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

/* --------------------------- Spotlight Card Wrapper -------------------------- */

const SpotlightCard = ({ children, className = "", style = {}, delay = 0, inView }) => {
  const cardRef = useRef(null);

  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      className={`about-card group relative overflow-hidden rounded-2xl border transition-all duration-500 ${className}`}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: REDUCED_MOTION
          ? "none"
          : `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, border-color 0.4s ease, box-shadow 0.4s ease`,
      }}
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(16,185,129,0.07), transparent 65%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

/* ---------------------------------- About ------------------------------------ */

function About() {
  const [headRef, headInView] = useInView(0.3);
  const [leftRef, leftInView] = useInView(0.15);
  const [rightRef, rightInView] = useInView(0.1);

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-20 sm:px-10 md:py-28 md:px-14 lg:px-20"
      style={{ background: "linear-gradient(135deg,#020806 0%, #03120a 50%, #020806 100%)" }}
    >
      <style>{`
        .about-card:hover {
          border-color: rgba(52, 211, 153, 0.4) !important;
          box-shadow: 0 0 40px rgba(16, 185, 129, 0.12);
        }
        .about-corner {
          transition: border-color 0.4s ease;
        }
        .about-card:hover .about-corner {
          border-color: rgba(52, 211, 153, 0.8) !important;
        }
        @keyframes aboutBlob {
          0%, 100% { transform: translate(0,0) scale(1); opacity: 0.1; }
          50% { transform: translate(30px, -20px) scale(1.15); opacity: 0.16; }
        }
        .about-blob-a { animation: aboutBlob 14s ease-in-out infinite; }
        .about-blob-b { animation: aboutBlob 18s ease-in-out infinite reverse; }
        @media (prefers-reduced-motion: reduce) {
          .about-blob-a, .about-blob-b { animation: none !important; }
        }
      `}</style>

      {/* Ambient blobs */}
      <div
        className="about-blob-a pointer-events-none absolute left-10 top-20 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "#10b981", opacity: 0.1 }}
      />
      <div
        className="about-blob-b pointer-events-none absolute bottom-20 right-10 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "#34d399", opacity: 0.07 }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ─── Section Heading ─── */}
        <div
          ref={headRef}
          className={`mb-12 flex flex-col items-center text-center transition-all duration-700 ease-out md:mb-16 ${
            headInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-emerald-500">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-emerald-500" />
            <span>// About Me</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-emerald-500" />
          </div>

          <h2
            className="text-3xl font-black sm:text-4xl md:text-5xl"
            style={{
              background: "linear-gradient(135deg,#10b981,#34d399,#6ee7b7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Crafting Digital Experiences
          </h2>

          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 shadow-[0_0_14px_rgba(16,185,129,0.6)]" />

          <p className="mt-4 max-w-2xl text-sm text-gray-400">
            Passionate Frontend Developer dedicated to building clean, scalable, and user-centric web applications.
          </p>
        </div>

        {/* ─── Main Grid ─── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

          {/* ══════════ LEFT — Story + Core Strengths ══════════ */}
          <div ref={leftRef} className="space-y-6">

            {/* Terminal-style intro */}
            <SpotlightCard
              inView={leftInView}
              delay={100}
              style={{
                background: "rgba(16,185,129,0.03)",
                borderColor: "rgba(16,185,129,0.2)",
              }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center justify-between border-b px-5 py-3"
                style={{
                  background: "rgba(16,185,129,0.04)",
                  borderColor: "rgba(16,185,129,0.1)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-900" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-900" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-emerald-600">
                    ~/about_me.md
                  </span>
                </div>
                <span className="font-mono text-[9px] tracking-widest text-emerald-700">
                  WHOAMI
                </span>
              </div>

              <div className="p-6 md:p-7">
                <p className="mb-4 font-mono text-xs text-emerald-500">
                  <span className="text-emerald-600">$</span> cat introduction.txt
                </p>

                <h3 className="text-lg font-bold leading-tight text-white md:text-xl">
                  Hi, I&apos;m <span className="text-emerald-400">Mahak</span> — a Frontend Developer
                  who ships{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                    production-grade interfaces.
                  </span>
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  I specialize in turning complex design ideas into seamless, high-performance web applications.
                  With a deep focus on{" "}
                  <span className="font-semibold text-emerald-400">React.js, Tailwind CSS, and modern UI/UX principles</span>,
                  I build products that not only look incredible but also offer lightning-fast responsiveness and smooth
                  user experiences. Every line of code I write is driven by a passion for cleanliness, scalability, and efficiency.
                </p>

                {/* Mini status rows */}
                <div className="mt-6 space-y-2 border-t border-emerald-500/10 pt-5 font-mono text-[11px]">
                  {[
                    { key: "role", value: "Frontend Developer → Full-Stack (MERN path)" },
                    { key: "location", value: "Lahore, Pakistan 🇵🇰" },
                    { key: "focus", value: "Pixel-perfect UI · Performance · Clean Code" },
                  ].map((row) => (
                    <div key={row.key} className="flex items-center gap-2">
                      <span className="text-emerald-600">{row.key}:</span>
                      <span className="text-gray-400">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>

            {/* Core Expertise */}
            <SpotlightCard
              inView={leftInView}
              delay={220}
              className="p-6 md:p-7"
              style={{
                background: "rgba(16,185,129,0.02)",
                borderColor: "rgba(16,185,129,0.12)",
              }}
            >
              {/* Corner brackets */}
              <div className="about-corner pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-emerald-500/25" />
              <div className="about-corner pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-emerald-500/25" />

              <div className="mb-5 flex items-center gap-2.5">
                <span className="text-2xl">🎯</span>
                <h3 className="font-bold tracking-wide text-emerald-400">Core Expertise</h3>
                <span className="ml-auto font-mono text-[9px] tracking-widest text-emerald-700">
                  [04 PILLARS]
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {coreStrengths.map((item, idx) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-emerald-500/10 bg-emerald-500/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-emerald-500/[0.08]"
                    style={{
                      opacity: leftInView ? 1 : 0,
                      transform: leftInView ? "translateY(0)" : "translateY(14px)",
                      transition: REDUCED_MOTION
                        ? "none"
                        : `opacity 0.5s ease ${0.3 + idx * 0.1}s, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${0.3 + idx * 0.1}s, border-color 0.3s ease, background 0.3s ease`,
                    }}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <h4 className="mb-1 mt-1.5 text-sm font-semibold text-emerald-300">{item.title}</h4>
                    <p className="text-xs leading-relaxed text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* ══════════ RIGHT — Metrics + Tools + Quote ══════════ */}
          <div ref={rightRef} className="space-y-6">

            {/* Metrics — count-up */}
            <div className="grid grid-cols-2 gap-4">
              {growthMetrics.map((item, idx) => (
                <div
                  key={item.label}
                  className="group about-card relative overflow-hidden rounded-2xl border p-5 text-center transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background: "rgba(16,185,129,0.04)",
                    borderColor: "rgba(16,185,129,0.15)",
                    opacity: rightInView ? 1 : 0,
                    transform: rightInView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                    transition: REDUCED_MOTION
                      ? "none"
                      : `opacity 0.6s ease ${idx * 0.1}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${idx * 0.1}s, border-color 0.3s ease, box-shadow 0.3s ease`,
                  }}
                >
                  <div className="mb-2 text-3xl transition-transform duration-300 group-hover:scale-125">
                    {item.emoji}
                  </div>
                  <div className="font-mono text-2xl font-black text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.35)]">
                    <CountUp end={item.stat} suffix={item.suffix} />
                  </div>
                  <div className="mt-1.5 text-[11px] font-medium leading-tight text-gray-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <SpotlightCard
              inView={rightInView}
              delay={180}
              className="p-6 md:p-7"
              style={{
                background: "rgba(16,185,129,0.03)",
                borderColor: "rgba(16,185,129,0.12)",
              }}
            >
              <div className="mb-2 font-mono text-[10px] tracking-[0.2em] text-emerald-600">
                $ ls ./daily_toolkit
              </div>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="text-2xl">🛠️</span>
                <h3 className="font-bold text-emerald-400">Tech Stack &amp; Tools</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {tools.map((tool, idx) => (
                  <span
                    key={tool}
                    className="cursor-default rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300"
                    style={{
                      background: "rgba(16,185,129,0.05)",
                      borderColor: "rgba(16,185,129,0.15)",
                      color: "#d1d5db",
                      opacity: rightInView ? 1 : 0,
                      transform: rightInView ? "translateY(0)" : "translateY(12px)",
                      transition: REDUCED_MOTION
                        ? "none"
                        : `opacity 0.4s ease ${0.25 + idx * 0.05}s, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${0.25 + idx * 0.05}s, border-color 0.3s ease, background 0.3s ease`,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </SpotlightCard>

            {/* Power Statement */}
            <SpotlightCard
              inView={rightInView}
              delay={280}
              className="p-6 md:p-7"
              style={{
                background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(16,185,129,0.02))",
                borderColor: "rgba(16,185,129,0.25)",
              }}
            >
              <div className="pointer-events-none absolute -right-3 -top-3 text-7xl opacity-10 text-emerald-400">
                🚀
              </div>

              <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-emerald-600">
                $ cat philosophy.txt
              </p>

              <blockquote className="relative z-10 border-l-2 border-emerald-500/40 pl-4">
                <p className="text-sm font-medium leading-relaxed text-gray-200">
                  &ldquo;Development isn&apos;t just about writing code; it&apos;s about solving real problems and
                  delivering exceptional experiences. Always excited to take on new challenges and build products
                  that stand out.&rdquo;
                </p>
              </blockquote>

              <div className="relative z-10 mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/15 text-sm shadow-[0_0_14px_rgba(16,185,129,0.2)]">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-400">Mahak</p>
                  <p className="text-[10px] text-gray-500">
                    Frontend Developer | React &amp; Tailwind Enthusiast
                  </p>
                </div>
                <span className="ml-auto font-mono text-[9px] tracking-widest text-emerald-700">
                  — SIGNATURE
                </span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;