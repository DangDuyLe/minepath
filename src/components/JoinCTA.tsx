import React from 'react';
import { Copy, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ServerStatus from './ServerStatus';
import { MinecraftProgress } from './ui/minecraft-progress';

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
    <section className="py-16 relative overflow-hidden minecraft-dirt-bg">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/images/bg-pattern.png')] bg-repeat"></div>
        
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
        
        <div className="minecraft-panel p-8 md:p-12 border-4 border-minecraft-dirt relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-minecraft-stone"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-minecraft-stone"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-minecraft-stone"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-minecraft-stone"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-minecraft text-2xl md:text-3xl mb-4 text-minecraft-green">
                JOIN THE ADVENTURE TODAY
              </h2>
              
              <p className="text-lg text-foreground/80 mb-6 font-minecraft">
                Ready to earn NFTs while playing Minecraft? Our luck-based drop system rewards mining valuable blocks and monster kills with NFTs ranging from Common to Legendary!
              </p>

              <div className="mb-6">
                <p className="text-sm text-white mb-2">Server Population:</p>
                <MinecraftProgress value={72} max={100} height="md" animated variant="green" className="mb-2" />
                <div className="flex justify-between text-xs">
                  <span>0</span>
                  <span>500</span>
                  <span>1000 players</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <div className="flex items-center bg-black/60 border-2 border-minecraft-dirt rounded-none px-4 py-2">
                    <span className="font-minecraft text-white">play.minepath.com</span>
                    <button 
                      onClick={copyServerAddress}
                      className="ml-2 p-1 hover:text-minecraft-green transition-colors"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
                
                <button className="minecraft-3d-btn inline-flex items-center justify-center">
                  Join Server Now <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <img 
                src="/images/minecraft_character.png" 
                alt="Minecraft Character with NFT" 
                className="pixelated h-48 md:h-60 w-auto object-contain mx-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
