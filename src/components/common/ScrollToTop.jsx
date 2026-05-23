import React from 'react';
import { motion } from 'framer-motion';
import { useWindowScroll } from '../../hooks/useWindowScroll';
import { fadeInUp } from '../animations/AnimationVariants';

/**
 * Scroll to Top Button Component
 * Shows when user scrolls down, smooth scroll to top
 */
export const ScrollToTop = () => {
  const { showScroll, scrollToTop } = useWindowScroll();

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: showScroll ? 1 : 0, y: showScroll ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ pointerEvents: showScroll ? 'auto' : 'none' }}
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V15a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </motion.button>
  );
};

export default ScrollToTop;
