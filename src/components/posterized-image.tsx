'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

type PosterizedImageProps = {
  src: string;
  alt: string;
  className?: string;
  overlayColor?: string;
  glitchEffect?: boolean;
  priority?: boolean;
  sizes?: string;
  dynamicHeight?: boolean;
  aspectRatio?: string;
  objectPosition?: string;
};

export default function PosterizedImage({
  src,
  alt,
  className = '',
  overlayColor = 'rgba(0, 245, 212, 0.1)',
  glitchEffect = false,
  priority = false,
  sizes = '100vw',
  dynamicHeight = false,
  aspectRatio = '1/1',
  objectPosition = 'center',
}: PosterizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    // Check if dark mode is active
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    
    // Listen for changes to the dark mode class
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className={`overflow-visible relative ${className}`}
      style={dynamicHeight ? {} : { aspectRatio }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='scale-110 bg-radical-light dark:bg-radical-dark'>
        <Image
          src={src}
          alt={alt}
          fill={false}
          width={1200}
          height={800}
          className={`object-contain transition-transform duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            objectPosition,
            filter: isDarkMode 
              ? 'contrast(1) brightness(1.5) invert(1)' 
              : 'contrast(1.2) brightness(1)',
            mixBlendMode: isDarkMode ? 'screen' : 'unset'
          }}
          onLoad={() => setIsLoaded(true)}
          priority={priority}
          sizes={sizes}
          quality={100}
        />
      </div>
      
    </div>
  );
} 