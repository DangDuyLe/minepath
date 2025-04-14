import React from 'react';
import { motion } from 'framer-motion';
import { Pickaxe } from './ui/icons/Pickaxe';
import { Wheat, Swords, Hammer, Crown, ChevronRight, Lock } from 'lucide-react';
import { MinecraftIcon } from '@/components/ui/minecraft-icon';

// Define all game modes but mark which ones are available in current phase
const GAME_MODES = [
  {
    id: 'mining',
    name: 'Mining',
    description: 'Collect ores to earn $FARM, upgrade with Tool NFTs, and unlock rare lootboxes.',
    icon: Pickaxe,
    bgColor: 'bg-minecraft-stone',
    iconVariant: 'diamond',
    image: '/images/game_mode_mining.png',
    available: true,
    phase: 'Phase 1'
  },
  {
    id: 'farming',
    name: 'Farming',
    description: 'Plant crops, harvest $FARM, and boost yields with Pet NFTs and fertilizers.',
    icon: Wheat,
    bgColor: 'bg-minecraft-grass',
    iconVariant: 'grass',
    available: false,
    phase: 'Phase 2'
  },
  {
    id: 'pvp',
    name: 'PVP',
    description: 'Battle in arenas with Weapon NFTs, earn $FARM, and climb leaderboards.',
    icon: Swords,
    bgColor: 'bg-minecraft-diamond',
    iconVariant: 'iron',
    available: false,
    phase: 'Phase 3'
  },
  {
    id: 'crafting',
    name: 'Crafting',
    description: 'Combine resources to create Armor and Potions, powering up your journey.',
    icon: Hammer,
    bgColor: 'bg-minecraft-planks',
    iconVariant: 'gold',
    available: false,
    phase: 'Phase 4'
  },
  {
    id: 'bossbattle',
    name: 'Boss Battle MMORPG',
    description: 'Form parties, complete quests, and defeat epic bosses for $PATH and Relic NFTs.',
    icon: Crown,
    bgColor: 'bg-solana-purple',
    iconVariant: 'gold',
    available: false,
    phase: 'Phase 5'
  }
];

const GameModes = () => {
  // Currently only Mining is available in Phase 1
  const availableModes = GAME_MODES.filter(mode => mode.available);
  const futureModes = GAME_MODES.filter(mode => !mode.available);
  
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
            Our multi-game Web3 MMORPG ecosystem will feature five unique gameplay modes.
            Currently in Phase 1, only Mining mode is available. Additional modes will unlock in future phases.
          </motion.p>
        </motion.div>
        
        {/* Current Available Mode (Phase 1) */}
        {availableModes.map((mode) => (
          <motion.div 
            key={mode.id}
            className="flex flex-col md:flex-row gap-8 minecraft-panel p-6 border-4 border-minecraft-green mb-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex-1 relative overflow-hidden border-4 border-minecraft-dirt">
              <img 
                src={mode.image} 
                alt={mode.name} 
                className="w-full h-64 object-cover pixelated"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder_gamemode.png'
                }}
              />
              
              <div className="absolute top-0 left-0 bg-minecraft-green p-2 font-minecraft text-white">
                CURRENT PHASE
              </div>
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-minecraft text-2xl mb-4 text-black">{mode.name} Mode</h3>
              <p className="text-black mb-6 font-minecraft">{mode.description}</p>
              
              <ul className="space-y-3">
                <li className="flex items-center text-sm font-minecraft text-black">
                  <ChevronRight className="h-4 w-4 text-minecraft-green mr-2" />
                  Earn $FARM tokens through mining activities
                </li>
                <li className="flex items-center text-sm font-minecraft text-black">
                  <ChevronRight className="h-4 w-4 text-minecraft-green mr-2" />
                  Collect Tool NFTs with special mining abilities
                </li>
                <li className="flex items-center text-sm font-minecraft text-black">
                  <ChevronRight className="h-4 w-4 text-minecraft-green mr-2" />
                  Unlock rare lootboxes with valuable rewards
                </li>
              </ul>
              
              <div className="mt-6">
                <button className="minecraft-3d-btn text-sm">
                  Start Mining Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Future Modes (Locked) */}
        <h3 className="font-minecraft text-xl text-white text-center mb-6">UPCOMING GAME MODES</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {futureModes.map((mode) => (
            <motion.div 
              key={mode.id}
              className="minecraft-container border-gray-700 p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-2 right-2 bg-minecraft-stone px-2 py-1 text-xs font-minecraft text-white">
                {mode.phase}
              </div>
              
              <div className="flex items-center mb-4">
                <div className="relative mr-4">
                  <MinecraftIcon 
                    icon={mode.icon as any} 
                    size="md" 
                    variant={mode.iconVariant as any} 
                    className="opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lock className="h-3 w-3 text-white" />
                  </div>
                </div>
                <h4 className="font-minecraft text-lg text-white opacity-50">{mode.name}</h4>
              </div>
              
              <p className="text-white/50 text-sm font-minecraft mb-4">{mode.description}</p>
              
              <div className="mt-auto">
                <button className="minecraft-btn bg-minecraft-stone/50 text-white/50 w-full text-sm cursor-not-allowed font-minecraft" disabled>
                  Coming Soon
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Phase launch countdown */}
        <motion.div 
          className="mt-12 p-4 bg-black/50 border-2 border-minecraft-dirt mx-auto max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="font-minecraft text-minecraft-gold text-sm mb-2 text-center">PHASE 2 LAUNCH IN:</div>
          <div className="flex justify-center gap-4 font-minecraft text-white">
            <div className="bg-black/70 border-2 border-minecraft-dirt p-2 w-16">
              <div className="text-xl text-minecraft-green">112</div>
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
