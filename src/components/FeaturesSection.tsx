
import React from 'react';
import { Shield, Sword, Gem, ArrowUpRight, Zap, Users, Clock, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    title: 'Direct NFT Drops',
    description: 'Earn NFTs by killing mobs, mining valuable blocks, or winning PvP battles.',
    icon: <Gem className="h-8 w-8 text-solana-purple" />
  },
  {
    title: 'Combat Enhancements',
    description: 'NFTs boost your damage, defense, or provide special combat abilities.',
    icon: <Sword className="h-8 w-8 text-solana-green" />
  },
  {
    title: 'Support & Utility',
    description: 'Gain movement speed, mining buffs, XP boosts, and special abilities.',
    icon: <Zap className="h-8 w-8 text-solana-blue" />
  },
  {
    title: 'Balanced PvP',
    description: 'Fair gameplay with protections against spawn camping and kill trading.',
    icon: <Shield className="h-8 w-8 text-rarity-epic" />
  },
  {
    title: 'Team Play',
    description: 'Some NFTs provide auras that boost nearby friendly players with collective buffs.',
    icon: <Users className="h-8 w-8 text-rarity-rare" />
  },
  {
    title: 'Progression System',
    description: 'Earn more valuable NFTs as you advance and master the game.',
    icon: <ArrowUpRight className="h-8 w-8 text-rarity-uncommon" />
  },
  {
    title: 'Anti-Abuse Safeguards',
    description: 'Cooldowns, diminishing returns, and protection systems prevent farming abuse.',
    icon: <Clock className="h-8 w-8 text-rarity-common" />
  },
  {
    title: 'Cosmetic Effects',
    description: 'Show off with colored name tags, particle trails, and unique visual effects.',
    icon: <Award className="h-8 w-8 text-rarity-legendary" />
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-solana-purple/5 via-transparent to-solana-blue/5 z-0"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('/images/bg-pattern.png')] bg-repeat z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-solana-blue/20 via-solana-purple/20 to-solana-green/20 mb-4">
            <div className="px-4 py-1 rounded-full bg-card/60 backdrop-blur-sm text-sm font-medium text-solana-blue">
              SERVER FEATURES
            </div>
          </div>
          
          <h2 className="font-minecraft text-4xl md:text-5xl mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-blue to-solana-green drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              PLAY, EARN, EVOLVE
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our server combines the best of Minecraft gameplay with Solana NFT technology to create a unique gaming experience.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index }: { feature: typeof FEATURES[0], index: number }) => {
  return (
    <motion.div variants={item} transition={{ duration: 0.5 }}>
      <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 border border-solana-purple/10 h-full overflow-hidden group hover:shadow-lg hover:shadow-solana-purple/5">
        <CardContent className="p-6 flex flex-col h-full relative">
          <div className="absolute -right-4 -top-4 w-20 h-20 bg-gradient-to-br from-solana-purple/10 via-solana-blue/5 to-transparent rounded-full blur-xl group-hover:scale-150 transition-all duration-500"></div>
          
          <div className="mb-4 p-4 bg-muted/30 rounded-xl w-fit relative z-10 group-hover:bg-muted/40 transition-colors">
            {feature.icon}
          </div>
          
          <h3 className="font-minecraft text-lg mb-3 group-hover:text-solana-purple transition-colors">{feature.title}</h3>
          
          <p className="text-sm text-foreground/80">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeaturesSection;
