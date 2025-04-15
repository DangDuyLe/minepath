
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
    <section className="relative py-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('/public/lovable-uploads/93a3ca40-773c-46b3-a9ed-3d3cc2c433de.png')",
            filter: "brightness(0.4)",
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
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-black/60 backdrop-blur-md border border-cyan-400/30 p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-black/50 border border-cyan-400/30 mb-6"
                animate={{ 
                  boxShadow: ['0 0 0 rgba(0,195,255,0)', '0 0 20px rgba(0,195,255,0.3)', '0 0 0 rgba(0,195,255,0)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Mail className="h-8 w-8 text-cyan-400" />
              </motion.div>
              
              <h2 className="font-minecraft text-3xl md:text-4xl mb-4 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
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
                  className="bg-black/50 border border-cyan-400/30 focus-visible:ring-cyan-400/50 pl-4 h-12 pr-4 font-minecraft text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              
              <button 
                type="submit" 
                className={`play-now-btn relative px-6 py-2 bg-black text-white font-minecraft tracking-wider hover:scale-105 transition-all duration-300 overflow-hidden group border border-cyan-400/50 h-12 min-w-[140px] ${submitted ? 'border-green-500/50' : ''}`}
                disabled={loading}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {loading ? (
                    <>
                      <span className="minecraft-loading mr-2"></span>
                      <span>Subscribing</span>
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-green-500">Subscribed</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
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
