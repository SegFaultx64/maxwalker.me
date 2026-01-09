import Link from 'next/link';
import Image from 'next/image';
import PosterizedImage from '../components/posterized-image';
import CrtFilters from '../components/CrtFilters';
import { img } from '../lib/images';

const heroImage = '/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_rock_clim_515fa093-24e8-417a-aba9-46dd3d04f23e.png';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <CrtFilters />

      {/* SVG Filters for destruction */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <filter id="heavy-rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="4" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>
      </svg>

      {/* BRUTAL HERO */}
      <section className="brutal-hero brutal-scanlines relative h-screen">
        {/* Background image (dimmed) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${img(heroImage)}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(1.1)',
            opacity: 0.3
          }}
        />

        {/* h1 is SAME SIZE as section, text positioned at bottom via padding */}
        <h1
          className="absolute inset-0 brutal-title flex items-end px-4 pb-52"
          style={{
            backgroundImage: `url('${img(heroImage)}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            filter: 'grayscale(100%) contrast(1.4) brightness(1.3)',
            WebkitTextStroke: '3px var(--brutal-bone)'
          }}
        >
          <span>MAX<br/>WALKER</span>
        </h1>

        {/* Content positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-lg">
              <p className="text-[var(--brutal-bone)] text-sm md:text-base font-bold tracking-widest uppercase">
                Engineer. Adventurer. Startup survivor. Global wanderer.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-8 text-sm uppercase tracking-widest font-bold">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-[var(--brutal-bone)] hover:text-[var(--brutal-red)] transition-colors"
              >
                <span className="w-0 h-px bg-[var(--brutal-red)] group-hover:w-4 transition-all"></span>
                About
              </Link>
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-[var(--brutal-bone)] hover:text-[var(--brutal-red)] transition-colors"
              >
                <span className="w-0 h-px bg-[var(--brutal-red)] group-hover:w-4 transition-all"></span>
                Writing
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* Who I Am section */}
      <section className="relative overflow-hidden brutal-scanlines" style={{
        backgroundColor: '#0d0d0d',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundBlendMode: 'overlay',
      }}>
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          {/* LEFT HALF - Stacked text content - more right padding */}
          <div className="p-4 md:p-6 lg:p-8 md:pr-12 lg:pr-16">
            {/* Giant header */}
            <h2 className="text-[18vw] md:text-[9vw] font-black text-[var(--brutal-bone)] uppercase leading-[0.8] tracking-tighter mb-6" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>
              WHO I AM
            </h2>

            {/* Bio text */}
            <div className="mb-8">
              <p className="font-mono text-sm text-[var(--brutal-bone)]/90 mb-3">
                I&apos;m Max. I founded a startup, sold it, wandered the world, and spent a pandemic living out of a 60-year-old Airstream. Now I help founders dodge my mistakes so they can make original ones.
              </p>
              <p className="font-mono text-sm text-[var(--brutal-bone)]/90 mb-3">
                By day, I build things at <a href="https://pitonlabs.com" target="_blank" rel="noopener noreferrer" className="text-[var(--brutal-red)] hover:underline">Piton Labs</a>, helping startups find their footing. The rest of the time, I&apos;m usually planning the next trip, falling off embarrassingly easy climbs, or getting lost in the woods.
              </p>
              <p className="font-mono text-sm text-[var(--brutal-bone)]/70">
                This isn&apos;t a portfolio or a resume — it&apos;s where I put the things I learned the hard way about engineering, adventure, and finding meaning in the journey.
              </p>
            </div>

            {/* 4 points - tighter stacking */}
            <div className="space-y-6">
              <div className="group">
                <h3 className="text-2xl md:text-3xl font-black text-[var(--brutal-bone)] group-hover:text-[var(--brutal-red)] uppercase tracking-tight transition-colors" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>STARTUP VETERAN</h3>
                <p className="font-mono text-xs text-[var(--brutal-bone)]/60 mt-1">I&apos;ve been the founder, the engineer, the salesperson, and everything in between. I&apos;ve built MVPs, pivoted, and eventually found a path through.</p>
              </div>
              <div className="group">
                <h3 className="text-2xl md:text-3xl font-black text-[var(--brutal-bone)] group-hover:text-[var(--brutal-red)] uppercase tracking-tight transition-colors" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>GLOBAL EXPLORER</h3>
                <p className="font-mono text-xs text-[var(--brutal-bone)]/60 mt-1">From trekking in Patagonia to exploring Taiwan, I&apos;m a prolific traveler. I spent a year during COVID living out of a 60-year-old restored Airstream which is now our homebase on our 36 acre homestead in the middle of nowhere eastern Washington.</p>
              </div>
              <div className="group">
                <h3 className="text-2xl md:text-3xl font-black text-[var(--brutal-bone)] group-hover:text-[var(--brutal-red)] uppercase tracking-tight transition-colors" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>WEEKEND ADVENTURER</h3>
                <p className="font-mono text-xs text-[var(--brutal-bone)]/60 mt-1">An occasionally competent, often terrified trad and sport climber, aspiring ADK 46er, and someone who&apos;s in it more for the views and camaraderie than the adrenaline.</p>
              </div>
              <div className="group">
                <h3 className="text-2xl md:text-3xl font-black text-[var(--brutal-bone)] group-hover:text-[var(--brutal-red)] uppercase tracking-tight transition-colors" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>KITCHEN EXPERIMENTER</h3>
                <p className="font-mono text-xs text-[var(--brutal-bone)]/60 mt-1">When not coding or exploring, I&apos;m likely in the kitchen. Good food, like good code, benefits from both structure and creativity.</p>
              </div>
            </div>
          </div>

          {/* RIGHT HALF - Full bleed image */}
          <div className="relative min-h-[50vh] md:min-h-0">
            <PosterizedImage
              src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_taiwan__f9d769f9-055a-4b79-81fd-629aa045a671_1.png"
              alt="Taiwan building abstract"
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
            />
          </div>
        </div>
      </section>

      {/* Visual section */}
      <section className="py-16 relative bg-black">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 z-30 pointer-events-none mix-blend-screen opacity-[0.12]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="col-span-2">
                <PosterizedImage
                  src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_patagon_3472e375-8150-4cbc-851c-e796be66bcec_0.png"
                  alt="Patagonia landscape"
                  priority={true}
                  glitchEffect={true}
                  className="w-full grayscale contrast-125"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-4 h-1/2">
                  <PosterizedImage
                    src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_tblisi__4cf631cc-109f-4399-a1ae-3f1538a6cfd3_0.png"
                    alt="Tbilisi urban abstract"
                    className="w-full h-full grayscale contrast-125"
                  />
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-[var(--brutal-bone)]/70 p-4">
                  <span className="text-[var(--brutal-bone)] block mb-2">Suffering is a learned skill.</span>
                  Getting good at being miserable is about remembering you chose this path, knowing when to turn back, and finding people to share the journey.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="py-24 relative bg-black">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 z-30 pointer-events-none mix-blend-screen opacity-[0.1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="balatro-crt balatro-flicker">
            <blockquote className="crt-barrel bg-[#111] p-8 text-white">
              <div className="text-2xl md:text-3xl lg:text-4xl text-[var(--brutal-bone)] italic" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[var(--brutal-red)]">&#8220;</span>
                Climbing is a useless sport. You get to be conquistadors of the useless. You climb to the summit and there is nothing there. And you could hike to the top from another direction. How you get there is the important part.
                <span className="text-[var(--brutal-red)]">&#8221;</span>
              </div>
              <div className="mt-6 inline-flex items-center">
                <div className="h-px w-8 bg-[var(--brutal-bone)]/50 mr-4"></div>
                <p className="font-mono text-sm text-[var(--brutal-bone)]/70">Yvon Chouinard</p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative bg-black min-h-[50vh] flex items-center justify-center">
        {/* Background image */}
        <Image
          src={img("/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_vintage_34536eee-ac07-480c-a940-475fa5efcc09_1.png")}
          alt="Vintage tech"
          fill
          className="object-cover grayscale contrast-125 opacity-30"
        />
        {/* Content */}
        <div className="relative text-center px-4 py-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-[0.85] tracking-tighter mix-blend-difference" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>
            Want to talk about code, travel, or building things?
          </h2>
          <p className="font-mono text-sm text-[var(--brutal-bone)]/60 mt-6 max-w-xl mx-auto">
            I&apos;m always up for a conversation about technical challenges, startup ideas, Airstream renovations, or recommendations for trails and treks around the world.
          </p>
          <div className="mt-8 flex justify-center gap-6 font-mono text-sm uppercase tracking-widest">
            <Link href="mailto:max@maxwellwalker.com" className="group inline-flex items-center gap-3">
              <span className="text-[var(--brutal-red)] group-hover:text-[var(--brutal-bone)] transition-colors">Email Me</span>
              <span className="w-6 h-px bg-[var(--brutal-red)] group-hover:w-10 transition-all"></span>
            </Link>
            <span className="text-[var(--brutal-bone)]/30">/</span>
            <Link href="/blog" className="group inline-flex items-center gap-3">
              <span className="w-6 h-px bg-[var(--brutal-bone)]/50 group-hover:w-10 group-hover:bg-[var(--brutal-red)] transition-all"></span>
              <span className="text-[var(--brutal-bone)] group-hover:text-[var(--brutal-red)] transition-colors">Read my thoughts</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
