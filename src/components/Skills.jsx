import React from "react";

function Skills() {
  const frontendSkills = [
    { name: "HTML5 / Semantic Markup", level: "Advanced", icon: "🌐", color: "#e34f26", width: "95%" },
    { name: "CSS3 / Modern Architecture", level: "Advanced", icon: "🎨", color: "#264de4", width: "90%" },
    { name: "JavaScript (ES6+ / DOM)", level: "Advanced", icon: "⚡", color: "#f7df1e", width: "88%" },
    { name: "React.js Ecosystem", level: "Expert", icon: "⚛️", color: "#61dafb", width: "85%" },
    { name: "Tailwind CSS / PostCSS", level: "Advanced", icon: "💨", color: "#38bdf8", width: "92%" },
    { name: "Bootstrap 5 / UI Frameworks", level: "Advanced", icon: "📦", color: "#7952b3", width: "85%" },
  ];

  const otherSkills = [
    { name: "SEO & Web Performance", level: "Advanced", icon: "🔍", color: "#10b981", width: "82%" },
    { name: "Figma UI/UX & Prototyping", level: "Intermediate", icon: "🎯", color: "#a259ff", width: "78%" },
    { name: "Responsive Mobile-First Design", level: "Expert", icon: "📱", color: "#34d399", width: "90%" },
    { name: "Git, GitHub & Version Control", level: "Advanced", icon: "🐙", color: "#f05032", width: "85%" },
  ];

  const skillTags = [
    "React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3", 
    "Bootstrap", "Git & GitHub", "RESTful APIs", "SEO Optimization", "Figma", 
    "Responsive Design", "VS Code", "Vite", "Performance Tuning"
  ];

  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-4 sm:px-12 md:px-16 lg:px-24 relative overflow-hidden bg-[#010403] text-white selection:bg-emerald-500/30"
    >
      {/* ─── CUSTOM ADVANCED STYLING ─── */}
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
        .animate-advanced-glow {
          animation: advancedPulse 8s ease-in-out infinite;
        }
      `}</style>

      {/* ─── AMBIENT BACKGROUND EFFECTS ─── */}
      <div className="absolute top-[-10%] right-[-5%] w-[350px] sm:w-[750px] h-[350px] sm:h-[750px] rounded-full bg-radial from-[#10b981]/15 via-transparent to-transparent blur-[140px] pointer-events-none mix-blend-screen z-0 animate-advanced-glow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full bg-radial from-[#34d399]/10 via-transparent to-transparent blur-[120px] pointer-events-none z-0 animate-advanced-glow" style={{ animationDelay: '-4s' }} />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/30 border border-emerald-500/30 mb-6 backdrop-blur-md shadow-lg shadow-emerald-950/50">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-300 text-[11px] font-bold tracking-widest uppercase">🚀 Technical Expertise & Stack</span>
          </div>
          
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
            style={{
              background: "linear-gradient(135deg, #ffffff 30%, #a7f3d0 70%, #10b981 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0px 15px 35px rgba(16,185,129,0.2))",
            }}
          >
            Engineering Capabilities
          </h2>
          <p className="text-zinc-400 mt-5 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Equipped with <span className="text-emerald-400 font-medium">14+ modern production tools</span> and scalable architecture frameworks. Built for absolute performance and seamless UI execution.
          </p>
        </div>

        {/* SKILLS MATRIX GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Frontend Development Block */}
          <div className="cyber-skill-card rounded-3xl p-6 sm:p-8 group">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-emerald-950/60">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
                💻
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-wide text-zinc-100">Frontend Engineering</h3>
                <p className="text-zinc-500 text-xs mt-0.5 font-light">Scalable components & reactive layouts</p>
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
                    <div>
                      <span
                        className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md border shadow-sm"
                        style={{ 
                          background: `${skill.color}15`, 
                          borderColor: `${skill.color}40`, 
                          color: skill.color 
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-zinc-950/80 rounded-full overflow-hidden border border-zinc-900/60 shadow-inner">
                    <div
                      className="h-full rounded-full transition-all duration-1200 ease-out glow-progress-bar"
                      style={{
                        width: skill.width,
                        background: `linear-gradient(90deg, ${skill.color}, #10b981)`,
                        "--bar-color": `${skill.color}70`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Capabilities Block */}
          <div className="cyber-skill-card rounded-3xl p-6 sm:p-8 group">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-emerald-950/60">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
                ⚡
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-wide text-zinc-100">Architecture & Tools</h3>
                <p className="text-zinc-500 text-xs mt-0.5 font-light">Performance optimization & design systems</p>
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
                    <div>
                      <span
                        className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md border shadow-sm"
                        style={{ 
                          background: `${skill.color}15`, 
                          borderColor: `${skill.color}40`, 
                          color: skill.color 
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-zinc-950/80 rounded-full overflow-hidden border border-zinc-900/60 shadow-inner">
                    <div
                      className="h-full rounded-full transition-all duration-1200 ease-out glow-progress-bar"
                      style={{
                        width: skill.width,
                        background: `linear-gradient(90deg, ${skill.color}, #34d399)`,
                        "--bar-color": `${skill.color}70`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TECH CLOUD COMPONENT */}
        <div className="mt-12 cyber-skill-card rounded-3xl p-6 sm:p-10 text-center">
          <p className="text-zinc-400 text-xs sm:text-sm font-light tracking-wide mb-6">
            📦 <span className="text-emerald-400 font-medium">Production Tech Ecosystem</span> — Fully integrated and actively deployed
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skillTags.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide text-emerald-300 transition-all duration-300 border border-emerald-900/40 bg-emerald-950/20 hover:border-emerald-500/60 hover:bg-emerald-500/15 hover:scale-105 cursor-default shadow-lg shadow-black/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* METRICS STREAK BANNER */}
        <div
          className="mt-8 rounded-3xl p-6 sm:p-8 border relative overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(2,8,6,0.5) 100%)",
            borderColor: "rgba(16,185,129,0.25)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 items-center text-center">
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <span className="text-3xl filter drop-shadow-[0_2px_10px_rgba(16,185,129,0.4)]">🚀</span>
              <div className="sm:text-left">
                <p className="text-emerald-400 font-black font-mono text-base sm:text-lg">Production Ready</p>
                <p className="text-zinc-400 text-[11px] uppercase tracking-wider font-medium mt-0.5">High Quality Code Standards</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-emerald-900/50 mx-auto" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <span className="text-3xl filter drop-shadow-[0_2px_10px_rgba(16,185,129,0.4)]">⚡</span>
              <div className="sm:text-left">
                <p className="text-emerald-400 font-black font-mono text-base sm:text-lg">Optimized UI</p>
                <p className="text-zinc-400 text-[11px] uppercase tracking-wider font-medium mt-0.5">Lightning Fast Render Speeds</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-emerald-900/50 mx-auto" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <span className="text-3xl filter drop-shadow-[0_2px_10px_rgba(16,185,129,0.4)]">🎯</span>
              <div className="sm:text-left">
                <p className="text-emerald-400 font-black font-mono text-base sm:text-lg">15+ Deployed Apps</p>
                <p className="text-zinc-400 text-[11px] uppercase tracking-wider font-medium mt-0.5">Real-World Scale Experience</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;