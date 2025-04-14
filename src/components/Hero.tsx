
import React from 'react';
import { ArrowRight, Shield, Sword, Coins, Sparkles, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EnhancedButton } from './ui/enhanced-button';
import { Pickaxe } from './ui/icons/Pickaxe'; // Import the Pickaxe component

const Hero = () => {
  return (
    <div className="relative pt-20 pb-32 overflow-hidden minecraft-dirt-bg">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/images/bg-pattern.png')] bg-repeat"></div>
        
        {/* Minecraft particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute pixelated w-2 h-2 bg-white opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating blocks */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={`block-${i}`}
              className="absolute pixelated w-8 h-8"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundImage: `url('/images/${['dirt', 'stone', 'diamond', 'gold'][Math.floor(Math.random() * 4)]}_block.png')`,
                backgroundSize: 'cover',
                transform: 'rotate(10deg)',
                imageRendering: 'pixelated',
                animation: `float ${7 + Math.random() * 7}s ease-in-out infinite ${Math.random() * 7}s, rotate ${15 + Math.random() * 10}s linear infinite ${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-none bg-black/60 border-2 border-minecraft-dirt text-sm font-minecraft"
            >
              <Pickaxe className="h-5 w-5 text-minecraft-diamond" />
              <span className="text-minecraft-diamond">BLOCK BY BLOCK, MINE TO EARN</span>
            </motion.div>
            
            <motion.h1 
              className="font-minecraft text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="block text-minecraft-green">Building the</span>
              <span className="block text-minecraft-diamond mt-2">
                Future, One Block
              </span>
              <span className="block mt-2 text-minecraft-gold">at a Time</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white mb-8 max-w-xl font-minecraft"
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
                <button className="minecraft-3d-btn inline-flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
              <Link to="/nfts">
                <button className="minecraft-diamond-btn inline-flex items-center justify-center">
                  Explore NFTs <Eye className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              className="mt-8 p-4 bg-black/50 border-2 border-minecraft-dirt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="font-minecraft text-minecraft-gold text-sm mb-2">NEXT NFT DROP IN:</div>
              <div className="flex justify-center gap-4 font-minecraft text-white">
                <div className="bg-black/70 border-2 border-minecraft-dirt p-2 w-16">
                  <div className="text-xl text-minecraft-green">12</div>
                  <div className="text-xs">Hours</div>
                </div>
                <div className="bg-black/70 border-2 border-minecraft-dirt p-2 w-16">
                  <div className="text-xl text-minecraft-green">45</div>
                  <div className="text-xs">Minutes</div>
                </div>
                <div className="bg-black/70 border-2 border-minecraft-dirt p-2 w-16">
                  <div className="text-xl text-minecraft-green">32</div>
                  <div className="text-xs">Seconds</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right content - Minecraft character */}
          <motion.div 
            className="flex-1 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-minecraft-green/20 to-minecraft-blue/10 rounded-xl blur-2xl"></div>
              
              <div className="relative z-10 transform hover:rotate-2 hover:scale-105 transition-all duration-700">
                <img 
                  src="/images/minecraft_character.png" 
                  alt="Minecraft character with NFT items" 
                  className="w-full h-full object-contain pixelated" 
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Logo bar */}
        <motion.div 
          className="mt-20 border-t-4 border-minecraft-dirt pt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-wrap justify-center gap-10 lg:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center text-xl font-minecraft bg-black/40 p-2 border-2 border-minecraft-dirt">
              <Shield className="mr-2 h-6 w-6 text-minecraft-diamond" />
              <span>KYC</span>
            </div>
            <div className="flex items-center text-xl font-minecraft bg-black/40 p-2 border-2 border-minecraft-dirt">
              <Sword className="mr-2 h-6 w-6 text-minecraft-iron" />
              <span>DAPP</span>
            </div>
            <div className="flex items-center text-xl font-minecraft bg-black/40 p-2 border-2 border-minecraft-dirt">
              <Sparkles className="mr-2 h-6 w-6 text-minecraft-emerald" />
              <span>Audit</span>
            </div>
            <div className="flex items-center text-xl font-minecraft bg-black/40 p-2 border-2 border-minecraft-dirt">
              <Coins className="mr-2 h-6 w-6 text-minecraft-gold" />
              <span>Dextools</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
