
import React from 'react';
import { cn } from '@/lib/utils';

interface MinecraftCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'dirt' | 'stone' | 'planks' | 'diamond' | 'gold' | 'glass';
  bordered?: boolean;
  inset?: boolean;
  children?: React.ReactNode;
}

const MinecraftCard = React.forwardRef<HTMLDivElement, MinecraftCardProps>(
  ({ className, variant = 'dirt', bordered = true, inset = false, children, ...props }, ref) => {
    // Background classes based on variant
    const bgClasses = {
      dirt: "bg-minecraft-dirt",
      stone: "bg-minecraft-stone",
      planks: "bg-minecraft-planks",
      diamond: "bg-minecraft-diamond",
      gold: "bg-minecraft-gold",
      glass: "bg-black/50 backdrop-blur-sm"
    };
    
    // Border classes based on variant
    const borderClasses = {
      dirt: "border-minecraft-dirt",
      stone: "border-minecraft-stone",
      planks: "border-minecraft-planks",
      diamond: "border-minecraft-diamond",
      gold: "border-minecraft-gold",
      glass: "border-white/20"
    };
    
    return (
      <div 
        ref={ref}
        className={cn(
          "relative p-4",
          bordered && "border-4",
          bordered && borderClasses[variant],
          inset ? "bg-black/70" : bgClasses[variant],
          inset && "shadow-inner",
          "transition-transform hover:scale-[1.01]",
          className
        )}
        {...props}
      >
        {/* Corner decorations for true Minecraft aesthetic */}
        {bordered && (
          <>
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-black/20"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-black/20"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-black/20"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-black/20"></div>
          </>
        )}
        
        {/* Pixelated grid overlay for texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full" style={{ 
            backgroundSize: '8px 8px',
            backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            imageRendering: 'pixelated'
          }}></div>
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);

MinecraftCard.displayName = "MinecraftCard";

export { MinecraftCard };
