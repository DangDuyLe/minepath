import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronRight, Shield, Zap, Star, Crown, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MinecraftIcon } from '@/components/ui/minecraft-icon';
import { motion } from 'framer-motion';

const RARITY_TYPES = [
  {
    name: 'Common',
    className: 'rarity-common',
    icon: <Shield className="h-6 w-6" />,
    dropChance: '~1%',
    description: 'Basic boosts like a slight damage increase or minor defensive improvements.',
    examples: ['Stone Strength', 'Minor Speed', 'Small Defense'],
    block: 'bg-minecraft-stone',
    border: 'border-rarity-common/70'
  },
  {
    name: 'Uncommon',
    className: 'rarity-uncommon',
    icon: <Zap className="h-6 w-6" />,
    dropChance: '~0.5%',
    description: 'Enhanced health, minor lifesteal, or temporary offense/defense boosts.',
    examples: ['Iron Will', 'Forest Tracker', 'Cave Explorer'],
    block: 'bg-minecraft-grass',
    border: 'border-rarity-uncommon/70'
  },
  {
    name: 'Rare',
    className: 'rarity-rare',
    icon: <Star className="h-6 w-6" />,
    dropChance: '~0.1%',
    description: 'Significant combat improvements, meaningful utility buffs, and unique effects.',
    examples: ['Diamond Defender', 'Emerald Efficiency', 'Redstone Master'],
    block: 'bg-minecraft-blue',
    border: 'border-rarity-rare/70'
  },
  {
    name: 'Epic',
    className: 'rarity-epic',
    icon: <Award className="h-6 w-6" />,
    dropChance: '~0.02%',
    description: 'Powerful abilities, major buffs, and game-changing temporary effects.',
    examples: ['Void Walker', 'Thunder Strike', 'Nether Immunity'],
    block: 'bg-minecraft-diamond',
    border: 'border-rarity-epic/70'
  },
  {
    name: 'Legendary',
    className: 'rarity-legendary glow-effect',
    icon: <Crown className="h-6 w-6" />,
    dropChance: '~0.01%',
    description: 'Extraordinary powers like massive damage boosts or temporary invulnerability.',
    examples: ['Dragon\'s Breath', 'Ancient Guardian', 'Wither\'s Curse'],
    block: 'bg-minecraft-gold',
    border: 'border-rarity-legendary/70'
  }
];

const NFTRaritySection = () => {
  return (
    <section className="py-24 relative overflow-hidden minecraft-dirt-bg">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/images/bg-stone.png')] bg-repeat"></div>
        
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
        <div className="text-center mb-16">
          <div className="minecraft-panel inline-block p-1.5 bg-minecraft-stone border-4 border-gray-800">
            <div className="px-4 py-1 bg-minecraft-purple font-minecraft text-white text-sm border-b-4 border-minecraft-purple/70">
              NFT RARITIES
            </div>
          </div>
          
          <h2 className="font-minecraft text-4xl md:text-5xl mb-6 mt-6 text-white">
            <motion.span 
              className="text-rarity-purple drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)]"
              animate={{ 
                color: [
                  'rgb(176, 176, 176)', // common 
                  'rgb(85, 255, 85)',   // uncommon
                  'rgb(85, 85, 255)',   // rare
                  'rgb(170, 0, 170)',   // epic
                  'rgb(255, 170, 0)',   // legendary
                  'rgb(176, 176, 176)'  // back to common
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              DISCOVER THE POWER TIERS
            </motion.span>
          </h2>
          
          <p className="text-white max-w-2xl mx-auto mb-12 font-minecraft tracking-wide">
            Explore the different NFT rarities in MinePath and their unique powers and abilities that will transform your gameplay experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {RARITY_TYPES.map((rarity, index) => (
            <motion.div
              key={rarity.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <RarityCard rarity={rarity} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/nfts" 
            className="inline-flex items-center bg-minecraft-stone border-4 border-gray-800 px-4 py-2 font-minecraft text-white hover:bg-minecraft-stone/70 transition-colors group"
          >
            Browse the complete NFT catalog <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const RarityCard = ({ rarity }: { rarity: typeof RARITY_TYPES[0] }) => {
  return (
    <Card className={`overflow-hidden border-4 border-gray-800 ${rarity.block} transition-all duration-300 hover:transform hover:scale-105 relative`}>
      {/* Dark overlay to make the background darker while preserving color */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="p-6 relative z-10">
        {/* Pixelated grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'url("/images/pixel_pattern.png")',
          backgroundSize: '4px 4px',
          imageRendering: 'pixelated'
        }}></div>
        
        <div className={`flex items-center justify-center mb-6 w-14 h-14 mx-auto border-4 border-gray-800 ${rarity.className === 'rarity-legendary' ? 'animate-pulse-glow' : ''} relative z-10`}>
          <div className={rarity.className}>
            {rarity.icon}
          </div>
        </div>
        
        <h3 className={`font-minecraft text-xl text-center mb-2 ${rarity.className} relative z-10`}>
          {rarity.name}
        </h3>
        
        <div className="text-sm text-center mb-4 text-white relative z-10">
          Drop Chance: <span className={`font-semibold ${rarity.className}`}>{rarity.dropChance}</span>
        </div>
        
        <p className="text-sm text-white mb-4 text-center font-minecraft tracking-wide relative z-10">
          {rarity.description}
        </p>
        
        <div className="mt-4 bg-minecraft-black/60 backdrop-blur-sm p-3 border-2 border-gray-800 relative z-10">
          <div className="text-xs uppercase tracking-wide text-white mb-2 font-minecraft text-center">Examples:</div>
          <ul className="text-sm space-y-1 font-minecraft">
            {rarity.examples.map((example, index) => (
              <li key={index} className="text-white flex items-center">
                <span className={`mr-2 text-xs ${rarity.className}`}>•</span> 
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Corner pixels */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-white/20 z-10"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-white/20 z-10"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-black/40 z-10"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-black/40 z-10"></div>
      </div>
    </Card>
  );
};

export default NFTRaritySection;
