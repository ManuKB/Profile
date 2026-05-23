import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile.data';
import { fadeInUp, staggerContainer, listItemVariants } from '../animations/AnimationVariants';

/**
 * Profile Section Component
 * Displays professional summary
 */
export const Profile = () => {
  return (
    <motion.section
      id="profile"
      className="py-16 md:py-24"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white"
          variants={fadeInUp}
        >
          Professional Profile
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          {profileData.profile.description}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Profile;
