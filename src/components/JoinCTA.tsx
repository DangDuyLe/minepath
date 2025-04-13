
import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const JoinCTA = () => {
  const { toast } = useToast();
  
  const copyServerAddress = () => {
    navigator.clipboard.writeText('play.blockverseraiders.com');
    toast({
      title: "Server address copied!",
      description: "Ready to paste in your Minecraft client"
    });
  };
  
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-solana-purple/20 to-solana-green/20 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-card/90 backdrop-blur-md border border-solana-purple/30 rounded-xl p-8 md:p-12 shadow-xl shadow-solana-purple/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-minecraft text-2xl md:text-3xl mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-green to-solana-purple">
                  JOIN THE ADVENTURE TODAY
                </span>
              </h2>
              
              <p className="text-lg text-foreground/80 mb-6">
                Ready to earn NFTs while playing Minecraft? Join thousands of players on our server!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <div className="flex items-center bg-muted/30 border border-border rounded px-4 py-2">
                    <span className="font-mono text-foreground/90">play.blockverseraiders.com</span>
                    <button 
                      onClick={copyServerAddress}
                      className="ml-2 p-1 hover:text-solana-purple transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <Button className="bg-solana-green hover:bg-solana-green/90">
                  Connect Wallet <ArrowRight className="ml-2 h-4 w-4" />
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
