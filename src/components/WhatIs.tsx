
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatIs = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  
  // Interactive feature info
  const featureInfo = {
    "Play & Earn": "Mine resources, defeat monsters, and complete quests to earn tokens and NFTs with real-world value. The more challenging the task, the greater the rewards!",
    "Fair Distribution": "Our innovative drop system ensures NFTs are fairly distributed based on skill, strategy, and effort. No pay-to-win mechanics here!",
    "Community Owned": "Holders of governance tokens can propose and vote on future features, economic adjustments, and server policies. This is your game!"
  };
  
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-[url('/images/bg-mountain.png')] bg-no-repeat bg-cover bg-center opacity-30"
          initial={{ scale: 1.1 }}
          animate={{ 
            scale: [1.05, 1, 1.05],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
        
        {/* Animated overlay pattern */}
        <div className="absolute inset-0">
          {/* Floating blocks for decoration */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute pixelated w-4 h-4"
              style={{
                backgroundImage: `url('/images/${['dirt', 'stone', 'diamond', 'gold'][Math.floor(Math.random() * 4)]}_block.png')`,
                backgroundSize: 'cover',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.2
              }}
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8 + i * 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2
              }}
            />
          ))}
        </div>
        
        {/* Geometric patterns along left edge */}
        <div className="absolute left-0 inset-y-0 w-16 opacity-20">
          <div className="h-full w-full bg-[url('/public/lovable-uploads/571ce867-0253-4784-ba20-b363e73c1463.png')] bg-repeat-y"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="inline-block p-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mb-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="px-4 py-1 rounded-full bg-black/60 backdrop-blur-sm text-sm font-medium text-cyan-400 flex items-center">
                <Sparkles className="mr-1 h-4 w-4" />
                OUR MISSION
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-minecraft mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              What is <span className="text-cyan-400 inline-block">
                <motion.span
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(34, 211, 238, 0.3)", 
                      "0 0 15px rgba(34, 211, 238, 0.6)", 
                      "0 0 5px rgba(34, 211, 238, 0.3)"
                    ] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  MinePath
                </motion.span>
              </span>?
            </motion.h2>
            
            <motion.p 
              className="text-lg leading-relaxed text-white/80 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              MinePath combines the beloved gameplay of Minecraft with Solana blockchain technology, creating a unique 
              play-to-earn experience where your mining and exploration efforts are rewarded with valuable NFTs.
            </motion.p>
            
            <div className="space-y-6 mb-8">
              {Object.entries({
                "Play & Earn": "Mine, fight, and explore to earn NFTs that have real-world value",
                "Fair Distribution": "NFTs drop based on mining valuable blocks and defeating monsters",
                "Community Owned": "Governance tokens empower players to vote on future developments"
              }).map(([title, description], index) => (
                <motion.div 
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Feature 
                    title={title} 
                    description={description} 
                    isActive={activeFeature === title}
                    onClick={() => setActiveFeature(activeFeature === title ? null : title)}
                  />
                  
                  {/* Expanded info panel */}
                  <AnimatePresence>
                    {activeFeature === title && (
                      <motion.div 
                        className="bg-black/60 border border-cyan-400/30 p-4 mt-2 ml-7"
                        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-white/90">{featureInfo[title as keyof typeof featureInfo]}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/how-to-play">
                <button className="minecraft-diamond-btn flex items-center gap-2 group">
                  <span className="font-minecraft text-white group-hover:text-cyan-100 transition-colors">
                    Learn more about our ecosystem
                  </span>
                  <ArrowRight className="h-5 w-5 text-cyan-100 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <motion.div 
              className="relative z-10 border border-cyan-500/30 p-1.5 bg-black/40 backdrop-blur-md"
              whileHover={{ 
                boxShadow: "0 0 25px rgba(8, 145, 178, 0.3)",
                borderColor: "rgba(8, 145, 178, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/minecraft_world.png"
                alt="Minecraft world" 
                className="w-full h-auto pixelated"
              />
              
              {/* Interactive image overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="p-3 bg-black/80 border border-cyan-400/30 max-w-xs mx-auto mb-4"
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <p className="text-sm text-white">
                    <span className="text-cyan-400 font-bold">The First Minecraft x Solana Project</span> with real 
                    ownership of in-game assets as NFTs
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Floating Decorative Elements */}
            <motion.div 
              className="absolute top-1/2 -left-16 transform -translate-y-1/2"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0],
                filter: [
                  "drop-shadow(0 0 5px rgba(34, 211, 238, 0.3))",
                  "drop-shadow(0 0 15px rgba(34, 211, 238, 0.6))",
                  "drop-shadow(0 0 5px rgba(34, 211, 238, 0.3))"
                ]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="/images/diamond.png" 
                alt="Diamond" 
                className="w-16 h-16 pixelated"
              />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-8 left-1/4"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, -5, 0],
                filter: [
                  "drop-shadow(0 0 5px rgba(234, 179, 8, 0.3))",
                  "drop-shadow(0 0 15px rgba(234, 179, 8, 0.6))",
                  "drop-shadow(0 0 5px rgba(234, 179, 8, 0.3))"
                ]
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <img 
                src="/images/gold.png" 
                alt="Gold" 
                className="w-12 h-12 pixelated"
              />
            </motion.div>
            
            {/* Interactive pickaxe */}
            <motion.div
              className="absolute -right-10 bottom-1/4 cursor-pointer"
              whileHover={{ 
                scale: 1.2,
                rotate: 15,
                filter: "drop-shadow(0 0 10px rgba(34, 211, 238, 0.6))"
              }}
              whileTap={{ 
                scale: 0.9,
                rotate: -15
              }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              <img 
                src="/images/diamond_pickaxe.png" 
                alt="Diamond Pickaxe" 
                className="w-12 h-12 pixelated"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ title, description, isActive, onClick }) => (
  <motion.div 
    className={`flex items-start cursor-pointer group transition-all duration-300 ${isActive ? 'scale-105' : ''}`}
    whileHover={{ scale: 1.02 }}
    onClick={onClick}
  >
    <div className="mr-4 mt-1 relative">
      <motion.div 
        className={`w-3 h-3 ${isActive ? 'bg-minecraft-diamond' : 'bg-cyan-400'} group-hover:bg-minecraft-diamond transition-colors duration-300`}
        animate={isActive ? {
          boxShadow: [
            "0 0 0px rgba(34, 211, 238, 0.3)",
            "0 0 5px rgba(34, 211, 238, 0.6)",
            "0 0 0px rgba(34, 211, 238, 0.3)"
          ]
        } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      
      {/* Plus/minus icon */}
      <motion.div
        className="absolute -right-6 top-0"
        initial={{ opacity: 0.5 }}
        whileHover={{ opacity: 1 }}
      >
        {isActive ? (
          <X size={14} className="text-cyan-400" />
        ) : (
          <Plus size={14} className="text-cyan-400" />
        )}
      </motion.div>
    </div>
    <div>
      <h3 className={`font-minecraft text-xl ${isActive ? 'text-minecraft-diamond' : 'text-cyan-400'} mb-1 group-hover:text-minecraft-diamond transition-colors duration-300`}>{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  </motion.div>
);

export default WhatIs;
