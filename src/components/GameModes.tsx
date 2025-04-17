import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GameMode {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const GameModes = () => {
  const [selectedMode, setSelectedMode] = useState<number>(0);

  const modes: GameMode[] = [
    {
      id: 0,
      title: "Mining & Crafting",
      description: "Mine valuable resources and craft powerful NFT items",
      features: [
        "Discover rare minerals and gems",
        "Craft unique NFT tools and equipment",
        "Build and customize your mining base",
        "Trade resources with other players"
      ],
      image: "/images/game_mode_mining.png"
    },
    {
      id: 1,
      title: "PvP Arenas",
      description: "Battle against other players in thrilling PvP arenas",
      features: [
        "Join intense arena battles",
        "Compete for leaderboard rankings",
        "Earn NFT rewards for victories",
        "Customize your character with unique gear"
      ],
      image: "/images/game_mode_pvp.png"
    },
    {
      id: 2,
      title: "Quests & Adventures",
      description: "Embark on epic quests and uncover hidden treasures",
      features: [
        "Explore vast and mysterious lands",
        "Complete challenging quests",
        "Discover rare artifacts and NFTs",
        "Unravel the lore of MinePath"
      ],
      image: "/images/game_mode_quests.png"
    },
    {
      id: 3,
      title: "Farming & Breeding",
      description: "Cultivate crops and breed unique NFT animals",
      features: [
        "Plant and harvest valuable crops",
        "Breed rare and exotic animals",
        "Create your own thriving farm",
        "Trade your goods with other players"
      ],
      image: "/images/game_mode_farming.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/public/lovable-uploads/571ce867-0253-4784-ba20-b363e73c1463.png')] bg-repeat"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          background: 'radial-gradient(circle, rgba(10, 21, 77, 0.3) 0%, rgba(13, 14, 22, 0) 70%)'
        }}></div>
        
        {/* Minecraft particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mb-5">
            <div className="px-4 py-1 rounded-full bg-black/60 backdrop-blur-sm text-sm font-medium text-cyan-400">
              CHOOSE YOUR PATH
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-minecraft text-white mb-4">
            Explore Our <span className="text-cyan-400">Game Modes</span>
          </h2>
          <p className="text-lg text-white/70">
            Discover a variety of exciting game modes, each offering unique challenges and rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-6 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-minecraft mb-4 text-cyan-400">
                {modes[selectedMode].title}
              </h3>
              <p className="text-white/80 mb-6">
                {modes[selectedMode].description}
              </p>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {modes[selectedMode].features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <span className="w-2 h-2 mt-2 bg-cyan-400 flex-shrink-0" />
                    <span className="ml-3 text-white/70">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              {modes.map((gameMode, index) => (
                <button
                  key={gameMode.id}
                  onClick={() => setSelectedMode(index)}
                  className={`relative p-4 border-2 transition-all duration-300 ${
                    selectedMode === index
                      ? 'border-cyan-400 bg-cyan-400/10'
                      : 'border-cyan-400/30 bg-black/40 hover:border-cyan-400/50'
                  }`}
                >
                  <img
                    src={gameMode.image}
                    alt={gameMode.title}
                    className="w-full h-auto mb-4 pixelated"
                  />
                  <h4 className="text-sm md:text-base font-minecraft text-white">
                    {gameMode.title}
                  </h4>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameModes;
