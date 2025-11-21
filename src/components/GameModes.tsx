import React from 'react';
import { motion } from 'framer-motion';
import { Pickaxe } from './ui/icons/Pickaxe';
import { Wheat, Swords, Hammer, Crown, ChevronRight, Lock } from 'lucide-react';
import { MinecraftIcon } from '@/components/ui/minecraft-icon';
import { useToast } from '@/hooks/use-toast';

// Define all game modes available in MinePath
const GAME_MODES = [
  {
    id: 'mining',
    name: 'Mining & Exploration',
    description: 'Mine resources and explore caves to earn crypto rewards. Every diamond, every ore - it all counts toward your earnings.',
    icon: Pickaxe,
    bgColor: 'bg-minecraft-stone',
    iconVariant: 'diamond',
    image: '/images/game_mode_mining.png',
    available: true,
    phase: 'Available Now',
    additionalImages: ['/images/mining_1.png', '/images/mining_2.png']
  },
  {
    id: 'farming',
    name: 'Farming & Crafting',
    description: 'Build automated farms and craft valuable items. Sell your products on the marketplace for profit.',
    icon: Wheat,
    bgColor: 'bg-minecraft-grass',
    iconVariant: 'grass',
    available: false,
    phase: 'Coming Soon',
    previewImage: '/images/farming_preview.png'
  },
  {
    id: 'pvp',
    name: 'PvP Arenas',
    description: 'Battle other players in competitive arenas. Win matches to earn exclusive weapons and armor.',
    icon: Crown,
    bgColor: 'bg-minecraft-diamond',
    iconVariant: 'iron',
    available: false,
    phase: 'Coming Soon',
    previewImage: '/images/pvp_preview.png'
  },
  {
    id: 'questing',
    name: 'Epic Quests',
    description: 'Complete challenging story-driven quests. Earn massive rewards and unlock rare collectibles.',
    icon: Hammer,
    bgColor: 'bg-minecraft-planks',
    iconVariant: 'gold',
    available: false,
    phase: 'Coming Soon',
    previewImage: '/images/crafting_preview.png'
  },
  {
    id: 'bosses',
    name: 'Boss Raids',
    description: 'Team up with friends to defeat powerful bosses. Epic loot and legendary items await the brave.',
    icon: Swords,
    bgColor: 'bg-solana-purple',
    iconVariant: 'gold',
    available: false,
    phase: 'Coming Soon',
    previewImage: '/images/boss_preview.png'
  }
];

const GameModes = () => {
  // Currently only Mining is available in Phase 1
  const availableModes = GAME_MODES.filter(mode => mode.available);
  const futureModes = GAME_MODES.filter(mode => !mode.available);
  const { toast } = useToast();
  
  return (
    <section className="relative py-24 overflow-hidden" style={{ 
      background: 'linear-gradient(180deg, rgba(13,14,22,1) 0%, rgba(21,26,49,1) 100%)',
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block p-1.5 rounded-md backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-purple-600/20 mb-5"
          >
            <div className="px-4 py-1.5 font-minecraft text-cyan-400 text-sm border-b border-cyan-400/30">
              GAME MODES
            </div>
          </motion.div>
          
          <motion.h2 
            className="font-minecraft text-4xl md:text-5xl mb-6 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text ">
              MULTIPLE WAYS TO <span className="text-cyan-400">PLAY & EARN</span>
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-white/80 max-w-2xl mx-auto font-minecraft tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Choose your adventure in MinePath. Whether you love mining, farming, PvP, or questing - 
            every play style earns real rewards.
          </motion.p>
        </motion.div>
        
        {/* Current Available Mode (Phase 1) */}
        {availableModes.map((mode) => (
          <motion.div 
            key={mode.id}
            className="flex flex-col md:flex-row gap-8 bg-black/30 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 mb-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex-1 relative overflow-hidden border border-cyan-400/30 rounded-lg">
              <img 
                src={mode.image} 
                alt={mode.name} 
                className="w-full object-cover pixelated"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder_gamemode.png'
                }}
              />
              
              <div className="absolute top-0 left-0 bg-cyan-400/80 p-2 font-minecraft text-black">
                CURRENT PHASE
              </div>
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-minecraft text-2xl mb-4 text-cyan-400">{mode.name}</h3>
              <p className="text-white/80 mb-6 font-minecraft">{mode.description}</p>
              
              <ul className="space-y-3">
                <li className="flex items-center text-sm font-minecraft text-white/80">
                  <ChevronRight className="h-4 w-4 text-cyan-400 mr-2" />
                  Earn crypto rewards for every block mined
                </li>
                <li className="flex items-center text-sm font-minecraft text-white/80">
                  <ChevronRight className="h-4 w-4 text-cyan-400 mr-2" />
                  Discover rare items while exploring
                </li>
                <li className="flex items-center text-sm font-minecraft text-white/80">
                  <ChevronRight className="h-4 w-4 text-cyan-400 mr-2" />
                  Trade resources on cross-server marketplace
                </li>
              </ul>
              
              {/* Additional screenshots in a grid */}
              {mode.additionalImages && (
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {mode.additionalImages.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img}
                      alt={`${mode.name} screenshot ${idx+1}`}
                      className="h-24 w-full object-cover border border-cyan-400/30 rounded-md pixelated"
                    />
                  ))}
                </div>
              )}
              
              <div className="mt-6">
                <button
                  className="play-now-btn relative px-6 py-2 bg-white text-black font-minecraft tracking-wider hover:scale-105 transition-all duration-300 overflow-hidden group"
                  onClick={async () => {
                      const { copyServerAddressAndScroll } = await import('@/lib/clipboard');
                      await copyServerAddressAndScroll();
                      toast({ title: 'Server address copied', description: 'play.minepath.fun' });
                    }}
                >
                  <span className="relative z-10">Start Mining</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Future Modes (Locked) */}
        <h3 className="font-minecraft text-xl text-cyan-400 text-center mb-6">COMING SOON</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {futureModes.map((mode) => (
            <motion.div 
              key={mode.id}
              className="bg-black/30 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-2 right-2 bg-blue-500/20 px-2 py-1 text-xs font-minecraft text-white/80 backdrop-blur-sm rounded-md">
                {mode.phase}
              </div>
              
              {/* Preview image with lock overlay */}
              {mode.previewImage && (
                <div className="relative mb-4 h-32 overflow-hidden rounded-md">
                  <img 
                    src={mode.previewImage}
                    alt={`${mode.name} preview`}
                    className="w-full h-full object-cover pixelated grayscale opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <Lock className="h-8 w-8 text-white opacity-70" />
                  </div>
                </div>
              )}
              
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
                <button className="w-full text-sm cursor-not-allowed font-minecraft bg-blue-400/10 text-blue-400/40 py-2 border border-blue-400/20 backdrop-blur-sm rounded-md" disabled>
                  Coming Soon
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default GameModes;