import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/70 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <motion.img 
                src="/images/minecraft-logo.png" 
                alt="MinePath" 
                className="h-9 w-auto mr-2 pixelated" 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.div
                initial={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center"
              >
                <span className="font-minecraft text-2xl">
                  <span className="text-minecraft-green">Mine</span>
                  <span className="text-solana-purple">Path</span>
                </span>
                <motion.div 
                  className="h-0.5 w-0 bg-gradient-to-r from-solana-blue to-solana-green group-hover:w-full transition-all duration-300"
                ></motion.div>
              </motion.div>
              {/* Small world image */}
              <img 
                src="/images/minecraft_world.png" 
                alt="Minecraft World" 
                className="h-8 w-auto ml-2 hidden md:block pixelated" 
              />
            </Link>
            <div className="hidden lg:block ml-16">
              <div className="flex items-center space-x-8">
                <NavLink to="/" currentPath={location.pathname}>HOME</NavLink>
                <NavLink to="/nfts" currentPath={location.pathname}>NFT CATALOG</NavLink>
                <NavLink to="/how-to-play" currentPath={location.pathname}>HOW TO PLAY</NavLink>
                <div className="relative group">
                  <button className="font-minecraft text-sm text-white hover:text-solana-blue transition-colors flex items-center group">
                    <span>RESOURCES</span>
                    <ChevronDown className="ml-1 h-3 w-3 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180 duration-300" />
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-solana-blue to-solana-green group-hover:w-full transition-all duration-300"></div>
                  </button>
                  <div className="absolute left-0 mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2 bg-black/80 backdrop-blur-md border border-solana-purple/30 shadow-lg">
                      <NavLink to="/discord" currentPath={location.pathname} isDropdown>Discord</NavLink>
                      <NavLink to="/wiki" currentPath={location.pathname} isDropdown>Wiki</NavLink>
                      <NavLink to="/gallery" currentPath={location.pathname} isDropdown>NFT Gallery</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/store">
              <button className="minecraft-diamond-btn flex items-center space-x-2 hover:scale-105 transition-transform">
                <Sparkles className="h-4 w-4" />
                <span>STORE</span>
              </button>
            </Link>
            <button className="minecraft-3d-btn hover:scale-105 transition-transform">
              GET STARTED
            </button>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-foreground/90 hover:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-solana-purple/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink to="/" currentPath={location.pathname} onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/nfts" currentPath={location.pathname} onClick={() => setIsOpen(false)}>NFT Catalog</MobileNavLink>
              <MobileNavLink to="/how-to-play" currentPath={location.pathname} onClick={() => setIsOpen(false)}>How to Play</MobileNavLink>
              <MobileNavLink to="/discord" currentPath={location.pathname} onClick={() => setIsOpen(false)}>Discord</MobileNavLink>
              <MobileNavLink to="/wiki" currentPath={location.pathname} onClick={() => setIsOpen(false)}>Wiki</MobileNavLink>
              <MobileNavLink to="/gallery" currentPath={location.pathname} onClick={() => setIsOpen(false)}>NFT Gallery</MobileNavLink>
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Helper components for cleaner navigation link styling
const NavLink = ({ to, currentPath, children, isDropdown = false }) => {
  const isActive = currentPath === to;
  
  return (
    <Link 
      to={to} 
      className={`font-minecraft text-sm relative group ${isDropdown ? 'block px-4 py-2' : ''} ${
        isActive 
          ? 'text-solana-blue' 
          : 'text-white hover:text-solana-blue transition-colors'
      }`}
    >
      <div className="flex items-center">
        {isDropdown && <ChevronRight className="mr-1 h-3 w-3 opacity-80 group-hover:translate-x-1 transition-transform" />}
        <span>{children}</span>
      </div>
      {!isDropdown && (
        <div className={`absolute bottom-0 left-0 h-0.5 ${isActive ? 'w-full bg-gradient-to-r from-solana-blue to-solana-green' : 'w-0 bg-solana-blue group-hover:w-full'} transition-all duration-300`}></div>
      )}
    </Link>
  );
};

const MobileNavLink = ({ to, currentPath, onClick, children }) => {
  const isActive = currentPath === to;
  
  return (
    <Link 
      to={to} 
      className={`block px-3 py-2 text-base font-minecraft ${
        isActive 
          ? 'text-solana-blue bg-black/50' 
          : 'text-white hover:text-solana-blue transition-colors'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <ChevronRight className={`mr-1 h-4 w-4 ${isActive ? 'text-solana-blue' : 'opacity-80'}`} />
        <span>{children}</span>
      </div>
    </Link>
  );
};

export default Navbar;
