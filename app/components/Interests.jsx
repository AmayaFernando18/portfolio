import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

// Import your images from the assets folder
import img1 from "@/assets/dance1.jpg";
import img2 from "@/assets/dance2.jpg";
import img3 from "@/assets/dance3.jpg";
import img4 from "@/assets/dance4.jpg";
import img5 from "@/assets/dance5.jpg";
import img6 from "@/assets/dance6.jpg";

const Interests = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="interests"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Beyond Coding
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center text-5xl font-Ovo"
      >
        My Interests
      </motion.h2>

      {/* Small Description */}
      <p className="text text-gray-600 dark:text-gray-400 text-center mt-4 max-w-2xl mx-auto">
        Outside of academics and tech, I’m passionate about dancing, volunteering,
        and participating in creative events. Here’s a glimpse of my extracurricular
        journey.
      </p>

      {/* Image Gallery */}
      <div className="flex items-center gap-2 h-[400px] w-full max-w-5xl mt-10 mx-auto">
        {[img1, img2, img3, img4, img5, img6].map((image, i) => (
          <div
            key={i}
            className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
          >
            <Image
              className="h-full w-full object-cover object-center"
              src={image}
              alt={`interest-${i}`}
            />
          </div>
        ))}
      </div>


      
    </motion.div>
  );
};

export default Interests;


