import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile.data';
import { fadeInUp, staggerContainer, listItemVariants } from '../animations/AnimationVariants';

/**
 * Interests Section Component
 * Personal interests and hobbies
 */
export const Interests = () => {
  const getInterestIcon = (iconName) => {
    const icons = {
      'bx-headphone': '🎵',
      'bxs-plane-alt': '✈️',
      'bx-dumbbell': '💪',
      'bx-book': '📚',
      'bx-search-alt': '🌐',
    };
    return icons[iconName] || '⭐';
  };

  return (
    <motion.section
      id="interests"
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
          Interests & Hobbies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {profileData.interests.map((interest) => (
            <motion.div
              key={interest.id}
              className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
              variants={listItemVariants}
              whileHover={{ y: -4, scale: 1.05 }}
            >
              <div className="text-4xl mb-3">{getInterestIcon(interest.icon)}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                {interest.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Interests;
