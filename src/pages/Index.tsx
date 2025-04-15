import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatIs from '@/components/WhatIs';
import FeaturesSection from '@/components/FeaturesSection';
import GameModes from '@/components/GameModes';
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
import TestimonialSection from '@/components/TestimonialSection';
import Web3Economy from '@/components/Web3Economy'; // Add this new component
import CommunitySection from '@/components/CommunitySection'; // Add this new component
import ServerStatus from '@/components/ServerStatus';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-minecraft-black minecraft-dirt-bg">
     <Navbar />
<main className="flex-grow">
  <Hero />                 
  <JoinCTA />              
  <WhatIs />              
  <FeaturesSection />   
  <HowToPlay />   
  <Web3Economy />         
  <GameModes />            
  <GameRewards />         
  <NFTDropMechanics />    
  <Tokenomics />           
           
  <CommunitySection />     
  <TestimonialSection />  
  <NFTShowcase />          
  <Roadmap />              
  <ServerStatus />         
  <Newsletter />          
</main>
<Footer />

    </div>
  );
};

export default Index;
