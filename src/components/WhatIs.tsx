import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const WhatIs = () => {
  const { toast } = useToast();

  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
        
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 bg-[url('/images/bg-mountain.png')] bg-no-repeat bg-cover bg-center opacity-4"></div>
        
        {/* Geometric patterns along left edge */}
        <div className="absolute left-0 inset-y-0 w-16 opacity-20">
          <div className="h-full w-full bg-[url('/public/lovable-uploads/571ce867-0253-4784-ba20-b363e73c1463.png')] bg-repeat-y"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mb-5">
              <div className="px-4 py-1 rounded-full bg-black/60 backdrop-blur-sm text-sm font-medium text-cyan-400">
                WHY MINEPATH?
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-minecraft mb-6 text-white text-center lg:text-left">
              Minecraft Meets Crypto.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-white/80 mb-6 text-center lg:text-left">
              MinePath is where your Minecraft adventures earn real rewards. Mine, battle, trade - and own what you earn.
            </p>
            <div className="space-y-4 md:space-y-6 mb-8">
              <Feature title="Mine to Earn" description="Every block you mine, every quest you complete earns you real crypto rewards." />
              <Feature title="True Ownership" description="Your items, your assets - tradeable on the open market." />
              <Feature title="Cross-Server Economy" description="Trade with players across the entire MinePath network, not just one server." />
            </div>
            <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 mb-5 mt-8">
              <div className="px-4 py-1 rounded-full bg-black/60 backdrop-blur-sm text-sm font-medium text-green-400">
                POWERED BY SOLANA
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-minecraft mb-6 text-white text-center lg:text-left">
              Fast. Secure. Proven.
            </h3>
            <div className="space-y-4 md:space-y-6 mb-8">
              <Feature title="Instant Transactions" description="Lightning-fast blockchain tech means no waiting." />
              <Feature title="Sustainable Rewards" description="Built on real economic value, not pump-and-dump schemes." />
            </div>
            <button
              className="flex items-center gap-2 group"
              onClick={async () => {
                  const { copyServerAddressAndScroll } = await import('@/lib/clipboard');
                  await copyServerAddressAndScroll();
                  toast({ title: 'Server address copied', description: 'play.minepath.fun' });
                }}
            >
              <span className="font-minecraft text-white group-hover:text-cyan-400 transition-colors">
                Start Playing
              </span>
              <ArrowRight className="h-5 w-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative z-10 border border-cyan-500/30 p-1.5 bg-black/40 backdrop-blur-md">
              <img 
                src="/images/minecraft_world.png"
                alt="Minecraft world" 
                className="w-full h-auto pixelated"
              />
              
              <div className="absolute -bottom-4 -right-4 p-3 bg-black/80 border border-cyan-400/30 max-w-xs">
                <p className="text-sm text-white">
                  <span className="text-cyan-400 font-bold">Join 1000+ Players:</span> Mining, trading, 
                  and earning together in the MinePath multiverse.
                </p>
              </div>
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute top-1/2 -left-16 transform -translate-y-1/2">
              <motion.img 
                src="/images/diamond.png" 
                alt="Diamond" 
                className="w-16 h-16 pixelated"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            <div className="absolute -bottom-8 left-1/4">
              <motion.img 
                src="/images/gold.png" 
                alt="Gold" 
                className="w-12 h-12 pixelated"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ title, description }) => (
  <div className="flex items-start">
    <div className="mr-4 mt-1">
      <div className="w-3 h-3 bg-cyan-400"></div>
    </div>
    <div>
      <h3 className="font-minecraft text-xl text-cyan-400 mb-1">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  </div>
);

export default WhatIs;
