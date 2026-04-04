import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import linkedInIcon   from "./images/linkedin.png";
import githubIcon     from "./images/github.png";
import emailIcon      from "./images/email.png";
import programmingGif from "./images/programming.gif";

const heroVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};
const lineVariant = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const PILLARS = [
  {
    title: "Performance Optimization",
    desc:  "Multi-threading, memory tuning, render optimizations. ~25% gains shipped.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Simulation & Gameplay",
    desc:  "Physics-driven systems across Unity, Unreal, and custom C++ engines.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    title: "AI & Decision Systems",
    desc:  "Behavior trees, pathfinding, and decision agents built from scratch.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Debugging",
    desc:  "Frame-rate-sensitive, multi-threaded bugs — physics jitter, memory leaks, race conditions.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44a23.916 23.916 0 001.152 6.061M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
      </svg>
    ),
  },
  {
    title: "Maintainable Systems",
    desc:  "Clean C++, C#, and TypeScript/React. Patterns over clever one-liners.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
];

const Profile: React.FC = () => {
  return (
    <section id="profile" className="relative z-10 bg-bg px-6 md:px-20 pt-28 pb-16">

      {/* ── Hero row ── */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16">
        {/* Left */}
        <motion.div
          className="text-left flex-1"
          variants={heroVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={lineVariant} className="text-accent font-mono text-sm mb-3 tracking-widest">
            Hi, my name is
          </motion.p>
          <motion.h1 variants={lineVariant} className="text-5xl md:text-6xl font-extrabold text-textDark leading-tight mb-2">
            Junaid Faizan Haque
          </motion.h1>
          <motion.h2 variants={lineVariant} className="text-2xl md:text-3xl font-bold text-textSecondary mb-5">
            <Typewriter
              words={["Software Developer", "Simulation Systems", "Game Development", "AI Gameplay Programming"]}
              loop={0} cursor cursorStyle="|" typeSpeed={50} deleteSpeed={30} delaySpeed={1500}
            />
          </motion.h2>
          <motion.p variants={lineVariant} className="text-base text-textSecondary leading-relaxed mb-7 max-w-xl">
            Currently at <span className="text-accent font-semibold">Virtual Marine</span> building
            high-fidelity maritime simulation software. Background in game development, performance
            optimization, AI gameplay systems, and interactive products — 3+ years shipping to 5.5M+ users.
          </motion.p>

          <motion.div variants={lineVariant} className="flex space-x-4 mb-7">
            {[
              { href: "https://www.linkedin.com/in/junaid-haque", src: linkedInIcon, alt: "LinkedIn" },
              { href: "https://github.com/jfhaque",               src: githubIcon,   alt: "GitHub"   },
              { href: "mailto:junaidfaizanhaque@gmail.com",        src: emailIcon,    alt: "Email"    },
            ].map(({ href, src, alt }) => (
              <a key={alt} href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="hover:scale-110 hover:opacity-80 transition-all duration-200">
                <img src={src} alt={alt} className="w-9 h-9" />
              </a>
            ))}
          </motion.div>

          <motion.div variants={lineVariant} className="flex gap-4 flex-wrap">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              className="px-6 py-2.5 rounded border border-accent text-accent text-sm font-semibold
                         hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/10 transition-all duration-200">
              View Resume
            </a>
            <a href="#work"
              onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-6 py-2.5 rounded bg-accent text-bg text-sm font-semibold
                         hover:bg-accent/80 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200">
              See My Work
            </a>
          </motion.div>
        </motion.div>

        {/* Right — gif */}
        <motion.div
          className="w-full md:w-[400px] flex-shrink-0 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={programmingGif} alt="Programming" className="w-full h-full object-cover opacity-90" />
        </motion.div>
      </div>

      {/* ── What I Do — compact cards ── */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="border-t border-textSecondary/10 pt-10">
          <p className="text-xs font-mono text-textSecondary tracking-widest uppercase mb-6">
            What I Do
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="group p-4 bg-bgCard/60 border border-textSecondary/10 rounded-xl
                           hover:border-accent/30 hover:bg-bgCard transition-all duration-300 cursor-default"
              >
                <div className="text-accent mb-2.5 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-textDark text-xs font-semibold mb-1.5 leading-snug group-hover:text-accent transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-textSecondary text-[11px] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Profile;
