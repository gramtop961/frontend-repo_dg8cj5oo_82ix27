import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Helio OS',
    desc: 'A modular design system with 3D micro-interactions and realtime data visuals.',
    tags: ['Design System', '3D UI', 'Realtime']
  },
  {
    title: 'Orbit Commerce',
    desc: 'Headless ecommerce with bespoke animations and blazing performance.',
    tags: ['Headless', 'Animations', 'Next-Gen']
  },
  {
    title: 'Pulse Analytics',
    desc: 'Interactive dashboards with smooth motion and enterprise-grade security.',
    tags: ['Analytics', 'Motion', 'Security']
  }
];

const Card = ({ title, desc, tags, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ rotateX: 2, rotateY: -2, translateY: -4 }}
    className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 shadow-2xl shadow-black/40"
  >
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10 pointer-events-none" />
    <div className="relative">
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-[11px] tracking-wide uppercase rounded-full border border-white/10 bg-white/5 text-white/80 px-2 py-1">{t}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Work = () => {
  return (
    <section id="work" className="relative bg-[#0a0b0f] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">Selected work</h2>
          <p className="mt-2 text-white/60 max-w-2xl">A glimpse into products and experiences we recently shipped.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Card key={p.title} title={p.title} desc={p.desc} tags={p.tags} delay={i * 0.05} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
