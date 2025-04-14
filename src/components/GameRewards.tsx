
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Pickaxe, Database } from 'lucide-react';
import { MinecraftIcon } from '@/components/ui/minecraft-icon';
import { MinecraftProgress } from '@/components/ui/minecraft-progress';

const REWARDS = [
  {
    title: "Quest Completion",
    description: "Complete a variety of quests ranging from simple to epic. Successful completion rewards you with Solana-based tokens.",
    icon: <Target className="h-10 w-10 text-minecraft-diamond" />,
    delay: 0.1,
    progress: 75
  },
  {
    title: "Defeat Enemies",
    description: "Engage in our robust combat system where you earn tokens by defeating enemies and showcasing your combat skills.",
    icon: <Shield className="h-10 w-10 text-minecraft-iron" />,
    delay: 0.2,
    progress: 60
  },
  {
    title: "Resource Mining",
    description: "Mine in-game resources like ores and gems to earn Solana-based tokens. Play solo or cooperatively.",
    icon: <Pickaxe className="h-10 w-10 text-minecraft-green" />,
    delay: 0.3,
    progress: 85
  },
  {
    title: "Token Utilization",
    description: "Use earned tokens in-game for purchases and upgrades or trade them on cryptocurrency exchanges.",
    icon: <Database className="h-10 w-10 text-minecraft-gold" />,
    delay: 0.4,
    progress: 50
  }
];

const GameRewards = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Minecraft cave background */}
      <div className="absolute inset-0 bg-minecraft-stone-bg opacity-25"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-minecraft-black/70 via-minecraft-black/90 to-minecraft-black/70 z-0"></div>
      
      {/* Floating mining particles */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="absolute bg-white/20 w-1 h-1 pixelated" 
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.3 + Math.random() * 0.5
          }}
        ></div>
      ))}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="minecraft-panel inline-block p-1.5 bg-minecraft-stone border-4 border-gray-800">
              <div className="px-4 py-1.5 bg-minecraft-blue font-minecraft text-white text-sm border-b-4 border-minecraft-blue/70">
                CRYPTO IN GAME REWARDS
              </div>
            </div>
            
            <h2 className="font-minecraft text-4xl md:text-5xl mb-6 mt-6 text-white">
              <span className="text-minecraft-purple drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)]">
                PLAY, <span className="text-minecraft-green">MINE</span>, <span className="text-minecraft-blue">EARN</span>
              </span>
            </h2>
            
            <p className="text-lg text-white mb-10 font-minecraft tracking-wide">
              Earn rewards through gameplay activities and own exclusive NFTs that have real-world value.
            </p>
            
            <div className="space-y-8">
              {REWARDS.map((reward, index) => (
                <motion.div 
                  key={index} 
                  className="bg-minecraft-black/60 border-4 border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: reward.delay }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex gap-4 p-4">
                    <div className="mt-1 w-16 h-16 flex-shrink-0 bg-minecraft-black border-4 border-gray-800 flex items-center justify-center">
                      {reward.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-minecraft text-xl mb-2 text-minecraft-blue">{reward.title}</h3>
                      <p className="text-white font-minecraft text-sm mb-4">{reward.description}</p>
                      
                      {/* Minecraft style progress bar */}
                      <div className="mt-2">
                        <div className="text-xs text-white font-minecraft mb-1">COMPLETION: {reward.progress}%</div>
                        <MinecraftProgress 
                          value={reward.progress}
                          max={100}
                          variant={index % 2 === 0 ? "blue" : "green"}
                          height="md"
                          animated
                        />
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
              {/* Minecraft-style frame with 3D effect */}
              <div className="absolute -inset-4 bg-minecraft-stone border-4 border-t-0 border-l-0 border-r-4 border-b-4 border-gray-900/70"></div>
              
              <div className="relative z-10 border-4 border-minecraft-dirt overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-minecraft-blue/20 to-minecraft-purple/10 pointer-events-none"></div>
                
                <img 
                  src="/images/minecraft_mining.png" 
                  alt="Minecraft mining rewards" 
                  className="w-full pixelated"
                />
                
                {/* Animated pickaxe overlay */}
                <div className="absolute bottom-4 right-4 animate-pulse-slow">
                  <div className="transform rotate-45">
                    <Pickaxe className="h-10 w-10 text-minecraft-diamond drop-shadow-glow-md" />
                  </div>
                </div>
                
                {/* Mining blocks */}
                <div className="absolute top-10 left-10 w-8 h-8 bg-minecraft-diamond border-2 border-black/40 pixelated animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-20 right-20 w-6 h-6 bg-minecraft-gold border-2 border-black/40 pixelated animate-float" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GameRewards;
