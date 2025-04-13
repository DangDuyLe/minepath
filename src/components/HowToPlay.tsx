
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Join the Server',
    description: 'Connect to our Minecraft server using the IP address play.minepath.com'
  },
  {
    number: '02',
    title: 'Link Your Wallet',
    description: 'Connect your Solana wallet to your Minecraft account using our simple in-game command'
  },
  {
    number: '03',
    title: 'Play & Earn',
    description: 'Start playing normally! You\'ll earn NFT drops from mining, fighting mobs, or PvP'
  },
  {
    number: '04',
    title: 'Use Your NFTs',
    description: 'Equip your NFTs in-game to gain special powers and abilities'
  },
  {
    number: '05',
    title: 'Utilize Your NFTs',
    description: 'Trade, sell, or use your NFTs in the game to enhance your experience'
  }
];

const HowToPlay = () => {
  return (
    <section className="py-16 bg-solana-black/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="font-minecraft text-3xl md:text-4xl mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-blue">
                HOW TO PLAY
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Getting started with MinePath is easy. Follow these simple steps to begin your adventure.
            </p>
            
            <div className="space-y-8">
              {STEPS.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="font-minecraft text-3xl text-solana-purple opacity-70">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-minecraft text-lg mb-1">{step.title}</h3>
                    <p className="text-sm text-foreground/80">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="bg-solana-purple hover:bg-solana-purple/90">
                Read Full Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden border-2 border-solana-purple/30 shadow-lg shadow-solana-purple/10">
              <img 
                src="/images/gameplay.png" 
                alt="Gameplay screenshot" 
                className="w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
