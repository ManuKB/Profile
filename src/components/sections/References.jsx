import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile.data';
import { fadeInUp, staggerContainer, listItemVariants } from '../animations/AnimationVariants';

/**
 * References Section Component
 * Professional references and contacts
 */
export const References = () => {
  return (
    <motion.section
      id="references"
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
          Professional References
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {profileData.references.map((ref) => (
            <motion.div
              key={ref.id}
              className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              variants={listItemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="mb-4 pb-4 border-b border-gray-200 dark:border-slate-600">
                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-1">
                  {ref.position} | {ref.company}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {ref.name}
                </h3>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${ref.phone}`}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.291 1.207 2.532 2.202 3.526a8.3 8.3 0 003.526 2.202l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57a6 6 0 01-5.991-5.991V5a6 6 0 015.991-5.991h2.57a1 1 0 011 1v2.153z" />
                  </svg>
                  <span className="text-sm">{ref.phone}</span>
                </a>

                <a
                  href={`mailto:${ref.email}`}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-sm">{ref.email}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default References;
