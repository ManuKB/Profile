import React from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/layout/Header';
import ThemeToggle from './components/theme/ThemeToggle';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './components/sections/Home';
import Profile from './components/sections/Profile';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import AISkills from './components/sections/AISkills';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import References from './components/sections/References';
import Languages from './components/sections/Languages';
import Interests from './components/sections/Interests';
import './styles/animations.css';
import './styles/theme.css';
import './styles/responsive.css';
import './App.css';

/**
 * Main Application Component
 * Orchestrates all sections and layout
 */
function App() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <ThemeToggle />

        <main className="pt-20">
          <Home />
          <Profile />
          <Education />
          <Skills />
          <AISkills />
          <Experience />
          <Certifications />
          <References />
          <Languages />
          <Interests />
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-slate-800 py-8 border-t border-gray-200 dark:border-slate-700">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
            <p>© 2024 Mohan KB. All rights reserved. Built with React, Tailwind CSS, and Framer Motion.</p>
          </div>
        </footer>

        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;