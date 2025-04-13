import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import NFTRaritySection from '@/components/NFTRaritySection';
import HowToPlay from '@/components/HowToPlay';
import NFTShowcase from '@/components/NFTShowcase';
import Newsletter from '@/components/Newsletter';
import TestimonialSection from '@/components/TestimonialSection';
import JoinCTA from '@/components/JoinCTA';
import Footer from '@/components/Footer';
import NFTDropMechanics from '@/components/NFTDropMechanics'; // Add this import

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturesSection />
        <NFTRaritySection />
        <NFTDropMechanics /> {/* Add this component here */}
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
