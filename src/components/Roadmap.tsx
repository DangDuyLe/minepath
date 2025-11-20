
import React from 'react';
import { motion } from 'framer-motion';
import { Pickaxe } from './ui/icons/Pickaxe';
import { Wheat, Swords, Hammer, Crown, ArrowRight } from 'lucide-react';
import { MinecraftIcon } from '@/components/ui/minecraft-icon';

const ROADMAP_DATA = [
  {
    year: "Q4 2025",
    title: "Phase 1: Alpha Test",
    description: "Launch the MinePath alpha test. Invite early players to test core mine-to-earn systems and gather feedback.",
    icon: Pickaxe,
    iconVariant: "diamond",
    isActive: true,
    items: [
      "Open alpha test server and invite community testers",
      "Deploy initial wallet integration and basic reward flows",
      "Test core mining mechanics and resource rewards",
      "Collect feedback and iterate on bugs and balance"
    ]
  },
  {
    year: "Q2 2026",
    title: "Phase 2: New Game Modes",
    description: "Expand gameplay with farming and boss raids. More ways to play means more ways to earn.",
    icon: Wheat,
    iconVariant: "grass",
    isActive: false,
    items: [
      "Launch farming and crafting economy systems",
      "Introduce cooperative boss raids with rare item drops",
      "Enhance balancing for mining rewards",
      "Mobile companion app for inventory management"
    ]
  },
  {
    year: "Q4 2026",
    title: "Phase 3: Governance Token",
    description: "Launch $PATH governance token. Players vote on server features, events, and economy parameters.",
    icon: Crown,
    iconVariant: "iron",
    isActive: false,
    items: [
      "Launch $PATH governance token on Solana",
      "Enable community voting on server features",
      "Distribute staking rewards to token holders",
      "Launch DAO for community-driven decisions"
    ]
  },
  {
    year: "Q2 2027",
    title: "Phase 4: Creator Economy",
    description: "Empower players to create and sell custom skins, items, and mini-games for the community.",
    icon: Hammer,
    iconVariant: "gold",
    isActive: false,
    items: [
      "Creator tools for custom items and skins",
      "Player-designed mini-games and challenges",
      "Revenue sharing for successful creators",
      "Royalties system for secondary sales"
    ]
  },
  {
    year: "Q4 2027",
    title: "Phase 5: Multiverse Expansion",
    description: "Connect multiple themed servers into a unified multiverse. Travel between worlds, keep your assets everywhere.",
    icon: Swords,
    iconVariant: "gold",
    isActive: false,
    items: [
      "Launch additional themed servers (Fantasy, Sci-Fi, etc.)",
      "Cross-server travel and unified asset system",
      "Metaverse social hub for player interaction",
      "Full mobile app with complete gameplay features"
    ]
  }
];

const Roadmap = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ 
      background: 'linear-gradient(180deg, rgba(21,26,49,1) 0%, rgba(13,14,22,1) 100%)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed' 
    }}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/public/lovable-uploads/571ce867-0253-4784-ba20-b363e73c1463.png')] bg-repeat"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          background: 'radial-gradient(circle, rgba(10, 21, 77, 0.3) 0%, rgba(13, 14, 22, 0) 70%)'
        }}></div>
        
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
          <div className="inline-block p-1.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-400/20 mb-4 border border-cyan-400/30">
            <div className="px-4 py-1.5 bg-black/60 backdrop-blur-sm font-minecraft text-cyan-400 text-sm">
              PROJECT ROADMAP
            </div>
          </div>
          
          <h2 className="font-minecraft text-4xl md:text-5xl mb-6 mt-6 text-white">
            <span className="bg-clip-text ">
              OUR <span className="text-cyan-400">ROADMAP</span>
            </span>
          </h2>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-minecraft mb-12">
            From a single server to a connected multiverse. Here's how MinePath will evolve 
            to give players more ways to play, earn, and own their gaming experience.
          </p>
        </motion.div>
        
        {/* Featured Phase (Currently Active) */}
        {ROADMAP_DATA.filter(phase => phase.isActive).map((phase, index) => (
          <motion.div 
            key={`featured-${index}`}
            className="mb-20 bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 relative">
                <div className="absolute -top-8 -left-8 bg-gradient-to-r from-cyan-500 to-blue-600 p-2 font-minecraft text-white">
                  CURRENT PHASE
                </div>
                <h3 className="font-minecraft text-2xl mb-4 text-cyan-400">{phase.title}</h3>
                <div className="flex items-center mb-6">
                  <MinecraftIcon 
                    icon={phase.icon as any} 
                    size="lg" 
                    variant={phase.iconVariant as any} 
                    className="mr-4"
                  />
                  <p className="text-white/80 font-minecraft">{phase.description}</p>
                </div>
                
                <div className="bg-black/60 p-4 mb-6 border border-cyan-400/20">
                  <h4 className="font-minecraft text-xl mb-4 text-cyan-400">Phase Features:</h4>
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-white/80">
                        <span className="font-minecraft text-cyan-400 mr-2">▶</span>
                        <span className="font-minecraft text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-start">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 font-minecraft px-6 py-2 flex items-center text-white hover:from-cyan-400 hover:to-blue-500 transition-colors">
                    Join Server Now <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 border border-cyan-400/30">
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
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-cyan-400/30 transform -translate-x-1/2"></div>
          
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
                  <div className="inline-block p-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-400/20 mb-3 border border-cyan-400/30">
                    <div className="px-4 py-1 font-minecraft text-sm text-cyan-400 bg-black/60 backdrop-blur-sm">
                      {phase.year}
                    </div>
                  </div>
                  <h3 className="font-minecraft text-2xl mb-4 text-white">{phase.title}</h3>
                  <p className="text-white/80 text-sm font-minecraft">{phase.description}</p>
                </div>
                
                <div className="relative">
                  <div className={`w-12 h-12 flex items-center justify-center ${phase.isActive ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-black/60'} border border-cyan-400/30 z-10 relative`}>
                    <MinecraftIcon 
                      icon={phase.icon as any} 
                      size="sm" 
                      variant={phase.iconVariant as any}
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-5/12">
                  <div className={`${phase.isActive ? 'bg-black/60 border-cyan-400/30' : 'bg-black/40 border-cyan-400/20'} p-4 border rounded-lg backdrop-blur-sm`}>
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className={`${phase.isActive ? 'text-cyan-400' : 'text-blue-500/80'} mr-2 mt-1`}>▶</span>
                          <span className="text-white/80 font-minecraft text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default Roadmap;
