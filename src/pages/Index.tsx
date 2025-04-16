
import React, { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatIs from '@/components/WhatIs';
import JoinCTA from '@/components/JoinCTA';
import ScrollToTop from '@/components/ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader } from 'lucide-react';

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

// Enhanced loading component with animation
const SectionLoader = () => (
  <div className="w-full py-12 flex flex-col justify-center items-center space-y-3">
    <motion.div 
      className="minecraft-loading"
      animate={{ 
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.span 
      className="text-minecraft-diamond font-minecraft text-sm"
      animate={{ 
        opacity: [0.5, 1, 0.5],
      }}
      transition={{ 
        duration: 1.5, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      Mining resources...
    </motion.span>
  </div>
);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // Simulate loading process for better perceived performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    // Simulate progress loading for better UX
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + (100 - prev) * 0.1;
        return newProgress > 99 ? 100 : newProgress;
      });
    }, 150);
    
    // Preload critical images for faster perceived performance
    const imagesToPreload = [
      '/images/bg-shrine.png',
      '/images/swordshield.png',
      '/images/diamond.png',
      '/images/gold.png',
      '/images/minecraft_character.png'
    ];
    
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);
  
  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" } 
    }
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen minecraft-dirt-bg flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <img src="/images/diamond_pickaxe.png" alt="Loading" className="w-16 h-16 pixelated animate-pulse-slow" />
        </motion.div>
        
        <div className="w-64 h-4 relative bg-black/60 border-2 border-minecraft-stone mb-4">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-minecraft-diamond"
            initial={{ width: "0%" }}
            animate={{ width: `${loadingProgress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        
        <motion.p 
          className="text-white font-minecraft text-sm"
          animate={{ 
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading MinePath...
        </motion.p>
      </div>
    );
  }
  
  return (
    <motion.div 
      className="min-h-screen flex flex-col bg-minecraft-black minecraft-dirt-bg"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />
      <main className="flex-grow">
        {/* Critical path components loaded eagerly */}
        <Hero />
        <JoinCTA />
        <WhatIs />
        
        {/* Lazy-loaded components with enhanced suspense transitions */}
        <Suspense fallback={<SectionLoader />}>
          <motion.div 
            className="space-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <FeaturesSection />
            <HowToPlay />
            <Web3Economy />
          </motion.div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <motion.div 
            className="space-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <GameModes />
            <GameRewards />
            <NFTDropMechanics />
          </motion.div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <motion.div 
            className="space-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <NFTRaritySection />
            <Tokenomics />
            <CommunitySection />
            <TestimonialSection />
          </motion.div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <motion.div 
            className="space-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <NFTShowcase />
            <Roadmap />
            <ServerStatus />
            <Newsletter />
          </motion.div>
        </Suspense>
      </main>
      
      <Suspense fallback={<div className="h-40 bg-minecraft-black/60 backdrop-blur-sm"></div>}>
        <Footer />
      </Suspense>
      
      <ScrollToTop />
    </motion.div>
  );
};

export default Index;
