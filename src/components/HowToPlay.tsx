import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'Join the Server',
    description: 'Connect to our Minecraft server using the IP address play.minepath.com',
    icon: '/images/icons/minecraft-server.png'
  },
  {
    number: '02',
    title: 'Link Your Wallet',
    description: 'Connect your Solana wallet to your Minecraft account using our simple in-game command',
    icon: '/images/icons/minecraft-wallet.png'
  },
  {
    number: '03',
    title: 'Play & Earn',
    description: 'Mine valuable blocks and defeat mobs to earn NFT drops based on rarity (1% chance for Common items)',
    icon: '/images/icons/minecraft-pickaxe.png'
  },
  {
    number: '04',
    title: 'Use Your NFTs',
    description: 'Equip your NFTs in-game to gain special powers and abilities that enhance your gameplay',
    icon: '/images/icons/minecraft-sword.png'
  },
  {
    number: '05',
    title: 'Trade & Collect',
    description: 'Build your collection from Common to Legendary items and trade them on the Solana blockchain',
    icon: '/images/icons/minecraft-diamond.png'
  }
];

const HowToPlay = () => {
  return (
    <section className="py-20 relative overflow-hidden minecraft-dirt-bg">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/images/bg-endstone.png')] bg-repeat"></div>
        
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
        <div className="text-center mb-16">
          <h2 className="font-minecraft text-4xl md:text-5xl mb-6 text-white">
            HOW TO PLAY
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our Minecraft server and start earning NFTs that have real value. Follow these simple steps to get started:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {STEPS.map((step, index) => (
            <motion.div 
              key={index}
              className="minecraft-container p-6 border-4 border-minecraft-dirt relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-minecraft-dirt flex items-center justify-center font-minecraft text-white">
                {step.number}
              </div>
              
              <div className="flex justify-center mb-4">
                <img src={step.icon} alt={step.title} className="h-16 w-16 pixelated" />
              </div>
              
              <h3 className="font-minecraft text-lg mb-2 text-center text-solana-blue">
                {step.title}
              </h3>
              
              <p className="text-sm text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="minecraft-btn-green inline-flex items-center justify-center">
            Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
