import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
