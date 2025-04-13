
import React from 'react';
import { Shield, Sword, Gem, ArrowUpRight, Zap, Users, Clock, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FEATURES = [
  {
    title: 'Direct NFT Drops',
    description: 'Earn NFTs by killing mobs, mining valuable blocks, or winning PvP battles.',
    icon: <Gem className="h-8 w-8 text-solana-purple" />
  },
  {
    title: 'Combat Enhancements',
    description: 'NFTs boost your damage, defense, or provide special combat abilities.',
    icon: <Sword className="h-8 w-8 text-solana-green" />
  },
  {
    title: 'Support & Utility',
    description: 'Gain movement speed, mining buffs, XP boosts, and special abilities.',
    icon: <Zap className="h-8 w-8 text-solana-blue" />
  },
  {
    title: 'Balanced PvP',
    description: 'Fair gameplay with protections against spawn camping and kill trading.',
    icon: <Shield className="h-8 w-8 text-rarity-epic" />
  },
  {
    title: 'Team Play',
    description: 'Some NFTs provide auras that boost nearby friendly players with collective buffs.',
    icon: <Users className="h-8 w-8 text-rarity-rare" />
  },
  {
    title: 'Progression System',
    description: 'Earn more valuable NFTs as you advance and master the game.',
    icon: <ArrowUpRight className="h-8 w-8 text-rarity-uncommon" />
  },
  {
    title: 'Anti-Abuse Safeguards',
    description: 'Cooldowns, diminishing returns, and protection systems prevent farming abuse.',
    icon: <Clock className="h-8 w-8 text-rarity-common" />
  },
  {
    title: 'Cosmetic Effects',
    description: 'Show off with colored name tags, particle trails, and unique visual effects.',
    icon: <Award className="h-8 w-8 text-rarity-legendary" />
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-minecraft text-3xl md:text-4xl mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-blue to-solana-green">
              SERVER FEATURES
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our server combines the best of Minecraft gameplay with Solana NFT technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }: { feature: typeof FEATURES[0] }) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors border border-border/50 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 p-3 bg-muted/20 rounded-xl w-fit">
          {feature.icon}
        </div>
        
        <h3 className="font-minecraft text-lg mb-2">{feature.title}</h3>
        
        <p className="text-sm text-foreground/80">
          {feature.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeaturesSection;
