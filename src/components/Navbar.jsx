import React from 'react';
import { Rocket, Globe, Code2 } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500 grid place-items-center">
            <Rocket size={18} className="text-white" />
          </div>
          <span className="font-semibold tracking-tight">Nova Digital Solutions</span>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <li><a href="#services" className="hover:text-white transition">Services</a></li>
          <li><a href="#work" className="hover:text-white transition">Work</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>
        <div className="hidden sm:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition">
            <Code2 size={16} /> Start a Project
          </a>
        </div>
        <button aria-label="Menu" className="md:hidden text-white/80 hover:text-white">
          <Globe size={22} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
