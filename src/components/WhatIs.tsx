import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Share2 } from 'lucide-react';

const WhatIs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-solana-blue/10 via-background/95 to-background/90 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-solana-blue/20 via-solana-purple/20 to-solana-green/20 mb-4">
              <div className="px-4 py-1.5 rounded-full bg-card/60 backdrop-blur-sm text-sm font-medium text-solana-blue border border-solana-blue/10">
                WHAT IS
              </div>
            </div>
            
            <h2 className="font-minecraft text-4xl md:text-5xl mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-blue drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                BLOCK<span className="text-white">VERSE</span> RAIDERS
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              BlockVerse Raiders is a groundbreaking Minecraft project that seamlessly integrates 
              Solana blockchain technology into the gameplay experience. 
              This integration brings forth a new dimension of possibilities, allowing players to 
              interact with cryptocurrency within the game environment.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-solana-purple/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-solana-purple" />
                </div>
                <div>
                  <h3 className="font-minecraft text-xl mb-2">Blockchain Ownership</h3>
                  <p className="text-muted-foreground">Players can link their Solana wallets to their game accounts securely via Web3 authentication, enabling them to manage and execute transactions for in-game assets directly.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-solana-blue/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-solana-blue" />
                </div>
                <div>
                  <h3 className="font-minecraft text-xl mb-2">Decentralized Governance</h3>
                  <p className="text-muted-foreground">The game utilizes tokens for decentralized decision-making, giving players a say in its development through DAOs and voting systems.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-solana-green/10 flex items-center justify-center flex-shrink-0">
                  <Share2 className="h-6 w-6 text-solana-green" />
                </div>
                <div>
                  <h3 className="font-minecraft text-xl mb-2">Interoperability</h3>
                  <p className="text-muted-foreground">Tokens earned in-game can be used beyond BlockVerse Raiders, with interoperability on various platforms and ecosystems including trading on exchanges.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-solana-purple/20 to-solana-blue/10 z-0"></div>
              <img 
                src="/images/minecraft_world.png" 
                alt="BlockVerse Raiders Minecraft World" 
                className="relative z-10 w-full shadow-lg"
              />
              
              {/* Floating badges */}
              <div className="absolute top-5 left-5 px-4 py-2 bg-solana-purple/90 backdrop-blur-sm rounded-md text-white text-sm font-medium shadow-lg">
                <div className="flex items-center">
                  <Sparkles className="mr-2 h-4 w-4" />
                  <span>NFT Enabled</span>
                </div>
              </div>
              <div className="absolute bottom-5 right-5 px-4 py-2 bg-solana-blue/90 backdrop-blur-sm rounded-md text-white text-sm font-medium shadow-lg">
                <div className="flex items-center">
                  <Shield className="mr-2 h-4 w-4" />
                  <span>Solana Powered</span>
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
