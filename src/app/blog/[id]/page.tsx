import Link from 'next/link';
import { getBlogPostData, getBlogPostIds } from '../../../lib/markdown';

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const ids = getBlogPostIds();
  return ids.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = await getBlogPostData(params.id);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getBlogPostData(params.id);

  return (
    <div className="relative pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 radical-grid-light dark:radical-grid opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="py-10 md:py-16 relative">
            <div className="flex items-center justify-between mb-4">
              <Link href="/blog" className="font-mono text-xs uppercase tracking-wider text-radical-primary-light dark:text-radical-primary-DEFAULT hover:underline">
                ← Back to blog
              </Link>
              <span className="num-tag">POST</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-radical-dark dark:text-radical-light">
              {post.title}
            </h1>
            <div className="h-px w-24 bg-radical-primary-light dark:bg-radical-primary-DEFAULT my-6"></div>
            <div className="font-mono text-xs uppercase tracking-wider text-radical-dark/60 dark:text-radical-light/60">
              {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
            </div>
          </header>

          {/* Content */}
          <article>
            <div className="prose dark:prose-dark max-w-none">
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </article>

          {/* Footer nav */}
          <div className="mt-10 flex items-center justify-between">
            <Link href="/blog" className="inline-flex items-center font-mono text-xs uppercase tracking-wider text-radical-primary-light dark:text-radical-primary-DEFAULT hover:underline">
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
