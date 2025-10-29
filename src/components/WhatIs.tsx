import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatIs = () => {
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
                THE PROBLEM WE SOLVE
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-minecraft mb-6 text-white text-center lg:text-left">
              Why <span className="text-cyan-400">MinePath</span>?
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed text-white/80 mb-6 text-center lg:text-left">
              The Minecraft ecosystem is broken. Developers waste months rebuilding the same Web3 infrastructure. 
              Servers are isolated islands. Players have no way to translate 500+ hours of grinding into real value.
            </p>
            
            <div className="space-y-4 md:space-y-6 mb-8">
              <Feature title="Developer Burden" description="Server developers waste time and money rebuilding the same core Web3 stack (wallets, payments, token logic)." />
              <Feature title="Fragmented Ecosystem" description="Servers are isolated islands with no shared liquidity or interoperability. Value is trapped." />
              <Feature title="Broken GameFi" description="Current P2E models are inflationary 'farm-to-dump' schemes with zero retention or real fun." />
              <Feature title="Trapped Value" description="140M+ Minecraft players can't translate their time and creativity into real-world value." />
            </div>
            
            <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 mb-5 mt-8">
              <div className="px-4 py-1 rounded-full bg-black/60 backdrop-blur-sm text-sm font-medium text-green-400">
                OUR SOLUTION
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-minecraft mb-6 text-white text-center lg:text-left">
              The <span className="text-green-400">Infrastructure Layer</span>
            </h3>
            
            <div className="space-y-4 md:space-y-6 mb-8">
              <Feature title="Plug-and-Play SDK/API" description="Save 90% development time. Connect to a shared ecosystem instantly. Launch in minutes, not months." />
              <Feature title="Sustainable Economy" description="Built on real transaction fees (swaps, marketplace, crafting)—not inflation. Long-term value and retention." />
              <Feature title="Seamless Web3" description="Every action (mining, crafting) is an instant on-chain micro-transaction. Zero crypto knowledge needed." />
              <Feature title="Proven Product" description="Not just an idea. Already built and deployed. A working, battle-tested infrastructure ready to scale." />
            </div>
            
            <Link to="/how-to-play">
              <button className="flex items-center gap-2 group">
                <span className="font-minecraft text-white group-hover:text-cyan-400 transition-colors">
                  Explore our infrastructure →
                </span>
                <ArrowRight className="h-5 w-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
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
                  <span className="text-cyan-400 font-bold">B2B2C Model:</span> We empower developers, 
                  who in turn attract and retain players across the multiverse.
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
