import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile.data';
import photoImage from '../../assets/myphoto.png';
import AnimatedWaves from '../animations/AnimatedWaves';
import SparkleStars from '../animations/SparkleStars';
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn } from '../animations/AnimationVariants';

/**
 * Home Section Component
 * Profile hero section with profile photo, details, and contact information
 */
export const Home = () => {
  const { personal, social } = profileData;

  return (
    <motion.section
      id="home"
      className="pt-32 pb-16 md:pt-40 md:pb-24"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Animations */}
          <motion.div className="flex justify-center" variants={fadeInLeft}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated Background Waves */}
              <div className="absolute inset-0 text-blue-400/30 dark:text-blue-500/30">
                <AnimatedWaves />
              </div>

              {/* Sparkle Stars */}
              <div className="absolute inset-0 text-purple-400/40 dark:text-purple-500/40">
                <SparkleStars count={25} />
              </div>

              {/* Animated Border Circle */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-500 to-purple-600"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  borderImage: 'linear-gradient(to right, #3b82f6, #a855f7) 1',
                }}
              />

              {/* Profile Image */}
              <motion.img
                src={photoImage}
                alt={`${personal.firstName} ${personal.lastName}`}
                className="relative w-full h-full rounded-full object-cover shadow-2xl"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                transition={{ ease: 'easeInOut' }}
              />

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-600/20 blur-3xl"
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>

          {/* Profile Information */}
          <motion.div className="text-center md:text-left" variants={fadeInRight}>
            {/* Name */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              variants={fadeInUp}
            >
              <span className="text-gray-900 dark:text-white">
                {personal.firstName}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {personal.lastName}
              </span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-semibold mb-6"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              {personal.title}
            </motion.h2>

            {/* Contact Information */}
            <motion.div
              className="space-y-3 mb-8"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gray-700 dark:text-gray-300 flex items-center justify-center md:justify-start gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {personal.location}
              </p>
              <a
                href={`mailto:${personal.email}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-center md:justify-start gap-2"
              >
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-center md:justify-start gap-2"
              >
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.291 1.207 2.532 2.202 3.526a8.3 8.3 0 003.526 2.202l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57a6 6 0 01-5.991-5.991V5a6 6 0 015.991-5.991h2.57a1 1 0 011 1v2.153z" />
                </svg>
                {personal.phone}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center md:justify-start mb-8"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              {social.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={getSocialIcon(item.platform)} />
                  </svg>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
              <motion.a
                href="#experience"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Experience
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Helper function to get social icons
function getSocialIcon(platform) {
  const icons = {
    LinkedIn:
      'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    Facebook:
      'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    Instagram:
      'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-16c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.686 6-6-2.687-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm3.5-11c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5z',
  };
  return icons[platform] || icons.LinkedIn;
}

export default Home;
