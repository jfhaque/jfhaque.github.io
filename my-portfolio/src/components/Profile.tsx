import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import linkedInIcon from "./images/linkedin.png";
import githubIcon   from "./images/github.png";
import emailIcon    from "./images/email.png";
import programmingGif from "./images/programming.gif";

const Profile: React.FC = () => {
  return (
    <section
      id="profile"
      className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 gap-y-10 md:gap-x-20 bg-bg"
    >
      {/* Left Side */}
      <motion.div
        className="text-left max-w-2xl"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-accent font-mono text-sm mb-3 tracking-widest">
          Hi, my name is
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold text-textDark leading-tight mb-2">
          Junaid Faizan Haque
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-textSecondary mb-6">
          <Typewriter
            words={[
              "Software Developer",
              "Simulation Systems",
              "Game Development",
              "AI Gameplay Programming",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-lg text-textSecondary leading-relaxed max-w-xl mb-8">
          Currently at{" "}
          <span className="text-accent font-semibold">Virtual Marine</span>{" "}
          building high-fidelity maritime simulation software. Background in
          game development, performance optimization, AI gameplay systems, and
          interactive products — with 3+ years shipping to 5.5M+ users.
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mb-8">
          <a
            href="https://www.linkedin.com/in/junaid-haque"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:opacity-80 transition-all"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="w-9 h-9" />
          </a>
          <a
            href="https://github.com/jfhaque"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:opacity-80 transition-all"
          >
            <img src={githubIcon} alt="GitHub" className="w-9 h-9" />
          </a>
          <a
            href="mailto:your.email@here.com" // TODO: replace with your real email
            className="hover:scale-110 hover:opacity-80 transition-all"
          >
            <img src={emailIcon} alt="Email" className="w-9 h-9" />
          </a>
        </div>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded border border-accent text-accent font-semibold hover:bg-accent/10 transition"
          >
            View Resume
          </a>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded bg-accent text-bg font-semibold hover:bg-accent/80 transition"
          >
            See My Work
          </a>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="w-full md:w-[480px] h-auto overflow-hidden relative z-10 rounded-2xl"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={programmingGif}
          alt="Programming"
          className="w-full h-full object-cover opacity-90"
        />
      </motion.div>
    </section>
  );
};

export default Profile;
