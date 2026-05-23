import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * Sparkle Stars Animation
 * Creates twinkling AI stars effect behind the profile photo
 */
export const SparkleStars = ({ count = 20, className = '' }) => {
  // Generate random stars memoized
  const stars = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 2 + 2,
      delay: Math.random() * 0.5,
      initialScale: Math.random() * 0.5 + 0.5,
    }));
  }, [count]);

  const sparkleVariants = {
    animate: (custom) => ({
      opacity: [0, 1, 0],
      scale: [custom.initialScale * 0.5, custom.initialScale, custom.initialScale * 0.5],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        delay: custom.delay,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="starGradient">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      {stars.map((star) => (
        <motion.circle
          key={star.id}
          cx={star.x * 4}
          cy={star.y * 4}
          r={star.size}
          fill="currentColor"
          opacity={0.6}
          custom={star}
          variants={sparkleVariants}
          animate="animate"
          filter="url(#blurStar)"
        />
      ))}

      {/* Additional plus-shaped sparkles */}
      {stars.slice(0, count / 2).map((star) => (
        <motion.g
          key={`plus-${star.id}`}
          transform={`translate(${star.x * 4}, ${star.y * 4})`}
          custom={star}
          variants={sparkleVariants}
          animate="animate"
        >
          <line x1="0" y1="-2" x2="0" y2="2" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
          <line x1="-2" y1="0" x2="2" y2="0" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
        </motion.g>
      ))}
    </svg>
  );
};

export default SparkleStars;
