import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[#0a0b0f] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Let’s build something iconic</h3>
            <p className="mt-2 text-white/70 max-w-xl">Tell us about your product vision. We’ll respond within 24 hours with next steps and a tailored approach.</p>
            <a
              href="mailto:hello@novadigital.co"
              className="inline-flex items-center gap-2 mt-6 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition"
            >
              hello@novadigital.co
            </a>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm text-white/80 mb-1">Name</label>
                <input className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Email</label>
                <input type="email" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Project brief</label>
                <textarea rows={4} className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="What are you building?" />
              </div>
              <button className="w-full rounded-md border border-white/15 bg-white/10 hover:bg-white/20 text-white py-2.5 text-sm font-medium transition">Send inquiry</button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Nova Digital Solutions. All rights reserved.</p>
          <p>Built with love, motion, and a hint of stardust.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
