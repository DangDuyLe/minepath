
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

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
    <section className="py-16 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-minecraft text-3xl md:text-4xl mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-blue">
              PLAYER TESTIMONIALS
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community has to say.
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
    <Card className="bg-card/50 backdrop-blur-sm border border-border/50 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-solana-purple text-solana-purple" />
          ))}
        </div>
        
        <p className="text-foreground/80 italic flex-grow">
          "{testimonial.text}"
        </p>
        
        <div className="flex items-center mt-6">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.author} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <div className="font-medium">{testimonial.author}</div>
            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialSection;
