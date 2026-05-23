import React from 'react';
import { motion } from 'framer-motion';
import { aiSkillsData } from '../../data/aiSkills.data';
import { fadeInUp, staggerContainer, listItemVariants, pulseAnimation } from '../animations/AnimationVariants';

/**
 * AI Skills Section Component
 * Comprehensive AI/ML capabilities and expertise
 */
export const AISkills = () => {
  return (
    <motion.section
      id="aiskills"
      className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI & Machine Learning Expertise
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced proficiency in modern AI/ML technologies, from foundational algorithms to cutting-edge generative models
          </p>
        </motion.div>

        {/* AI Fundamentals */}
        <motion.div className="mb-16" variants={staggerContainer}>
          <motion.h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            variants={fadeInUp}
          >
            Core Competencies
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiSkillsData.ai_fundamentals.map((skill, index) => (
              <motion.div
                key={skill.id}
                className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                variants={listItemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="text-3xl"
                    variants={pulseAnimation}
                    animate="animate"
                  >
                    🤖
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {skill.name}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                      {skill.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-semibold">
                      {skill.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frameworks & Tools */}
        <motion.div className="mb-16" variants={staggerContainer}>
          <motion.h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            variants={fadeInUp}
          >
            Frameworks & Tools
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiSkillsData.frameworks_tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                className="bg-white dark:bg-slate-700 p-5 rounded-lg"
                variants={listItemVariants}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {tool.name}
                    </h4>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      {tool.proficiency}%
                    </span>
                  </div>
                  {/* Progress bar */}
                  <motion.div
                    className="w-full h-2 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden"
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.proficiency}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specialized Domains */}
        <motion.div className="mb-16" variants={staggerContainer}>
          <motion.h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            variants={fadeInUp}
          >
            Specialized Domains
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiSkillsData.specialized_domains.map((domain) => (
              <motion.div
                key={domain.id}
                className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md"
                variants={listItemVariants}
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {domain.title}
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {domain.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Experience:</strong> {domain.experience}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Methodologies */}
        <motion.div variants={staggerContainer}>
          <motion.h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            variants={fadeInUp}
          >
            Methodologies & Approaches
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiSkillsData.methodologies.map((method) => (
              <motion.div
                key={method.id}
                className="flex items-start gap-3 p-4 bg-white dark:bg-slate-700 rounded-lg"
                variants={listItemVariants}
              >
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {method.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {method.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AISkills;
