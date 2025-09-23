import React, { useEffect, useState } from "react";
import myLogo from "./images/myLogo.png";

const LINKS = [
  { id: "profile", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("profile");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActive(targetId);
    setOpen(false);
  };

  return (
    <header className="fixed top-6 left-0 w-full flex justify-center z-50">
      {/* Nav container */}
      <nav
        className={[
          "flex items-center gap-6 px-6 py-3 rounded-full shadow-lg backdrop-blur-md transition-all",
          scrolled ? "bg-white/90 border border-gray-200" : "bg-white/70",
        ].join(" ")}
      >
        {/* Logo */}
        <a
          href="#profile"
          onClick={(e) => handleSmoothScroll(e, "profile")}
          className="flex items-center gap-2"
        >
          <img src={myLogo} alt="Logo" className="h-7 w-7 object-contain" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleSmoothScroll(e, link.id)}
              className={[
                "relative text-[15px] font-medium transition-colors",
                active === link.id
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600",
              ].join(" ")}
            >
              {link.label}
              {active === link.id && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded" />
              )}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 text-sm font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-20 mx-4 w-[90%] bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={[
                  "text-lg font-medium transition-colors",
                  active === link.id
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-blue-600",
                ].join(" ")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 text-center font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
