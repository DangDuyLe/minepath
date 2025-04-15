
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alex_Miner",
    role: "Early Access Player",
    avatar: "/images/avatar1.png",
    quote: "MinePath revolutionized my Minecraft experience. The NFT drops while mining feel rewarding and exciting. It's like treasure hunting but with real value!",
    rating: 5,
  },
  {
    id: 2,
    name: "BlockQueen",
    role: "Guild Leader",
    avatar: "/images/avatar2.png",
    quote: "As a guild leader, MinePath offers amazing opportunities for community building. The tokenomics are well-balanced and the NFTs are genuinely useful in-game.",
    rating: 5,
  },
  {
    id: 3,
    name: "CryptoDigger",
    role: "Veteran Player",
    avatar: "/images/avatar3.png",
    quote: "I've played many blockchain games, but MinePath captures the Minecraft essence while adding meaningful Web3 elements. The server performance is also excellent.",
    rating: 4,
  }
];

const TestimonialSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('/public/lovable-uploads/8803d135-44be-4876-9f33-1154e36310a3.png')",
            filter: "brightness(0.25)",
            backgroundSize: "cover"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
        
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] bg-repeat opacity-10"></div>
        
        {/* Geometric patterns along left edge */}
        <div className="absolute left-0 inset-y-0 w-16 opacity-20">
          <div className="h-full w-full bg-[url('/public/lovable-uploads/571ce867-0253-4784-ba20-b363e73c1463.png')] bg-repeat-y"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mb-5">
            <div className="px-4 py-1 rounded-full bg-black/60 backdrop-blur-sm text-sm font-medium text-cyan-400">
              PLAYER TESTIMONIALS
            </div>
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-minecraft text-4xl md:text-5xl mb-6 text-white"
          >
            What Our Community <span className="text-cyan-400">Says</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Join thousands of players already experiencing the fusion of Minecraft gameplay with the earning potential of NFTs.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="glass-card h-full flex flex-col">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-3">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 pixelated"
            />
          </div>
          <div>
            <h3 className="font-minecraft text-lg text-cyan-400">{testimonial.name}</h3>
            <p className="text-sm text-white/60">{testimonial.role}</p>
          </div>
        </div>
        
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating ? "text-yellow-400" : "text-gray-500"
              }`}
              fill={i < testimonial.rating ? "currentColor" : "none"}
            />
          ))}
        </div>
        
        <div className="relative">
          <Quote className="absolute -top-2 -left-2 h-6 w-6 text-cyan-400/30" />
          <p className="text-white/80 text-sm leading-relaxed pt-2 pl-4">
            "{testimonial.quote}"
          </p>
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
      </div>
    </div>
  );
};

export default TestimonialSection;
