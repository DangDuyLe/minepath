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
    <div className="relative pt-20 pb-32 overflow-hidden">
      {/* Particle Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-solana-purple/20 via-background/90 to-background"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/images/bg-pattern.png')] bg-repeat"></div>
        
        {/* Decorative orbs - larger and more prominent like SolCraft */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-solana-purple/15 filter blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-solana-blue/15 filter blur-[150px] animate-pulse-slow opacity-70" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full bg-solana-purple/10 border border-solana-purple/30 text-sm font-medium"
            >
              <Sparkles className="h-4 w-4 text-solana-purple" />
              <span className="text-gradient bg-solana-gradient">BLOCK BY BLOCK, MINE TO EARN</span>
            </motion.div>
            
            <motion.h1 
              className="font-minecraft text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="block">Building the</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple via-solana-blue to-solana-green drop-shadow-glow-sm">
                Future, One Block
              </span>
              <span className="block mt-2">at a Time</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              A groundbreaking Minecraft project that seamlessly integrates Solana blockchain technology into your gameplay experience.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link to="/how-to-play">
                <Button className="bg-solana-purple hover:bg-solana-purple/90 text-white font-medium px-8 py-6 h-auto text-base rounded-md shadow-lg shadow-solana-purple/20">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/nfts">
                <Button variant="outline" className="border-solana-purple/50 text-white font-medium px-8 py-6 h-auto text-base rounded-md hover:bg-solana-purple/10">
                  Explore NFTs <Eye className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right content - 3D model container like AresRPG */}
          <motion.div 
            className="flex-1 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-solana-purple/20 to-solana-blue/10 rounded-xl blur-2xl"></div>
              
              <div className="relative z-10 transform hover:rotate-2 hover:scale-105 transition-all duration-700">
                <img 
                  src="/images/minecraft_character.png" 
                  alt="Minecraft character with NFT items" 
                  className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(155,135,245,0.5)]" 
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Logo bar like SolCraft */}
        <motion.div 
          className="mt-20 border-t border-solana-purple/10 pt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-wrap justify-center gap-10 lg:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center text-xl font-medium">
              <Shield className="mr-2 h-6 w-6 text-solana-blue" />
              <span>KYC</span>
            </div>
            <div className="flex items-center text-xl font-medium">
              <Sword className="mr-2 h-6 w-6 text-solana-purple" />
              <span>DAPP</span>
            </div>
            <div className="flex items-center text-xl font-medium">
              <Sparkles className="mr-2 h-6 w-6 text-solana-green" />
              <span>Audit</span>
            </div>
            <div className="flex items-center text-xl font-medium">
              <Coins className="mr-2 h-6 w-6 text-rarity-legendary" />
              <span>Dextools</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
