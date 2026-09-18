import { useState, useEffect } from "react";

/* ---------------------------------- Data ----------------------------------- */

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const NAV_OFFSET = 80; // scroll karne par section itna upar se start hoga

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");

  /* Scroll: shrink + progress bar + scroll-spy */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);

      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);

      let current = "home";
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= NAV_OFFSET + 40) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Mobile menu: body scroll lock + ESC close */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /* ✅ Smooth scroll with navbar offset — section heading navbar ke peeche nahi chhup */
  const goTo = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleHireMeClick = (e) => {
    goTo(e, "contact");
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        section[id] { scroll-margin-top: 84px; }
        @keyframes navBlink { 50% { opacity: 0.35; } }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          * { animation: none !important; }
        }
      `}</style>

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(2,8,6,0.95)" : "rgba(2,8,6,0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(16,185,129,0.15)",
          boxShadow: scrolled ? "0 4px 30px rgba(16,185,129,0.06)" : "none",
        }}
      >
        {/* ✨ Top hairline glow — scroll pe */}
        <div
          className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 transition-opacity duration-700"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.6), transparent)",
            opacity: scrolled ? 1 : 0,
          }}
        />

        {/* ✨ Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] transition-[width] duration-150 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #10b981, #34d399, #6ee7b7)",
            boxShadow: "0 0 10px rgba(16,185,129,0.6)",
          }}
        />

        <div className="flex w-full items-center justify-between px-5 py-4 md:px-16 md:py-5">

          {/* Logo */}
          <a
            href="#home"
            onClick={handleLogoClick}
            className="group flex items-center gap-2"
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
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

          {/* Desktop Center Links — slash accent ke saath */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => goTo(e, link.id)}
                  className="group relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300"
                  style={{
                    color: isActive ? "#10b981" : "#9ca3af",
                    background: isActive ? "rgba(16,185,129,0.1)" : "transparent",
                  }}
                >
                  {/* Slash accent — hover/active pe emerald */}
                  <span
                    className="mr-1.5 font-mono text-[9px] align-middle transition-colors duration-300"
                    style={{
                      color: isActive ? "#10b981" : "rgba(16,185,129,0.35)",
                    }}
                  >
                    /
                  </span>
                  {link.name}

                  {/* Underline — hover pe slide in */}
                  <span
                    className="absolute bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                    style={{ width: isActive ? "60%" : "0%" }}
                    onMouseEnter={(e) => e.target.style.width = "60%"}
                    onMouseLeave={(e) => e.target.style.width = isActive ? "60%" : "0%"}
                  />

                  {/* Active dot */}
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
                      style={{ background: "#10b981", boxShadow: "0 0 8px rgba(16,185,129,0.8)" }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Right */}
          <div className="hidden items-center gap-3 md:flex">
            <div
              className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
              style={{
                background: "rgba(16,185,129,0.08)",
                borderColor: "rgba(16,185,129,0.25)",
                color: "#6ee7b7",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"
                  style={{ animation: "navBlink 1.6s ease-in-out infinite" }}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              Open for Work 💼
            </div>

            {/* ✨ Hire Me — shine sweep */}
            <button
              onClick={handleHireMeClick}
              className="group relative overflow-hidden rounded-xl px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-pointer"
              style={{
                background: "linear-gradient(135deg,#10b981,#059669)",
                boxShadow: "0 0 20px rgba(16,185,129,0.35)",
              }}
            >
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                style={{ transform: "skewX(-12deg)" }}
              />
              <span className="relative">Hire Me ✨</span>
            </button>
          </div>

          {/* Mobile — Open badge + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <div
              className="flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs"
              style={{
                background: "rgba(16,185,129,0.08)",
                borderColor: "rgba(16,185,129,0.2)",
                color: "#6ee7b7",
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"
                  style={{ animation: "navBlink 1.6s ease-in-out infinite" }}
                />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
              </span>
              Open
            </div>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
              aria-expanded={open}
              className="flex flex-col gap-1.5 rounded-lg p-2 transition-all duration-300"
              style={{
                background: open ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.05)",
                border: "1px solid rgba(16,185,129,0.3)",
              }}
            >
              <span
                className="block h-0.5 w-5 rounded-full transition-all duration-300"
                style={{
                  background: "#10b981",
                  transform: open ? "rotate(45deg) translate(4px,4px)" : "none",
                }}
              />
              <span
                className="block h-0.5 w-5 rounded-full transition-all duration-300"
                style={{ background: "#10b981", opacity: open ? 0 : 1 }}
              />
              <span
                className="block h-0.5 w-5 rounded-full transition-all duration-300"
                style={{
                  background: "#10b981",
                  transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════ MOBILE MENU — always mounted, smooth open/close ══════════ */}
      <div
        className={`fixed left-0 top-[76px] z-40 w-full px-5 py-4 transition-all duration-400 md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
        style={{
          background: "rgba(2,8,6,0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(16,185,129,0.15)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
        }}
        aria-hidden={!open}
      >
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "rgba(16,185,129,0.08)" }}
        />

        <div className="relative mb-3 flex flex-col gap-1">
          {links.map((link, i) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => goTo(e, link.id)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300"
                style={{
                  color: isActive ? "#10b981" : "#9ca3af",
                  background: isActive ? "rgba(16,185,129,0.1)" : "transparent",
                  border: isActive ? "1px solid rgba(16,185,129,0.2)" : "1px solid transparent",
                  /* ✨ Staggered slide-in */
                  opacity: open ? 1 : 0,
                  transform: open ? "translateX(0)" : "translateX(-16px)",
                  transition: `opacity 0.35s ease ${i * 0.06}s, transform 0.35s cubic-bezier(0.22,1,0.36,1) ${i * 0.06}s, background 0.3s ease, color 0.3s ease, border-color 0.3s ease`,
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full transition-all duration-300"
                  style={{
                    background: isActive ? "#10b981" : "#4b5563",
                    boxShadow: isActive ? "0 0 8px rgba(16,185,129,0.8)" : "none",
                  }}
                />
                {link.name}

                {/* Number accent */}
                <span
                  className="ml-auto font-mono text-[10px]"
                  style={{ color: isActive ? "#10b981" : "#374151" }}
                >
                  0{i + 1}
                </span>
              </a>
            );
          })}
        </div>

        {/* Hire Me — mobile */}
        <button
          onClick={handleHireMeClick}
          className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl py-3 text-sm font-bold text-white"
          style={{
            background: "linear-gradient(135deg,#10b981,#059669)",
            boxShadow: "0 0 20px rgba(16,185,129,0.3)",
            /* Stagger — links ke baad */
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(10px)",
            transition: `opacity 0.35s ease ${0.32}s, transform 0.35s cubic-bezier(0.22,1,0.36,1) ${0.32}s`,
          }}
        >
          <span
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            style={{ transform: "skewX(-12deg)" }}
          />
          <span className="relative">Hire Me ✨</span>
        </button>

        {/* Footer note */}
        <div
          className="mt-4 text-center font-mono text-[9px] tracking-[0.25em]"
          style={{
            color: "rgba(16,185,129,0.35)",
            opacity: open ? 1 : 0,
            transition: `opacity 0.4s ease ${0.42}s`,
          }}
        >
          MAHAK // PRODUCTION-READY ENGINEERING
        </div>
      </div>
    </>
  );
}

export default Navbar;