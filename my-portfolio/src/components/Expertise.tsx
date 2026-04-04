import React from "react";
import { motion } from "framer-motion";

const PILLARS = [
  {
    title: "Performance Optimization",
    desc: "Shipped ~25% performance gains at Carnegie Learning through multi-threading, memory tuning, and GPU render optimizations. Currently applying the same discipline to real-time maritime simulation at Virtual Marine.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Simulation & Gameplay Systems",
    desc: "Designed and shipped gameplay and physics-driven systems across Unity, Unreal, and custom C++ engines. Now building high-fidelity real-time simulation software for mission-critical maritime training.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    title: "AI & Decision Systems",
    desc: "Implemented AI behavior trees, pathfinding, and decision-tree agents from scratch — both in production game environments and standalone AI bots. Focused on readable, tunable AI that behaves predictably under pressure.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    title: "Debugging Real-Time Behavior",
    desc: "Experienced diagnosing hard-to-reproduce bugs in frame-rate-sensitive, multi-threaded environments — animation state machine conflicts, physics jitter, memory leaks, and race conditions in simulation loops.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44a23.916 23.916 0 001.152 6.061M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
      </svg>
    ),
  },
  {
    title: "Maintainable Systems",
    desc: "Writing clean, well-structured C++, C#, and TypeScript/React code that junior developers can read and extend. Mentored junior devs at Carnegie Learning and advocate for patterns over clever one-liners.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="bg-bgAlt py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-center text-textDark mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Engineering Focus
      </motion.h2>
      <motion.div
        className="w-12 h-1 bg-accent mx-auto mb-4 rounded"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
      <motion.p
        className="text-center text-textSecondary max-w-xl mx-auto mb-10 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        What I care about in the code I write and the systems I build.
      </motion.p>

      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {PILLARS.map((pillar) => (
          <motion.div
            key={pillar.title}
            variants={itemVariants}
            className="group relative p-6 bg-bgCard border border-textSecondary/10 rounded-2xl
                       hover:border-accent/30 hover:bg-bgLight transition-all duration-300 cursor-default"
          >
            {/* Icon */}
            <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
              {pillar.icon}
            </div>

            {/* Title */}
            <h3 className="text-textDark font-semibold text-lg mb-3 group-hover:text-accent transition-colors duration-300">
              {pillar.title}
            </h3>

            {/* Description */}
            <p className="text-textSecondary text-sm leading-relaxed">
              {pillar.desc}
            </p>

            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ boxShadow: "inset 0 0 40px rgba(100,255,218,0.03)" }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Expertise;
