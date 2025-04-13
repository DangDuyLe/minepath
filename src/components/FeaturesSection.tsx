import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Shield, Coins, Award, Share2, Sparkles } from 'lucide-react';

const features = [
  {
    title: "Mint In-Game Items",
    description: "Transform your hard-earned Minecraft items into tradable NFTs on the Solana blockchain.",
    icon: <Sword className="h-8 w-8 text-solana-purple" />,
    gradient: "from-solana-purple/20 via-solana-purple/10 to-transparent"
  },
  {
    title: "Secure Ownership",
    description: "True ownership of your items, secured by blockchain technology that can't be hacked or duplicated.",
    icon: <Shield className="h-8 w-8 text-solana-blue" />,
    gradient: "from-solana-blue/20 via-solana-blue/10 to-transparent"
  },
  {
    title: "Trade & Sell",
    description: "Trade your NFTs with other players or sell them on our marketplace for real cryptocurrency.",
    icon: <Coins className="h-8 w-8 text-solana-green" />,
    gradient: "from-solana-green/20 via-solana-green/10 to-transparent"
  },
  {
    title: "Collect Rarities",
    description: "Discover and collect rare items with different tiers of scarcity – from common to legendary.",
    icon: <Award className="h-8 w-8 text-rarity-legendary" />,
    gradient: "from-rarity-legendary/20 via-rarity-legendary/10 to-transparent"
  },
  {
    title: "Cross-Server Usage",
    description: "Use your NFT items across multiple compatible Minecraft servers in our network.",
    icon: <Share2 className="h-8 w-8 text-solana-purple" />,
    gradient: "from-solana-purple/20 via-solana-purple/10 to-transparent"
  },
  {
    title: "Special Abilities",
    description: "Legendary NFTs grant special abilities and perks that regular Minecraft items don't have.",
    icon: <Sparkles className="h-8 w-8 text-rarity-epic" />,
    gradient: "from-rarity-epic/20 via-rarity-epic/10 to-transparent"
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
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-solana-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/3 w-80 h-80 bg-solana-blue/5 rounded-full blur-3xl"></div>
      
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
            className="inline-block p-1.5 rounded-full bg-gradient-to-r from-solana-blue/20 via-solana-purple/20 to-solana-green/20 mb-4"
          >
            <div className="px-4 py-1.5 rounded-full bg-card/60 backdrop-blur-sm text-sm font-medium text-solana-blue border border-solana-blue/10">
              SERVER FEATURES
            </div>
          </motion.div>
          
          <motion.h2 
            className="font-minecraft text-4xl md:text-5xl mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-blue via-solana-purple to-solana-green drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              PLAY, EARN, EVOLVE
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
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
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: JSX.Element;
    gradient: string;
  };
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  return (
    <motion.div 
      className="h-full"
      variants={item}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="group h-full perspective-1000">
        <div className="relative h-full transform-style-3d transition-transform duration-500 group-hover:rotate-y-3 group-hover:scale-[1.02]">
          <div className="bg-card/50 backdrop-blur-sm border border-solana-purple/10 h-full overflow-hidden rounded-xl group-hover:border-solana-purple/20 transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-solana-purple/5">
            <div className="p-6 flex flex-col h-full relative">
              {/* Gradient orb background */}
              <div className={`absolute -right-8 -top-8 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full blur-xl group-hover:scale-150 transition-all duration-500 opacity-40 group-hover:opacity-80`}></div>
              
              {/* Icon with animated background */}
              <div className="relative z-10 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-lg bg-background/40 backdrop-blur flex items-center justify-center group-hover:bg-background/60 transition-colors duration-300 border border-solana-purple/10 group-hover:border-solana-purple/30">
                    {feature.icon}
                    
                    {/* Animated dots */}
                    <motion.div 
                      className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-solana-purple/70"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2 
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <h3 className="font-minecraft text-xl mb-3 group-hover:text-solana-purple transition-colors relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-sm text-foreground/80 group-hover:text-foreground/90 transition-colors relative z-10">
                {feature.description}
              </p>
              
              {/* Decorative line */}
              <div className="absolute bottom-3 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-solana-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
