'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './theme-toggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ];
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'dark:bg-radical-darker/90 bg-radical-light/90 backdrop-blur' : 'bg-transparent'} cyberpunk-grid`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 border border-radical-primary-DEFAULT dark:border-radical-primary-DEFAULT flex items-center justify-center overflow-hidden industrial-border">
              <div className="absolute inset-0 dark:radical-grid radical-grid-light opacity-40 group-hover:opacity-70 transition-opacity"></div>
              <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT font-tech text-xl font-bold z-10 animate-glitch">M</span>
              <div className="absolute inset-0 bg-radical-primary-light/10 dark:bg-radical-primary-DEFAULT/10 group-hover:bg-radical-primary-light/20 dark:group-hover:bg-radical-primary-DEFAULT/20 transition-colors"></div>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-radical-dark dark:text-radical-light">
                Max<span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">Walker</span>
              </h3>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 tech-text text-sm uppercase tracking-wider transition-colors relative group ${
                  pathname === link.href 
                    ? 'text-radical-primary-light dark:text-radical-primary-DEFAULT' 
                    : 'text-radical-dark dark:text-radical-light hover:text-radical-primary-light dark:hover:text-radical-primary-DEFAULT'
                }`}
              >
                {pathname === link.href && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-radical-primary-light/50 dark:bg-radical-primary-DEFAULT/50"></span>
                )}
                {link.label}
                <span className="absolute -bottom-px left-0 w-0 h-px bg-radical-primary-light dark:bg-radical-primary-DEFAULT group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            <ThemeToggle />
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-4 w-12 h-12 flex flex-col items-center justify-center relative group"
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-radical-primary-light dark:bg-radical-primary-DEFAULT transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-radical-primary-light dark:bg-radical-primary-DEFAULT my-1.5 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-6 h-0.5 bg-radical-primary-light dark:bg-radical-primary-DEFAULT transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-radical-light/95 dark:bg-radical-darker/95 backdrop-blur-md z-40 transition-all duration-500 cyberpunk-grid ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-24">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`tech-text text-xl uppercase tracking-wider transition-colors ${
                  pathname === link.href 
                    ? 'text-radical-primary-light dark:text-radical-primary-DEFAULT' 
                    : 'text-radical-dark dark:text-radical-light'
                }`}
              >
                <span className="num-tag mr-2 text-radical-primary-light dark:text-radical-primary-DEFAULT">0{navLinks.indexOf(link) + 1}</span>
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-16 border-t border-radical-primary-light/20 dark:border-radical-primary-DEFAULT/20 pt-8">
            <div className="font-mono text-xs text-radical-dark/70 dark:text-radical-light/70 uppercase tracking-wider">
              GET IN TOUCH
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 