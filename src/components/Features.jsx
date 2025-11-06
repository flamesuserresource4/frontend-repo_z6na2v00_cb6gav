import { motion } from 'framer-motion';
import { ShieldCheck, Recycle, Truck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'ThermaGuard Insulation',
    desc: 'Engineered for extreme weather with windproof and waterproof layers.',
  },
  {
    icon: Truck,
    title: 'Free Express Shipping',
    desc: 'Fast delivery worldwide on orders over $100 — track every step.',
  },
  {
    icon: Recycle,
    title: 'Sustainable Materials',
    desc: 'Recycled fabrics and ethical manufacturing across our line.',
  },
  {
    icon: Sparkles,
    title: 'Minimal Care',
    desc: 'Easy-clean coatings keep your fits fresh with less washing.',
  },
];

export default function Features() {
  return (
    <section className="relative bg-gradient-to-b from-black to-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Why TRNDZ</h2>
          <p className="text-slate-300">Tech-forward gear built for modern winter.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400">
                <f.icon className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
