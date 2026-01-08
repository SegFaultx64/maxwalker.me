import Link from 'next/link';
import { getAllBlogPosts } from '../../lib/markdown';
import CrtFilters from '../../components/CrtFilters';

export const metadata = {
  title: 'Blog',
  description: 'Writing on engineering, startups, and adventure.'
};

export default async function BlogIndexPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="relative bg-black overflow-hidden">
      <CrtFilters />

      {/* Hero - full screen like homepage */}
      <section className="brutal-hero brutal-scanlines relative h-screen">
        {/* Background image (dimmed) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_vintage_34536eee-ac07-480c-a940-475fa5efcc09_1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(1.1)',
            opacity: 0.3
          }}
        />

        {/* Giant WRITING text with image through */}
        <h1
          className="absolute inset-0 brutal-title flex items-end px-4 pb-72 md:pb-64"
          style={{
            backgroundImage: "url('/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_vintage_34536eee-ac07-480c-a940-475fa5efcc09_1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            filter: 'grayscale(100%) contrast(1.4) brightness(1.3)',
            WebkitTextStroke: '3px var(--brutal-bone)'
          }}
        >
          <span>WRITING</span>
        </h1>

        {/* Content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="max-w-lg">
              <p className="font-mono text-sm text-[var(--brutal-bone)]/80 mb-4">
                Notes on building things, climbing mountains, and everything in between. From technical deep-dives to trail reports.
              </p>
              <p className="font-mono text-xs text-[var(--brutal-bone)]/50">
                Thoughts on engineering, startups, and lessons learned the hard way.
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-2">
              <p className="text-[var(--brutal-bone)] text-sm font-bold tracking-widest uppercase">
                {posts.length} Posts
              </p>
              <Link
                href="/"
                className="font-mono text-sm uppercase tracking-widest text-[var(--brutal-red)] hover:text-[var(--brutal-bone)] transition-colors"
              >
                ← Back home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Posts section */}
      <section className="relative py-16" style={{
        backgroundColor: '#0d0d0d',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundBlendMode: 'overlay',
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="mb-12">
              <h2 className="text-[12vw] md:text-[6vw] font-black text-[var(--brutal-bone)] uppercase leading-[0.85] tracking-tighter" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>
                ALL POSTS
              </h2>
              <div className="h-px w-24 bg-[var(--brutal-red)] mt-4"></div>
            </div>

            {/* Posts list */}
            <div className="space-y-8">
              {posts.map((post, index) => (
                <article key={post.id} className="group border-b border-[var(--brutal-bone)]/10 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-8 items-start">
                    {/* Index number */}
                    <div className="hidden md:block">
                      <span className="font-mono text-xs text-[var(--brutal-red)] tracking-widest">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="font-mono text-xs text-[var(--brutal-bone)]/50 uppercase tracking-widest mb-2">
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-[var(--brutal-bone)] uppercase tracking-tight group-hover:text-[var(--brutal-red)] transition-colors mb-3" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>
                        <Link href={`/blog/${post.id}`}>
                          {post.shortTitle}
                        </Link>
                      </h3>
                      <p className="font-mono text-sm text-[var(--brutal-bone)]/60 max-w-2xl">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Arrow link */}
                    <div className="hidden md:block">
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--brutal-bone)]/50 group-hover:text-[var(--brutal-red)] transition-colors"
                      >
                        <span className="w-6 h-px bg-current group-hover:w-10 transition-all"></span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
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

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-center">
          <div>
            <div className="inline-block border border-[var(--brutal-red)] px-3 py-1 mb-6">
              <span className="font-mono text-xs text-[var(--brutal-red)] uppercase tracking-widest">Get in touch</span>
            </div>
            <h2
              className="text-[12vw] md:text-[5vw] font-black uppercase leading-[0.8] tracking-tighter text-[var(--brutal-bone)]"
              style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
            >
              WANT TO<br/>TALK?
            </h2>
          </div>

          <div className="border-l border-[var(--brutal-bone)]/10 pl-8">
            <p className="font-mono text-sm text-[var(--brutal-bone)]/60 mb-6">
              I&apos;m always up for a conversation about technical challenges, startup ideas, or recommendations for trails and treks around the world.
            </p>
            <Link
              href="mailto:max@maxwellwalker.com"
              className="inline-flex items-center gap-3 group"
            >
              <span className="font-mono text-sm uppercase tracking-widest text-[var(--brutal-red)] group-hover:text-[var(--brutal-bone)] transition-colors">
                Email me
              </span>
              <span className="w-8 h-px bg-[var(--brutal-red)] group-hover:w-12 transition-all"></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
