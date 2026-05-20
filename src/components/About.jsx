import React from "react";

function About() {
  const growthMetrics = [
    { emoji: "📈", stat: "15+", label: "Projects in 4 Months" },
    { emoji: "⚡", stat: "4", label: "Skills Mastered" },
    { emoji: "🎯", stat: "100%", label: "Dedication" },
    { emoji: "🚀", stat: "2x", label: "Growth Rate" },
  ];

  const monthlyProgress = [
    { month: "Month 1", progress: "100%", label: "HTML, CSS, Bootstrap", done: true },
    { month: "Month 2", progress: "100%", label: "JavaScript, Tailwind", done: true },
    { month: "Month 3", progress: "100%", label: "React Basics + Projects", done: true },
    { month: "Month 4", progress: "75%", label: "Advanced React + SEO", done: false },
  ];

  const tools = [
    "React", "Tailwind", "JavaScript", "HTML5", "CSS3", 
    "Bootstrap", "Git", "SEO", "Figma"
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6 sm:px-10 md:px-14 lg:px-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#020806 0%, #03120a 50%, #020806 100%)" }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#10b981" }}
      />
      <div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#34d399" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 text-xs font-medium tracking-wide">⚡ 4 MONTHS JOURNEY</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black"
            style={{
              background: "linear-gradient(135deg,#10b981,#34d399,#6ee7b7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            From Zero to Web Dev
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-sm max-w-2xl mx-auto">
            4 months of focus. 15+ projects. Zero shortcuts.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* Left Side - Story + Progress */}
          <div className="space-y-6">
            {/* Powerful Intro - UPDATED STORY */}
            <div
              className="rounded-2xl p-6 border backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "rgba(16,185,129,0.04)",
                borderColor: "rgba(16,185,129,0.2)",
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="text-5xl">⚡</div>
                <div>
                  <p className="text-gray-400 text-xs tracking-wide mb-1">THE STORY</p>
                  <p className="text-white text-lg font-bold leading-tight">
                    I'm <span className="text-emerald-400">Mahak</span> — and I craft 
                    <span className="text-emerald-400"> ultra-clean UIs.</span>
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                No CS degree. No shortcuts. Just <span className="text-emerald-400 font-semibold">4 months of relentless consistency</span>. 
                From absolute zero to designing <span className="text-emerald-400 font-semibold">ultra-clean, lightning-fast user interfaces</span>. 
                I don't just build websites; I craft smooth, high-speed experiences that users love, using React, Tailwind, and a sharp eye for detail.
              </p>
            </div>

            {/* Monthly Progress Timeline */}
            <div
              className="rounded-2xl p-6 border"
              style={{
                background: "rgba(16,185,129,0.02)",
                borderColor: "rgba(16,185,129,0.12)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📅</span>
                <h3 className="text-emerald-400 font-bold tracking-wide">4-Month Sprint (No Breaks)</h3>
              </div>
              <div className="space-y-4">
                {monthlyProgress.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-300 font-medium">{item.month}</span>
                      <span className="text-emerald-400 text-[10px]">{item.progress}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: item.progress,
                          background: item.done 
                            ? "linear-gradient(90deg,#10b981,#34d399)" 
                            : "linear-gradient(90deg,#f59e0b,#fbbf24)"
                        }}
                      />
                    </div>
                    <p className="text-gray-500 text-[11px] mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-gray-800">
                <p className="text-emerald-400 text-xs font-medium">🎯 Next: Advanced React + Backend Basics</p>
              </div>
            </div>

            {/* Consistency Proof */}
            <div
              className="rounded-2xl p-6 border"
              style={{
                background: "rgba(16,185,129,0.02)",
                borderColor: "rgba(16,185,129,0.12)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💪</span>
                <h3 className="text-emerald-400 font-bold">Consistency Log</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 rounded-lg bg-emerald-500/5">
                  <p className="text-emerald-400 font-bold text-lg">120+</p>
                  <p className="text-gray-500 text-[10px]">Days of Coding</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-emerald-500/5">
                  <p className="text-emerald-400 font-bold text-lg">100%</p>
                  <p className="text-gray-500 text-[10px]">Commitment</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-emerald-500/5">
                  <p className="text-emerald-400 font-bold text-lg">15+</p>
                  <p className="text-gray-500 text-[10px]">Projects Built</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-emerald-500/5">
                  <p className="text-emerald-400 font-bold text-lg">0</p>
                  <p className="text-gray-500 text-[10px]">Days Missed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Metrics + Tools */}
          <div className="space-y-6">
            {/* Growth Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {growthMetrics.map((item) => (
                <div
                  key={item.label}
                  className="text-center p-4 rounded-2xl border transition-all duration-300 hover:scale-105 hover:border-emerald-500/30 group"
                  style={{
                    background: "rgba(16,185,129,0.04)",
                    borderColor: "rgba(16,185,129,0.15)",
                  }}
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{item.emoji}</div>
                  <div className="text-xl font-black text-emerald-400">{item.stat}</div>
                  <div className="text-xs text-gray-500 mt-1 leading-tight">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Skills Stack */}
            <div
              className="rounded-2xl p-6 border"
              style={{
                background: "rgba(16,185,129,0.03)",
                borderColor: "rgba(16,185,129,0.12)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🛠️</span>
                <h3 className="text-emerald-400 font-bold">Tech Stack (4 Months)</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300 hover:scale-105 hover:bg-emerald-500/10"
                    style={{
                      background: "rgba(16,185,129,0.05)",
                      borderColor: "rgba(16,185,129,0.15)",
                      color: "#d1d5db",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* What I Can Do For You - UPDATED */}
            <div
              className="rounded-2xl p-6 border"
              style={{
                background: "rgba(16,185,129,0.02)",
                borderColor: "rgba(16,185,129,0.1)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💎</span>
                <h3 className="text-emerald-400 font-bold">What I Bring to the Table</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-sm">✓</span>
                  <span className="text-gray-400 text-sm">Ultra-clean, modern, and responsive UIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-sm">✓</span>
                  <span className="text-gray-400 text-sm">Lightning-fast website performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-sm">✓</span>
                  <span className="text-gray-400 text-sm">Unmatched consistency and focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-sm">✓</span>
                  <span className="text-gray-400 text-sm">SEO-friendly code architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-sm">✓</span>
                  <span className="text-gray-400 text-sm">Ready to contribute from day one</span>
                </div>
              </div>
            </div>

            {/* Power Statement */}
            <div
              className="rounded-2xl p-6 border relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(16,185,129,0.02))",
                borderColor: "rgba(16,185,129,0.25)",
              }}
            >
              <div className="absolute -top-3 -right-3 text-7xl opacity-10 text-emerald-400">🚀</div>
              <p className="text-gray-200 text-sm font-medium leading-relaxed relative z-10">
                "In <span className="text-emerald-400 font-bold">4 months</span>, I did what takes most people 2 years. 
                Not because I'm special — because I'm <span className="text-emerald-400 font-bold">consistent</span>. 
                Imagine what I can build for you in the next <span className="text-emerald-400 font-bold">4 months.</span>"
              </p>
              <div className="flex items-center gap-2 mt-4 relative z-10">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-sm">⚡</span>
                </div>
                <div>
                  <p className="text-emerald-400 text-xs font-bold">Mahak</p>
                  <p className="text-gray-500 text-[10px]">Clean UI | Fast Performance | Consistent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;