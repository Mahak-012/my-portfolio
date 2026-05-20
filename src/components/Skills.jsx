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
      className="py-20 md:py-28 px-6 sm:px-10 md:px-14 lg:px-20 relative overflow-hidden"
      style={{ background: "#020806" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#10b981" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#34d399" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 text-xs font-medium tracking-wide">⚡ 4 MONTHS MASTERY</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black"
            style={{
              background: "linear-gradient(135deg,#10b981,#34d399,#6ee7b7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My Tech Arsenal
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-sm max-w-2xl mx-auto">
            4 months. 14+ tools. 15+ projects. From zero to confident developer. {/* Changed 10+ to 14+ */}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Frontend Development Card */}
          <div
            className="rounded-2xl p-6 md:p-8 border group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            style={{
              background: "rgba(16,185,129,0.03)",
              borderColor: "rgba(16,185,129,0.15)",
            }}
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                💻
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Frontend Development</h3>
                <p className="text-gray-500 text-xs">4 months of focused learning</p>
              </div>
            </div>

            <div className="space-y-5">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-gray-300 font-medium text-sm">
                        {skill.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 text-sm font-bold">
                        {skill.level}%
                      </span>
                      <span
                        className="text-xs px-1.5 py-0.5 rounded"
                        style={{ background: `${skill.color}20`, color: skill.color }}
                      >
                        {skill.level >= 80 ? "Advanced" : "Intermediate"}
                      </span>
                    </div>
                  </div>
                  <div
                    className="w-full h-2 rounded-full overflow-hidden"
                    style={{ background: "rgba(16,185,129,0.1)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, #10b981)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills Card */}
          <div
            className="rounded-2xl p-6 md:p-8 border group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            style={{
              background: "rgba(16,185,129,0.03)",
              borderColor: "rgba(16,185,129,0.15)",
            }}
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                🚀
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Other Skills</h3>
                <p className="text-gray-500 text-xs">Beyond just coding</p>
              </div>
            </div>

            <div className="space-y-5">
              {otherSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-gray-300 font-medium text-sm">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-emerald-400 text-sm font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full h-2 rounded-full overflow-hidden"
                    style={{ background: "rgba(16,185,129,0.1)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, #10b981)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Tags Cloud */}
        <div
          className="mt-10 rounded-2xl p-6 md:p-8 text-center border"
          style={{
            background: "rgba(16,185,129,0.02)",
            borderColor: "rgba(16,185,129,0.1)",
          }}
        >
          <p className="text-gray-400 text-sm mb-4">
            📦 <span className="text-emerald-400">14+ Tools & Technologies</span> — Mastered in 4 Months
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {skillTags.map((tech, idx) => (
              <span
                key={tech}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-110 cursor-default animate-fadeIn"
                style={{
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  color: "#6ee7b7",
                  animationDelay: `${idx * 50}ms`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Consistency Banner - UPDATED */}
        <div
          className="mt-8 rounded-2xl p-5 border text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(16,185,129,0.06), rgba(16,185,129,0.01))",
            borderColor: "rgba(16,185,129,0.15)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent"></div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📅</span>
              <div>
                <p className="text-emerald-400 font-bold text-sm">120+ Days</p>
                <p className="text-gray-500 text-[10px]">Consistent Coding</p>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-800 hidden sm:block"></div>
            {/* Changed from 1000+ Hours to 100% Dedication */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="text-emerald-400 font-bold text-sm">100% Dedication</p>
                <p className="text-gray-500 text-[10px]">Focus & Consistency</p>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-800 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="text-emerald-400 font-bold text-sm">15+ Projects</p>
                <p className="text-gray-500 text-[10px]">Real-World Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;