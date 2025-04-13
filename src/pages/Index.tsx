
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import NFTRaritySection from '@/components/NFTRaritySection';
import FeaturesSection from '@/components/FeaturesSection';
import HowToPlay from '@/components/HowToPlay';
import NFTShowcase from '@/components/NFTShowcase';
import JoinCTA from '@/components/JoinCTA';
import TestimonialSection from '@/components/TestimonialSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturesSection />
        <NFTRaritySection />
        <HowToPlay />
        <NFTShowcase />
        <TestimonialSection />
        <JoinCTA />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
