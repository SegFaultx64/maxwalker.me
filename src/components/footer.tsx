import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black relative h-[180px] border-t border-[var(--brutal-bone)]/10">

      {/* Top left - tagline */}
      <div className="absolute top-6 left-4 max-w-xs">
        <p className="text-[var(--brutal-bone)]/60 text-xs md:text-sm font-bold tracking-widest uppercase leading-relaxed">
          Building resilient systems, wrestling with hard problems, and trying not to break things.
        </p>
      </div>

      {/* Top right - location */}
      <div className="absolute top-6 right-4 text-right text-xs text-[var(--brutal-bone)]/40 font-bold tracking-widest uppercase">
        Saratoga Springs, NY / Plain, WA
      </div>

      {/* Bottom left - email + copyright */}
      <div className="absolute bottom-6 left-4 text-xs font-bold tracking-widest uppercase">
        <a href="mailto:max@maxclimbs.rocks" className="text-[var(--brutal-bone)] hover:text-[var(--brutal-red)]">
          max@maxclimbs.rocks
        </a>
        <span className="text-[var(--brutal-bone)]/30 ml-4">&copy; {currentYear}</span>
      </div>

      {/* Bottom right - links */}
      <div className="absolute bottom-6 right-4 flex gap-6 text-xs font-bold tracking-widest uppercase">
        <Link href="/" className="text-[var(--brutal-bone)] hover:text-[var(--brutal-red)]">Home</Link>
        <Link href="/about" className="text-[var(--brutal-bone)] hover:text-[var(--brutal-red)]">About</Link>
        <Link href="/blog" className="text-[var(--brutal-bone)] hover:text-[var(--brutal-red)]">Blog</Link>
        <a href="https://linkedin.com/in/maxwellwalkerwindrush" target="_blank" rel="noopener noreferrer" className="text-[var(--brutal-bone)] hover:text-[var(--brutal-red)]">LinkedIn</a>
        <a href="https://github.com/SegFaultx64" target="_blank" rel="noopener noreferrer" className="text-[var(--brutal-bone)] hover:text-[var(--brutal-red)]">GitHub</a>
      </div>

    </footer>
  );
}
