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

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li className="mb-1">
    <Link to={href} className="text-muted-foreground hover:text-white transition-colors flex items-center">
      <span className="mr-1 text-solana-green">▶</span> {text}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className="minecraft-stone-bg border-t-4 border-minecraft-dirt pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="block mb-4">
              <img src="/images/minecraft-logo.png" alt="MinePath" className="h-8 w-auto mr-2 mb-2 pixelated" />
              <h3 className="font-minecraft text-xl text-gradient bg-solana-gradient bg-clip-text text-transparent">
                MinePath
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Experience Minecraft with our unique NFT drop system! Earn blockchain items through gameplay with drop chances from 1% for Common to 0.01% for Legendary items.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted/30 hover:bg-muted/50 p-2 rounded-none border border-minecraft-dirt transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted/30 hover:bg-muted/50 p-2 rounded-none border border-minecraft-dirt transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted/30 hover:bg-muted/50 p-2 rounded-none border border-minecraft-dirt transition-colors"
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
            <button className="minecraft-btn-purple inline-flex items-center">
              Join Discord <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-muted/30 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground font-minecraft">
            © 2025 MinePath. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 md:mt-0">
            Not affiliated with Mojang Studios or Microsoft
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
