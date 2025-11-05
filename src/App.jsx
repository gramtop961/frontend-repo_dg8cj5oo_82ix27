import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0a0b0f] text-white">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Services />
        <Work />
      </main>
      <Footer />
    </div>
  );
};

export default App;
