import React from 'react';
import { motion } from 'framer-motion';
import { Pickaxe } from './ui/icons/Pickaxe';
import { Wheat, Swords, Hammer, Crown, ArrowRight } from 'lucide-react';
import { MinecraftIcon } from '@/components/ui/minecraft-icon';

const ROADMAP_DATA = [
  {
    year: "Q2 2025",
    title: "Phase 1: Mining",
    description: "Dig quặng to earn $FARM, upgrade with Tool NFTs, and unlock rare lootboxes.",
    icon: Pickaxe,
    iconVariant: "diamond",
    isActive: true,
    items: [
      "Launch mining gameplay mechanics",
      "Introduce $FARM token",
      "Release Tool NFTs with gameplay benefits",
      "Implement lootbox system for rewards"
    ]
  },
  {
    year: "Q4 2025",
    title: "Phase 2: Farming + Cross-Server",
    description: "Plant crops, harvest $FARM, and boost yields with Pet NFTs and fertilizers.",
    icon: Wheat,
    iconVariant: "grass",
    isActive: false,
    items: [
      "Add farming gameplay mechanics",
      "Introduce Pet NFTs for yield boosts",
      "Enable Cross-Server connectivity",
      "Expand NFT marketplace integration"
    ]
  },
  {
    year: "Q2 2026",
    title: "Phase 3: PVP + DeFi + $PATH",
    description: "Battle in arenas with Weapon NFTs, earn $FARM, and climb leaderboards.",
    icon: Swords,
    iconVariant: "iron",
    isActive: false,
    items: [
      "Launch PVP arenas with matchmaking",
      "Introduce $PATH governance token",
      "Implement DeFi staking mechanisms",
      "Create leaderboard and ranking systems"
    ]
  },
  {
    year: "Q4 2026",
    title: "Phase 4: Crafting + Land NFT",
    description: "Combine resources to create Armor and Potions, powering up your journey.",
    icon: Hammer,
    iconVariant: "gold",
    isActive: false,
    items: [
      "Add crafting mechanics for gear and items",
      "Launch Land NFT ownership system",
      "Implement resource generation on owned land",
      "Create rental marketplace for passive income"
    ]
  },
  {
    year: "Q2 2027",
    title: "Phase 5: Boss Battle MMORPG + Metaverse + Mobile",
    description: "Form parties, complete quests, and defeat epic bosses for $PATH and Relic NFTs.",
    icon: Crown,
    iconVariant: "gold",
    isActive: false,
    items: [
      "Implement MMORPG mechanics with boss battles",
      "Launch Metaverse Mini hub for social interaction",
      "Release Mobile App for on-the-go access",
      "Complete full ecosystem integration"
    ]
  }
];

const Roadmap = () => {
  return (
    <section className="py-24 relative overflow-hidden minecraft-stone-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-minecraft-black/70 via-minecraft-black/90 to-minecraft-black/70 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="minecraft-panel inline-block p-1.5 bg-minecraft-stone border-4 border-gray-800">
            <div className="px-4 py-1.5 bg-minecraft-diamond font-minecraft text-white text-sm border-b-4 border-minecraft-diamond/70">
              PROJECT TIMELINE
            </div>
          </div>
          
          <h2 className="font-minecraft text-4xl md:text-5xl mb-6 mt-6 text-white">
            <span className="text-minecraft-gold drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)]">
              THE FUTURE OF MINEPATH
            </span>
          </h2>
          
          <p className="text-lg text-white max-w-2xl mx-auto font-minecraft mb-12">
            Our development journey spans five major phases, each introducing new gameplay and Web3 features.
          </p>
        </motion.div>
        
        {/* Featured Phase (Currently Active) */}
        {ROADMAP_DATA.filter(phase => phase.isActive).map((phase, index) => (
          <motion.div 
            key={`featured-${index}`}
            className="mb-20 minecraft-container border-4 border-minecraft-green p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 relative">
                <div className="absolute -top-8 -left-8 bg-minecraft-green p-2 font-minecraft text-white">
                  CURRENT PHASE
                </div>
                <h3 className="font-minecraft text-2xl mb-4 text-minecraft-green">{phase.title}</h3>
                <div className="flex items-center mb-6">
                  <MinecraftIcon 
                    icon={phase.icon as any} 
                    size="lg" 
                    variant={phase.iconVariant as any} 
                    className="mr-4"
                  />
                  <p className="text-white font-minecraft">{phase.description}</p>
                </div>
                
                <div className="bg-black/40 p-4 mb-6">
                  <h4 className="font-minecraft text-xl mb-4 text-minecraft-green">Phase Features:</h4>
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-white">
                        <span className="font-minecraft text-minecraft-green mr-2">▶</span>
                        <span className="font-minecraft text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-start">
                  <button className="minecraft-btn-green font-minecraft flex items-center">
                    Start Mining Now <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 border-4 border-minecraft-dirt">
                <img 
                  src="/images/game_mode_mining.png" 
                  alt="Mining Game Mode" 
                  className="w-full h-full object-cover pixelated"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/placeholder_gamemode.png'
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
        
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-minecraft-dirt/50 transform -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {ROADMAP_DATA.map((phase, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="w-full md:w-5/12 text-center md:text-right">
                  <div className="inline-block p-2 bg-minecraft-stone border-2 border-gray-800 mb-3">
                    <div className="px-4 py-1 font-minecraft text-sm text-white">
                      {phase.year}
                    </div>
                  </div>
                  <h3 className="font-minecraft text-2xl mb-4 text-white">{phase.title}</h3>
                  <p className="text-white/80 text-sm font-minecraft">{phase.description}</p>
                </div>
                
                <div className="relative">
                  <div className={`w-12 h-12 flex items-center justify-center ${phase.isActive ? 'bg-minecraft-green' : 'bg-minecraft-stone'} border-4 border-gray-800 z-10 relative`}>
                    <MinecraftIcon 
                      icon={phase.icon as any} 
                      size="sm" 
                      variant={phase.iconVariant as any}
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-5/12">
                  <div className={`${phase.isActive ? 'bg-black/60 border-minecraft-green' : 'bg-black/40 border-gray-700'} p-4 border-2`}>
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className={`${phase.isActive ? 'text-minecraft-green' : 'text-minecraft-stone'} mr-2 mt-1`}>▶</span>
                          <span className="text-white font-minecraft text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Phase launch countdown */}
        <motion.div 
          className="mt-16 p-4 bg-black/50 border-2 border-minecraft-dirt mx-auto max-w-md"
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

export default Roadmap;
