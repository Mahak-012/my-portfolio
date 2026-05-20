import React, { useState } from "react";

function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      category: "react",
      tech: ["React", "Tailwind CSS", "Context API"],
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.",
      image: "🛒",
      liveLink: "https://e-commerce-app-eta-dun.vercel.app/",
      githubLink: "https://github.com/Mahak-012/e-commerce-app",
    },
    {
      id: 2,
      title: "Movie Search App",
      category: "react",
      tech: ["React", "REST API", "Tailwind CSS"],
      description: "A dynamic app to search for movies, view details, and ratings using a real-time movie database API.",
      image: "🎬",
      liveLink: "https://movie-search-app-pi-neon.vercel.app/",
      githubLink: "https://github.com/Mahak-012/movie-search-app",
    },
    {
      id: 3,
      title: "Institute Website",
      category: "html-css",
      tech: ["HTML5", "CSS3", "JavaScript"],
      description: "A professional and responsive website for an educational institute with courses and contact details.",
      image: "🏫",
      liveLink: "https://techstem-technologies.vercel.app/",
      githubLink: "https://github.com/Mahak-012/Techstem-Technologies",
    },
    {
      id: 4,
      title: "Online Course Landing Page",
      category: "html-css",
      tech: ["HTML5", "Tailwind CSS", "Responsive Design"],
      description: "A modern, high-converting landing page for an online course with smooth scroll and appealing UI.",
      image: "📚",
      liveLink: "https://online-course-landing-page-eight.vercel.app/",
      githubLink: "https://github.com/Mahak-012/online-course-landing-page",
    },
    {
      id: 5,
      title: "To Do App (Mobile)",
      category: "react",
      tech: ["React Native", "Expo", "AsyncStorage"],
      description: "A cross-platform mobile task manager with categories, stats, and theme toggle. Available on GitHub for mobile testing.",
      image: "📱",
      liveLink: "#",
      githubLink: "https://github.com/Mahak-012/My-TO-DO-App",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "react", label: "React" },
    { id: "html-css", label: "HTML/CSS" },
    { id: "js", label: "JavaScript" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-6 sm:px-10 md:px-14 lg:px-20"
      style={{ background: "linear-gradient(135deg,#020806 0%, #03120a 50%, #020806 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black inline-block pb-3"
            style={{
              background: "linear-gradient(135deg,#10b981,#34d399)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My Projects
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-sm max-w-2xl mx-auto">
            Some of my best work — built with passion and modern technologies
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300"
              style={{
                background: filter === f.id 
                  ? "linear-gradient(135deg,#10b981,#059669)" 
                  : "rgba(16,185,129,0.08)",
                border: filter === f.id 
                  ? "none" 
                  : "1px solid rgba(16,185,129,0.2)",
                color: filter === f.id ? "white" : "#6ee7b7",
                boxShadow: filter === f.id ? "0 0 15px rgba(16,185,129,0.3)" : "none",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: "rgba(16,185,129,0.02)",
                borderColor: "rgba(16,185,129,0.12)",
                boxShadow: "0 0 30px rgba(16,185,129,0.05)",
              }}
            >
              {/* Project Image / Icon */}
              <div
                className="h-40 flex items-center justify-center text-7xl transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(16,185,129,0.05)",
                  borderBottom: "1px solid rgba(16,185,129,0.1)",
                }}
              >
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-5 md:p-6">
                <h3
                  className="text-lg md:text-xl font-bold mb-2 transition-colors duration-300"
                  style={{ color: "#34d399" }}
                >
                  {project.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium"
                      style={{
                        background: "rgba(16,185,129,0.1)",
                        color: "#6ee7b7",
                        border: "1px solid rgba(16,185,129,0.15)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (project.liveLink === "#") {
                        e.preventDefault();
                        alert("📱 This is a Mobile App! Available for testing on mobile devices. Check the GitHub repo for instructions.");
                      }
                    }}
                    className="flex-1 text-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg,#10b981,#059669)",
                      color: "white",
                    }}
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 border"
                    style={{
                      color: "#10b981",
                      borderColor: "rgba(16,185,129,0.4)",
                      background: "rgba(16,185,129,0.05)",
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newly Started Work Note */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm italic">
            ✨ Newly started work — more projects will be added with the passage of time!
          </p>
        </div>

        {/* View More Button */}
        <div className="text-center mt-6 md:mt-8">
          <a
            href="https://github.com/Mahak-012?tab=repositories" // Updated link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 border"
            style={{
              color: "#10b981",
              borderColor: "rgba(16,185,129,0.4)",
              background: "rgba(16,185,129,0.05)",
            }}
          >
            View All Projects on GitHub
            <span>🚀</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;