import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile.data';
import { fadeInUp, staggerContainer, listItemVariants, hoverScale } from '../animations/AnimationVariants';

/**
 * Skills Section Component
 * Displays professional skills with category grouping
 */
export const Skills = () => {
  // Group skills by category
  const skillsByCategory = profileData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <motion.section
      id="skills"
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
          Professional Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills], index) => (
            <motion.div
              key={category}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg"
              variants={listItemVariants}
              transition={{ delay: index * 0.1 }}
              whileHover="hover"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {category}
              </h3>
              <ul className="space-y-3">
                {skills.map((skill) => (
                  <motion.li
                    key={skill.id}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    variants={hoverScale}
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
