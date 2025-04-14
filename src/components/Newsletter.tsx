
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
    <section className="py-32 relative overflow-hidden minecraft-wood-bg">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#9b87f5]/5 via-[#1EAEDB]/10 to-background/95 z-0"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('/images/bg-pattern.png')] bg-repeat z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#9b87f5]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1EAEDB]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <MinecraftCard variant="planks" bordered className="p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 minecraft-container mb-6 border-minecraft-gold">
                <Mail className="h-8 w-8 text-minecraft-gold" />
              </div>
              
              <h2 className="font-minecraft text-3xl md:text-4xl mb-4 text-minecraft-gold">
                JOIN THE MINEPATH COMMUNITY
              </h2>
              
              <p className="text-lg text-white mb-0 max-w-2xl mx-auto font-minecraft">
                Subscribe to our newsletter for the latest server updates, NFT drops, and exclusive community events.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Input 
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-black/70 border-2 border-minecraft-dirt focus-visible:ring-minecraft-gold/50 pl-4 h-12 pr-4 font-minecraft"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
                {/* Minecraft-style corner pixels */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-white/10"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-black/20"></div>
              </div>
              
              <Button 
                type="submit" 
                className={`minecraft-btn-green h-12 min-w-[140px] ${submitted ? 'bg-minecraft-green hover:bg-minecraft-green/90' : ''}`}
                disabled={loading}
              >
                {loading ? "Subscribing..." : submitted ? (
                  <>
                    Subscribed <CheckCircle2 className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
            
            <p className="text-sm text-white/70 mt-6 text-center font-minecraft">
              We respect your privacy and will never share your information.
            </p>
          </MinecraftCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
