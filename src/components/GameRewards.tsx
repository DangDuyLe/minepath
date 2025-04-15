
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Pickaxe, Database } from 'lucide-react';
import { MinecraftIcon } from '@/components/ui/minecraft-icon';
import { MinecraftProgress } from '@/components/ui/minecraft-progress';

const REWARDS = [
  {
    title: "Quest Completion",
    description: "Complete a variety of quests ranging from simple to epic. Successful completion rewards you with Solana-based tokens.",
    icon: <Target className="h-10 w-10 text-cyan-400" />,
    delay: 0.1,
    progress: 75
  },
  {
    title: "Defeat Enemies",
    description: "Engage in our robust combat system where you earn tokens by defeating enemies and showcasing your combat skills.",
    icon: <Shield className="h-10 w-10 text-cyan-400" />,
    delay: 0.2,
    progress: 60
  },
  {
    title: "Resource Mining",
    description: "Mine in-game resources like ores and gems to earn Solana-based tokens. Play solo or cooperatively.",
    icon: <Pickaxe className="h-10 w-10 text-cyan-400" />,
    delay: 0.3,
    progress: 85
  },
  {
    title: "Token Utilization",
    description: "Use earned tokens in-game for purchases and upgrades or trade them on cryptocurrency exchanges.",
    icon: <Database className="h-10 w-10 text-cyan-400" />,
    delay: 0.4,
    progress: 50
  }
];

const GameRewards = () => {
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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block p-1.5 rounded-md backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-purple-600/20 mb-5">
              <div className="px-4 py-1.5 font-minecraft text-cyan-400 text-sm border-b border-cyan-400/30">
                CRYPTO IN GAME REWARDS
              </div>
            </div>
            
            <h2 className="font-minecraft text-4xl md:text-5xl mb-6 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                PLAY, <span className="text-cyan-400">MINE</span>, <span className="text-blue-500">EARN</span>
              </span>
            </h2>
            
            <p className="text-lg text-white/80 mb-10 font-minecraft tracking-wide">
              Earn rewards through gameplay activities and own exclusive NFTs that have real-world value.
            </p>
            
            <div className="space-y-8">
              {REWARDS.map((reward, index) => (
                <motion.div 
                  key={index} 
                  className="bg-black/30 backdrop-blur-sm border border-cyan-400/30 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: reward.delay }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex gap-4 p-4">
                    <div className="mt-1 w-16 h-16 flex-shrink-0 bg-black/40 border border-cyan-400/30 backdrop-blur-sm flex items-center justify-center rounded-lg">
                      {reward.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-minecraft text-xl mb-2 text-cyan-400">{reward.title}</h3>
                      <p className="text-white/80 font-minecraft text-sm mb-4">{reward.description}</p>
                      
                      {/* Minecraft style progress bar */}
                      <div className="mt-2">
                        <div className="text-xs text-white/80 font-minecraft mb-1">COMPLETION: {reward.progress}%</div>
                        <div className="w-full h-3 bg-black/50 border border-cyan-400/30 overflow-hidden rounded-full">
                          <div 
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500" 
                            style={{ width: `${reward.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              {/* Modern frame with glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-lg blur-md"></div>
              
              <div className="relative z-10 border border-cyan-400/30 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 pointer-events-none"></div>
                
                <img 
                  src="/images/minecraft_mining.png" 
                  alt="Minecraft mining rewards" 
                  className="w-full pixelated"
                />
                
                {/* Animated pickaxe overlay */}
                <div className="absolute bottom-4 right-4 animate-pulse-slow">
                  <div className="transform rotate-45">
                    <Pickaxe className="h-10 w-10 text-cyan-400 drop-shadow-glow-md" />
                  </div>
                </div>
                
                {/* Mining blocks */}
                <div className="absolute top-10 left-10 w-8 h-8 bg-cyan-400 border-2 border-black/40 pixelated animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-20 right-20 w-6 h-6 bg-blue-400 border-2 border-black/40 pixelated animate-float" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GameRewards;
