
import React from 'react';
import { Copy, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ServerStatus from './ServerStatus';
import { MinecraftProgress } from './ui/minecraft-progress';
import { motion } from 'framer-motion';

const JoinCTA = () => {
  const { toast } = useToast();
  
  const copyServerAddress = () => {
    navigator.clipboard.writeText('play.minepath.com');
    toast({
      title: "Server address copied!",
      description: "Ready to paste in your Minecraft client"
    });
  };
  
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('/public/lovable-uploads/93a3ca40-773c-46b3-a9ed-3d3cc2c433de.png')",
            filter: "brightness(0.5)",
            backgroundSize: "cover"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
        
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] bg-repeat opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-black/60 backdrop-blur-md border border-blue-400/20 p-8 md:p-10 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-minecraft text-3xl md:text-4xl mb-4 text-white">
                <span className="text-cyan-400">JOIN THE ADVENTURE</span> TODAY
              </h2>
              
              <p className="text-lg text-white/90 mb-6 font-minecraft leading-relaxed">
                Ready to earn NFTs while playing Minecraft? Our luck-based drop system rewards mining valuable blocks and monster kills with NFTs ranging from Common to Legendary!
              </p>

              <div className="mb-6">
                <p className="text-sm text-white mb-2">Server Population:</p>
                <div className="w-full h-3 bg-black/50 border border-blue-300/30 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 w-[72%]"></div>
                </div>
                <div className="flex justify-between text-xs mt-1 text-white/70">
                  <span>0</span>
                  <span>500</span>
                  <span>1000 players</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <div className="flex items-center bg-black/60 border border-blue-400/30 px-4 py-2">
                    <span className="font-minecraft text-white">play.minepath.com</span>
                    <button 
                      onClick={copyServerAddress}
                      className="ml-3 p-1 hover:text-cyan-400 transition-colors"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
                
                <button className="play-now-btn relative px-6 py-2 bg-white text-black font-minecraft tracking-wider hover:scale-105 transition-all duration-300 overflow-hidden group inline-flex items-center justify-center">
                  <span className="relative z-10 flex items-center">
                    Join Server Now <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <motion.img
                initial={{ y: 10 }}
                animate={{ y: -10 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                src="/images/minecraft_character.png" 
                alt="Minecraft Character with NFT" 
                className="pixelated h-56 md:h-64 w-auto object-contain mx-auto" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCTA;
