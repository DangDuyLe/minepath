
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'minecraft-wood-bg py-2' : 'minecraft-dirt-bg py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/images/minecraft-logo.png" alt="MinePath" className="h-9 w-auto mr-2 pixelated" />
              <span className="font-minecraft text-2xl text-minecraft-green">
                MinePath
              </span>
            </Link>
            <div className="hidden md:block ml-12">
              <div className="flex items-center space-x-6">
                <Link 
                  to="/" 
                  className={`font-minecraft text-sm ${location.pathname === '/' ? 'text-minecraft-gold' : 'text-white hover:text-minecraft-green'} transition-colors`}
                >
                  HOME
                </Link>
                <Link 
                  to="/nfts" 
                  className={`font-minecraft text-sm ${location.pathname === '/nfts' ? 'text-minecraft-gold' : 'text-white hover:text-minecraft-green'} transition-colors`}
                >
                  NFT CATALOG
                </Link>
                <Link 
                  to="/how-to-play" 
                  className={`font-minecraft text-sm ${location.pathname === '/how-to-play' ? 'text-minecraft-gold' : 'text-white hover:text-minecraft-green'} transition-colors`}
                >
                  HOW TO PLAY
                </Link>
                <div className="relative group">
                  <button className="font-minecraft text-sm text-white hover:text-minecraft-green transition-colors flex items-center">
                    RESOURCES <ChevronDown className="ml-1 h-3 w-3 opacity-70 group-hover:opacity-100" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 minecraft-panel opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                    <div className="py-2">
                      <Link to="/discord" className="block px-4 py-2 text-sm font-minecraft text-black hover:text-minecraft-blue hover:bg-white/30 transition-colors">
                        Discord
                      </Link>
                      <Link to="/wiki" className="block px-4 py-2 text-sm font-minecraft text-black hover:text-minecraft-blue hover:bg-white/30 transition-colors">
                        Wiki
                      </Link>
                      <Link to="/gallery" className="block px-4 py-2 text-sm font-minecraft text-black hover:text-minecraft-blue hover:bg-white/30 transition-colors">
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
              <button className="minecraft-diamond-btn">
                STORE
              </button>
            </Link>
            <button className="minecraft-3d-btn">
              GET STARTED
            </button>
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
        <div className="md:hidden minecraft-wood-bg border-t-4 border-minecraft-dirt">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className={`block px-3 py-2 text-base font-minecraft ${location.pathname === '/' ? 'text-minecraft-gold' : 'text-white hover:text-minecraft-green'} transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/nfts" 
              className={`block px-3 py-2 text-base font-minecraft ${location.pathname === '/nfts' ? 'text-minecraft-gold' : 'text-white hover:text-minecraft-green'} transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              NFT Catalog
            </Link>
            <Link 
              to="/how-to-play" 
              className={`block px-3 py-2 text-base font-minecraft ${location.pathname === '/how-to-play' ? 'text-minecraft-gold' : 'text-white hover:text-minecraft-green'} transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              How to Play
            </Link>
            <Link 
              to="/discord" 
              className="block px-3 py-2 text-base font-minecraft text-white hover:text-minecraft-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Discord
            </Link>
            <Link 
              to="/wiki" 
              className="block px-3 py-2 text-base font-minecraft text-white hover:text-minecraft-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Wiki
            </Link>
            <Link 
              to="/gallery" 
              className="block px-3 py-2 text-base font-minecraft text-white hover:text-minecraft-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              NFT Gallery
            </Link>
            <div className="pt-4 pb-2 flex flex-col space-y-3">
              <Link 
                to="/store" 
                className="minecraft-diamond-btn block text-center"
                onClick={() => setIsOpen(false)}
              >
                Store
              </Link>
              <Link 
                to="/get-started" 
                className="minecraft-3d-btn block text-center"
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
