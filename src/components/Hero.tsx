
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Sword, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative pt-24 pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-solana-purple/10 via-background/95 to-background"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/images/bg-pattern.png')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block p-1.5 mb-6 rounded-full bg-gradient-to-r from-solana-purple/20 via-solana-blue/20 to-solana-green/20">
              <div className="px-4 py-1.5 rounded-full bg-card/60 backdrop-blur-sm text-sm font-medium text-solana-purple">
                MINECRAFT × SOLANA NFT
              </div>
            </div>
            
            <h1 className="font-minecraft text-5xl md:text-7xl leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple via-solana-blue to-solana-green drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                MINEPATH
              </span>
              <br />
              <span className="text-white">ADVENTURE</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Earn NFTs by playing, enhance your gameplay, and trade your rewards in our immersive Minecraft server
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-solana-purple hover:bg-solana-purple/90 text-white font-medium px-8 h-14 text-lg">
                Play Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-solana-purple text-solana-purple hover:bg-solana-purple/10 h-14 text-lg">
                Explore NFTs
              </Button>
            </div>
          </motion.div>
          
          {/* Right content - 3D model or image */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <img 
                src="/images/minecraft_character.png" 
                alt="Minecraft character with NFT items" 
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(155,135,245,0.5)]" 
              />
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-8 -right-4 p-4 bg-card/80 backdrop-blur-md rounded-lg border border-solana-purple/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Shield className="h-10 w-10 text-rarity-epic" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 right-20 p-4 bg-card/80 backdrop-blur-md rounded-lg border border-solana-purple/20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Sword className="h-10 w-10 text-rarity-legendary" />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -left-4 p-4 bg-card/80 backdrop-blur-md rounded-lg border border-solana-purple/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Coins className="h-10 w-10 text-solana-green" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-16 pt-8 border-t border-solana-purple/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <StatCard label="Active Players" value="5,000+" />
          <StatCard label="NFTs Minted" value="25,000+" />
          <StatCard label="Legendary Drops" value="127" />
          <StatCard label="SOL Volume" value="1,500+" />
        </motion.div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col items-center backdrop-blur-sm p-4 rounded-lg border border-solana-purple/10 bg-card/40 hover:bg-card/60 transition-all duration-300">
      <div className="font-minecraft text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-green">{value}</div>
      <div className="text-sm text-muted-foreground uppercase tracking-wide mt-2">{label}</div>
    </div>
  );
};

export default Hero;
