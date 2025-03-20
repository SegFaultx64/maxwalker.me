import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, IM_Fell_English_SC, Rajdhani, Space_Mono } from 'next/font/google';
import { ThemeProvider } from '../components/theme-provider';
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
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} ${unifraktur.variable} ${rajdhani.variable} font-sans bg-radical-dark text-radical-light min-h-screen`}>
        <ThemeProvider defaultTheme="dark">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
