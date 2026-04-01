import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WorkExperience: React.FC = () => {
  return (
    <section id="work" className="w-full bg-bgLight text-textPrimary min-h-[90vh] py-28 relative">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center text-textDark mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>
      <motion.div
        className="w-12 h-1 bg-accent mx-auto mb-16 rounded"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />

      <div className="mx-auto max-w-6xl px-4 flex flex-col gap-8">
        {/* Virtual Marine — featured / full-width */}
        <motion.article
          className="p-8 bg-bgCard border border-accent/20 shadow-lg rounded-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
            <h3 className="text-2xl font-semibold text-textDark leading-snug">
              Software / Game Developer
            </h3>
            <span className="text-accent font-mono text-sm">2025 – Present</span>
          </div>
          <p className="text-accent font-semibold mb-1">Virtual Marine</p>
          <p className="text-textSecondary text-sm mb-4">St. John's, NL</p>
          <ul className="list-none space-y-2 text-textSecondary text-sm">
            <li className="flex gap-2"><span className="text-accent mt-0.5">▹</span>Building high-fidelity maritime simulation software focused on realism, performance, and maintainable systems.</li>
            <li className="flex gap-2"><span className="text-accent mt-0.5">▹</span>Developing interactive training experiences with real-time simulation features across visual and physics-driven environments.</li>
            <li className="flex gap-2"><span className="text-accent mt-0.5">▹</span>Collaborating across software, hardware, and domain teams to support accurate, mission-critical training workflows.</li>
            <li className="flex gap-2"><span className="text-accent mt-0.5">▹</span>Debugging and shipping features for high-fidelity real-time simulation systems.</li>
          </ul>
        </motion.article>

        {/* Carnegie Learning roles — two columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Job 1 */}
          <motion.article
            className="p-6 bg-bgCard border border-textSecondary/10 shadow-md rounded-2xl"
            variants={cardVariant}
          >
            <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
              <h3 className="text-xl font-semibold text-textDark leading-snug">
                Game Developer
              </h3>
              <span className="text-textSecondary font-mono text-xs">May 2022 – Jan 2025</span>
            </div>
            <p className="text-accent font-semibold text-sm mb-1">Carnegie Learning</p>
            <p className="text-textSecondary text-xs mb-4">St. John's, Canada</p>
            <ul className="list-none space-y-2 text-textSecondary text-sm">
              <li className="flex gap-2"><span className="text-accent mt-0.5">▹</span>Developed and optimized gameplay mechanics and AI systems in Unity and C++, shipping to 5.5M+ users.</li>
              <li className="flex gap-2"><span className="text-accent mt-0.5">▹</span>Improved performance by ~25% via multi-threading, memory tuning, and asset optimization.</li>
              <li className="flex gap-2"><span className="text-accent mt-0.5">▹</span>Built rapid prototypes and iterated on features from team and user feedback to boost engagement.</li>
              <li className="flex gap-2"><span className="text-accent mt-0.5">▹</span>Refined animation trees for smooth character control and gameplay feel.</li>
              <li className="flex gap-2"><span className="text-accent mt-0.5">▹</span>Mentored junior devs across AI, gameplay, and engine optimization.</li>
            </ul>
          </motion.article>

          {/* Job 2 */}
          <motion.article
            className="p-6 bg-bgCard border border-textSecondary/10 shadow-md rounded-2xl"
            variants={cardVariant}
          >
            <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
              <h3 className="text-xl font-semibold text-textDark leading-snug">
                Game Development Intern
              </h3>
              <span className="text-textSecondary font-mono text-xs">Jan 2021 – Apr 2022</span>
            </div>
            <p className="text-accent font-semibold text-sm mb-1">Carnegie Learning</p>
            <p className="text-textSecondary text-xs mb-4">St. John's, Canada</p>
            <ul className="list-none space-y-2 text-textSecondary text-sm">
              <li className="flex gap-2"><span className="text-accent mt-0.5">▹</span>Contributed to core gameplay systems including AI behaviours and interactive elements.</li>
              <li className="flex gap-2"><span className="text-accent mt-0.5">▹</span>Debugged AI/animation interactions to improve stability and responsiveness.</li>
              <li className="flex gap-2"><span className="text-accent mt-0.5">▹</span>Prototyped two mechanics that shipped in the final game.</li>
              <li className="flex gap-2"><span className="text-accent mt-0.5">▹</span>Ran performance analysis and implemented rendering/frame-rate optimizations.</li>
              <li className="flex gap-2"><span className="text-accent mt-0.5">▹</span>Collaborated cross-functionally to deliver smooth, immersive gameplay.</li>
            </ul>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
