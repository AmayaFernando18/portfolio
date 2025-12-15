import { assets, educationData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import banklogo from '@/assets/banklogo.png';

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id='about'
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      {/* Introduction */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        About me
      </motion.h2>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-start gap-20 my-20'
      >
        {/* User Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none lg:sticky lg:top-10'
        >
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>

        {/* About Text - Professional Developer Focus */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1 space-y-12'
        >
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="space-y-8"
          >
            {/* Role & Institution */}
            <div className="space-y-3">
              {/* <h3 className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Software Developer
              </h3> */}
              
            </div>

            {/* Professional Statement */}
            <div className={`text-lg leading-relaxed space-y-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>

            <p className='flex-1'>A curious and driven third-year undergraduate at the University of Moratuwa, pursuing a B.Sc. (Hons) in Information Technology and Management</p>

              <p className='flex-1'>
                I thrive on building meaningful solutions that connect technology with real-world needs. I love crafting clean, user-friendly web apps and tackling complex problems with creativity and persistence. Collaboration energizes me—there's something powerful about diverse minds working toward a shared goal.
              </p>
              
              <p>
                Beyond academics, I embrace every opportunity to grow through volunteering, leadership roles, and creative pursuits like dancing. It's all about balancing my technical journey with passion and personal growth.
              </p>
            </div>
          </motion.div>

         

          {/* Professional Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className={`border border-gray-400 rounded-lg px-6 py-8 cursor-pointer transition-all duration-500 ${
              isDarkMode 
                ? 'bg-gray-800 hover:bg-darkHover hover:shadow-white' 
                : 'bg-white hover:bg-lightHover hover:shadow-black'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">⚡</span>
              <span className={`text-lg sm:text-xl font-semibold ${
                isDarkMode ? 'text-gray-100' : 'text-gray-800'
              }`}>
                Always eager to learn, always ready to innovate.
              </span>
            </div>
          </motion.div>

        
        </motion.div>
      </motion.div>

      {/* Academic Background */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-3xl font-Ovo mt-20 mb-10"
      >
        Academic Background
      </motion.h2>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Center line */}
        <div
          className={`absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 z-0
            ${isDarkMode ? "bg-white" : "bg-black"}`}
        ></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`mb-12 flex w-full items-center relative z-10 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className={`
                relative w-full sm:w-[45%] p-6 rounded-xl border border-gray-400
                cursor-pointer overflow-hidden
                ${isDarkMode 
                  ? "bg-gray-800 hover:bg-darkHover hover:shadow-white/50 border-gray-700"
                  : "bg-white hover:bg-lightHover hover:shadow-black/50"
                }
                shadow-md transition-all duration-500 flex flex-col
              `}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
                {edu.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{edu.school}</p>
              <p className={`mt-2 text-sm sm:text-base font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                {edu.result}
              </p>
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{edu.year}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Work Experience */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-3xl font-Ovo mt-20 mb-10"
      >
        Work Experience
      </motion.h2>

      <div className="relative w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex w-full justify-center relative z-10"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className={`
              relative w-full sm:w-[45%] p-6 rounded-xl border border-gray-400
              cursor-pointer overflow-hidden shadow-md transition-all duration-500 flex flex-col
              ${isDarkMode
                ? "bg-gray-800 hover:bg-darkHover hover:shadow-white/50 border-gray-700"
                : "bg-white hover:bg-lightHover hover:shadow-black/50"
              }
            `}
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={banklogo}
                alt="People's Bank"
                className="w-20 h-20 object-contain rounded"
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
                Trainee Bank Associate
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium mb-2">
              People's Bank · Internship
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-2">
              Jun 2022 - Dec 2022 · 7 months
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Managed high-volume financial transactions while ensuring compliance with banking standards. Developed strong analytical skills through cash reconciliation and customer service excellence. This experience strengthened my attention to detail and ability to work under pressure—skills directly applicable to software development and debugging.
            </p>
          </motion.div>
        </motion.div>
      </div>

    </motion.div>
  )
}

export default About