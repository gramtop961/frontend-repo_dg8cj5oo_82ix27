import React from 'react';
import { Rocket, Code2, Shield, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Rocket className="h-5 w-5" />,
    title: '3D Web Experiences',
    desc: 'Interactive Spline scenes and WebGL interfaces that make your brand unforgettable.'
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: 'Product Engineering',
    desc: 'Fast, scalable applications with modern stacks and meticulous attention to detail.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Enterprise-Grade',
    desc: 'Robust security, accessibility, and performance baked into every project.'
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Brand & Identity',
    desc: 'Cohesive visual systems that translate across web, mobile, and product surfaces.'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative bg-[#0a0b0f] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-2 text-white/60 max-w-2xl">From concept to launch, we partner with teams to build future-forward digital products.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white grid place-items-center mb-3">
                {s.icon}
              </div>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70">{s.desc}</p>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 bg-cyan-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
