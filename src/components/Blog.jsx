import { motion } from 'framer-motion';
import { Newspaper, ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'TRNDZ partners with ArcticLabs on next‑gen insulation',
    date: 'Feb 2, 2025',
    category: 'Partnership',
    excerpt:
      'We\'re collaborating with materials scientists to push warmth-to-weight ratios even further for Winter 2025.',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Limited Capsule: Skyline Blue micro‑drop',
    date: 'Jan 18, 2025',
    category: 'Release',
    excerpt:
      'A tight drop in our signature black + light blue palette — engineered fabrics, minimalist silhouettes.',
    image:
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Sustainability Report: 72% recycled fibers across line',
    date: 'Dec 12, 2024',
    category: 'Sustainability',
    excerpt:
      'We\'re scaling recycled inputs and low-impact dyes while maintaining performance at sub-zero temps.',
    image:
      'https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=1400&auto=format&fit=crop',
  },
];

function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-2.5 py-1 text-xs font-semibold text-black">
          {post.category}
        </span>
      </div>
      <div className="p-5">
        <div className="mb-2 inline-flex items-center gap-2 text-xs text-slate-300">
          <Clock className="h-3.5 w-3.5" />
          <span>{post.date}</span>
        </div>
        <h3 className="text-white text-lg font-semibold leading-snug">{post.title}</h3>
        <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-2 text-sky-300 hover:text-sky-200"
        >
          Read more
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="relative bg-gradient-to-b from-slate-950 to-black py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sky-500/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-100">
              <Newspaper className="h-3.5 w-3.5" />
              TRNDZ News
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">Latest from the brand</h2>
            <p className="text-slate-300">Product drops, tech updates, and behind-the-scenes.</p>
          </div>
          <a href="#" className="text-sky-300 hover:text-sky-200">View all news</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
