import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-solana-purple/10 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/images/minecraft-logo.png" alt="MinePath" className="h-9 w-auto mr-2 pixelated" />
              <span className="font-minecraft text-2xl text-gradient bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                MinePath
              </span>
            </Link>
            <div className="hidden md:block ml-12">
              <div className="flex items-center space-x-6">
                <Link 
                  to="/" 
                  className={`font-medium text-sm ${location.pathname === '/' ? 'text-solana-purple' : 'text-foreground/80 hover:text-white'} transition-colors`}
                >
                  HOME
                </Link>
                <Link 
                  to="/nfts" 
                  className={`font-medium text-sm ${location.pathname === '/nfts' ? 'text-solana-purple' : 'text-foreground/80 hover:text-white'} transition-colors`}
                >
                  NFT CATALOG
                </Link>
                <Link 
                  to="/how-to-play" 
                  className={`font-medium text-sm ${location.pathname === '/how-to-play' ? 'text-solana-purple' : 'text-foreground/80 hover:text-white'} transition-colors`}
                >
                  HOW TO PLAY
                </Link>
                <div className="relative group">
                  <button className="font-medium text-sm text-foreground/80 hover:text-white transition-colors flex items-center">
                    RESOURCES <ChevronDown className="ml-1 h-3 w-3 opacity-70 group-hover:opacity-100" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-solana-purple/20 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                    <div className="py-2">
                      <Link to="/discord" className="block px-4 py-2 text-sm text-foreground/80 hover:text-solana-purple hover:bg-solana-purple/5 transition-colors">
                        Discord
                      </Link>
                      <Link to="/wiki" className="block px-4 py-2 text-sm text-foreground/80 hover:text-solana-purple hover:bg-solana-purple/5 transition-colors">
                        Wiki
                      </Link>
                      <Link to="/gallery" className="block px-4 py-2 text-sm text-foreground/80 hover:text-solana-purple hover:bg-solana-purple/5 transition-colors">
                        NFT Gallery
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/store">
              <Button variant="outline" className="border-solana-blue/50 text-solana-blue hover:bg-solana-blue/10 text-sm font-medium px-5 rounded">
                STORE
              </Button>
            </Link>
            <Button className="bg-solana-purple hover:bg-solana-purple/90 text-white text-sm font-medium px-5 rounded shadow-md shadow-solana-purple/20">
              GET STARTED
            </Button>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-foreground/90 hover:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-solana-purple/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className={`block px-3 py-2 text-base font-medium ${location.pathname === '/' ? 'text-solana-purple' : 'text-foreground/80 hover:text-white'} transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/nfts" 
              className={`block px-3 py-2 text-base font-medium ${location.pathname === '/nfts' ? 'text-solana-purple' : 'text-foreground/80 hover:text-white'} transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              NFT Catalog
            </Link>
            <Link 
              to="/how-to-play" 
              className={`block px-3 py-2 text-base font-medium ${location.pathname === '/how-to-play' ? 'text-solana-purple' : 'text-foreground/80 hover:text-white'} transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              How to Play
            </Link>
            <Link 
              to="/discord" 
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Discord
            </Link>
            <Link 
              to="/wiki" 
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Wiki
            </Link>
            <Link 
              to="/gallery" 
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              NFT Gallery
            </Link>
            <div className="pt-4 pb-2 flex flex-col space-y-3">
              <Link 
                to="/store" 
                className="block px-3 py-2 text-center border border-solana-blue/50 text-solana-blue rounded"
                onClick={() => setIsOpen(false)}
              >
                Store
              </Link>
              <Link 
                to="/get-started" 
                className="block px-3 py-2 text-center bg-solana-purple text-white rounded"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
