import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-blue-50 text-darkBlue min-h-[90vh] py-32 px-6 relative"
    >
      <h2 className="text-4xl font-bold text-center text-blue-900">Projects</h2>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Project 1 */}
        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/Uc524mfhamI?rel=0&modestbranding=1"
              title="Wizards of Churchill Place"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Wizards of Churchill Place
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              A fantasy action game powered by a custom C++ game engine I built
              entirely from scratch. The engine handles rendering, input,
              collision detection, and game loop management, while the game
              itself features spellcasting mechanics and character-driven
              combat. This project showcases my ability to design core engine
              systems and build a complete game experience on top of them.
            </p>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/kedLR-YX2R8?rel=0&modestbranding=1"
              title="StarCraft Bot Project"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">StarCraft AI Bot</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              An AI bot built for StarCraft that automates gameplay by managing
              resources, controlling units, and making strategic decisions in
              real-time. I implemented algorithms for build order optimization,
              scouting, and adaptive combat tactics, giving me practical
              experience in AI programming, decision trees, and game automation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;


