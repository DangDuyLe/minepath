import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Share2 } from 'lucide-react';
import { MinecraftIcon } from '@/components/ui/minecraft-icon';
import { MinecraftCard } from '@/components/ui/minecraft-card';

const WhatIs = () => {
  return (
    <section className="py-24 relative overflow-hidden minecraft-dirt-bg">
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
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="minecraft-panel inline-block p-1.5 bg-minecraft-stone border-4 border-gray-800">
              <div className="px-4 py-1.5 bg-minecraft-dirt text-sm font-minecraft text-white border-b-4 border-minecraft-dirt/70">
                WHY CHOOSE
              </div>
            </div>
            
            <h2 className="font-minecraft text-4xl md:text-5xl mb-6 mt-6">
              <span className="text-minecraft-purple drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                MINE<span className="text-white">PATH</span> <span className="text-minecraft-blue">SERVER</span>
              </span>
            </h2>
            
            <p className="text-lg text-white mb-8 font-minecraft leading-relaxed tracking-wide">
              MinePath is a groundbreaking Minecraft project that seamlessly integrates 
              Solana blockchain technology into the gameplay experience. 
              This integration brings forth a new dimension of possibilities, allowing players to 
              interact with cryptocurrency within the game environment.
            </p>
            
            <div className="space-y-6">
              <MinecraftCard variant="diamond" bordered className="p-0">
                <div className="flex gap-4 p-4">
                  <div className="flex-shrink-0">
                    <MinecraftIcon 
                      icon={Sparkles} 
                      size="lg" 
                      variant="diamond"
                    />
                  </div>
                  <div>
                    <h3 className="font-minecraft text-xl mb-2 text-minecraft-diamond">Blockchain Ownership</h3>
                    <p className="text-white font-minecraft text-sm leading-relaxed">Players can link their Solana wallets to their game accounts securely via Web3 authentication, enabling them to manage and execute transactions for in-game assets directly.</p>
                  </div>
                </div>
              </MinecraftCard>
              
              <MinecraftCard variant="stone" bordered className="p-0">
                <div className="flex gap-4 p-4">
                  <div className="flex-shrink-0">
                    <MinecraftIcon 
                      icon={Shield} 
                      size="lg" 
                      variant="iron"
                    />
                  </div>
                  <div>
                    <h3 className="font-minecraft text-xl mb-2 text-minecraft-iron">Decentralized Governance</h3>
                    <p className="text-white font-minecraft text-sm leading-relaxed">The game utilizes tokens for decentralized decision-making, giving players a say in its development through DAOs and voting systems.</p>
                  </div>
                </div>
              </MinecraftCard>
              
              <MinecraftCard variant="gold" bordered className="p-0">
                <div className="flex gap-4 p-4">
                  <div className="flex-shrink-0">
                    <MinecraftIcon 
                      icon={Share2} 
                      size="lg" 
                      variant="gold"
                    />
                  </div>
                  <div>
                    <h3 className="font-minecraft text-xl mb-2 text-minecraft-gold">Interoperability</h3>
                    <p className="text-white font-minecraft text-sm leading-relaxed">Tokens earned in-game can be used beyond MinePath, with interoperability on various platforms and ecosystems including trading on exchanges.</p>
                  </div>
                </div>
              </MinecraftCard>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              {/* Minecraft-style frame */}
              <div className="absolute -inset-4 bg-minecraft-stone border-4 border-gray-800"></div>
              
              <div className="relative z-10 border-4 border-minecraft-dirt overflow-hidden">
                <img 
                  src="/images/minecraft_world.png" 
                  alt="MinePath Minecraft World" 
                  className="w-full pixelated"
                />
                
                {/* Floating badges */}
                <div className="absolute top-5 left-5 px-4 py-2 minecraft-diamond-btn">
                  <div className="flex items-center">
                    <Sparkles className="mr-2 h-4 w-4" />
                    <span className="font-minecraft text-sm">NFT Enabled</span>
                  </div>
                </div>
                <div className="absolute bottom-5 right-5 px-4 py-2 minecraft-3d-btn">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-4 w-4" />
                    <span className="font-minecraft text-sm">Solana Powered</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
