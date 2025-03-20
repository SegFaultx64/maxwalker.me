'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from './theme-provider';

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
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  

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
            filter: isDarkTheme 
              ? 'contrast(1) brightness(1.5) invert(1)' 
              : 'contrast(1.2) brightness(1)',
            mixBlendMode: isDarkTheme ? 'screen' : 'multiply'
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