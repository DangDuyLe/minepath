import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Clock, BarChart3, Award, Axe } from 'lucide-react';

const NFTDropMechanics = () => {
  const dropRarities = [
    { 
      name: "Common", 
      chance: "~1%", 
      color: "text-rarity-common",
      playtime: "~1 hour of gameplay",
      examples: "Stone Pickaxe, Leather Armor"
    },
    { 
      name: "Uncommon", 
      chance: "~0.5%", 
      color: "text-rarity-uncommon",
      playtime: "~5 hours of gameplay",
      examples: "Iron Tools, Chain Armor"
    },
    { 
      name: "Rare", 
      chance: "~0.1%", 
      color: "text-rarity-rare",
      playtime: "~20 hours of gameplay",
      examples: "Diamond Tools, Special Potions"
    },
    { 
      name: "Epic", 
      chance: "~0.02%", 
      color: "text-rarity-epic",
      playtime: "~45 hours of gameplay",
      examples: "Enchanted Diamond Gear, Special Weapons"
    },
    { 
      name: "Legendary", 
      chance: "~0.01%", 
      color: "text-rarity-legendary",
      playtime: "75+ hours of gameplay",
      examples: "Unique Weapons, Special Abilities"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden minecraft-dirt-bg">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/images/bg-nether.png')] bg-repeat"></div>
        
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
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-1.5 rounded-none bg-gradient-to-r from-solana-blue/20 via-solana-purple/20 to-solana-green/20 mb-4 border border-minecraft-dirt">
            <div className="px-4 py-1 rounded-none bg-card/60 backdrop-blur-sm text-sm font-minecraft text-solana-blue">
              NFT DROP SYSTEM
            </div>
          </div>
          
          <h2 className="font-minecraft text-4xl md:text-5xl mb-6 text-white">
            HOW TO EARN NFTs
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our server features a luck-based NFT drop system that rewards your gameplay with valuable blockchain items
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="minecraft-container border-4 border-minecraft-dirt p-6">
            <h3 className="font-minecraft text-2xl mb-4 text-solana-blue">Drop Triggers</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-minecraft-green">
                  <Axe size={24} />
                </div>
                <div>
                  <h4 className="font-minecraft text-lg text-minecraft-green">Mining</h4>
                  <p className="text-sm text-muted-foreground">Mining valuable blocks like diamond, emerald, and ancient debris has a chance to drop NFTs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-solana-purple">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-minecraft text-lg text-solana-purple">Monster Kills</h4>
                  <p className="text-sm text-muted-foreground">Defeating hostile mobs and bosses gives you a chance to earn NFT rewards</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-solana-blue">
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <h4 className="font-minecraft text-lg text-solana-blue">PvP Combat</h4>
                  <p className="text-sm text-muted-foreground">Selected PvP battles in designated arenas can also trigger NFT drops</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="minecraft-container border-4 border-minecraft-dirt p-6">
            <h3 className="font-minecraft text-2xl mb-4 text-solana-blue">Safeguards & Balance</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-minecraft-green">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-minecraft text-lg text-minecraft-green">Cooldown System</h4>
                  <p className="text-sm text-muted-foreground">After earning an NFT, a cooldown period applies before you can earn another one</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-solana-purple">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <h4 className="font-minecraft text-lg text-solana-purple">Diminishing Returns</h4>
                  <p className="text-sm text-muted-foreground">Repetitive actions like farming the same mob will yield fewer drops over time</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-solana-blue">
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <h4 className="font-minecraft text-lg text-solana-blue">Anti-Farming</h4>
                  <p className="text-sm text-muted-foreground">Low-value actions are excluded to prevent exploitation of the system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="font-minecraft text-2xl mb-6 text-center text-white">NFT Rarity Tiers</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {dropRarities.map((rarity, index) => (
            <motion.div 
              key={index}
              className="minecraft-container border-4 border-minecraft-dirt p-4 flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className={`font-minecraft text-xl mb-2 ${rarity.color}`}>{rarity.name}</h4>
              <div className="mb-2 bg-black/30 px-3 py-1 rounded-none border border-minecraft-dirt">
                <span className="font-mono">{rarity.chance}</span> chance
              </div>
              <p className="text-sm mb-2 text-muted-foreground">Expected after:</p>
              <p className="font-minecraft text-sm mb-3">{rarity.playtime}</p>
              <p className="text-xs text-muted-foreground mt-auto">Examples: {rarity.examples}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="minecraft-container border-4 border-minecraft-dirt p-6 max-w-4xl mx-auto">
          <h3 className="font-minecraft text-xl mb-4 text-center text-solana-blue">Pro Tips for NFT Hunters</h3>
          
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="font-minecraft text-minecraft-green mr-2">▶</span>
              <span className="text-sm">Vary your activities between mining and combat for the best chances</span>
            </li>
            <li className="flex items-start">
              <span className="font-minecraft text-minecraft-green mr-2">▶</span>
              <span className="text-sm">Boss fights and rare ore mining have higher drop rates</span>
            </li>
            <li className="flex items-start">
              <span className="font-minecraft text-minecraft-green mr-2">▶</span>
              <span className="text-sm">Join server events for boosted drop chances during special periods</span>
            </li>
            <li className="flex items-start">
              <span className="font-minecraft text-minecraft-green mr-2">▶</span>
              <span className="text-sm">Legendary items are extremely rare - expect to play for 75+ hours before finding one</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NFTDropMechanics;
