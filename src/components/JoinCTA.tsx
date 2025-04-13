
import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/20 to-[#1EAEDB]/20 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="neo-blur p-8 md:p-12 shadow-xl shadow-[#9b87f5]/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-minecraft text-2xl md:text-3xl mb-4">
                <span className="text-gradient">
                  JOIN THE ADVENTURE TODAY
                </span>
              </h2>
              
              <p className="text-lg text-foreground/80 mb-6">
                Ready to earn NFTs while playing Minecraft? Join thousands of players on our server!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <div className="flex items-center bg-[#1A1F2C]/60 border border-[#2A2F3C] rounded px-4 py-2">
                    <span className="font-mono text-foreground/90">play.minepath.com</span>
                    <button 
                      onClick={copyServerAddress}
                      className="ml-2 p-1 hover:text-[#9b87f5] transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <img 
                src="/images/minecraft_character.png" 
                alt="Minecraft character" 
                className="w-32 h-32 md:w-48 md:h-48 object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
