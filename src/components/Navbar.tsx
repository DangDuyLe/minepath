
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import WalletModal from '@/components/WalletModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-solana-black/90 backdrop-blur-sm border-b border-solana-purple/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-minecraft text-2xl text-gradient bg-solana-gradient bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                MinePath
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <NavLink href="/" text="Home" />
              <NavLink href="/nfts" text="NFT Catalog" />
              <NavLink href="/how-to-play" text="How to Play" />
              <NavLink href="/store" text="Store" />
              <div className="relative group">
                <button className="flex items-center text-gray-200 hover:text-white font-medium transition-colors">
                  Community
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 w-48 mt-2 origin-top-right bg-solana-black/90 backdrop-blur-sm border border-solana-purple/30 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    <Link to="/discord" className="block px-4 py-2 text-sm text-gray-200 hover:bg-solana-purple/20 transition-colors">Discord</Link>
                    <Link to="/wiki" className="block px-4 py-2 text-sm text-gray-200 hover:bg-solana-purple/20 transition-colors">Wiki</Link>
                    <Link to="/gallery" className="block px-4 py-2 text-sm text-gray-200 hover:bg-solana-purple/20 transition-colors">NFT Gallery</Link>
                  </div>
                </div>
              </div>
              <WalletModal />
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-solana-purple/20 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-solana-purple/30"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-solana-black/95 backdrop-blur-sm border-t border-solana-purple/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" text="Home" setIsOpen={setIsOpen} />
            <MobileNavLink href="/nfts" text="NFT Catalog" setIsOpen={setIsOpen} />
            <MobileNavLink href="/how-to-play" text="How to Play" setIsOpen={setIsOpen} />
            <MobileNavLink href="/store" text="Store" setIsOpen={setIsOpen} />
            <MobileNavLink href="/discord" text="Discord" setIsOpen={setIsOpen} />
            <MobileNavLink href="/wiki" text="Wiki" setIsOpen={setIsOpen} />
            <MobileNavLink href="/gallery" text="NFT Gallery" setIsOpen={setIsOpen} />
            <div className="pt-2">
              <WalletModal />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link to={href} className="text-gray-200 hover:text-white hover:underline decoration-solana-purple decoration-2 underline-offset-4 font-medium transition-colors">
      {text}
    </Link>
  );
};

const MobileNavLink = ({ 
  href, 
  text, 
  setIsOpen 
}: { 
  href: string; 
  text: string; 
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Link 
      to={href} 
      className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-solana-purple/20"
      onClick={() => setIsOpen(false)}
    >
      <ChevronRight className="mr-2 h-4 w-4 text-solana-purple" />
      {text}
    </Link>
  );
};

export default Navbar;
