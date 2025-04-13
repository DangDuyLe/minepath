
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RARITY_TYPES = [
  {
    name: 'Common',
    className: 'rarity-common',
    icon: '/images/common_icon.png',
    dropChance: '~1%',
    description: 'Basic boosts like a slight damage increase or minor defensive improvements.',
    examples: ['Stone Strength', 'Minor Speed', 'Small Defense']
  },
  {
    name: 'Uncommon',
    className: 'rarity-uncommon',
    icon: '/images/uncommon_icon.png',
    dropChance: '~0.5%',
    description: 'Enhanced health, minor lifesteal, or temporary offense/defense boosts.',
    examples: ['Iron Will', 'Forest Tracker', 'Cave Explorer']
  },
  {
    name: 'Rare',
    className: 'rarity-rare',
    icon: '/images/rare_icon.png',
    dropChance: '~0.1%',
    description: 'Significant combat improvements, meaningful utility buffs, and unique effects.',
    examples: ['Diamond Defender', 'Emerald Efficiency', 'Redstone Master']
  },
  {
    name: 'Epic',
    className: 'rarity-epic',
    icon: '/images/epic_icon.png',
    dropChance: '~0.02%',
    description: 'Powerful abilities, major buffs, and game-changing temporary effects.',
    examples: ['Void Walker', 'Thunder Strike', 'Nether Immunity']
  },
  {
    name: 'Legendary',
    className: 'rarity-legendary glow-effect',
    icon: '/images/legendary_icon.png',
    dropChance: '~0.01%',
    description: 'Extraordinary powers like massive damage boosts or temporary invulnerability.',
    examples: ['Dragon\'s Breath', 'Ancient Guardian', 'Wither\'s Curse']
  }
];

const NFTRaritySection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background/0 via-muted/20 to-background/0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-minecraft text-3xl md:text-4xl mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-green">
              NFT RARITIES
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the different NFT rarities in BlockVerse Raiders and their unique powers and abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {RARITY_TYPES.map((rarity) => (
            <RarityCard key={rarity.name} rarity={rarity} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/nfts" 
            className="inline-flex items-center text-solana-purple hover:text-solana-blue transition-colors font-medium"
          >
            Browse the complete NFT catalog <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const RarityCard = ({ rarity }: { rarity: typeof RARITY_TYPES[0] }) => {
  return (
    <Card className={`overflow-hidden border-2 ${rarity.className} transition-transform hover:scale-105 bg-card/70 backdrop-blur-sm`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-center mb-4">
          <img src={rarity.icon} alt={`${rarity.name} icon`} className="w-12 h-12 object-contain" />
        </div>
        
        <h3 className={`font-minecraft text-xl text-center mb-2 ${rarity.className}`}>
          {rarity.name}
        </h3>
        
        <div className="text-sm text-center mb-4 text-muted-foreground">
          Drop Chance: <span className={`font-semibold ${rarity.className}`}>{rarity.dropChance}</span>
        </div>
        
        <p className="text-sm text-foreground/80 mb-4">
          {rarity.description}
        </p>
        
        <div className="mt-4">
          <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Examples:</div>
          <ul className="text-sm space-y-1">
            {rarity.examples.map((example, index) => (
              <li key={index} className="text-foreground/80">• {example}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NFTRaritySection;
