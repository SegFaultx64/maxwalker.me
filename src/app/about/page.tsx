import Link from 'next/link';
import PosterizedImage from '../../components/posterized-image';
import GlobeDemo from '../../components/GlobeDemo';
import CrtFilters from '../../components/CrtFilters';

export default function AboutPage() {
  return (
    <div className="relative bg-black overflow-hidden">
      <CrtFilters />

      {/* Hero - full screen like homepage */}
      <section className="brutal-hero brutal-scanlines relative h-screen">
        {/* Background image (dimmed) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_abandon_01880443-fc44-4d8f-832a-91fe0d06ad45_0.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(1.1)',
            opacity: 0.3
          }}
        />

        {/* Giant ABOUT text with image through */}
        <h1
          className="absolute inset-0 brutal-title flex items-end px-4 pb-72 md:pb-64"
          style={{
            backgroundImage: "url('/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_abandon_01880443-fc44-4d8f-832a-91fe0d06ad45_0.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            filter: 'grayscale(100%) contrast(1.4) brightness(1.3)',
            WebkitTextStroke: '3px var(--brutal-bone)'
          }}
        >
          <span>ABOUT</span>
        </h1>

        {/* Story content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="max-w-lg">
              <p className="font-mono text-sm text-[var(--brutal-bone)]/80 mb-4">
                I founded a startup, sold it, wandered the world, and spent a pandemic living out of a 60-year-old Airstream. Now I help other founders dodge my mistakes so they can make original ones.
              </p>
              <p className="font-mono text-xs text-[var(--brutal-bone)]/50">
                By day, I build things at <a href="https://pitonlabs.com" target="_blank" rel="noopener noreferrer" className="text-[var(--brutal-red)] hover:underline">Piton Labs</a>. The rest of the time, I'm planning the next trip or falling off easy climbs.
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-2">
              <p className="text-[var(--brutal-bone)] text-sm font-bold tracking-widest uppercase">
                Engineer. Adventurer. Airstream renovator.
              </p>
              <Link
                href="/blog"
                className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest"
              >
                <span className="text-[var(--brutal-red)] group-hover:text-[var(--brutal-bone)] transition-colors">Read my writing</span>
                <span className="w-6 h-px bg-[var(--brutal-red)] group-hover:w-10 transition-all"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Globe section */}
      <section className="py-16 bg-black">
        <GlobeDemo />
      </section>

      {/* Airstream Adventures - 2 column reversed */}
      <section className="relative" style={{ backgroundColor: '#080808' }}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left - image */}
          <div className="relative min-h-[50vh] md:min-h-[600px]">
            <PosterizedImage
              src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_patagon_3472e375-8150-4cbc-851c-e796be66bcec_0.png"
              alt="Patagonia"
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
            />
          </div>

          {/* Right - text */}
          <div className="p-4 md:p-8 lg:p-12">
            <h2 className="text-[14vw] md:text-[5vw] font-black text-[var(--brutal-bone)] uppercase leading-[0.85] tracking-tighter mb-8" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>
              AIRSTREAM<br/>ADVENTURES
            </h2>

            <div className="space-y-6">
              <div className="group">
                <h3 className="text-xl font-black text-[var(--brutal-red)] uppercase tracking-tight mb-2 inline-flex items-center gap-2" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>
                  <span className="w-0 h-px bg-[var(--brutal-red)] group-hover:w-4 transition-all"></span>
                  The Restoration
                </h3>
                <p className="font-mono text-xs text-[var(--brutal-bone)]/60 group-hover:text-[var(--brutal-bone)]/80 transition-colors">
                  At the start of COVID, we bought a ruined 1963 Airstream Overlander—just a frame and shell after decades of neglect in an Iowa field. I bought an ebook about DIY restoration, but got as far as "lift the shell with a gantry" before realizing I might accidentally kill myself.
                </p>
                <p className="font-mono text-xs text-[var(--brutal-bone)]/60 group-hover:text-[var(--brutal-bone)]/80 transition-colors mt-2">
                  We found amazing craftspeople in Ohio who did most of the work while we FaceTimed and exchanged images throughout lockdown. When it was ready, we picked it up having never towed anything before in our lives.
                </p>
              </div>

              <div className="group">
                <h3 className="text-xl font-black text-[var(--brutal-bone)] group-hover:text-[var(--brutal-red)] uppercase tracking-tight mb-2 inline-flex items-center gap-2 transition-colors" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>
                  <span className="w-0 h-px bg-[var(--brutal-red)] group-hover:w-4 transition-all"></span>
                  The Grand Tour
                </h3>
                <p className="font-mono text-xs text-[var(--brutal-bone)]/60 group-hover:text-[var(--brutal-bone)]/80 transition-colors">
                  We set out on an absurdly ambitious first trip with zero experience—all the way to Wyoming and Colorado. We dragged it up forest roads in the Tetons (freaking out the rangers), and narrowly escaped both wildfires and unexpected snow in Estes Park before racing back east.
                </p>
                <p className="font-mono text-xs text-[var(--brutal-bone)]/60 group-hover:text-[var(--brutal-bone)]/80 transition-colors mt-2">
                  The next spring, we embarked on an even bigger journey: 38 states, 5 Canadian provinces, with our surprisingly adaptable cat in tow. We crossed Canada the day the border reopened, fell in love with Chelan County, WA, and ended up buying acres of wild land nearby.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy - 2 column */}
      <section className="relative" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left - text */}
          <div className="p-4 md:p-8 lg:p-12">
            <h2 className="text-[12vw] md:text-[5vw] font-black text-[var(--brutal-bone)] uppercase leading-[0.85] tracking-tighter mb-6" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>
              <span className="text-[var(--brutal-red)]">ENGINEERING</span><br/>PHILOSOPHY
            </h2>

            <div className="space-y-4 font-mono text-sm text-[var(--brutal-bone)]/70 mb-6">
              <p>
                Pragmatism above all, but that means doing what's reasonable, not just what's fastest or easiest. Everything in tech is a set of tradeoffs—the art is in picking the right ones.
              </p>
              <p>A few principles I live by:</p>
            </div>

            <ul className="space-y-3 font-mono text-sm text-[var(--brutal-bone)]/70">
              <li className="group flex items-baseline cursor-default">
                <span className="text-[var(--brutal-red)] mr-3 font-bold">01.</span>
                <span className="w-0 h-px bg-[var(--brutal-red)] group-hover:w-3 mr-0 group-hover:mr-2 transition-all"></span>
                <span className="group-hover:text-[var(--brutal-bone)] transition-colors">Most startup code will be thrown away. Plan accordingly.</span>
              </li>
              <li className="group flex items-baseline cursor-default">
                <span className="text-[var(--brutal-red)] mr-3 font-bold">02.</span>
                <span className="w-0 h-px bg-[var(--brutal-red)] group-hover:w-3 mr-0 group-hover:mr-2 transition-all"></span>
                <span className="group-hover:text-[var(--brutal-bone)] transition-colors">Code quality matters, but code is just a tool—business impact is the goal.</span>
              </li>
              <li className="group flex items-baseline cursor-default">
                <span className="text-[var(--brutal-red)] mr-3 font-bold">03.</span>
                <span className="w-0 h-px bg-[var(--brutal-red)] group-hover:w-3 mr-0 group-hover:mr-2 transition-all"></span>
                <span className="group-hover:text-[var(--brutal-bone)] transition-colors">Know when to push through challenges, but also when to turn back.</span>
              </li>
              <li className="group flex items-baseline cursor-default">
                <span className="text-[var(--brutal-red)] mr-3 font-bold">04.</span>
                <span className="w-0 h-px bg-[var(--brutal-red)] group-hover:w-3 mr-0 group-hover:mr-2 transition-all"></span>
                <span className="group-hover:text-[var(--brutal-bone)] transition-colors">Remember you chose this path when things get tough.</span>
              </li>
            </ul>
          </div>

          {/* Right - image */}
          <div className="relative min-h-[50vh] md:min-h-0">
            <PosterizedImage
              src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_trekkin_006d7bac-0620-40e0-9c6f-d466c44f1f4d_2.png"
              alt="Trekking"
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
              glitchEffect={true}
            />
          </div>
        </div>
      </section>

      {/* Lessons / Quotes */}
      <section className="relative py-12 px-4 md:px-12 overflow-hidden" style={{ backgroundColor: '#080808' }}>
        {/* Background grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--brutal-bone) 1px, transparent 1px),
              linear-gradient(90deg, var(--brutal-bone) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8">
          {/* Quotes */}
          <div className="space-y-6">
            <div className="group flex gap-4 cursor-default">
              <div className="shrink-0 w-12 h-12 border border-[var(--brutal-red)] flex items-center justify-center group-hover:bg-[var(--brutal-red)] transition-colors">
                <span className="text-[var(--brutal-red)] group-hover:text-black font-mono text-lg font-bold transition-colors">01</span>
              </div>
              <div>
                <h3 className="font-mono text-xs text-[var(--brutal-red)] uppercase tracking-widest mb-2">On suffering</h3>
                <p className="font-mono text-sm text-[var(--brutal-bone)]/80 group-hover:text-[var(--brutal-bone)] italic leading-relaxed transition-colors">
                  "There are going to be times when you are not having fun, a lot of them. It's important to remember as a founder that you chose to be here and that often the things that suck in the moment will fade away but the other pieces will stay."
                </p>
              </div>
            </div>

            <div className="h-px bg-[var(--brutal-bone)]/10 ml-16"></div>

            <div className="group flex gap-4 cursor-default">
              <div className="shrink-0 w-12 h-12 border border-[var(--brutal-bone)]/30 group-hover:border-[var(--brutal-red)] flex items-center justify-center transition-colors">
                <span className="text-[var(--brutal-bone)]/50 group-hover:text-[var(--brutal-red)] font-mono text-lg font-bold transition-colors">02</span>
              </div>
              <div>
                <h3 className="font-mono text-xs text-[var(--brutal-bone)]/50 group-hover:text-[var(--brutal-red)] uppercase tracking-widest mb-2 transition-colors">On turning back</h3>
                <p className="font-mono text-sm text-[var(--brutal-bone)]/80 group-hover:text-[var(--brutal-bone)] italic leading-relaxed transition-colors">
                  "It's very important to understand when to turn back. You can turn a slight mess into a life-threatening disaster in the mountains by pushing forward when you should have called it. The same is basically true with startups—there are times to cut and run, and you're only making it worse if you double down in these moments."
                </p>
              </div>
            </div>
          </div>

          {/* Right side graphic - technical diagram */}
          <div className="hidden md:block relative">
            <div className="sticky top-8">
              <svg viewBox="0 0 100 120" className="w-full text-[var(--brutal-bone)]/15">
                {/* Outer frame */}
                <rect x="5" y="5" width="90" height="90" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                {/* Inner circles - more mechanical/technical */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="3" fill="currentColor"/>
                {/* Crosshairs */}
                <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.3"/>
                <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.3"/>
                {/* Corner marks */}
                <line x1="5" y1="15" x2="15" y2="15" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="15" y1="5" x2="15" y2="15" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="85" y1="5" x2="85" y2="15" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="85" y1="15" x2="95" y2="15" stroke="currentColor" strokeWidth="0.5"/>
                {/* Bottom label */}
                <text x="50" y="110" textAnchor="middle" fill="currentColor" fontSize="5" fontFamily="monospace" letterSpacing="0.1em">FIG. 02</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 px-4 md:px-12 overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
        {/* Diagonal lines texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              var(--brutal-bone) 0px,
              var(--brutal-bone) 1px,
              transparent 1px,
              transparent 20px
            )`
          }}
        />

        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-center">
          <div>
            <div className="inline-block border border-[var(--brutal-red)] px-3 py-1 mb-6">
              <span className="font-mono text-xs text-[var(--brutal-red)] uppercase tracking-widest">Continue reading</span>
            </div>
            <svg className="absolute w-0 h-0">
              <defs>
                <filter id="roughen">
                  <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="noise"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G"/>
                </filter>
              </defs>
            </svg>
            <h2
              className="text-[12vw] md:text-[6vw] font-black uppercase leading-[0.8] tracking-tighter text-[var(--brutal-bone)]"
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                filter: 'url(#roughen)'
              }}
            >
              THE<br/>BLOG
            </h2>
          </div>

          <div className="border-l border-[var(--brutal-bone)]/10 pl-8">
            <p className="font-mono text-sm text-[var(--brutal-bone)]/60 mb-6">
              Thoughts on engineering, startups, and lessons learned the hard way. From technical deep-dives to trail reports.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 group"
            >
              <span className="font-mono text-sm uppercase tracking-widest text-[var(--brutal-red)] group-hover:text-[var(--brutal-bone)] transition-colors">
                View all posts
              </span>
              <span className="w-8 h-px bg-[var(--brutal-red)] group-hover:w-12 transition-all"></span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
