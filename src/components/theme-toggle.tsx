'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Check if dark mode is set in user preferences or localStorage
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    // Toggle between dark and light mode
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-14 flex items-center justify-center overflow-hidden industrial-border group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 radical-grid-light dark:radical-grid opacity-30 z-0 group-hover:opacity-50 transition-opacity"></div>
      
      {/* Sun icon */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}>
        <svg 
          className="w-6 h-6 text-radical-primary-light" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
          />
        </svg>
      </div>
      
      {/* Moon icon */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
        <svg 
          className="w-6 h-6 text-radical-primary-DEFAULT animate-pulse-slow" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
          />
        </svg>
      </div>
      
      {/* Noise effect */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('/noise.png')]"></div>
      
      {/* Overlay effects when hovering */}
      {isHovering && (
        <>
          <div className={`absolute top-0 left-0 w-full h-0.5 bg-radical-primary-light dark:bg-radical-primary-DEFAULT opacity-80 animate-glitch-horizontal`}></div>
          <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-radical-primary-light dark:bg-radical-primary-DEFAULT opacity-80 animate-glitch-horizontal`}></div>
          <div className={`absolute top-0 left-0 w-0.5 h-full bg-radical-primary-light dark:bg-radical-primary-DEFAULT opacity-80 animate-glitch-vertical`}></div>
          <div className={`absolute top-0 right-0 w-0.5 h-full bg-radical-primary-light dark:bg-radical-primary-DEFAULT opacity-80 animate-glitch-vertical`}></div>
        </>
      )}
    </button>
  );
} 