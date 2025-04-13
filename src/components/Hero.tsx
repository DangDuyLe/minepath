
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="font-minecraft text-4xl md:text-6xl leading-tight max-w-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple via-solana-blue to-solana-green">
              BLOCKVERSE RAIDERS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium max-w-2xl text-foreground/90">
            Minecraft meets <span className="text-solana-purple">Solana</span>. Earn NFTs by playing, enhance your gameplay, and trade your rewards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-solana-purple hover:bg-solana-purple/90 text-white font-medium px-8">
              Play Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-solana-purple text-solana-purple hover:bg-solana-purple/10">
              Explore NFTs
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-12">
            <StatCard label="Active Players" value="5,000+" />
            <StatCard label="NFTs Minted" value="25,000+" />
            <StatCard label="Legendary Drops" value="127" />
            <StatCard label="SOL Volume" value="1,500+" />
          </div>
        </div>
      </div>
      
      {/* Floating NFT items */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-20 md:opacity-50 pointer-events-none">
        <div className="w-24 h-24 md:w-32 md:h-32 animate-float" style={{ animationDelay: '0s' }}>
          <img src="/images/diamond_sword.png" alt="Diamond Sword NFT" className="w-full h-full object-contain" />
        </div>
      </div>
      
      <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 opacity-20 md:opacity-50 pointer-events-none">
        <div className="w-24 h-24 md:w-32 md:h-32 animate-float" style={{ animationDelay: '1.5s' }}>
          <img src="/images/golden_apple.png" alt="Golden Apple NFT" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="font-minecraft text-2xl md:text-3xl text-solana-green">{value}</div>
      <div className="text-sm text-muted-foreground uppercase tracking-wide">{label}</div>
    </div>
  );
};

export default Hero;
