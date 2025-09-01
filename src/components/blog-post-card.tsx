import Link from 'next/link';
import { BlogPost } from '@vm/lib/markdown';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link 
      href={`/blog/${post.id}`} 
      className="group block border border-radical-primary/30 hover:border-radical-primary bg-radical-light dark:bg-radical-dark/70 backdrop-blur-md transition-all duration-300"
    >
      <div className="p-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-16 h-px bg-radical-primary/50 group-hover:w-full transition-all duration-500 ease-in-out"></div>
        <div className="absolute bottom-0 left-0 w-16 h-px bg-radical-primary/50 group-hover:w-full transition-all duration-500 ease-in-out"></div>
        
        <div className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-radical-dark/50 dark:text-radical-light/50">
            <span className="text-radical-primary">/</span> {formattedDate}
          </div>
          
          <h3 className="font-display text-xl md:text-2xl font-bold text-radical-dark dark:text-radical-light group-hover:text-radical-primary transition-colors duration-300">
            {post.shortTitle}
          </h3>
          
          <p className="font-mono text-sm text-radical-dark/70 dark:text-radical-light/70 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="pt-2 flex items-center font-mono text-xs uppercase tracking-wider text-radical-primary">
            <span className="mr-2 group-hover:mr-3 transition-all duration-300">Read Post</span>
            <svg 
              className="h-3 w-3 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
} 
