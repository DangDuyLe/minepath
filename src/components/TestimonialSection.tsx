import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { MinecraftCard } from './ui/minecraft-card';

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
    <section className="relative py-24 overflow-hidden minecraft-dirt-bg">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/images/bg-pattern.png')] bg-repeat"></div>
        
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
          <div className="inline-block p-1.5 rounded-none bg-gradient-to-r from-solana-blue/20 via-solana-green/20 to-solana-purple/20 mb-4 border-2 border-minecraft-dirt">
            <div className="px-4 py-1 bg-black/60 backdrop-blur-sm text-sm font-minecraft text-solana-blue">
              COMMUNITY SPEAKS
            </div>
          </div>
          
          <h2 className="font-minecraft text-4xl md:text-5xl mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-blue drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              PLAYER TESTIMONIALS
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-minecraft">
            Don't just take our word for it. Here's what our community has to say about their MinePath experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} variant={index === 0 ? 'dirt' : index === 1 ? 'stone' : 'planks'} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: typeof TESTIMONIALS[0];
  variant: 'dirt' | 'stone' | 'planks';
}

const TestimonialCard = ({ testimonial, variant }: TestimonialCardProps) => {
  return (
    <MinecraftCard 
      variant={variant}
      bordered={true}
      className="p-6 h-full transition-all duration-300 hover:transform hover:-translate-y-1"
    >
      <div className="absolute top-3 right-3 text-solana-purple opacity-20 group-hover:opacity-50 transition-opacity">
        <Quote className="h-10 w-10" />
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-solana-purple text-solana-purple" />
        ))}
      </div>
      
      <p className="text-white font-minecraft italic flex-grow relative z-10 mb-4">
        "{testimonial.text}"
      </p>
      
      <div className="flex items-center mt-6 pt-4 border-t-2 border-white/20">
        <div className="w-12 h-12 overflow-hidden mr-4 border-2 border-minecraft-gold minecraft-container">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.author} 
            className="w-full h-full object-cover pixelated" 
          />
        </div>
        <div>
          <div className="font-minecraft text-minecraft-gold">{testimonial.author}</div>
          <div className="text-sm text-white/70 font-minecraft">{testimonial.role}</div>
        </div>
      </div>
    </MinecraftCard>
  );
};

export default TestimonialSection;
