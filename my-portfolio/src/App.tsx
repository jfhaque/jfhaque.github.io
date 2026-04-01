import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

const App: React.FC = () => {
  return (
    <div className="bg-bg text-textPrimary min-h-screen">
      <Header />
      <main className="container mx-auto px-6">
      <ParticlesBackground />

      </main>
        <Profile />
        <WorkExperience />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
};

export default App;
