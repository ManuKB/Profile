import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile.data';
import { fadeInUp, staggerContainer, listItemVariants } from '../animations/AnimationVariants';

/**
 * Certifications Section Component
 * Professional certifications and awards
 */
export const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="py-16 md:py-24"
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
          Certifications & Awards
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {profileData.certifications.map((cert) => (
            <motion.div
              key={cert.id}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              variants={listItemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">🏆</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    {cert.description}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <strong>Issuer:</strong> {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
