
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Twitter, 
  Youtube, 
  ArrowRight,
  MessageSquare 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-solana-black/80 border-t border-solana-purple/30 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="block mb-4">
              <h3 className="font-minecraft text-xl text-gradient bg-solana-gradient bg-clip-text text-transparent">
                MinePath
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Experience Minecraft like never before with Solana NFTs that enhance gameplay and can be traded!
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://discord.gg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted/30 hover:bg-muted/50 p-2 rounded-full transition-colors"
                aria-label="Discord"
              >
                <MessageSquare size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted/30 hover:bg-muted/50 p-2 rounded-full transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted/30 hover:bg-muted/50 p-2 rounded-full transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted/30 hover:bg-muted/50 p-2 rounded-full transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-minecraft text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/nfts" text="NFT Catalog" />
              <FooterLink href="/how-to-play" text="How to Play" />
              <FooterLink href="/store" text="Store" />
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-minecraft text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="/wiki" text="Wiki" />
              <FooterLink href="/gallery" text="NFT Gallery" />
              <FooterLink href="/roadmap" text="Roadmap" />
              <FooterLink href="/support" text="Support" />
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-minecraft text-lg mb-4">Join our community</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated on server news, NFT drops, and events.
            </p>
            <Button className="inline-flex items-center bg-solana-purple hover:bg-solana-purple/90">
              Join Discord <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-muted/30 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 MinePath. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <li>
      <Link to={href} className="text-muted-foreground hover:text-white transition-colors text-sm">
        {text}
      </Link>
    </li>
  );
};

export default Footer;
