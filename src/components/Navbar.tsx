import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-minecraft-dirt bg-minecraft-stone bg-opacity-95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/images/minecraft-logo.png" alt="MinePath" className="h-8 w-auto mr-2 pixelated" />
              <span className="font-minecraft text-2xl text-gradient bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                MinePath
              </span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/" className="font-minecraft text-white hover:text-solana-green px-3 py-2 transition-colors">Home</Link>
                <Link to="/nfts" className="font-minecraft text-white hover:text-solana-green px-3 py-2 transition-colors">NFT Catalog</Link>
                <Link to="/how-to-play" className="font-minecraft text-white hover:text-solana-green px-3 py-2 transition-colors">How to Play</Link>
                <div className="relative group">
                  <button className="font-minecraft text-white hover:text-solana-green px-3 py-2 transition-colors flex items-center">
                    Resources <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-minecraft-stone border-2 border-minecraft-dirt hidden group-hover:block">
                    <div className="py-1">
                      <Link to="/discord" className="block px-4 py-2 text-sm font-minecraft text-white hover:bg-[#9b87f5]/20 transition-colors">Discord</Link>
                      <Link to="/wiki" className="block px-4 py-2 text-sm font-minecraft text-white hover:bg-[#9b87f5]/20 transition-colors">Wiki</Link>
                      <Link to="/gallery" className="block px-4 py-2 text-sm font-minecraft text-white hover:bg-[#9b87f5]/20 transition-colors">NFT Gallery</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center ml-4">
              <Link to="/store" className="minecraft-btn-green mr-2">
                Store
              </Link>
              <Button className="minecraft-btn-purple">
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-minecraft-dirt bg-minecraft-stone">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="font-minecraft text-white hover:text-solana-green block px-3 py-2">Home</Link>
            <Link to="/nfts" className="font-minecraft text-white hover:text-solana-green block px-3 py-2">NFT Catalog</Link>
            <Link to="/how-to-play" className="font-minecraft text-white hover:text-solana-green block px-3 py-2">How to Play</Link>
            <Link to="/discord" className="font-minecraft text-white hover:text-solana-green block px-3 py-2">Discord</Link>
            <Link to="/wiki" className="font-minecraft text-white hover:text-solana-green block px-3 py-2">Wiki</Link>
            <Link to="/gallery" className="font-minecraft text-white hover:text-solana-green block px-3 py-2">NFT Gallery</Link>
            <div className="pt-4 flex flex-col space-y-2">
              <Link to="/store" className="minecraft-btn-green text-center">
                Store
              </Link>
              <Button className="minecraft-btn-purple w-full text-center">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
