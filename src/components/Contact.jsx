import React, { useState } from "react";


const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// GitHub ka Asli Logo (SVG)
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mrededwl", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 4000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    }
  };

  // Emojis ki jagah Asli SVG Icons use kar rahe hain
  const socialLinks = [
    { name: "LinkedIn", icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/mahak-webdev/" },
    { name: "GitHub", icon: <GitHubIcon />, link: "https://github.com/Mahak-012" },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-6 sm:px-10 md:px-14 lg:px-20"
      style={{ background: "#020806" }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black inline-block pb-3"
            style={{
              background: "linear-gradient(135deg,#10b981,#34d399)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-sm max-w-2xl mx-auto">
            Have a project in mind? Let's work together. I'm just a message away!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Side - Contact Info */}
          <div
            className="rounded-2xl p-6 md:p-8 border"
            style={{
              background: "rgba(16,185,129,0.02)",
              borderColor: "rgba(16,185,129,0.12)",
            }}
          >
            <h3
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ color: "#34d399" }}
            >
              Let's Talk 👋
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              I'm currently available for internships and entry-level positions. 
              Feel free to reach out — I'd love to hear from you!
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(16,185,129,0.1)" }}
                >
                  <span className="text-lg">📧</span>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Email</p>
                  <p className="text-gray-300 text-sm">mahakmimi01@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(16,185,129,0.1)" }}
                >
                  <span className="text-lg">📍</span>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Location</p>
                  <p className="text-gray-300 text-sm">Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(16,185,129,0.1)" }}
                >
                  <span className="text-lg">💼</span>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Open for</p>
                  <p className="text-gray-300 text-sm">Internship / Entry Level Role</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name} // Hover karne par name dikhega
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-emerald-400" // Icon ka color emerald kiya hai
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.2)",
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            className="rounded-2xl p-6 md:p-8 border"
            style={{
              background: "rgba(16,185,129,0.02)",
              borderColor: "rgba(16,185,129,0.12)",
            }}
          >
            <h3
              className="text-xl md:text-2xl font-bold mb-6"
              style={{ color: "#34d399" }}
            >
              Send Me a Message 💬
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-2"
                  style={{
                    background: "rgba(16,185,129,0.05)",
                    border: "1px solid rgba(16,185,129,0.2)",
                    color: "#e5e5e5",
                  }}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-2"
                  style={{
                    background: "rgba(16,185,129,0.05)",
                    border: "1px solid rgba(16,185,129,0.2)",
                    color: "#e5e5e5",
                  }}
                  placeholder="Your Email Address"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-2 resize-none"
                  style={{
                    background: "rgba(16,185,129,0.05)",
                    border: "1px solid rgba(16,185,129,0.2)",
                    color: "#e5e5e5",
                  }}
                  placeholder="Hi Mahak, I'd love to work with you..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: status === "success" 
                    ? "linear-gradient(135deg,#059669,#10b981)" 
                    : "linear-gradient(135deg,#10b981,#059669)",
                  boxShadow: "0 0 20px rgba(16,185,129,0.3)",
                }}
              >
                {status === "sending" && "Sending..."}
                {status === "success" && "Sent! ✅"}
                {status === "error" && "Error! Try Again ❌"}
                {status === "" && "Send Message →"}
              </button>
              
              {status === "success" && (
                <p className="text-emerald-400 text-center text-xs mt-2">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center text-xs mt-2">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;