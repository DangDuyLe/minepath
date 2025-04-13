
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    text: "The NFT integration is genius! I earned a Rare 'Diamond Defender' after mining for a few hours and it's made combat so much easier.",
    author: "MinecraftPro123",
    role: "Player since 2023",
    avatar: "/images/avatar1.png"
  },
  {
    text: "I love how the NFTs feel balanced. They give you advantages without making the game too easy or unfair. The trading aspect adds a whole new dimension!",
    author: "BlockchainGamer",
    role: "Community Moderator",
    avatar: "/images/avatar2.png"
  },
  {
    text: "Just got my first Legendary NFT after weeks of playing! The 'Dragon's Breath' ability is absolutely worth the grind. Can't believe I own this!",
    author: "CryptoMiner42",
    role: "VIP Player",
    avatar: "/images/avatar3.png"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-solana-blue/10 via-transparent to-solana-purple/10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-solana-blue/20 via-solana-green/20 to-solana-purple/20 mb-4">
            <div className="px-4 py-1 rounded-full bg-card/60 backdrop-blur-sm text-sm font-medium text-solana-blue">
              COMMUNITY SPEAKS
            </div>
          </div>
          
          <h2 className="font-minecraft text-4xl md:text-5xl mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-blue drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              PLAYER TESTIMONIALS
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community has to say about their MinePath experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) => {
  return (
    <Card className="bg-card/30 backdrop-blur-sm border border-border/50 h-full hover:shadow-lg hover:shadow-solana-purple/10 transition-all duration-300 hover:transform hover:-translate-y-1 group">
      <CardContent className="p-6 flex flex-col h-full relative">
        <div className="absolute top-3 right-3 text-solana-purple opacity-20 group-hover:opacity-50 transition-opacity">
          <Quote className="h-10 w-10" />
        </div>
        
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-solana-purple text-solana-purple" />
          ))}
        </div>
        
        <p className="text-foreground/80 italic flex-grow relative z-10">
          "{testimonial.text}"
        </p>
        
        <div className="flex items-center mt-6 pt-4 border-t border-border/30">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-solana-purple/30">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.author} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <div className="font-medium text-white">{testimonial.author}</div>
            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialSection;
