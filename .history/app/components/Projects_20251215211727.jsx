import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const dummyProjects = [
  {
    title: "Evelora – Role-Based Assessment Platform (Web Application)",
    description: "A full-stack role-based assessment platform to hire recruiters with React.js, ASP.NET (C#), PostgreSQL, and Azure—featuring RBAC for user permissions, job posting management, quiz results analysis with real-time dashboards and stored procedures, and secure RESTful APIs documented via Swagger for seamless integration.",
    images: [
      '/project1_1.jpg',
      '/project1_2.jpg',
      '/project1_3.jpg',
      '/project1_4.jpg',
      '/project1_5.jpg',
      '/project1_6.png',
      '/project1_7.png',
      '/project1_8.png',
      '/project1_9.jpg'

    ],
    github: "https://github.com/AmayaFernando18/EVEROLA-react-frondend"
  },
  {
    title: "QuickAI – AI Powered Web Application ",
    description: "A fully functional AI-powered SaaS application with subscription-based access. Built with PostgreSQL, Express, React, and Node.js, it features secure user authentication (Clerk), premium subscription billing, and a suite of AI tools including article & blog title generation, image generation, background removal, object removal, and resume analysis.",
    images: [
      '/project2_1.png',
      '/project2_2.png',
      '/project2_3.png',
      '/project2_4.png',
      '/project2_5.png'
      
    ],
    github: "https://github.com/AmayaFernando18/QuickAI",
    liveUrl: "https://quick-ai-user-theta.vercel.app/"
  },
  {
    title: "Air Guard – IoT-Based Air Quality Monitoring Device ",
    description: "A smart air monitoring system built with Raspberry Pi Pico W, integrating multiple sensors (CJMCU gas, 18B20 temperature, AO03 oxygen, DSM501A dust). It stores data in Firebase, provides real-time and historical insights via a web app, and sends SMS alerts through the SIM800L GSM module when WiFi is unavailable.",
    images: [
      '/project3_1.jpg',
      '/project3_2.jpg',
      '/project3_3.jpg',
      '/project3_4.jpg'
      
      
    ]
  },
  {
    title: "TravelTales – Travel Review Web Application",
    description: "A full-stack travel review platform built with Laravel and MySQL, allowing users to explore travel destinations and share authentic experiences. It supports user authentication, review CRUD operations, and an admin panel to manage places and moderate reviews through a clean, user-friendly interface.",
    images: [
      '/project4_1.jpeg',
      '/project4_2.jpeg',
      '/project4_3.jpg',
      '/project4_4.jpg'
    ],
    github: "https://github.com/AmayaFernando18/TravelTales"
  }
];

const ProjectCard = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden max-w-md cursor-pointer mx-auto"
    >
      <div className="w-full overflow-hidden relative" ref={sliderRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full flex-shrink-0 h-56 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center mt-3 space-x-2">
        {project.images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentSlide ? 'bg-black dark:bg-white' : 'bg-black/20'
            }`}
          />
        ))}
      </div>

      {/* Description */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>


            {/* GitHub Icon Button */}
            <div className="flex gap-3 mt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                     bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 
                     dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <FaGithub className="text-xl" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        )}


        {project.liveUrl && (
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg 
              border border-gray-400 hover:shadow-black
              hover:bg-lightHover dark:hover:bg-darkHover 
              dark:hover:shadow-white transition-all duration-500"
  >
    <FaExternalLinkAlt className="text-lg" />
    <span className="text-sm font-medium">View Live</span>
  </a>
)}
</div>

      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Offer
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Projects
      </motion.h2>

      <p className="text text-gray-600 dark:text-gray-400 text-center mt-4 max-w-2xl mx-auto">
        Here’s where curiosity meets creation — a showcase of projects that blend technology, creativity, and purpose.
      </p>

      {/* Horizontal Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="relative mt-10"
      >
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentProjectIndex((prev) =>
              prev === 0 ? dummyProjects.length - 1 : prev - 1
            )}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-400 
                     hover:bg-lightHover dark:hover:bg-darkHover hover:shadow-black dark:hover:shadow-white
                     transition-all duration-300 text-lg sm:text-xl font-bold text-gray-700 dark:text-gray-200
                     hover:scale-110 active:scale-95 flex-shrink-0"
          >
            &lt;
          </button>

          {/* Project Card */}
          <div className="flex-1 flex justify-center">
            <motion.div
              key={currentProjectIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <ProjectCard project={dummyProjects[currentProjectIndex]} />
            </motion.div>
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentProjectIndex((prev) =>
              prev === dummyProjects.length - 1 ? 0 : prev + 1
            )}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-400 
                     hover:bg-lightHover dark:hover:bg-darkHover hover:shadow-black dark:hover:shadow-white
                     transition-all duration-300 text-lg sm:text-xl font-bold text-gray-700 dark:text-gray-200
                     hover:scale-110 active:scale-95 flex-shrink-0"
          >
            &gt;
          </button>
        </div>

        {/* Project Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {dummyProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentProjectIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentProjectIndex
                  ? 'bg-black dark:bg-white w-8'
                  : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-4 text-gray-600 dark:text-gray-400 text-sm">
          Project {currentProjectIndex + 1} of {dummyProjects.length}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
