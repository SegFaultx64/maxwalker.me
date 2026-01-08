import Link from 'next/link';
import { BlogPost } from '@vm/lib/markdown';

interface BlogPostCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogPostCard({ post, index = 0 }: BlogPostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <article className="group border-b border-[var(--brutal-bone)]/10 pb-8">
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
            {formattedDate}
          </div>
          <h3
            className="text-xl md:text-2xl font-black text-[var(--brutal-bone)] uppercase tracking-tight group-hover:text-[var(--brutal-red)] transition-colors mb-3"
            style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
          >
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
  );
}
