import Link from 'next/link';
import { getBlogPostData, getBlogPostIds } from '../../../lib/markdown';
import CrtFilters from '../../../components/CrtFilters';
import { img } from '../../../lib/images';

const heroImage = '/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_tblisi__4cf631cc-109f-4399-a1ae-3f1538a6cfd3_0.png';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const ids = getBlogPostIds();
  return ids.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const post = await getBlogPostData(id);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getBlogPostData(id);

  return (
    <div className="relative bg-black overflow-hidden">
      <CrtFilters />

      {/* Hero section with post title */}
      <section className="brutal-hero brutal-scanlines relative min-h-[50vh] flex items-end">
        {/* Background image (dimmed) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${img(heroImage)}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(1.1)',
            opacity: 0.25
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full px-4 pb-12 pt-32">
          <div className="max-w-4xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--brutal-red)] hover:text-[var(--brutal-bone)] transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to writing
            </Link>

            {/* Date */}
            <div className="font-mono text-xs text-[var(--brutal-bone)]/50 uppercase tracking-widest mb-4">
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            {/* Title */}
            <h1
              className="text-[10vw] md:text-[5vw] font-black text-[var(--brutal-bone)] uppercase leading-[0.85] tracking-tighter"
              style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
            >
              {post.shortTitle || post.title}
            </h1>

            <div className="h-px w-24 bg-[var(--brutal-red)] mt-6"></div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="relative py-16" style={{ backgroundColor: '#0a0a0a' }}>
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(var(--brutal-bone) 1px, transparent 1px),
              linear-gradient(90deg, var(--brutal-bone) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Prose content with brutal styling */}
            <article className="brutal-prose">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          </div>
        </div>
      </section>

      {/* Footer navigation */}
      <section className="relative py-12 px-4" style={{ backgroundColor: '#080808' }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 group"
          >
            <span className="w-8 h-px bg-[var(--brutal-red)] group-hover:w-12 transition-all"></span>
            <span className="font-mono text-sm uppercase tracking-widest text-[var(--brutal-red)] group-hover:text-[var(--brutal-bone)] transition-colors">
              All posts
            </span>
          </Link>

          <Link
            href="/"
            className="font-mono text-sm uppercase tracking-widest text-[var(--brutal-bone)]/50 hover:text-[var(--brutal-bone)] transition-colors"
          >
            Home
          </Link>
        </div>
      </section>
    </div>
  );
}
