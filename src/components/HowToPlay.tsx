import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const STEPS = [
  {
    number: '01',
    title: 'Connect to Server',
    description: 'Add alphatest.minepath.fun to your Minecraft client and join the server',
    icon: '/images/icons/minecraft-server.png'
  },
  {
    number: '02',
    title: 'Create Wallet',
    description: 'Quick in-game wallet setup. Takes 30 seconds - no crypto experience needed',
    icon: '/images/icons/minecraft-wallet.png'
  },
  {
    number: '03',
    title: 'Start Mining',
    description: 'Mine blocks action earns you crypto rewards',
    icon: '/images/icons/minecraft-pickaxe.png'
  },
  {
    number: '04',
    title: 'Earn & Share Rewards',
    description: 'Earn and share rewards directly in-game',
    icon: '/images/icons/minecraft-sword.png'
  }
];

const HowToPlay = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with overlay - Copied from WhatIs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-[url('/images/bg-minecraft.png')] bg-no-repeat bg-cover bg-center opacity-4"></div>
        <div className="absolute left-0 inset-y-0 w-16 opacity-20">
          <div className="h-full w-full bg-[url('/public/lovable-uploads/571ce867-0253-4784-ba20-b363e73c1463.png')] bg-repeat-y"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block p-1.5 rounded-md backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-purple-600/20 mb-5"
          >
            <div className="px-4 py-1.5 font-minecraft text-cyan-400 text-sm border-b border-cyan-400/30">
              GETTING STARTED
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-minecraft text-3xl md:text-4xl lg:text-5xl mb-6 text-white"
          >
            <span className="bg-clip-text">
              HOW TO <span className="text-cyan-400">GET STARTED</span>
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto"
          >
            Join MinePath and start earning crypto while playing Minecraft in 4 simple steps. 
            From connecting to the server to trading your first items:
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16 justify-center mx-auto max-w-6xl justify-items-center">
          {STEPS.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-black/30 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 md:p-6 relative w-64 md:w-72 mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-minecraft text-black rounded-md">
                {step.number}
              </div>
              
              <div className="flex justify-center mb-4">
                <img src={step.icon} alt={step.title} className="h-12 w-12 md:h-16 md:w-16 pixelated" />
              </div>
              
              <h3 className="font-minecraft text-base md:text-lg mb-2 text-center text-cyan-400">
                {step.title}
              </h3>
              
              <p className="text-xs md:text-sm text-center text-white/80">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <motion.button 
            className="play-now-btn relative px-6 md:px-8 py-2 md:py-3 bg-white text-black font-minecraft tracking-wider hover:scale-105 transition-all duration-300 overflow-hidden group inline-flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="relative z-10 flex items-center">
              Join Server Now <ArrowRight className="ml-2 h-5 w-5" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
