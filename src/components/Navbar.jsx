import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      ["home", "about", "skills", "projects", "contact"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) setActive(id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleHireMeClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(2,8,6,0.97)" : "rgba(2,8,6,0.7)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(16,185,129,0.15)",
          boxShadow: scrolled ? "0 4px 30px rgba(16,185,129,0.06)" : "none",
        }}
      >
        {/* Changed py-4 to py-5 to increase height */}
        <div className="w-full px-8 md:px-16 py-5 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm transition-all duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg,#10b981,#059669)",
                boxShadow: "0 0 14px rgba(16,185,129,0.5)",
              }}
            >
              M
            </div>
            <span className="text-xl font-black text-white">
              Mahak{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#10b981,#34d399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                | Portfolio
              </span>
            </span>
          </a>

          {/* Desktop Center Links */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300"
                style={{
                  color: active === link.id ? "#10b981" : "#9ca3af",
                  background: active === link.id ? "rgba(16,185,129,0.1)" : "transparent",
                }}
              >
                {link.name}
                {active === link.id && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "#10b981" }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-3">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border"
              style={{
                background: "rgba(16,185,129,0.08)",
                borderColor: "rgba(16,185,129,0.25)",
                color: "#6ee7b7",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open for Work 💼
            </div>
            <button
              onClick={handleHireMeClick}
              className="px-5 py-2 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                background: "linear-gradient(135deg,#10b981,#059669)",
                boxShadow: "0 0 20px rgba(16,185,129,0.35)",
              }}
            >
              Hire Me ✨
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border"
              style={{
                background: "rgba(16,185,129,0.08)",
                borderColor: "rgba(16,185,129,0.2)",
                color: "#6ee7b7",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col gap-1.5 p-2 rounded-lg transition-all duration-300"
              style={{
                background: open ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.05)",
                border: "1px solid rgba(16,185,129,0.3)",
              }}
            >
              <span
                className="block w-5 h-0.5 rounded-full transition-all duration-300"
                style={{
                  background: "#10b981",
                  transform: open ? "rotate(45deg) translate(4px,4px)" : "none",
                }}
              />
              <span
                className="block w-5 h-0.5 rounded-full transition-all duration-300"
                style={{ background: "#10b981", opacity: open ? 0 : 1 }}
              />
              <span
                className="block w-5 h-0.5 rounded-full transition-all duration-300"
                style={{
                  background: "#10b981",
                  transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - top position adjusted slightly for new height */}
      {open && (
        <div
          className="md:hidden fixed top-[76px] left-0 w-full z-40 px-6 py-4"
          style={{
            background: "rgba(2,8,6,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(16,185,129,0.15)",
          }}
        >
          <div className="flex flex-col gap-1 mb-3">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300"
                style={{
                  color: active === link.id ? "#10b981" : "#9ca3af",
                  background: active === link.id ? "rgba(16,185,129,0.1)" : "transparent",
                  border: active === link.id ? "1px solid rgba(16,185,129,0.2)" : "1px solid transparent",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: active === link.id ? "#10b981" : "#4b5563" }}
                />
                {link.name}
              </a>
            ))}
          </div>
          
          <button
            onClick={handleHireMeClick}
            className="flex items-center justify-center w-full py-3 rounded-xl text-sm font-bold text-white cursor-pointer"
            style={{
              background: "linear-gradient(135deg,#10b981,#059669)",
              boxShadow: "0 0 20px rgba(16,185,129,0.3)",
            }}
          >
            Hire Me ✨
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;