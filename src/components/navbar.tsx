'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - just text, no fancy box */}
          <Link
            href="/"
            className="text-[var(--brutal-bone)] hover:text-[var(--brutal-red)] transition-colors"
          >
            <span className="text-xl font-bold tracking-tight uppercase">
              MW
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  pathname === link.href
                    ? 'text-[var(--brutal-red)]'
                    : 'text-[var(--brutal-bone)] hover:text-[var(--brutal-red)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-[var(--brutal-bone)] transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-[var(--brutal-bone)] transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-[var(--brutal-bone)] transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 pt-24">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-bold uppercase tracking-widest transition-colors ${
                  pathname === link.href
                    ? 'text-[var(--brutal-red)]'
                    : 'text-[var(--brutal-bone)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
