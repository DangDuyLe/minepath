import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pickaxe } from './ui/icons/Pickaxe';
import { Wheat, Swords, Hammer, Crown, ChevronRight } from 'lucide-react';
import { MinecraftIcon } from '@/components/ui/minecraft-icon';

const GAME_MODES = [
  {
    id: 'mining',
    name: 'Mining',
    description: 'Dig quặng to earn $FARM, upgrade with Tool NFTs, and unlock rare lootboxes.',
    icon: Pickaxe,
    bgColor: 'bg-minecraft-stone',
    iconVariant: 'diamond',
    image: '/images/game_mode_mining.png'
  },
  {
    id: 'farming',
    name: 'Farming',
    description: 'Plant crops, harvest $FARM, and boost yields with Pet NFTs and fertilizers.',
    icon: Wheat,
    bgColor: 'bg-minecraft-grass',
    iconVariant: 'grass',
    image: '/images/game_mode_farming.png'
  },
  {
    id: 'pvp',
    name: 'PVP',
    description: 'Battle in arenas with Weapon NFTs, earn $FARM, and climb leaderboards.',
    icon: Swords,
    bgColor: 'bg-minecraft-diamond',
    iconVariant: 'iron',
    image: '/images/game_mode_pvp.png'
  },
  {
    id: 'crafting',
    name: 'Crafting',
    description: 'Combine resources to create Armor and Potions, powering up your journey.',
    icon: Hammer,
    bgColor: 'bg-minecraft-planks',
    iconVariant: 'gold',
    image: '/images/game_mode_crafting.png'
  },
  {
    id: 'bossbattle',
    name: 'Boss Battle MMORPG',
    description: 'Form parties, complete quests, and defeat epic bosses for $PATH and Relic NFTs.',
    icon: Crown,
    bgColor: 'bg-solana-purple',
    iconVariant: 'gold',
    image: '/images/game_mode_boss.png'
  }
];

const GameModes = () => {
  const [activeMode, setActiveMode] = useState(GAME_MODES[0].id);
  
  const selectedMode = GAME_MODES.find(mode => mode.id === activeMode) || GAME_MODES[0];
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Minecraft texture background */}
      <div className="absolute inset-0 minecraft-stone-bg opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-minecraft-black/80 via-minecraft-black/90 to-minecraft-black/80 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="minecraft-panel inline-block p-1.5 bg-minecraft-stone border-4 border-gray-800"
          >
            <div className="px-4 py-1.5 bg-minecraft-blue font-minecraft text-white text-sm border-b-4 border-minecraft-blue/70">
              GAME MODES
            </div>
          </motion.div>
          
          <motion.h2 
            className="font-minecraft text-4xl md:text-5xl mb-6 mt-6 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-solana-blue drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)]">
              DISCOVER THE <span className="text-solana-green">MINEPATH</span> UNIVERSE
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-white max-w-2xl mx-auto font-minecraft tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explore our multi-game Web3 MMORPG ecosystem with five unique gameplay modes, 
            each offering different ways to earn rewards and progress your journey
          </motion.p>
        </motion.div>
        
        {/* Mode selector tabs */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 mb-8 no-scrollbar">
          <div className="flex mx-auto space-x-2">
            {GAME_MODES.map((mode) => (
              <motion.button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`minecraft-btn snap-start ${
                  activeMode === mode.id 
                    ? 'minecraft-btn-green' 
                    : 'bg-minecraft-stone border-gray-700 text-white hover:bg-black/80'
                } whitespace-nowrap min-w-[140px] px-4 font-minecraft`}
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                <div className="flex items-center justify-center">
                  <MinecraftIcon 
                    icon={mode.icon as any} 
                    size="sm" 
                    variant={mode.iconVariant as any} 
                    className="mr-2" 
                  />
                  {mode.name}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Mode content display */}
        <motion.div 
          className="flex flex-col md:flex-row gap-8 minecraft-panel p-6 border-4 border-gray-800"
          key={activeMode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Image display */}
          <div className="flex-1 relative overflow-hidden border-4 border-minecraft-dirt">
            <img 
              src={selectedMode.image} 
              alt={selectedMode.name} 
              className="w-full h-64 object-cover pixelated"
              onError={(e) => {
                // Fallback to a default image if the specified one doesn't exist
                (e.target as HTMLImageElement).src = '/images/placeholder_gamemode.png'
              }}
            />
            
            {/* Mode label */}
            <div className={`absolute top-0 left-0 ${selectedMode.bgColor} p-2 font-minecraft text-white`}>
              {selectedMode.name}
            </div>
          </div>
          
          {/* Description */}
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="font-minecraft text-2xl mb-4 text-black">{selectedMode.name} Mode</h3>
            <p className="text-black mb-6 font-minecraft">{selectedMode.description}</p>
            
            <ul className="space-y-3">
              {['Earn tokens', 'Collect NFTs', 'Upgrade gear'].map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm font-minecraft text-black">
                  <ChevronRight className="h-4 w-4 text-minecraft-green mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <button className="minecraft-3d-btn text-sm">
                Start {selectedMode.name} Now
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Phase launch countdown */}
        <motion.div 
          className="mt-12 p-4 bg-black/50 border-2 border-minecraft-dirt mx-auto max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="font-minecraft text-minecraft-gold text-sm mb-2 text-center">NEXT PHASE LAUNCH IN:</div>
          <div className="flex justify-center gap-4 font-minecraft text-white">
            <div className="bg-black/70 border-2 border-minecraft-dirt p-2 w-16">
              <div className="text-xl text-minecraft-green">07</div>
              <div className="text-xs">Days</div>
            </div>
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
      </div>
    </section>
  );
};

export default GameModes;
