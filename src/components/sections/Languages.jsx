import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile.data';
import { fadeInUp, staggerContainer, listItemVariants } from '../animations/AnimationVariants';

/**
 * Languages Section Component
 * Language proficiencies
 */
export const Languages = () => {
  return (
    <motion.section
      id="languages"
      className="py-16 md:py-24 bg-gray-50 dark:bg-slate-800/50"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          variants={fadeInUp}
        >
          Languages
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {profileData.languages.map((lang) => (
            <motion.div
              key={lang.id}
              className="bg-white dark:bg-slate-700 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={listItemVariants}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {lang.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {lang.proficiency}
                  </p>
                </div>
                <span className="text-2xl">🗣️</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Languages;
