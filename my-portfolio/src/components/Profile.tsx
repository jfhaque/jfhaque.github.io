import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// Import your icons (make sure these exist in /src/images/)
import linkedInIcon from "./images/linkedin.png";
import githubIcon from "./images/github.png";
import emailIcon from "./images/email.png";
import homeBackground from "./images/homeBackground.jpg";
import programmingGif from "./images/programming.gif"
const Profile: React.FC = () => {
  return (
    <section
      id="profile"
      className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 gap-y-10 md:gap-x-20"
      style={{
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      {/* Left Side - Text & Links */}
      <motion.div
        className="text-left max-w-2xl"
        initial={{ opacity: 0, x: -100 }} // Slide in from left
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold mb-4 text-blue-900">
          Hi, I am <span className="text-navyBlue">Junaid Faizan Haque</span>
        </h1>

        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          <Typewriter
            words={[
              "Game Developer",
              "AI Gameplay Programmer",
              "Unity Specialist",
            ]}
            loop={0} // Infinite loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h2>

        <p className="text-lg md:text-xl text-black-800 font-medium leading-relaxed max-w-2xl mb-6">
          Passionate <span className="font-bold text-blue-900">Game Developer</span> with 3+ years of experience 
          specializing in <span className="font-bold text-blue-900">AI-driven gameplay</span> and 
          <span className="font-bold text-blue-900"> performance optimization</span>. Skilled in C#, C++, Unity, and Unreal Engine, 
          with a proven track record in rapid prototyping, debugging, and refining gameplay. Dedicated to building 
          immersive player experiences and continuously improving game systems.
        </p>


        {/* Social Links */}
        <div className="flex space-x-4 mb-6">
          <a
            href="https://www.linkedin.com/in/junaid-haque"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="w-10 h-10" />
          </a>
          <a
            href="https://github.com/jfhaque"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={githubIcon} alt="GitHub" className="w-10 h-10" />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:scale-110 transition-transform"
          >
            <img src={emailIcon} alt="Email" className="w-10 h-10" />
          </a>
        </div>

        {/* View Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-navyBlue text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-darkBlue transition duration-300"
        >
          View Resume
        </a>
      </motion.div>

      {/* Right Side - Profile Picture */}
      <motion.div
        className="w-full md:w-[600px] h-auto overflow-hidden relative z-10"
        initial={{ opacity: 0, x: 100 }} // Slide in from right
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={programmingGif} // Use your GIF as the profile image
          alt="Profile GIF"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Profile;
