
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EyeIcon } from 'lucide-react';

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
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-minecraft text-3xl md:text-4xl mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-blue to-solana-green">
              FEATURED NFTs
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out these powerful NFTs that can be earned in the BlockVerse Raiders server.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_NFTS.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-solana-purple text-solana-purple hover:bg-solana-purple/10">
            View All NFTs <EyeIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const NFTCard = ({ nft }: { nft: typeof FEATURED_NFTS[0] }) => {
  const rarityClass = `rarity-${nft.rarity}`;
  
  return (
    <Card className={`overflow-hidden border-2 ${rarityClass} ${nft.rarity === 'legendary' ? 'animate-pulse-glow' : ''} bg-card/70 backdrop-blur-sm`}>
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={nft.image} 
          alt={nft.name}
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-500" 
        />
        <Badge className={`absolute top-3 right-3 ${rarityClass} bg-background/80`}>
          {nft.rarity.charAt(0).toUpperCase() + nft.rarity.slice(1)}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className={`font-minecraft text-xl mb-2 ${rarityClass}`}>
          {nft.name}
        </h3>
        
        <p className="text-sm text-foreground/80 mb-4">
          {nft.description}
        </p>
        
        <div className="border-t border-border/50 pt-4 mt-4">
          <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Attributes:</div>
          <div className="grid grid-cols-3 gap-2">
            {nft.attributes.map((attr, index) => (
              <div key={index} className="bg-muted/20 p-2 rounded-md text-center">
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
