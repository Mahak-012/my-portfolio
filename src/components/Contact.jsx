import React, { useEffect, useRef, useState } from "react";

/* ---------------------------------- Icons ----------------------------------- */

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
    <path d="m4 12.5 5 5L20 6.5" />
  </svg>
);

/* ---------------------------------- Data ----------------------------------- */

const EMAIL = "mahakmimi01@gmail.com";

const SOCIALS = [
  { name: "LinkedIn", icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/mahak-webdev/" },
  { name: "GitHub", icon: <GitHubIcon />, link: "https://github.com/Mahak-012" },
  { name: "Instagram", icon: <InstagramIcon />, link: "https://www.instagram.com/mahak_codes22" },
];

const CONTACT_INFO = [
  { icon: "📧", label: "Email", value: EMAIL, copyable: true },
  { icon: "📍", label: "Location", value: "Lahore, Pakistan" },
  { icon: "💼", label: "Open for", value: "Freelance Projects" },
  { icon: "⚡", label: "Response Time", value: "Usually < 24 hours" },
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

/* --------------------------------- Contact ----------------------------------- */

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "" | sending | success | error
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [headRef, headInView] = useInView(0.3);
  const [leftRef, leftInView] = useInView(0.2);
  const [formRef, formInView] = useInView(0.15);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors((p) => ({ ...p, [e.target.name]: false }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = true;
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) next.email = true;
    if (!formData.message.trim()) next.message = true;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mrededwl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 6000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 4000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300";

  const okState = {
    background: "rgba(16,185,129,0.05)",
    border: "1px solid rgba(16,185,129,0.2)",
    color: "#e5e5e5",
  };
  const errState = {
    background: "rgba(16,185,129,0.05)",
    border: "1px solid rgba(248,113,113,0.6)",
    color: "#e5e5e5",
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 px-6 sm:px-10 md:py-28 md:px-14 lg:px-20"
      style={{ background: "#020806" }}
    >
      <style>{`
        @keyframes blink { 50% { border-color: transparent; } }
        @keyframes contactSpin { to { transform: rotate(360deg); } }
        @keyframes drawCheck { to { stroke-dashoffset: 0; } }
        @keyframes successPop {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.08); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes contactBlobA {
          0%, 100% { transform: translate(0,0) scale(1); opacity: 0.5; }
          50% { transform: translate(40px, -30px) scale(1.15); opacity: 0.8; }
        }
        @keyframes contactBlobB {
          0%, 100% { transform: translate(0,0) scale(1); opacity: 0.4; }
          50% { transform: translate(-35px, 25px) scale(1.1); opacity: 0.7; }
        }
        .contact-blob-a { animation: contactBlobA 14s ease-in-out infinite; }
        .contact-blob-b { animation: contactBlobB 18s ease-in-out infinite; }
        .check-path {
          stroke-dasharray: 30;
          stroke-dashoffset: 30;
          animation: drawCheck 0.5s ease-out 0.2s forwards;
        }
        .contact-card-spot {
          background: radial-gradient(
            340px circle at var(--mx, 50%) var(--my, 50%),
            rgba(16, 185, 129, 0.07),
            transparent 65%
          );
        }
        .contact-input:focus {
          border-color: rgba(52, 211, 153, 0.6) !important;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.12), 0 0 20px rgba(16, 185, 129, 0.08);
        }
        @media (prefers-reduced-motion: reduce) {
          .contact-blob-a, .contact-blob-b { animation: none !important; }
        }
      `}</style>

      {/* Ambient blobs */}
      <div
        className="contact-blob-a pointer-events-none absolute -top-20 -left-20 h-[350px] w-[350px] rounded-full blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.1), transparent 70%)" }}
      />
      <div
        className="contact-blob-b pointer-events-none absolute -bottom-20 -right-20 h-[320px] w-[320px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(4,120,87,0.12), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl">

        {/* ─── Section Heading ─── */}
        <div
          ref={headRef}
          className={`mb-12 flex flex-col items-center text-center transition-all duration-700 ease-out md:mb-16 ${
            headInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-emerald-500">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-emerald-500" />
            <span>// Contact</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-emerald-500" />
          </div>

          <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">
            <span
              className="inline-block pb-2"
              style={{
                background: "linear-gradient(135deg,#10b981,#6ee7b7,#10b981)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get In Touch
            </span>
          </h2>

          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_14px_rgba(16,185,129,0.6)]" />

          <p className="mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
            Have a project in mind? Let&apos;s work together —{" "}
            <span className="text-emerald-300">I&apos;m just a message away!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

          {/* ══════════════ LEFT — Info Panel ══════════════ */}
          <div
            ref={leftRef}
            className={`contact-card group relative overflow-hidden rounded-2xl border p-6 transition-all duration-700 ease-out md:p-8 ${
              leftInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{
              background: "rgba(16,185,129,0.02)",
              borderColor: "rgba(16,185,129,0.12)",
              transitionDelay: REDUCED_MOTION ? "0s" : "120ms",
            }}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
              e.currentTarget.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
            }}
          >
            {/* Cursor spotlight */}
            <div className="contact-card-spot pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              {/* Availability status */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-950/40 px-3 py-1.5 font-mono text-[10px] tracking-widest text-emerald-300 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                AVAILABLE FOR WORK
              </div>

              <h3 className="text-xl font-bold md:text-2xl" style={{ color: "#34d399" }}>
                Let&apos;s Talk 👋
              </h3>

              <p className="mb-6 mt-3 text-sm leading-relaxed text-gray-400">
                I&apos;m currently available for freelance projects.
                Feel free to reach out — I&apos;d love to hear from you!
              </p>

              {/* Contact details */}
              <div className="mb-8 space-y-4">
                {CONTACT_INFO.map((item, i) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3"
                    style={{
                      opacity: leftInView ? 1 : 0,
                      transform: leftInView ? "translateX(0)" : "translateX(-14px)",
                      transition: REDUCED_MOTION ? "none" : `all 0.5s ease ${0.2 + i * 0.1}s`,
                    }}
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover/item:scale-110"
                      style={{
                        background: "rgba(16,185,129,0.08)",
                        border: "1px solid rgba(16,185,129,0.15)",
                        boxShadow: "0 0 12px rgba(16,185,129,0.08)",
                      }}
                    >
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="truncate text-sm text-gray-300">{item.value}</p>
                    </div>
                    {item.copyable && (
                      <button
                        onClick={copyEmail}
                        aria-label="Copy email"
                        className={`ml-auto flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[10px] font-medium transition-all duration-300 ${
                          copied
                            ? "border-emerald-400/50 bg-emerald-500/15 text-emerald-300"
                            : "border-emerald-500/20 bg-emerald-950/40 text-emerald-400/80 hover:border-emerald-400/50 hover:text-emerald-300"
                        }`}
                      >
                        {copied ? <CheckIcon /> : <CopyIcon />}
                        {copied ? "Copied" : "Copy"}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="border-t border-emerald-500/10 pt-6">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-emerald-600">
                  // connect with me
                </p>
                <div className="flex gap-3">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="flex h-11 w-11 items-center justify-center rounded-xl text-emerald-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-emerald-300 hover:shadow-[0_0_22px_rgba(16,185,129,0.35)]"
                      style={{
                        background: "rgba(16,185,129,0.08)",
                        border: "1px solid rgba(16,185,129,0.2)",
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════ RIGHT — Form (terminal-style) ══════════════ */}
          <div
            ref={formRef}
            className={`transition-all duration-700 ease-out ${
              formInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: REDUCED_MOTION ? "0s" : "220ms" }}
          >
            <div
              className="group relative overflow-hidden rounded-2xl border"
              style={{
                background: "rgba(16,185,129,0.02)",
                borderColor: "rgba(16,185,129,0.12)",
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
                    ~/send_message.sh
                  </span>
                </div>
                <span className="flex items-center gap-1.5 font-mono text-[8px] tracking-widest text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  ONLINE
                </span>
              </div>

              {status === "success" ? (
                /* ─────────────── SUCCESS STATE ─────────────── */
                <div className="flex min-h-[420px] flex-col items-center justify-center px-8 py-12 text-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/15"
                    style={{
                      animation: REDUCED_MOTION ? "none" : "successPop 0.5s ease-out",
                      boxShadow: "0 0 40px rgba(16,185,129,0.3)",
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                      <path className="check-path" d="m4 12.5 5 5L20 6.5" />
                    </svg>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    Message Sent! 🎉
                  </h3>
                  <p className="mt-2 max-w-xs text-sm font-light leading-relaxed text-gray-400">
                    Thanks for reaching out — I&apos;ll get back to you within{" "}
                    <span className="text-emerald-300">24 hours</span>.
                  </p>

                  <div className="mt-6 rounded-lg border border-emerald-500/20 bg-emerald-950/40 px-4 py-2 font-mono text-[10px] tracking-widest text-emerald-500">
                    $ status: delivered ✓
                  </div>
                </div>
              ) : (
                /* ─────────────── FORM ─────────────── */
                <form onSubmit={handleSubmit} noValidate className="space-y-5 p-6 md:p-8">
                  <h3 className="text-xl font-bold md:text-2xl" style={{ color: "#34d399" }}>
                    Send Me a Message 💬
                  </h3>

                  {/* Name */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="font-mono text-[11px] uppercase tracking-wider text-gray-400">
                        Your Name
                      </label>
                      {errors.name && (
                        <span className="text-[11px] font-medium text-red-400">required</span>
                      )}
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`contact-input ${inputBase}`}
                      style={errors.name ? errState : okState}
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="font-mono text-[11px] uppercase tracking-wider text-gray-400">
                        Email Address
                      </label>
                      {errors.email && (
                        <span className="text-[11px] font-medium text-red-400">
                          valid email required
                        </span>
                      )}
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`contact-input ${inputBase}`}
                      style={errors.email ? errState : okState}
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="font-mono text-[11px] uppercase tracking-wider text-gray-400">
                        Message
                      </label>
                      <span className="font-mono text-[10px] text-emerald-700">
                        {formData.message.length} / 500
                      </span>
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={500}
                      rows="4"
                      className={`contact-input ${inputBase} resize-none`}
                      style={errors.message ? errState : okState}
                      placeholder="Hi Mahak, I'd love to work with you..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group/btn relative w-full overflow-hidden rounded-xl py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
                    style={{
                      background: "linear-gradient(135deg,#10b981,#059669)",
                      boxShadow: "0 0 24px rgba(16,185,129,0.3)",
                    }}
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full skew-x-[-12deg]" />
                    <span className="relative flex items-center justify-center gap-2">
                      {status === "sending" && (
                        <>
                          <span
                            className="h-4 w-4 rounded-full border-2 border-emerald-300/50 border-t-white"
                            style={{ animation: "contactSpin 0.7s linear infinite" }}
                          />
                          Sending...
                        </>
                      )}
                      {status === "error" && "Error! Try Again ❌"}
                      {status === "" && (
                        <>
                          Send Message
                          <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                        </>
                      )}
                    </span>
                  </button>

                  {status === "error" && (
                    <p className="text-center text-xs text-red-400">
                      Oops! Something went wrong. Please try again or email me directly.
                    </p>
                  )}

                  <p className="text-center font-mono text-[10px] tracking-widest text-emerald-800">
                    SECURE · DIRECT TO MY INBOX · NO SPAM EVER
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;