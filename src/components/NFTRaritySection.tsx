
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Shield, Zap, Star, Crown, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const RARITY_TYPES = [
  {
    name: 'Common',
    className: 'rarity-common',
    icon: <Shield className="h-6 w-6" />,
    dropChance: '~1%',
    description: 'Basic boosts like a slight damage increase or minor defensive improvements.',
    examples: ['Stone Strength', 'Minor Speed', 'Small Defense']
  },
  {
    name: 'Uncommon',
    className: 'rarity-uncommon',
    icon: <Zap className="h-6 w-6" />,
    dropChance: '~0.5%',
    description: 'Enhanced health, minor lifesteal, or temporary offense/defense boosts.',
    examples: ['Iron Will', 'Forest Tracker', 'Cave Explorer']
  },
  {
    name: 'Rare',
    className: 'rarity-rare',
    icon: <Star className="h-6 w-6" />,
    dropChance: '~0.1%',
    description: 'Significant combat improvements, meaningful utility buffs, and unique effects.',
    examples: ['Diamond Defender', 'Emerald Efficiency', 'Redstone Master']
  },
  {
    name: 'Epic',
    className: 'rarity-epic',
    icon: <Award className="h-6 w-6" />,
    dropChance: '~0.02%',
    description: 'Powerful abilities, major buffs, and game-changing temporary effects.',
    examples: ['Void Walker', 'Thunder Strike', 'Nether Immunity']
  },
  {
    name: 'Legendary',
    className: 'rarity-legendary glow-effect',
    icon: <Crown className="h-6 w-6" />,
    dropChance: '~0.01%',
    description: 'Extraordinary powers like massive damage boosts or temporary invulnerability.',
    examples: ['Dragon\'s Breath', 'Ancient Guardian', 'Wither\'s Curse']
  }
];

const NFTRaritySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-solana-purple/10 via-transparent to-solana-blue/10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-solana-purple/20 via-solana-blue/20 to-solana-green/20 mb-4">
            <div className="px-4 py-1 rounded-full bg-card/60 backdrop-blur-sm text-sm font-medium text-solana-purple">
              NFT RARITIES
            </div>
          </div>
          
          <h2 className="font-minecraft text-4xl md:text-5xl mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-green drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              DISCOVER THE POWER TIERS
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore the different NFT rarities in MinePath and their unique powers and abilities that will transform your gameplay experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {RARITY_TYPES.map((rarity) => (
            <RarityCard key={rarity.name} rarity={rarity} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/nfts" 
            className="inline-flex items-center text-solana-purple hover:text-solana-blue transition-colors font-medium group"
          >
            Browse the complete NFT catalog <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const RarityCard = ({ rarity }: { rarity: typeof RARITY_TYPES[0] }) => {
  return (
    <Card className={`overflow-hidden border-2 ${rarity.className} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-${rarity.className}/20 bg-card/50 backdrop-blur-sm`}>
      <CardContent className="p-6">
        <div className={`flex items-center justify-center mb-6 w-14 h-14 mx-auto rounded-full ${rarity.className === 'rarity-legendary' ? 'bg-gradient-to-br from-yellow-500 to-amber-700' : 'bg-gradient-to-br from-muted/30 to-muted/10'} border-2 ${rarity.className}`}>
          <div className={`${rarity.className}`}>
            {rarity.icon}
          </div>
        </div>
        
        <h3 className={`font-minecraft text-xl text-center mb-2 ${rarity.className}`}>
          {rarity.name}
        </h3>
        
        <div className="text-sm text-center mb-4 text-muted-foreground">
          Drop Chance: <span className={`font-semibold ${rarity.className}`}>{rarity.dropChance}</span>
        </div>
        
        <p className="text-sm text-foreground/80 mb-4 text-center">
          {rarity.description}
        </p>
        
        <div className="mt-4 bg-background/30 backdrop-blur-sm rounded-md p-3">
          <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2 font-semibold text-center">Examples:</div>
          <ul className="text-sm space-y-1">
            {rarity.examples.map((example, index) => (
              <li key={index} className="text-foreground/80 flex items-center">
                <span className={`mr-2 text-xs ${rarity.className}`}>•</span> 
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NFTRaritySection;
