
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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-solana-purple/10 via-transparent to-solana-green/10"></div>
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
            Discover these powerful NFTs that can be earned in the MinePath server to enhance your abilities and transform your gameplay experience.
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
    <Card className={`overflow-hidden border-2 ${rarityClass} bg-card/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 group relative`}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-transparent via-transparent to-solana-purple/20 transition-opacity duration-500"></div>
      
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={nft.image} 
          alt={nft.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" 
        />
        <Badge className={`absolute top-3 right-3 ${rarityClass} bg-background/80 backdrop-blur-sm flex items-center gap-1`}>
          {nft.rarity === 'legendary' && <Sparkles className="h-3 w-3" />}
          {nft.rarity.charAt(0).toUpperCase() + nft.rarity.slice(1)}
        </Badge>
      </div>
      
      <CardContent className="p-6 relative">
        <h3 className={`font-minecraft text-xl mb-2 ${rarityClass} flex items-center gap-2`}>
          {nft.name}
          {nft.rarity === 'legendary' && (
            <span className="animate-pulse-glow inline-flex">
              <Sparkles className="h-4 w-4" />
            </span>
          )}
        </h3>
        
        <p className="text-sm text-foreground/80 mb-4">
          {nft.description}
        </p>
        
        <div className="border-t border-border/50 pt-4 mt-4">
          <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2 font-semibold">Attributes:</div>
          <div className="grid grid-cols-3 gap-2">
            {nft.attributes.map((attr, index) => (
              <div key={index} className="bg-muted/20 p-2 rounded-md text-center hover:bg-muted/30 transition-colors">
                <div className="text-xs text-muted-foreground">{attr.trait}</div>
                <div className="text-sm font-semibold">{attr.value}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NFTShowcase;
