import React from "react";
import { motion } from "framer-motion";

const WorkExperience: React.FC = () => {
  return (
    <section id="work" className="w-full bg-blue-70 text-white min-h-[90vh] py-28 relative">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center text-blue-900 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Work Experience
      </motion.h2>

      {/* Full-width image (within content container) */}
      <motion.div
        className="mx-auto max-w-4xl px-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-full overflow-hidden rounded-2xl shadow-xl bg-white flex justify-center">
          <img
            src={require("./images/work.jpg")}
            alt="Games I worked on"
            className="w-full max-h-[500px] object-contain"
          />
        </div>
      </motion.div>


      {/* Roles below the image */}
      <div className="mx-auto max-w-6xl px-4 mt-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Job 1 */}
          <motion.article
            className="p-6 bg-lightBlue text-black shadow-md rounded-2xl"
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-2xl font-semibold leading-snug">
              Game Developer – Carnegie Learning
            </h3>
            <p className="text-gray-700 mt-1">May 2022 – Jan 2025 · St. John’s, Canada</p>
            <ul className="list-disc mt-3 pl-5 text-sm space-y-2">
              <li>
                Developed and optimized gameplay mechanics and AI systems in Unity and C++, improving
                experiences for 5.5M+ users.
              </li>
              <li>
                Built features and rapid prototypes; iterated from team/user feedback to boost engagement.
              </li>
              <li>
                Improved performance by ~25% via multi-threading, memory tuning, and asset optimization.
              </li>
              <li>Refined animation trees for smooth character control and gameplay feel.</li>
              <li>Mentored junior devs across AI, gameplay, and engine optimization.</li>
            </ul>
          </motion.article>

          {/* Job 2 */}
          <motion.article
            className="p-6 bg-lightBlue text-black shadow-md rounded-2xl"
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-2xl font-semibold leading-snug">
              Game Development Intern – Carnegie Learning
            </h3>
            <p className="text-gray-700 mt-1">Jan 2021 – Apr 2022 · St. John’s, Canada</p>
            <ul className="list-disc mt-3 pl-5 text-sm space-y-2">
              <li>Contributed to core gameplay systems including AI behaviors and interactive elements.</li>
              <li>Debugged AI/animation interactions to improve stability and responsiveness.</li>
              <li>Prototyped two mechanics that shipped in the final game.</li>
              <li>Ran performance analysis and implemented rendering/frame-rate optimizations.</li>
              <li>Collaborated cross-functionally to deliver smooth, immersive gameplay.</li>
            </ul>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
