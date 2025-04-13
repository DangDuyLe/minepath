
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import NFTRaritySection from '@/components/NFTRaritySection';
import HowToPlay from '@/components/HowToPlay';
import NFTShowcase from '@/components/NFTShowcase';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturesSection />
        <NFTRaritySection />
        <HowToPlay />
        <NFTShowcase />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
