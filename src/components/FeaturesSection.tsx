
import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Shield, Coins, Award, Share2, Sparkles } from 'lucide-react';
import { MinecraftIcon } from '@/components/ui/minecraft-icon';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const features = [
  {
    title: "Mint In-Game Items",
    description: "Transform your hard-earned Minecraft items into tradable NFTs on the Solana blockchain.",
    icon: <Sword className="h-8 w-8 text-minecraft-purple" />,
    blockType: "diamond",
    variant: "diamond"
  },
  {
    title: "Secure Ownership",
    description: "True ownership of your items, secured by blockchain technology that can't be hacked or duplicated.",
    icon: <Shield className="h-8 w-8 text-minecraft-iron" />,
    blockType: "iron",
    variant: "stone"
  },
  {
    title: "Trade & Sell",
    description: "Trade your NFTs with other players or sell them on our marketplace for real cryptocurrency.",
    icon: <Coins className="h-8 w-8 text-minecraft-gold" />,
    blockType: "gold",
    variant: "gold"
  },
  {
    title: "Collect Rarities",
    description: "Discover and collect rare items with different tiers of scarcity – from common to legendary.",
    icon: <Award className="h-8 w-8 text-rarity-legendary" />,
    blockType: "emerald",
    variant: "grass"
  },
  {
    title: "Cross-Server Usage",
    description: "Use your NFT items across multiple compatible Minecraft servers in our network.",
    icon: <Share2 className="h-8 w-8 text-minecraft-blue" />,
    blockType: "lapis",
    variant: "diamond"
  },
  {
    title: "Special Abilities",
    description: "Legendary NFTs grant special abilities and perks that regular Minecraft items don't have.",
    icon: <Sparkles className="h-8 w-8 text-rarity-epic" />,
    blockType: "redstone",
    variant: "stone"
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
      {/* Minecraft grass block pattern background */}
      <div className="absolute inset-0 minecraft-dirt-bg opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-minecraft-black/70 via-minecraft-black/80 to-minecraft-black/70 z-0"></div>
      
      {/* Decorative Minecraft blocks */}
      <div className="absolute left-10 top-20 w-16 h-16 bg-minecraft-grass border-4 border-gray-800 pixelated"></div>
      <div className="absolute right-10 bottom-20 w-16 h-16 bg-minecraft-stone border-4 border-gray-800 pixelated"></div>
      <div className="absolute left-1/4 top-1/3 w-8 h-8 bg-minecraft-diamond border-4 border-gray-800 pixelated animate-float"></div>
      <div className="absolute right-1/4 bottom-1/3 w-8 h-8 bg-minecraft-gold border-4 border-gray-800 pixelated animate-float" style={{animationDelay: '1s'}}></div>
      
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
            <div className="px-4 py-1.5 bg-minecraft-green font-minecraft text-white text-sm border-b-4 border-minecraft-green/70">
              SERVER FEATURES
            </div>
          </motion.div>
          
          <motion.h2 
            className="font-minecraft text-4xl md:text-5xl mb-6 mt-6 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-minecraft-blue drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)]">
              PLAY, <span className="text-minecraft-purple">EARN</span>, <span className="text-minecraft-green">EVOLVE</span>
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-white max-w-2xl mx-auto font-minecraft tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our Minecraft server integrates Solana NFTs for a revolutionary gaming experience, 
            allowing you to truly own your virtual assets and trade them on the blockchain.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <EnhancedButton minecraftStyle="grass" size="lg">
            <span className="font-minecraft text-base">JOIN OUR SERVER</span>
          </EnhancedButton>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: JSX.Element;
    blockType: string;
    variant: string;
  };
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  // Different block backgrounds for each card
  const blockBgs = [
    "bg-minecraft-dirt",
    "bg-minecraft-stone",
    "bg-minecraft-planks",
    "bg-minecraft-grass",
    "bg-minecraft-diamond",
    "bg-minecraft-gold"
  ];
  
  return (
    <motion.div 
      className="h-full"
      variants={item}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className={`border-4 border-gray-800 ${blockBgs[index % blockBgs.length]} minecraft-3d-container h-full`}>
        <div className="p-6 flex flex-col h-full relative">
          {/* Pixelated overlay texture */}
          <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: 'url("/images/pixel_pattern.png")',
            backgroundSize: '4px 4px',
            imageRendering: 'pixelated'
          }}></div>
          
          {/* Icon */}
          <div className="relative z-10 mb-6">
            <MinecraftIcon 
              icon={() => feature.icon} 
              size="lg" 
              variant={feature.variant as any}
              className="border-4 border-gray-800"
            />
          </div>
          
          <h3 className="font-minecraft text-xl mb-3 text-white relative z-10">
            {feature.title}
          </h3>
          
          <p className="text-sm text-white font-minecraft tracking-wide relative z-10 leading-relaxed">
            {feature.description}
          </p>
          
          {/* Decorative corner pixels */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-white/20"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-white/20"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-gray-900/40"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-gray-900/40"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
