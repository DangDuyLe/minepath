import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Twitter, 
  Zap,
  ArrowRight,
  MessageSquare 
} from 'lucide-react';

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li className="mb-2.5">
    <Link to={href} className="text-foreground/60 hover:text-white transition-colors text-sm">
      {text}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-background/60 backdrop-blur-md border-t border-solana-purple/10 pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="block mb-6">
              <img src="/images/minecraft-logo.png" alt="MinePath" className="h-8 w-auto mb-2" />
              <h3 className="font-minecraft text-xl text-gradient bg-solana-gradient bg-clip-text text-transparent">
                BLOCKVERSE RAIDERS
              </h3>
            </Link>
            <p className="text-sm text-foreground/60 mb-6">
              Building the future of Minecraft gameplay with Solana blockchain integration.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-solana-purple/10 hover:bg-solana-purple/20 flex items-center justify-center transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-solana-purple/10 hover:bg-solana-purple/20 flex items-center justify-center transition-colors"
              >
                <MessageSquare size={16} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-solana-purple/10 hover:bg-solana-purple/20 flex items-center justify-center transition-colors"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-medium text-lg mb-4">QUICK LINKS</h4>
            <ul>
              <FooterLink href="/" text="Home" />
              <FooterLink href="/nfts" text="NFT Catalog" />
              <FooterLink href="/how-to-play" text="How to Play" />
              <FooterLink href="/store" text="Store" />
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-medium text-lg mb-4">RESOURCES</h4>
            <ul>
              <FooterLink href="/wiki" text="Wiki" />
              <FooterLink href="/gallery" text="NFT Gallery" />
              <FooterLink href="/roadmap" text="Roadmap" />
              <FooterLink href="/support" text="Support" />
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-medium text-lg mb-4">PLAY NOW</h4>
            <div className="bg-card/40 backdrop-blur-sm rounded-lg p-5 border border-solana-purple/10">
              <p className="text-sm text-foreground/70 mb-3">
                Connect to our Minecraft server 
              </p>
              <div className="bg-background/50 border border-solana-purple/20 px-3 py-2 rounded mb-3 flex items-center justify-between">
                <span className="font-mono text-sm">play.blockverse.com</span>
                <Zap className="h-4 w-4 text-solana-purple" />
              </div>
              <button className="w-full bg-solana-purple hover:bg-solana-purple/90 text-white py-2 rounded flex items-center justify-center text-sm">
                Join Discord <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-solana-purple/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-foreground/50">
            © 2025 BlockVerse Raiders. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="/privacy" className="text-xs text-foreground/50 hover:text-foreground/80 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-foreground/50 hover:text-foreground/80 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
