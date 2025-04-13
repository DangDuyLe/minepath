
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-solana-purple/5 via-solana-blue/10 to-background/95 z-0"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('/images/bg-pattern.png')] bg-repeat z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-solana-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-solana-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-card/30 backdrop-blur-lg border border-solana-purple/20 rounded-xl p-8 md:p-12 shadow-xl shadow-solana-purple/5">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-solana-purple/10 mb-6">
                <Mail className="h-8 w-8 text-solana-purple" />
              </div>
              
              <h2 className="font-minecraft text-3xl md:text-4xl mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-blue to-solana-green drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  JOIN THE MINEPATH COMMUNITY
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-0 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest server updates, NFT drops, and exclusive community events.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Input 
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-background/70 backdrop-blur-sm border-solana-purple/30 focus-visible:ring-solana-purple/50 pl-4 h-12 pr-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              
              <Button 
                type="submit" 
                className={`bg-solana-purple hover:bg-solana-purple/90 text-white group h-12 min-w-[140px] ${submitted ? 'bg-solana-green hover:bg-solana-green/90' : ''}`}
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
            
            <p className="text-sm text-muted-foreground mt-6 text-center">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
