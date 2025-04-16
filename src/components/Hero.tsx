
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Shield, Sword, Coins, Sparkles, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EnhancedButton } from './ui/enhanced-button';
import { Pickaxe } from './ui/icons/Pickaxe';

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 32
  });
  
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const heroImageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    // Preload critical images for faster perceived performance
    const preloadImage = new Image();
    preloadImage.src = "/images/swordshield.png";
    preloadImage.onload = () => setImagesLoaded(true);
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 45, seconds: 32 }; // Reset timer when it reaches zero
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('/images/bg-shrine.png')",
            filter: "brightness(0.7)",
            backgroundSize: "cover"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute pixelated w-2 h-2 bg-white opacity-30"
              animate={{ 
                y: [0, -Math.random() * 100, 0],
                x: [0, Math.random() * 20 - 10, 0]
              }}
              transition={{ 
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Geometric patterns along left edge */}
        <div className="absolute left-0 inset-y-0 w-16 opacity-20">
          <div className="h-full w-full bg-[url('/public/lovable-uploads/571ce867-0253-4784-ba20-b363e73c1463.png')] bg-repeat-y"></div>
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="font-minecraft text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight"
              variants={itemVariants}
            >
              <span className="block text-white">Explore the</span>
              <span className="block text-minecraft-diamond mt-2 glow-effect">
                infinite lands
              </span>
              <span className="block mt-2 text-minecraft-gold">of MinePath</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/80 mt-8 mb-10 max-w-xl font-minecraft leading-relaxed"
              variants={itemVariants}
            >
              A groundbreaking Minecraft project that seamlessly integrates Solana blockchain technology into your gameplay experience.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center"
              variants={itemVariants}
            >
              <Link to="/how-to-play">
                <motion.button 
                  className="play-now-btn relative px-8 py-3 bg-white text-black font-minecraft tracking-wider overflow-hidden group"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 195, 255, 0.6)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">PLAY NOW</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
              </Link>
              <Link to="/nfts">
                <motion.button 
                  className="minecraft-diamond-btn inline-flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore NFTs <Eye className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right content - Game world image with enhanced animations */}
          <motion.div 
            className="flex-1 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative mx-auto max-w-lg">
              <motion.div 
                className="absolute inset-0 rounded-xl blur-2xl"
                animate={{ 
                  boxShadow: ["0 0 20px rgba(0, 195, 255, 0.4)", "0 0 30px rgba(0, 195, 255, 0.6)", "0 0 20px rgba(0, 195, 255, 0.4)"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              
              <motion.div 
                className="relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  ref={heroImageRef}
                  src="/images/swordshield.png" 
                  alt="Minecraft world with buildings" 
                  className={`w-full h-auto rounded-lg shadow-2xl transition-all duration-700 ${imagesLoaded ? '' : 'blur-in'}`}
                />
                
                {/* Floating elements around the image */}
                <motion.div 
                  className="absolute -top-8 -left-8"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <img src="/images/diamond.png" className="w-12 h-12 pixelated" alt="Diamond" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -right-6"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <img src="/images/gold.png" className="w-10 h-10 pixelated" alt="Gold" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Logo bar with enhanced animations */}
      <motion.div 
        className="mt-20 pt-10 absolute left-0 right-0 bottom-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="flex flex-wrap justify-center gap-10 lg:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: Shield, text: "KYC" },
            { icon: Sword, text: "DAPP" },
            { icon: Sparkles, text: "Audit" },
            { icon: Coins, text: "Dextools" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center text-xl font-minecraft bg-black/40 p-2 border border-cyan-400/30"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 15px rgba(0, 195, 255, 0.4)",
                borderColor: "rgba(0, 195, 255, 0.5)"
              }}
            >
              <item.icon className="mr-2 h-6 w-6 text-cyan-400" />
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
