import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Sword, Coins, Sparkles, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EnhancedButton } from './ui/enhanced-button';
import { Pickaxe } from './ui/icons/Pickaxe';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 45, seconds: 32 }; // Reset timer when it reaches zero
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-2" 
          style={{ 
            backgroundImage: "url('/images/bg-shrine.png')",
            filter: "brightness(0.7)",
            backgroundSize: "cover"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
        
        
        
        {/* Geometric patterns along left edge */}
        <div className="absolute left-0 inset-y-0 w-16 opacity-20">
          <div className="h-full w-full bg-[url('/public/lovable-uploads/571ce867-0253-4784-ba20-b363e73c1463.png')] bg-repeat-y"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="font-minecraft text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="block text-white">Explore the</span>
              <span className="block text-minecraft-diamond mt-2">
                infinite lands
              </span>
              <span className="block mt-2 text-minecraft-gold">of MinePath</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/80 mt-8 mb-10 max-w-xl font-minecraft leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              A groundbreaking Minecraft project that seamlessly integrates Solana blockchain technology into your gameplay experience.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link to="/how-to-play">
                <button className="play-now-btn relative px-8 py-3 bg-white text-black font-minecraft tracking-wider hover:scale-105 transition-all duration-300 overflow-hidden group">
                  <span className="relative z-10">PLAY NOW</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </Link>
              <Link to="/nfts">
                <button className="minecraft-diamond-btn inline-flex items-center justify-center">
                  Explore NFTs <Eye className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right content - Game world image */}
          <motion.div 
            className="flex-1 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-lg">
              <div className="absolute inset-0  rounded-xl blur-2xl"></div>
              
              <div className="relative z-10 transform hover:scale-105 transition-all duration-700">
                <img 
                  src="/images/swordshield.png" 
                  alt="Minecraft world with buildings" 
                  className="w-full h-auto rounded-lg shadow-2xl " 
                />
                
                
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Logo bar */}
      <motion.div 
        className="mt-20 pt-10 absolute left-0 right-0 bottom-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-wrap justify-center gap-10 lg:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center text-xl font-minecraft bg-black/40 p-2 border border-cyan-400/30">
            <Shield className="mr-2 h-6 w-6 text-cyan-400" />
            <span>KYC</span>
          </div>
          <div className="flex items-center text-xl font-minecraft bg-black/40 p-2 border border-cyan-400/30">
            <Sword className="mr-2 h-6 w-6 text-cyan-400" />
            <span>DAPP</span>
          </div>
          <div className="flex items-center text-xl font-minecraft bg-black/40 p-2 border border-cyan-400/30">
            <Sparkles className="mr-2 h-6 w-6 text-cyan-400" />
            <span>Audit</span>
          </div>
          <div className="flex items-center text-xl font-minecraft bg-black/40 p-2 border border-cyan-400/30">
            <Coins className="mr-2 h-6 w-6 text-cyan-400" />
            <span>Dextools</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
