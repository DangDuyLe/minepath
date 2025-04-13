import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ServerStatus from './ServerStatus';

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ServerStatus />
        
        <div className="minecraft-container p-8 md:p-12 border-4 border-minecraft-dirt">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-minecraft text-2xl md:text-3xl mb-4 text-white">
                JOIN THE ADVENTURE TODAY
              </h2>
              
              <p className="text-lg text-foreground/80 mb-6">
                Ready to earn NFTs while playing Minecraft? Our luck-based drop system rewards mining valuable blocks and monster kills with NFTs ranging from Common to Legendary!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <div className="flex items-center bg-[#1A1F2C]/60 border-2 border-minecraft-dirt rounded-none px-4 py-2">
                    <span className="font-mono text-foreground/90">play.minepath.com</span>
                    <button 
                      onClick={copyServerAddress}
                      className="ml-2 p-1 hover:text-[#9b87f5] transition-colors"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
                
                <button className="minecraft-btn-green inline-flex items-center justify-center">
                  How to Connect <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <img 
                src="/images/minecraft-character.png" 
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
