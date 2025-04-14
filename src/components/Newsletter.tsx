import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { MinecraftCard } from './ui/minecraft-card';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive server news and NFT drop notifications."
      });
      setEmail('');
      setLoading(false);
      setSubmitted(true);
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <section className="relative py-32 overflow-hidden minecraft-dirt-bg">
      {/* Background elements - more subtle */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/bg-glowstone.png')] bg-repeat"></div>
        
        {/* Minecraft particles - fewer, more subtle */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute pixelated w-1.5 h-1.5 bg-white opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-subtle ${8 + Math.random() * 10}s ease-in-out infinite ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating blocks - fewer, more elegant */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div
              key={`block-${i}`}
              className="absolute pixelated w-8 h-8"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundImage: `url('/images/${['gold', 'emerald'][Math.floor(Math.random() * 2)]}_block.png')`,
                backgroundSize: 'cover',
                transform: 'rotate(5deg)',
                opacity: 0.6,
                imageRendering: 'pixelated',
                animation: `float-subtle ${10 + Math.random() * 15}s ease-in-out infinite ${Math.random() * 7}s, rotate-slow ${30 + Math.random() * 20}s linear infinite ${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-black/40 backdrop-blur-md border border-solana-purple/30 p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-black/50 border border-solana-gold/30 mb-6 rounded-none"
                animate={{ 
                  boxShadow: ['0 0 0 rgba(255,215,0,0)', '0 0 20px rgba(255,215,0,0.3)', '0 0 0 rgba(255,215,0,0)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Mail className="h-8 w-8 text-minecraft-gold" />
              </motion.div>
              
              {/* Decorative Minecraft items */}
              <div className="flex justify-center gap-4 mb-6">
                <img src="/images/paper.png" alt="Paper" className="h-10 w-10 pixelated" />
                <img src="/images/book.png" alt="Book" className="h-10 w-10 pixelated" />
                <img src="/images/written_book.png" alt="Written Book" className="h-10 w-10 pixelated" />
              </div>
              
              <h2 className="font-minecraft text-3xl md:text-4xl mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-gold via-solana-gold to-solana-green">
                  JOIN THE MINEPATH COMMUNITY
                </span>
              </h2>
              
              <p className="text-lg text-white/90 mb-0 max-w-2xl mx-auto font-minecraft leading-relaxed">
                Subscribe to our newsletter for the latest server updates, NFT drops, and exclusive community events.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Input 
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-black/50 border border-solana-purple/30 focus-visible:ring-solana-gold/50 pl-4 h-12 pr-4 font-minecraft"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              
              <Button 
                type="submit" 
                className={`minecraft-btn-green h-12 min-w-[140px] ${submitted ? 'bg-minecraft-green hover:bg-minecraft-green/90' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center">
                    <span className="minecraft-loading mr-2"></span>
                    <span>Subscribing</span>
                  </span>
                ) : submitted ? (
                  <span className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    <span>Subscribed</span>
                  </span>
                ) : (
                  <span className="flex items-center">
                    <span>Subscribe</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
            
            <p className="text-sm text-white/50 mt-6 text-center font-minecraft">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
