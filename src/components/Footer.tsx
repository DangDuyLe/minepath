
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Zap, ArrowRight, MessageSquare } from 'lucide-react';

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li className="mb-2.5">
    <Link to={href} className="text-white hover:text-minecraft-green transition-colors text-sm font-minecraft">
      {text}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className=" border-t-4 border-minecraft-dirt pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="block mb-6">
              <img src="/images/minecraft-logo.png" alt="MinePath" className="h-8 w-auto mb-2 pixelated" />
              <h3 className="font-minecraft text-xl text-minecraft-green">
                MinePath
              </h3>
            </Link>
            <p className="text-sm text-white mb-6 font-minecraft">
              Building the future of Minecraft gameplay with Solana blockchain integration.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 minecraft-btn bg-minecraft-stone text-white flex items-center justify-center"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 minecraft-btn bg-minecraft-stone text-white flex items-center justify-center"
              >
                <MessageSquare size={16} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 minecraft-btn bg-minecraft-stone text-white flex items-center justify-center"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-minecraft text-lg mb-4 text-minecraft-gold">QUICK LINKS</h4>
            <ul>
              <FooterLink href="/" text="Home" />
              <FooterLink href="/nfts" text="NFT Catalog" />
              <FooterLink href="/how-to-play" text="How to Play" />
              <FooterLink href="/store" text="Store" />
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-minecraft text-lg mb-4 text-minecraft-gold">RESOURCES</h4>
            <ul>
              <FooterLink href="/wiki" text="Wiki" />
              <FooterLink href="/gallery" text="NFT Gallery" />
              <FooterLink href="/roadmap" text="Roadmap" />
              <FooterLink href="/support" text="Support" />
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-minecraft text-lg mb-4 text-minecraft-gold">PLAY NOW</h4>
            <div className="minecraft-panel p-5">
              <p className="text-sm text-black mb-3 font-minecraft">
                Connect to our Minecraft server 
              </p>
              <div className="bg-black/50 border-2 border-minecraft-dirt px-3 py-2 mb-3 flex items-center justify-between">
                <span className="font-minecraft text-sm text-white">play.minepath.com</span>
                <Zap className="h-4 w-4 text-minecraft-green" />
              </div>
              <button className="w-full minecraft-btn-green flex items-center justify-center text-sm">
                Join Discord <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t-4 border-minecraft-dirt mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white font-minecraft">
            © 2025 MinePath. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="/privacy" className="text-xs text-white hover:text-minecraft-green transition-colors font-minecraft">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-white hover:text-minecraft-green transition-colors font-minecraft">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
