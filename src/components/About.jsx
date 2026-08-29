import React from "react";

function About() {
  const growthMetrics = [
    { emoji: "📈", stat: "20+", label: "Projects Completed" },
    { emoji: "⚡", stat: "6+", label: "Core Technologies" },
    { emoji: "🎯", stat: "100%", label: "Client/User Focus" },
    { emoji: "🚀", stat: "2x", label: "Speed & Performance" },
  ];

  const coreStrengths = [
    { title: "Modern Frontend", desc: "Building highly interactive and reactive interfaces using React.js and modern JavaScript." },
    { title: "Responsive & Clean UI", desc: "Crafting pixel-perfect, mobile-first designs with Tailwind CSS and custom layouts." },
    { title: "Performance Optimization", desc: "Writing clean code focused on fast loading speeds, smooth animations, and best practices." },
    { title: "Continuous Learning", desc: "Constantly upgrading skills, exploring new libraries, and adapting to modern web standards." },
  ];

  const tools = [
    "React", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3", 
    "Bootstrap", "Git & GitHub", "REST APIs", "SEO & Optimization", "Figma"
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
            <span className="text-emerald-400 text-xs font-medium tracking-wide">💡 ABOUT ME</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black"
            style={{
              background: "linear-gradient(135deg,#10b981,#34d399,#6ee7b7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Crafting Digital Experiences
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-sm max-w-2xl mx-auto">
            Passionate Frontend Developer dedicated to building clean, scalable, and user-centric web applications.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* Left Side - Story + Core Strengths */}
          <div className="space-y-6">
            {/* Powerful Intro */}
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
                  <p className="text-gray-400 text-xs tracking-wide mb-1">WHO I AM</p>
                  <p className="text-white text-lg font-bold leading-tight">
                    Hi, I'm <span className="text-emerald-400">Mahak</span> — Frontend Developer
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                I specialize in turning complex design ideas into seamless, high-performance web applications. 
                With a deep focus on <span className="text-emerald-400 font-semibold">React.js, Tailwind CSS, and modern UI/UX principles</span>, 
                I build products that not only look incredible but also offer lightning-fast responsiveness and smooth user experiences. 
                Every line of code I write is driven by a passion for cleanliness, scalability, and efficiency.
              </p>
            </div>

            {/* Core Strengths Grid */}
            <div
              className="rounded-2xl p-6 border"
              style={{
                background: "rgba(16,185,129,0.02)",
                borderColor: "rgba(16,185,129,0.12)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🎯</span>
                <h3 className="text-emerald-400 font-bold tracking-wide">Core Expertise</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreStrengths.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                    <h4 className="text-emerald-300 font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Metrics + Tools + Power Statement */}
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
                <h3 className="text-emerald-400 font-bold">Tech Stack & Tools</h3>
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
                "Development isn't just about writing code; it's about solving real problems and delivering exceptional experiences. 
                Always excited to take on new challenges and build products that stand out."
              </p>
              <div className="flex items-center gap-2 mt-4 relative z-10">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-sm">⚡</span>
                </div>
                <div>
                  <p className="text-emerald-400 text-xs font-bold">Mahak</p>
                  <p className="text-gray-500 text-[10px]">Frontend Developer | React & Tailwind Enthusiast</p>
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