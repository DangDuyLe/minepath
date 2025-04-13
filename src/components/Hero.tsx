import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Sword, Coins, Sparkles, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];
    
    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 20);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `rgba(155, 135, 245, ${Math.random() * 0.3})`
        });
      }
    };
    
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
      
      drawConnections();
      requestAnimationFrame(updateParticles);
    };
    
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(155, 135, 245, ${0.1 * (1 - distance/120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    };
    
    createParticles();
    updateParticles();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative pt-24 pb-32 overflow-hidden">
      {/* Particle Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-solana-purple/10 via-background/95 to-background"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/images/bg-pattern.png')] bg-repeat"></div>
        
        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-solana-purple/10 filter blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-solana-blue/10 filter blur-[100px] animate-pulse-slow opacity-70" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-solana-purple/10 border border-solana-purple/20 text-sm font-medium"
            >
              <Sparkles className="h-4 w-4 text-solana-purple" />
              <span className="text-gradient bg-solana-gradient">Minecraft + Solana NFTs</span>
            </motion.div>
            
            <motion.h1 
              className="font-minecraft text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="block">Transform Your</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple via-solana-blue to-solana-green drop-shadow-glow-sm">
                Minecraft Experience
              </span>
              <span className="block mt-2">With NFTs</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Own and trade unique in-game items as NFTs powered by Solana blockchain. 
              Enhance your gameplay with exclusive gear that has real-world value.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link to="/how-to-play">
                <button className="minecraft-btn-green flex items-center">
                  Play Now <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
              <Link to="/nfts">
                <button className="minecraft-btn-blue flex items-center">
                  View NFTs <Eye className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-solana-purple/10">
                  <Shield className="h-4 w-4 text-solana-purple" />
                </div>
                <span className="text-sm font-medium">Secure Ownership</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-solana-blue/10">
                  <Sword className="h-4 w-4 text-solana-blue" />
                </div>
                <span className="text-sm font-medium">Unique Items</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-solana-green/10">
                  <Coins className="h-4 w-4 text-solana-green" />
                </div>
                <span className="text-sm font-medium">Real Value</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-solana-purple/20 to-solana-blue/10 rounded-3xl blur-2xl"></div>
              
              <div className="relative z-10 transform hover:rotate-2 hover:scale-105 transition-all duration-700">
                <img 
                  src="/images/minecraft_character.png" 
                  alt="Minecraft character with NFT items" 
                  className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(155,135,245,0.5)]" 
                />
              </div>
              
              {/* Floating elements with improved animation */}
              <motion.div 
                className="absolute -top-8 -right-4 p-4 bg-card/80 backdrop-blur-md rounded-lg border border-solana-purple/20 shadow-lg shadow-solana-purple/10"
                animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Shield className="h-10 w-10 text-rarity-epic" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 right-20 p-4 bg-card/80 backdrop-blur-md rounded-lg border border-solana-purple/20 shadow-lg shadow-solana-purple/10"
                animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Sword className="h-10 w-10 text-rarity-legendary" />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -left-4 p-4 bg-card/80 backdrop-blur-md rounded-lg border border-solana-purple/20 shadow-lg shadow-solana-purple/10"
                animate={{ y: [0, -12, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Coins className="h-10 w-10 text-solana-green" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats section with improved design */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-solana-purple/10 group hover:bg-card/70 transition-all duration-300 overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-solana-purple/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-all duration-500"></div>
            <h3 className="font-minecraft text-3xl sm:text-4xl mb-1 text-solana-purple group-hover:text-solana-blue transition-colors duration-300">10K+</h3>
            <p className="text-sm text-muted-foreground">Active Players</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-solana-purple/10 group hover:bg-card/70 transition-all duration-300 overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-solana-blue/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-all duration-500"></div>
            <h3 className="font-minecraft text-3xl sm:text-4xl mb-1 text-solana-blue group-hover:text-solana-purple transition-colors duration-300">50K+</h3>
            <p className="text-sm text-muted-foreground">NFTs Minted</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-solana-purple/10 group hover:bg-card/70 transition-all duration-300 overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-solana-green/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-all duration-500"></div>
            <h3 className="font-minecraft text-3xl sm:text-4xl mb-1 text-solana-green group-hover:text-solana-blue transition-colors duration-300">256</h3>
            <p className="text-sm text-muted-foreground">Unique Items</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-solana-purple/10 group hover:bg-card/70 transition-all duration-300 overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-rarity-legendary/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-all duration-500"></div>
            <h3 className="font-minecraft text-3xl sm:text-4xl mb-1 text-rarity-legendary group-hover:text-solana-purple transition-colors duration-300">24/7</h3>
            <p className="text-sm text-muted-foreground">Server Uptime</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
