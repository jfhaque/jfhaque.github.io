import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "all" | "simulation" | "games" | "web";

interface CaseStudy {
  problem: string;
  built: string;
  challenges: string;
  result: string;
}

interface Project {
  id: number;
  title: string;
  year: string;
  category: Exclude<Category, "all">;
  tags: string[];
  videoId?: string;
  caseStudy: CaseStudy;
  github: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Wizards of Churchill Place",
    year: "2022",
    category: "games",
    tags: ["C++", "Custom Engine", "Rendering", "Physics"],
    videoId: "Uc524mfhamI",
    github: "https://github.com/jfhaque",
    caseStudy: {
      problem: "Build a complete playable game without any existing engine — full ownership of every system.",
      built: "Custom C++ engine from scratch: rendering pipeline, input, AABB collision, fixed-timestep loop. Full fantasy action game on top.",
      challenges: "No abstractions to lean on. Every performance problem traced to first principles. Memory-efficient rendering with no off-the-shelf tools.",
      result: "Shipped a playable game demonstrating end-to-end engine ownership — the clearest proof of what I can do from a blank .cpp file.",
    },
  },
  {
    id: 2,
    title: "StarCraft AI Bot",
    year: "2021",
    category: "simulation",
    tags: ["C++", "AI", "Decision Trees", "BWAPI"],
    videoId: "kedLR-YX2R8",
    github: "https://github.com/jfhaque/STARTcraft1.0",
    caseStudy: {
      problem: "Build an AI agent that competes in StarCraft — real-time strategic decisions across economy, units, and scouting.",
      built: "Decision-tree agent using BWAPI managing resources, production queues, adaptive build orders, unit micro, and reactive scouting.",
      challenges: "Balancing macro vs micro under a strict tick-rate budget. Committing to decisions with only partial map visibility.",
      result: "Bot that executes coherent build orders, reacts to scouted information, and handles basic combat micro.",
    },
  },
  {
    id: 3,
    title: "Conway's Game of Life",
    year: "2020",
    category: "simulation",
    tags: ["Java", "Cellular Automata", "Simulation", "Visualisation"],
    github: "https://github.com/jfhaque/Conways-Game-of-life",
    caseStudy: {
      problem: "Model emergent complex behaviour from a minimal rule set with real-time interactive visualisation.",
      built: "Java simulation with configurable grid, interactive seeding, generation stepping, and Swing visualisation. Rules separated from update loop.",
      challenges: "Smooth rendering at large grid sizes required decoupling sim tick from render cycle. Efficient boundary-wrapping neighbour-counting.",
      result: "Interactive simulation generating gliders, oscillators, and still-lifes from four rules — foundational to simulation system design.",
    },
  },
  {
    id: 4,
    title: "Elementary Cellular Automata",
    year: "2020",
    category: "simulation",
    tags: ["Java", "Algorithms", "Wolfram Rules", "Pattern Generation"],
    github: "https://github.com/jfhaque/Elementary-Cellular-Automata",
    caseStudy: {
      problem: "Implement all 256 Wolfram elementary cellular automata rules and visualise their pattern generation.",
      built: "Java app applying a user-selected Wolfram rule to a binary string, stepping through generations and rendering the pattern grid row by row.",
      challenges: "Efficient rule lookup via bitmask table. Rendering a growing grid without memory bloat by writing rows directly.",
      result: "Generated the full Wolfram rule set including Rule 110 (Turing-complete) and Rule 30 (chaotic).",
    },
  },
  {
    id: 5,
    title: "Node.js Spreadsheets & Graphs",
    year: "2021",
    category: "web",
    tags: ["Node.js", "Express", "JavaScript", "Auth", "Chart.js"],
    github: "https://github.com/jfhaque/Node.js-spreadsheets-and-graphs",
    caseStudy: {
      problem: "Build a full-stack web app where users register, authenticate, manage spreadsheet data, and visualise it as charts.",
      built: "Node.js/Express server with session auth, variable-dimension spreadsheet model, and Chart.js visualisations that update on edits.",
      challenges: "General-purpose spreadsheet data model without a fixed schema. Keeping chart state synced with live edits without a reactive framework.",
      result: "Complete full-stack app demonstrating end-to-end ownership across auth, data, API design, and interactive visualisation.",
    },
  },
];

const TABS: { key: Category; label: string }[] = [
  { key: "all",        label: "All" },
  { key: "simulation", label: "Simulation & AI" },
  { key: "games",      label: "Games" },
  { key: "web",        label: "Web" },
];

const CATEGORY_GRADIENT: Record<Exclude<Category, "all">, string> = {
  simulation: "from-teal-900/50 to-bgCard",
  games:      "from-violet-900/50 to-bgCard",
  web:        "from-blue-900/50 to-bgCard",
};

const CATEGORY_BADGE: Record<Exclude<Category, "all">, string> = {
  simulation: "text-teal-300 border-teal-700/60 bg-teal-900/30",
  games:      "text-violet-300 border-violet-700/60 bg-violet-900/30",
  web:        "text-blue-300 border-blue-700/60 bg-blue-900/30",
};

const CASE_SECTIONS = [
  { key: "problem"    as const, label: "Problem",     color: "text-red-400/80"    },
  { key: "built"      as const, label: "Built",       color: "text-accent/90"     },
  { key: "challenges" as const, label: "Challenges",  color: "text-yellow-400/80" },
  { key: "result"     as const, label: "Result",      color: "text-green-400/80"  },
];

/* ── 3-D tilt card ── */
const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateZ(4px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };
  return (
    <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transition: "transform 0.18s ease", transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
};

/* ── Shared case study body ── */
const CaseStudyBody: React.FC<{ project: Project; compact?: boolean }> = ({ project, compact }) => (
  <>
    {/* Meta */}
    <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${CATEGORY_BADGE[project.category]}`}>
        {project.category === "simulation" ? "Simulation & AI" : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
      </span>
      <span className="text-textSecondary font-mono text-xs">{project.year}</span>
    </div>

    <h3 className={`font-semibold text-textDark mb-3 ${compact ? "text-lg" : "text-xl"}`}>{project.title}</h3>

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5 mb-4">
      {project.tags.map((tag) => (
        <span key={tag} className="px-2 py-0.5 text-[11px] font-mono rounded bg-bgLight text-accent border border-accent/15">
          {tag}
        </span>
      ))}
    </div>

    {/* Case study */}
    <div className={`flex flex-col gap-2.5 flex-1 mb-4 ${compact ? "text-xs" : "text-sm"}`}>
      {CASE_SECTIONS.map(({ key, label, color }) => (
        <div key={key} className="flex gap-2.5">
          <span className={`font-mono font-semibold flex-shrink-0 mt-0.5 ${color} ${compact ? "w-16 text-[10px]" : "w-20 text-xs"}`}>{label}</span>
          <p className="text-textSecondary leading-relaxed">{project.caseStudy[key]}</p>
        </div>
      ))}
    </div>

    {/* Link */}
    <div className="pt-3 border-t border-textSecondary/10">
      <a href={project.github} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-textSecondary hover:text-accent transition group">
        <svg className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.76-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.623-5.48 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        GitHub
      </a>
    </div>
  </>
);

const Projects: React.FC = () => {
  const [active, setActive] = useState<Category>("all");
  const filtered  = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);
  const featured  = filtered.filter((p) => p.videoId);
  const secondary = filtered.filter((p) => !p.videoId);

  return (
    <section id="projects" className="bg-bg text-textPrimary py-20 px-6">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center text-textDark mb-3"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        Selected Projects
      </motion.h2>
      <motion.div
        className="w-12 h-1 bg-accent mx-auto mb-3 rounded"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      />
      <motion.p
        className="text-center text-textSecondary text-sm mb-8 max-w-md mx-auto"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
      >
        Simulation systems, game engines, AI agents, and web tools.
      </motion.p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {TABS.map((tab) => (
          <button key={tab.key} onClick={() => setActive(tab.key)}
            className={[
              "px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
              active === tab.key
                ? "bg-accent text-bg font-semibold shadow-lg shadow-accent/20"
                : "border border-textSecondary/25 text-textSecondary hover:border-accent hover:text-accent",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">

          {/* ── Featured (2 large, with video) ── */}
          {featured.length > 0 && (
            <motion.div key="featured-grid" layout
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            >
              {featured.map((project) => (
                <motion.div key={project.id} layout
                  initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <TiltCard className="h-full bg-bgCard border border-textSecondary/10 rounded-2xl overflow-hidden flex flex-col
                                       hover:border-accent/25 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                    {/* Video — zoom on hover */}
                    <div className="relative w-full overflow-hidden group" style={{ paddingTop: "52%" }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${project.videoId}?rel=0&modestbranding=1`}
                        title={project.title} className="absolute inset-0 w-full h-full"
                        style={{ border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <CaseStudyBody project={project} />
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ── Secondary (3 compact, no video) ── */}
          {secondary.length > 0 && (
            <motion.div key="secondary-grid" layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            >
              {secondary.map((project, i) => (
                <motion.div key={project.id} layout
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <TiltCard className="h-full bg-bgCard border border-textSecondary/10 rounded-xl overflow-hidden flex flex-col
                                       hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                    {/* Gradient header */}
                    <div className={`h-20 bg-gradient-to-br ${CATEGORY_GRADIENT[project.category]} flex items-center justify-center flex-shrink-0`}>
                      <span className="font-mono text-accent/25 text-xs tracking-widest uppercase">{project.category}</span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <CaseStudyBody project={project} compact />
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
