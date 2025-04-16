
import React, { lazy, Suspense, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatIs from '@/components/WhatIs';
import JoinCTA from '@/components/JoinCTA';
import ScrollToTop from '@/components/ScrollToTop';

// Optimize initial load with more fine-grained code splitting
const FeaturesSection = lazy(() => import('@/components/FeaturesSection'));
const GameModes = lazy(() => import('@/components/GameModes'));
const GameRewards = lazy(() => import('@/components/GameRewards'));
const Tokenomics = lazy(() => import('@/components/Tokenomics'));
const NFTRaritySection = lazy(() => import('@/components/NFTRaritySection'));
const Roadmap = lazy(() => import('@/components/Roadmap'));
const HowToPlay = lazy(() => import('@/components/HowToPlay'));
const NFTShowcase = lazy(() => import('@/components/NFTShowcase'));
const Newsletter = lazy(() => import('@/components/Newsletter'));
const NFTDropMechanics = lazy(() => import('@/components/NFTDropMechanics'));
const Footer = lazy(() => import('@/components/Footer'));
const TestimonialSection = lazy(() => import('@/components/TestimonialSection'));
const Web3Economy = lazy(() => import('@/components/Web3Economy'));
const CommunitySection = lazy(() => import('@/components/CommunitySection'));
const ServerStatus = lazy(() => import('@/components/ServerStatus'));

// Enhanced loading component for better visual feedback
const SectionLoader = () => (
  <div className="w-full py-16 flex flex-col justify-center items-center space-y-4">
    <div className="minecraft-loading"></div>
    <span className="text-minecraft-diamond font-minecraft text-sm animate-pulse">Loading world chunks...</span>
  </div>
);

const Index = () => {
  // Preload critical images for performance
  useEffect(() => {
    const imagesToPreload = [
      '/images/bg-shrine.png',
      '/images/swordshield.png',
      '/images/diamond.png',
      '/images/gold.png'
    ];
    
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-minecraft-black minecraft-dirt-bg">
      <Navbar />
      <main className="flex-grow">
        {/* Critical path components loaded eagerly */}
        <Hero />
        <JoinCTA />
        <WhatIs />
        
        {/* Lazy-loaded components with enhanced suspense transitions */}
        <Suspense fallback={<SectionLoader />}>
          <div className="space-y-0">
            <FeaturesSection />
            <HowToPlay />
            <Web3Economy />
          </div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <div className="space-y-0">
            <GameModes />
            <GameRewards />
            <NFTDropMechanics />
          </div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <div className="space-y-0">
            <NFTRaritySection />
            <Tokenomics />
            <CommunitySection />
            <TestimonialSection />
          </div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <div className="space-y-0">
            <NFTShowcase />
            <Roadmap />
            <ServerStatus />
            <Newsletter />
          </div>
        </Suspense>
      </main>
      
      <Suspense fallback={<div className="h-40 bg-minecraft-black/60 backdrop-blur-sm"></div>}>
        <Footer />
      </Suspense>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
