'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check initial theme
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                    window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(checkDarkMode);

    return () => {
      observer.disconnect();
      mediaQuery.removeListener(checkDarkMode);
    };
  }, []);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={navRef}>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-6 right-6 z-50 p-2 transition-colors drop-shadow-lg ${
          isDarkMode ? 'text-white hover:text-white/70' : 'text-white hover:text-gray-600'
        }`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <div className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-4 rotate-45 translate-y-1.5' : 'w-6'}`}></div>
          <div className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-4 opacity-0' : 'w-5'}`}></div>
          <div className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-4 -rotate-45 -translate-y-1.5' : 'w-4'}`}></div>
        </div>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`fixed top-20 right-6 z-40 transition-all duration-300 ease-in-out transform ${
          isOpen 
            ? 'opacity-100 visible translate-y-0 scale-100' 
            : 'opacity-0 invisible -translate-y-2 scale-95'
        }`}
      >
        <div className="flex flex-col gap-3 min-w-[200px]">
          <Link 
            href="/" 
            className={`block px-4 py-3 rounded-lg border transition-all duration-200 ease-out transform hover:scale-[1.02] hover:-translate-y-1 ${
              isDarkMode 
                ? 'bg-black/40 border-white/20 text-white hover:bg-black/60 hover:text-white/95 hover:shadow-lg hover:shadow-black/20' 
                : 'bg-white/40 border-gray-400/20 text-gray-800 hover:bg-white/60 hover:text-gray-700 hover:shadow-lg hover:shadow-gray-500/20'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <span className="font-medium">Home</span>
          </Link>
          <Link 
            href="#about" 
            className={`block px-4 py-3 rounded-lg border transition-all duration-200 ease-out transform hover:scale-[1.02] hover:-translate-y-1 ${
              isDarkMode 
                ? 'bg-black/40 border-white/20 text-white hover:bg-black/60 hover:text-white/95 hover:shadow-lg hover:shadow-black/20' 
                : 'bg-white/40 border-gray-400/20 text-gray-800 hover:bg-white/60 hover:text-gray-700 hover:shadow-lg hover:shadow-gray-500/20'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <span className="font-medium">About</span>
          </Link>
        </div>
      </div>
    </div>
  );
}