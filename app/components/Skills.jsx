import React from "react";
import { motion } from "motion/react";
import { skillsData } from "@/assets/assets";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Headings */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Expertise
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center text-5xl font-Ovo"
      >
        Skills
      </motion.h2>

      <p className="text text-gray-600 dark:text-gray-400 text-center mt-4 max-w-2xl mx-auto">
        Constantly evolving, always learning — here’s a snapshot of the skills that power my creative and technical pursuits.
      </p>

      {/* --- First Row: 2 Cards --- */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
        {skillsData.slice(0, 2).map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-400 rounded-lg px-6 py-8 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
              dark:hover:bg-darkHover dark:hover:shadow-white flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white text-center">
              {category.category}
            </h3>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-6 place-items-center flex-1">
              {category.items.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <i className={`${skill.icon} text-5xl mb-2`}></i>
                  <p className="text-sm text-gray-700 dark:text-white">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* --- Second Row: 3 Cards --- */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {skillsData.slice(2).map((category, index) => (
          <motion.div
            key={index + 2}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-400 rounded-lg px-6 py-8 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
              dark:hover:bg-darkHover dark:hover:shadow-white flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white text-center">
              {category.category}
            </h3>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-6 place-items-center flex-1">
              {category.items.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <i className={`${skill.icon} text-5xl mb-2`}></i>
                  <p className="text-sm text-gray-700 dark:text-white">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
