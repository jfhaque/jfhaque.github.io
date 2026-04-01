import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "all" | "games" | "ai";

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, "all">;
  tags: string[];
  videoId: string;
  description: string;
  github: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Wizards of Churchill Place",
    category: "games",
    tags: ["C++", "Custom Engine", "Rendering", "Physics"],
    videoId: "Uc524mfhamI",
    description:
      "A fantasy action game powered by a custom C++ game engine built from scratch. The engine handles rendering, input, collision detection, and game loop management. Features spellcasting mechanics and character-driven combat built entirely on top of custom engine systems.",
    github: "https://github.com/jfhaque",
  },
  {
    id: 2,
    title: "StarCraft AI Bot",
    category: "ai",
    tags: ["C++", "AI", "Decision Trees", "Game Automation"],
    videoId: "kedLR-YX2R8",
    description:
      "An AI bot for StarCraft that automates gameplay by managing resources, controlling units, and making strategic decisions in real-time. Implements build order optimization, scouting, and adaptive combat tactics — practical experience in AI programming, decision trees, and game automation.",
    github: "https://github.com/jfhaque",
  },
];

const TABS: { key: Category; label: string }[] = [
  { key: "all",   label: "All" },
  { key: "games", label: "Games" },
  { key: "ai",    label: "AI" },
];

const Projects: React.FC = () => {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="bg-bg text-textPrimary min-h-[90vh] py-28 px-6 relative">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center text-textDark mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="w-12 h-1 bg-accent mx-auto mb-10 rounded"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />

      {/* Category tabs */}
      <div className="flex justify-center gap-2 mb-12">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={[
              "px-5 py-2 rounded-full text-sm font-medium transition-all",
              active === tab.key
                ? "bg-accent text-bg font-semibold"
                : "border border-textSecondary/30 text-textSecondary hover:border-accent hover:text-accent",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              className="bg-bgCard border border-textSecondary/10 rounded-xl shadow-lg overflow-hidden flex flex-col group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Video */}
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${project.videoId}?rel=0&modestbranding=1`}
                  title={project.title}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-textDark mb-3">
                  {project.title}
                </h3>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-bgLight text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-textSecondary text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Links */}
                <div className="mt-5 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-textSecondary hover:text-accent transition"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.76-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.623-5.48 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
