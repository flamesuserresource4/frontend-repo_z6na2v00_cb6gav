import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Aurora Down Parka',
    price: 259,
    tag: 'New',
    image:
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Glacier Puffer Jacket',
    price: 199,
    tag: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'ThermaFleece Hoodie',
    price: 99,
    tag: 'Limited',
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Polar Knit Beanie',
    price: 29,
    tag: 'New',
    image:
      'https://images.unsplash.com/photo-1562158070-147c4e4b5d96?q=80&w=1400&auto=format&fit=crop',
  },
];

function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-2.5 py-1 text-xs font-semibold text-black">
          {product.tag}
        </span>
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <h3 className="text-white font-medium">{product.title}</h3>
          <p className="text-sky-200/80">${product.price}</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-sky-100 hover:bg-white/20 transition">
          <ShoppingBag className="h-4 w-4" />
          Add
        </button>
      </div>
    </motion.div>
  );
}

export default function ProductGrid() {
  return (
    <section id="new" className="relative bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">New Arrivals</h2>
            <p className="text-slate-300">Curated picks to own the cold.</p>
          </div>
          <a href="#jackets" className="text-sky-300 hover:text-sky-200">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
