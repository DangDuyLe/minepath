import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatIs from '@/components/WhatIs';
import FeaturesSection from '@/components/FeaturesSection';
import GameRewards from '@/components/GameRewards';
import Tokenomics from '@/components/Tokenomics';
import NFTRaritySection from '@/components/NFTRaritySection';
import Roadmap from '@/components/Roadmap';
import HowToPlay from '@/components/HowToPlay';
import NFTShowcase from '@/components/NFTShowcase';
import Newsletter from '@/components/Newsletter';
import JoinCTA from '@/components/JoinCTA';
import NFTDropMechanics from '@/components/NFTDropMechanics';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhatIs />
        <GameRewards />
        <FeaturesSection />
        <NFTRaritySection />
        <Tokenomics />
        <NFTDropMechanics />
        <Roadmap />
        <HowToPlay />
        <NFTShowcase />
        <JoinCTA />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
