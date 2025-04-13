
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
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
    }, 1000);
  };
  
  return (
    <section className="py-24 bg-gradient-to-b from-background via-solana-purple/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/images/bg-pattern.png')] bg-repeat"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-solana-purple/20 via-solana-blue/20 to-solana-green/20 mb-4">
            <div className="px-4 py-1 rounded-full bg-card/60 backdrop-blur-sm text-sm font-medium text-solana-purple">
              STAY CONNECTED
            </div>
          </div>
          
          <h2 className="font-minecraft text-3xl md:text-4xl mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-blue to-solana-green drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              JOIN THE MINEPATH COMMUNITY
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest server updates, NFT drops, and exclusive community events.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email"
              placeholder="Enter your email address"
              className="bg-background/50 backdrop-blur-sm border-solana-purple/30 focus-visible:ring-solana-purple/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <Button 
              type="submit" 
              className="bg-solana-purple hover:bg-solana-purple/90 text-white group"
              disabled={loading}
            >
              {loading ? "Subscribing..." : (
                <>
                  Subscribe <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
