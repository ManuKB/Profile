import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile.data';
import { fadeInUp, staggerContainer, listItemVariants } from '../animations/AnimationVariants';

/**
 * Education Section Component
 * Timeline view of educational background
 */
export const Education = () => {
  return (
    <motion.section
      id="education"
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
          Education
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-8">
          {profileData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="relative pl-8 md:pl-12"
              variants={listItemVariants}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                whileHover={{ scale: 1.2 }}
              />

              {/* Timeline line */}
              {index < profileData.education.length - 1 && (
                <div className="absolute left-2.5 top-6 w-1 h-16 bg-gradient-to-b from-blue-400 to-purple-400" />
              )}

              <motion.div
                className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -4 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {edu.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{edu.school}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                  {edu.year}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
