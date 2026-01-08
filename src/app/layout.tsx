import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, IM_Fell_English_SC, Rajdhani, Space_Mono, IBM_Plex_Mono } from 'next/font/google';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const unifraktur = IM_Fell_English_SC({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-tech',
  display: 'swap',
});

// BRUTAL - just use IBM Plex Mono, stop trying to find a "brutal font"

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-brutal-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Maxwell Walker | Startup Engineer',
  description: 'Maxwell Walker helps startups build and scale their products through high-impact engineering solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            // Immediately apply the correct theme to avoid flash of wrong theme
            (function() {
              const storedTheme = localStorage.getItem('theme');
              
              if (storedTheme === 'light') {
                document.documentElement.classList.remove('dark');
              } else {
                // Default to dark mode regardless of system preference
                document.documentElement.classList.add('dark');
                // Only set in localStorage if explicitly chosen (not on first visit)
                if (storedTheme === 'dark') {
                  localStorage.setItem('theme', 'dark');
                }
              }
            })();
          `
        }} />
      </head>
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} ${unifraktur.variable} ${rajdhani.variable} ${ibmPlexMono.variable} font-sans bg-white text-radical-dark dark:bg-radical-dark dark:text-radical-light min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
