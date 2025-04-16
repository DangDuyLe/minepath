
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface EnhancedButtonProps extends ButtonProps {
  glowing?: boolean;
  hoverable?: boolean;
  minecraftStyle?: 'grass' | 'diamond' | 'gold' | 'stone';
  pixelEffect?: boolean;
  soundEffect?: 'click' | 'pop' | 'success' | 'none';
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ 
    className, 
    variant, 
    glowing = false, 
    hoverable = false, 
    minecraftStyle, 
    pixelEffect = false, 
    soundEffect = 'click', 
    children, 
    onClick,
    ...props 
  }, ref) => {
    const [isPressed, setIsPressed] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    
    // Minecraft style classes
    const minecraftClasses = {
      grass: "bg-minecraft-green border-b-4 border-minecraft-green/70 text-white hover:bg-minecraft-green/90",
      diamond: "bg-minecraft-diamond border-b-4 border-minecraft-diamond/70 text-white hover:bg-minecraft-diamond/90", 
      gold: "bg-minecraft-gold border-b-4 border-minecraft-gold/70 text-white hover:bg-minecraft-gold/90",
      stone: "bg-minecraft-stone border-b-4 border-minecraft-stone/70 text-white hover:bg-minecraft-stone/90"
    };
    
    // Sound effects
    const playSound = () => {
      if (soundEffect === 'none') return;
      
      try {
        const audio = new Audio(`/sounds/${soundEffect}.mp3`);
        audio.volume = 0.2;
        audio.play();
      } catch (error) {
        console.error("Sound effect couldn't be played", error);
      }
    };
    
    // Handle click with sound and visual feedback
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsPressed(true);
      playSound();
      setHasInteracted(true);
      
      if (onClick) {
        onClick(e);
      }
      
      setTimeout(() => setIsPressed(false), 150);
    };
    
    return (
      <motion.div
        whileHover={!minecraftStyle ? { scale: hoverable ? 1.05 : 1.02 } : {}}
        whileTap={!minecraftStyle ? { scale: 0.98 } : {}}
        className={cn(
          "relative",
          pixelEffect && "overflow-hidden"
        )}
      >
        {/* Pixel particles that appear on click */}
        {pixelEffect && isPressed && (
          <PixelExplosion />
        )}
        
        {/* Glow effect */}
        {glowing && (
          <div className="absolute inset-0 -z-10 rounded-none blur-[10px] bg-primary/40 opacity-75 transition-opacity duration-300"></div>
        )}
        
        <Button
          ref={ref}
          variant={variant}
          className={cn(
            "relative overflow-hidden transition-all duration-300 font-minecraft",
            glowing && "shadow-[0_0_15px_rgba(155,135,245,0.4)] hover:shadow-[0_0_20px_rgba(155,135,245,0.6)]",
            minecraftStyle && minecraftClasses[minecraftStyle],
            minecraftStyle && "border-2 border-t-0 border-l-0 border-r-4 py-2 px-4 rounded-none transform transition-all duration-150",
            minecraftStyle && isPressed && "transform translate-y-1 border-b-2",
            variant === 'default' && "bg-minecraft-green hover:bg-minecraft-green/90",
            className
          )}
          onClick={handleClick}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
          {...props}
        >
          {/* Shimmer effect */}
          {hoverable && (
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 bg-[length:500%_100%] animate-shimmer pointer-events-none"></span>
          )}
          
          {children}
          
          {/* Pixelated border overlay for Minecraft effect */}
          {minecraftStyle && (
            <span className="absolute inset-0 border-2 border-t-0 border-l-0 border-black/10 pointer-events-none"></span>
          )}
          
          {/* Pixel dust trailing effect for Minecraft style buttons */}
          {minecraftStyle && hasInteracted && (
            <PixelDust color={
              minecraftStyle === 'diamond' ? 'cyan' : 
              minecraftStyle === 'gold' ? 'yellow' : 
              minecraftStyle === 'grass' ? 'green' : 'gray'
            } />
          )}
        </Button>
      </motion.div>
    );
  }
);

// Pixel explosion effect when button is clicked
const PixelExplosion = () => {
  // Generate random pixel particles
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 2,
    x: 50 + (Math.random() - 0.5) * 20, // center + random offset
    y: 50 + (Math.random() - 0.5) * 20, // center + random offset
    xVel: (Math.random() - 0.5) * 100,
    yVel: (Math.random() - 0.5) * 100,
    color: `hsl(${Math.random() * 60 + 190}, 100%, 70%)` // blues and cyans
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute pixelated rounded-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: p.color
          }}
          animate={{
            x: p.xVel,
            y: p.yVel,
            opacity: [1, 0],
            scale: [1, 0.5]
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

// Pixel dust trail effect
const PixelDust = ({ color }: { color: 'cyan' | 'yellow' | 'green' | 'gray' }) => {
  const colorMap = {
    cyan: 'rgba(34, 211, 238, 0.7)',
    yellow: 'rgba(234, 179, 8, 0.7)', 
    green: 'rgba(34, 197, 94, 0.7)',
    gray: 'rgba(107, 114, 128, 0.7)'
  };
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div 
          key={i}
          className="absolute w-1 h-1 pixelated rounded-none"
          style={{ 
            backgroundColor: colorMap[color],
            bottom: `${10 + Math.random() * 80}%`,
            left: `${10 + Math.random() * 80}%`
          }}
          animate={{ 
            y: [0, -20 - Math.random() * 10],
            x: [(Math.random() - 0.5) * 5, (Math.random() - 0.5) * 10],
            opacity: [0.8, 0] 
          }}
          transition={{ 
            duration: 1 + Math.random() * 0.5,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

EnhancedButton.displayName = "EnhancedButton";

export { EnhancedButton };
