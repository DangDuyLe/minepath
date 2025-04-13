import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Pickaxe, Database, Shield } from 'lucide-react';

const REWARDS = [
  {
    title: "Quest Completion",
    description: "Complete a variety of quests ranging from simple to epic. Successful completion rewards you with Solana-based tokens.",
    icon: <Target className="h-10 w-10 text-solana-purple" />,
    delay: 0.1
  },
  {
    title: "Defeat Enemies",
    description: "Engage in our robust combat system where you earn tokens by defeating enemies and showcasing your combat skills.",
    icon: <Shield className="h-10 w-10 text-solana-blue" />,
    delay: 0.2
  },
  {
    title: "Resource Mining",
    description: "Mine in-game resources like ores and gems to earn Solana-based tokens. Play solo or cooperatively.",
    icon: <Pickaxe className="h-10 w-10 text-solana-green" />,
    delay: 0.3
  },
  {
    title: "Token Utilization",
    description: "Use earned tokens in-game for purchases and upgrades or trade them on cryptocurrency exchanges.",
    icon: <Database className="h-10 w-10 text-rarity-legendary" />,
    delay: 0.4
  }
];

const GameRewards = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-solana-green/10 via-background/95 to-background/90 z-0"></div>
      
      {/* Decorative orbs */}
      <div className="absolute left-10 top-1/3 w-96 h-96 bg-solana-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute right-10 bottom-1/3 w-80 h-80 bg-solana-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-solana-blue/20 via-solana-purple/20 to-solana-green/20 mb-4">
              <div className="px-4 py-1.5 rounded-full bg-card/60 backdrop-blur-sm text-sm font-medium text-solana-blue border border-solana-blue/10">
                CRYPTO IN GAME REWARDS
              </div>
            </div>
            
            <h2 className="font-minecraft text-4xl md:text-5xl mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-blue drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                PLAY, MINE, EARN
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10">
              Earn rewards through gameplay activities and own exclusive NFTs that have real-world value.
            </p>
            
            <div className="space-y-8">
              {REWARDS.map((reward, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: reward.delay }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="mt-1 w-16 h-16 flex-shrink-0 rounded-lg bg-background/40 backdrop-blur flex items-center justify-center border border-solana-purple/10">
                    {reward.icon}
                  </div>
                  <div>
                    <h3 className="font-minecraft text-xl mb-2 text-solana-blue">{reward.title}</h3>
                    <p className="text-muted-foreground">{reward.description}</p>
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
            <div className="relative rounded-xl overflow-hidden border-4 border-solana-purple/20">
              <div className="absolute inset-0 bg-gradient-to-br from-solana-purple/20 to-solana-blue/10 blur-sm"></div>
              <img 
                src="/images/minecraft_mining.png" 
                alt="Minecraft mining rewards" 
                className="relative z-10 w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GameRewards;
