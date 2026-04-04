import React from "react";
import { motion } from "framer-motion";
import vmScreenshot from "./images/VM.jpg";

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const WorkExperience: React.FC = () => {
  return (
    <section id="work" className="w-full bg-bgAlt text-textPrimary py-20 relative">
      <motion.h2
        className="text-4xl font-bold text-center text-textDark mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>
      <motion.div
        className="w-12 h-1 bg-accent mx-auto mb-12 rounded"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />

      <div className="mx-auto max-w-6xl px-4 flex flex-col gap-8">

        {/* ── Virtual Marine — Featured ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border border-accent/20 bg-bgCard shadow-xl"
        >
          {/* left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-2xl z-10" />

          <div className="flex flex-col lg:flex-row">
            {/* Text */}
            <div className="flex-1 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-mono font-semibold tracking-widest border border-accent/25">
                  CURRENT ROLE
                </span>
                <span className="text-textSecondary font-mono text-xs">2025 – Present</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-textDark mb-1 leading-tight">
                Software / Game Developer
              </h3>
              <p className="text-accent font-semibold mb-1">Virtual Marine</p>
              <p className="text-textSecondary text-xs mb-5">St. John's, NL</p>

              <p className="text-textSecondary text-sm leading-relaxed mb-6 max-w-md">
                Building high-fidelity maritime simulation software for professional mariner training.
                Focus on real-time physics, performance, and maintainable systems.
              </p>

              <ul className="space-y-2">
                {[
                  "Real-time simulation and gameplay features for maritime training environments",
                  "Performance and stability across physics-driven interactive systems",
                  "Cross-team collaboration with software, hardware, and domain experts",
                  "Debugging and shipping features in high-fidelity visual/physics pipelines",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-textSecondary">
                    <span className="text-accent mt-0.5 flex-shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image — narrower, darkened overlay */}
            <div className="lg:w-[380px] min-h-[260px] lg:min-h-0 flex-shrink-0 relative overflow-hidden">
              <img
                src={vmScreenshot}
                alt="Virtual Marine simulator"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* dark overlay so image doesn't overpower text */}
              <div className="absolute inset-0 bg-gradient-to-r from-bgCard/70 via-bgCard/20 to-transparent" />
              <div className="absolute inset-0 bg-bg/30" />
            </div>
          </div>
        </motion.div>

        {/* ── Carnegie Learning ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {[
            {
              title: "Game Developer",
              period: "May 2022 – Jan 2025",
              bullets: [
                "Shipped AI gameplay systems in Unity/C++ to 5.5M+ users",
                "~25% performance gain via multi-threading and asset optimization",
                "Rapid prototypes iterated from team and user feedback",
                "Refined animation state machines for smooth gameplay feel",
                "Mentored junior devs on AI, gameplay, and engine systems",
              ],
            },
            {
              title: "Game Development Intern",
              period: "Jan 2021 – Apr 2022",
              bullets: [
                "Built core gameplay systems including AI and interactive elements",
                "Debugged AI/animation interactions for stability and responsiveness",
                "Prototyped two mechanics that shipped in the final game",
                "Performance analysis and rendering/frame-rate optimizations",
                "Cross-functional collaboration to deliver immersive gameplay",
              ],
            },
          ].map((job) => (
            <motion.article
              key={job.title}
              className="p-6 bg-bgCard border border-textSecondary/10 rounded-2xl
                         hover:border-accent/20 transition-colors duration-300"
              variants={cardVariant}
            >
              <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                <h3 className="text-lg font-semibold text-textDark">{job.title}</h3>
                <span className="text-textSecondary font-mono text-xs">{job.period}</span>
              </div>
              <p className="text-accent font-semibold text-sm mb-1">Carnegie Learning</p>
              <p className="text-textSecondary text-xs mb-4">St. John's, Canada</p>
              <ul className="space-y-2 text-textSecondary text-sm">
                {job.bullets.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="text-accent mt-0.5 flex-shrink-0">▹</span>{pt}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WorkExperience;
