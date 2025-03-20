import './globals.css';
import type { Metadata } from 'next';
import { spaceGrotesk, spaceMono, unifraktur, cinzelDecorative } from '../lib/fonts';
import { ThemeProvider } from '../components/theme-provider';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

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
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} ${unifraktur.variable} ${cinzelDecorative.variable} font-sans bg-radical-light dark:bg-radical-dark text-radical-dark dark:text-radical-light min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
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
