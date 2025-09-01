import Link from 'next/link';
import { getAllBlogPosts } from '../../lib/markdown';

export const metadata = {
  title: 'Blog',
  description: 'Writing on engineering, startups, and adventure.'
};

export default async function BlogIndexPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="relative pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 radical-grid-light dark:radical-grid opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="py-12 md:py-20 relative">
            <div className="absolute top-0 left-0 w-12 h-12 border border-radical-primary-light/50 dark:border-radical-primary-DEFAULT/50 opacity-50"></div>

            <h1 className="radical-heading relative inline-block">
              <span className="text-outline-light dark:text-outline text-6xl sm:text-7xl uppercase tracking-tighter">BLOG</span>
              <span className="absolute top-1 left-1 text-radical-primary-light dark:text-radical-primary-DEFAULT text-6xl sm:text-7xl uppercase tracking-tighter radical-glitch">BLOG</span>
            </h1>

            <div className="h-px w-24 bg-radical-primary-light dark:bg-radical-primary-DEFAULT my-8"></div>

            <p className="radical-subheading text-radical-dark/80 dark:text-radical-light/80 max-w-xl">
              <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">//</span> Notes on building things, climbing mountains, and everything in between.
            </p>
          </header>

          {/* Posts list */}
          <section className="pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="radical-border p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md relative">
                  <div className="absolute -top-3 -right-3 w-10 h-10 border border-radical-secondary-light/50 dark:border-radical-secondary-DEFAULT/50"></div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-radical-dark/60 dark:text-radical-light/60">{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    <span className="num-tag">POST</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-radical-dark dark:text-radical-light mb-3">
                    <Link href={`/blog/${post.id}`} className="hover:text-radical-primary-light dark:hover:text-radical-primary-DEFAULT transition-colors">
                      {post.shortTitle}
                    </Link>
                  </h2>
                  <p className="font-mono text-sm text-radical-dark/70 dark:text-radical-light/70 mb-6">{post.excerpt}</p>
                  <div>
                    <Link 
                      href={`/blog/${post.id}`} 
                      className="inline-flex items-center font-mono text-xs uppercase tracking-wider text-radical-primary-light dark:text-radical-primary-DEFAULT hover:underline"
                    >
                      Read more
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
