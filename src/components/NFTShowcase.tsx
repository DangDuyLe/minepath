import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EyeIcon, Sparkles } from 'lucide-react';

const FEATURED_NFTS = [
  {
    id: 1,
    name: "Dragon's Breath",
    image: "/images/dragons_breath.png",
    rarity: "legendary",
    description: "Unleashes a powerful flame attack that damages all enemies in front of you.",
    attributes: [
      { trait: "Damage", value: "+150%" },
      { trait: "Area Effect", value: "5 blocks" },
      { trait: "Cooldown", value: "60s" }
    ]
  },
  {
    id: 2,
    name: "Diamond Defender",
    image: "/images/diamond_defender.png",
    rarity: "rare",
    description: "Creates a temporary shield that absorbs damage from attacks.",
    attributes: [
      { trait: "Defense", value: "+40%" },
      { trait: "Duration", value: "15s" },
      { trait: "Cooldown", value: "45s" }
    ]
  },
  {
    id: 3,
    name: "Void Walker",
    image: "/images/void_walker.png",
    rarity: "epic",
    description: "Grants temporary invisibility and increased movement speed.",
    attributes: [
      { trait: "Speed", value: "+60%" },
      { trait: "Duration", value: "10s" },
      { trait: "Cooldown", value: "90s" }
    ]
  }
];

const NFTShowcase = () => {
  return (
    <section className="relative py-24 overflow-hidden minecraft-dirt-bg">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/images/bg-endstone.png')] bg-repeat"></div>
        
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
        <div className="text-center mb-16">
          <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-solana-blue/20 via-solana-purple/20 to-solana-green/20 mb-4">
            <div className="px-4 py-1 rounded-full bg-card/60 backdrop-blur-sm text-sm font-medium text-solana-blue">
              FEATURED NFTs
            </div>
          </div>
          
          <h2 className="font-minecraft text-4xl md:text-5xl mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-blue to-solana-green drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              POWER UP YOUR GAMEPLAY
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover these powerful NFTs that can be earned in-game through mining, combat, and PvP. Drop chances range from Common (1%) to Legendary (0.01%) based on rarity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {FEATURED_NFTS.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-solana-purple text-solana-purple hover:bg-solana-purple/10 group"
          >
            View All NFTs <EyeIcon className="ml-2 h-4 w-4 group-hover:animate-pulse" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const NFTCard = ({ nft }: { nft: typeof FEATURED_NFTS[0] }) => {
  const rarityClass = `rarity-${nft.rarity}`;
  
  return (
    <div className="group">
      <div className="relative overflow-hidden minecraft-container transition-all duration-300 group-hover:translate-y-[-4px]">
        <div className={`absolute top-2 right-2 z-10 px-2 py-1 font-minecraft text-xs ${rarityClass} bg-black/50 backdrop-blur-sm`}>
          {nft.rarity.toUpperCase()}
        </div>
        
        <div className="relative h-64 overflow-hidden bg-theme-darker">
          <img 
            src={nft.image} 
            alt={nft.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 pixelated"
          />
        </div>
        
        <div className="p-4">
          <h3 className={`font-minecraft text-xl mb-2 ${rarityClass}`}>{nft.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{nft.description}</p>
          
          <div className="flex justify-between items-center">
            <button className="minecraft-btn-purple text-sm px-3 py-1">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTShowcase;
