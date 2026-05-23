import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animated Dotted Waves Background
 * Creates a smooth, flowing wave pattern behind the profile photo
 */
export const AnimatedWaves = ({ className = '' }) => {
  const waveVariants = {
    animate: {
      pathLength: [0, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const waveOpacityVariants = {
    animate: {
      opacity: [0.2, 0.6, 0.2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'url(#blurDots)' }}
    >
      <defs>
        <filter id="blurDots">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>

      {/* Wave 1 - Outer */}
      <motion.circle
        cx="200"
        cy="200"
        r="180"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.3"
        strokeDasharray="8 8"
        variants={waveOpacityVariants}
        animate="animate"
      />

      {/* Wave 2 - Middle */}
      <motion.circle
        cx="200"
        cy="200"
        r="140"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
        strokeDasharray="8 8"
        style={{ animationDelay: '0.5s' }}
        variants={waveOpacityVariants}
        animate="animate"
      />

      {/* Wave 3 - Inner */}
      <motion.circle
        cx="200"
        cy="200"
        r="100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
        strokeDasharray="8 8"
        style={{ animationDelay: '1s' }}
        variants={waveOpacityVariants}
        animate="animate"
      />

      {/* Flowing wave patterns */}
      <motion.path
        d="M 100 200 Q 150 150 200 200 T 300 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="5 5"
        variants={waveVariants}
        animate="animate"
      />

      <motion.path
        d="M 100 250 Q 150 200 200 250 T 300 250"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="5 5"
        style={{ animationDelay: '0.3s' }}
        variants={waveVariants}
        animate="animate"
      />

      <motion.path
        d="M 100 150 Q 150 100 200 150 T 300 150"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="5 5"
        style={{ animationDelay: '0.6s' }}
        variants={waveVariants}
        animate="animate"
      />
    </svg>
  );
};

export default AnimatedWaves;
