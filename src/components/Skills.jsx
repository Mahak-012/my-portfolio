import React, { useState, useEffect } from "react";

function Skills() {
  const [counters, setCounters] = useState({
    html: 0,
    css: 0,
    js: 0,
    react: 0,
    tailwind: 0,
    bootstrap: 0,
    seo: 0,
    figma: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({
        html: 90,
        css: 85,
        js: 80,
        react: 75,
        tailwind: 88,
        bootstrap: 82,
        seo: 78,
        figma: 70,
      });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const frontendSkills = [
    { name: "HTML5", level: counters.html, icon: "🌐", color: "#e34f26" },
    { name: "CSS3", level: counters.css, icon: "🎨", color: "#264de4" },
    { name: "JavaScript", level: counters.js, icon: "⚡", color: "#f7df1e" },
    { name: "React", level: counters.react, icon: "⚛️", color: "#61dafb" },
    { name: "Tailwind CSS", level: counters.tailwind, icon: "💨", color: "#38bdf8" },
    { name: "Bootstrap", level: counters.bootstrap, icon: "📦", color: "#7952b3" },
  ];

  const otherSkills = [
    { name: "SEO", level: counters.seo, icon: "🔍", color: "#10b981" },
    { name: "Figma", level: counters.figma, icon: "🎯", color: "#a259ff" },
    { name: "Responsive Design", level: 85, icon: "📱", color: "#34d399" },
    { name: "Git/GitHub", level: 75, icon: "🐙", color: "#f05032" },
  ];

  const skillTags = [
    "React", "Tailwind", "JavaScript", "HTML5", "CSS3", 
    "Bootstrap", "Git", "SEO", "Figma", "Responsive Design",
    "REST APIs", "VS Code", "npm", "Vite"
  ];

  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-4 sm:px-12 md:px-16 lg:px-24 relative overflow-hidden bg-[#010403] text-white selection:bg-emerald-500/30"
    >
      {/* ─── CUSTOM PREMIUM GLOW STYLING ─── */}
      <style>{`
        .cyber-skill-card {
          background: rgba(4, 12, 9, 0.5);
          border: 1px solid rgba(16, 185, 129, 0.15);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7), inset 0 0 15px rgba(16, 185, 129, 0.03);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cyber-skill-card:hover {
          border-color: rgba(52, 211, 153, 0.6);
          transform: translateY(-5px);
          box-shadow: 0 0 40px rgba(16, 185, 129, 0.15);
        }
        .glow-progress-bar {
          box-shadow: 0 0 12px var(--bar-color);
        }
        @keyframes subtlePulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.18; }
        }
        .animate-subtle-glow {
          animation: subtlePulse 10s ease-in-out infinite;
        }
      `}</style>

      {/* ─── AMBIENT NEBULA BACKGROUNDS ─── */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] sm:w-[700px] h-[300px] sm:h-[700px] rounded-full bg-radial from-[#10b981]/12 via-transparent to-transparent blur-[120px] sm:blur-[160px] pointer-events-none mix-blend-screen z-0 animate-subtle-glow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-radial from-[#34d399]/8 via-transparent to-transparent blur-[100px] sm:blur-[140px] pointer-events-none z-0 animate-subtle-glow" style={{ animationDelay: '-3s' }} />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/20 border border-emerald-900/40 mb-5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-[11px] font-bold tracking-widest uppercase">⚡ 4 Months Mastery</span>
          </div>
          
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
            style={{
              background: "linear-gradient(135deg, #ffffff 40%, #a7f3d0 75%, #10b981 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0px 15px 35px rgba(16,185,129,0.15))",
            }}
          >
            My Tech Arsenal
          </h2>
          <p className="text-zinc-400 mt-5 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            4 months. <span className="text-emerald-400 font-medium">14+ tools</span>. <span className="text-emerald-400 font-medium">15+ projects</span>. From zero to architectural, confident interface development.
          </p>
        </div>

        {/* SKILLS MATRIX GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Frontend Development Block */}
          <div className="cyber-skill-card rounded-2xl p-6 md:p-8 group">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-zinc-900">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                💻
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-wide text-zinc-100">Frontend Development</h3>
                <p className="text-zinc-500 text-xs mt-0.5 font-light">4 months of dense structural coding</p>
              </div>
            </div>

            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="relative">
                  <div className="flex justify-between items-center mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{skill.icon}</span>
                      <span className="text-zinc-300 font-medium text-sm tracking-wide">
                        {skill.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 text-sm font-bold font-mono">
                        {skill.level}%
                      </span>
                      <span
                        className="text-[9px] uppercase tracking-widest font-black px-2 py-0.5 rounded border"
                        style={{ 
                          background: `${skill.color}10`, 
                          borderColor: `${skill.color}30`, 
                          color: skill.color 
                        }}
                      >
                        {skill.level >= 80 ? "Advanced" : "Intermediate"}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-[6px] bg-zinc-950 rounded-full overflow-hidden border border-zinc-900/40">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out glow-progress-bar"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, #10b981)`,
                        "--bar-color": `${skill.color}50`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Capabilities Block */}
          <div className="cyber-skill-card rounded-2xl p-6 md:p-8 group">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-zinc-900">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-wide text-zinc-100">Complementary Arsenal</h3>
                <p className="text-zinc-500 text-xs mt-0.5 font-light">Beyond pixel implementation</p>
              </div>
            </div>

            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{skill.icon}</span>
                      <span className="text-zinc-300 font-medium text-sm tracking-wide">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-emerald-400 text-sm font-bold font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-[6px] bg-zinc-950 rounded-full overflow-hidden border border-zinc-900/40">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out glow-progress-bar"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, #34d399)`,
                        "--bar-color": `${skill.color}50`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TECH CLOUD COMPONENT */}
        <div className="mt-12 cyber-skill-card rounded-2xl p-6 md:p-8 text-center">
          <p className="text-zinc-400 text-xs sm:text-sm font-light tracking-wide mb-5">
            📦 <span className="text-emerald-400 font-medium">14+ Integrated Stack Tools</span> — Configured & Verified
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5">
            {skillTags.map((tech, idx) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide text-emerald-300 transition-all duration-300 border border-emerald-950 bg-emerald-950/10 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:scale-[1.05] cursor-default"
                style={{
                  boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* METRICS STREAK BANNER */}
        <div
          className="mt-8 rounded-2xl p-6 border relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(16,185,129,0.04), rgba(4,12,9,0.2))",
            borderColor: "rgba(16,185,129,0.15)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 items-center text-center">
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="text-2xl filter drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]">📅</span>
              <div className="sm:text-left">
                <p className="text-emerald-400 font-bold font-mono text-sm sm:text-base">120+ Days</p>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-semibold mt-0.5">Continuous Git Commit Stream</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-zinc-900 mx-auto" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="text-2xl filter drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]">⚡</span>
              <div className="sm:text-left">
                <p className="text-emerald-400 font-bold font-mono text-sm sm:text-base">100% Dedication</p>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-semibold mt-0.5">Focus & Absolute Build Consistency</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-zinc-900 mx-auto" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="text-2xl filter drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]">🎯</span>
              <div className="sm:text-left">
                <p className="text-emerald-400 font-bold font-mono text-sm sm:text-base">15+ Production Builds</p>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-semibold mt-0.5">Live Production Contexts</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;