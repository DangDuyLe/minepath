import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardProps } from '@/components/ui/card';

interface EnhancedCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  hoverEffect?: 'glow' | 'scale' | 'rotate' | 'none';
  borderGradient?: boolean;
  glassEffect?: boolean;
}

const EnhancedCard = React.forwardRef<
  HTMLDivElement,
  EnhancedCardProps
>(({ 
  className, 
  hoverEffect = 'none', 
  borderGradient = false,
  glassEffect = false,
  children, 
  ...props 
}, ref) => {
  return (
    <Card
      ref={ref}
      className={cn(
        "transition-all duration-300 overflow-hidden",
        glassEffect && "bg-background/30 backdrop-blur-lg",
        borderGradient && "border-none p-[1px] bg-gradient-to-br from-solana-purple/50 via-solana-blue/50 to-solana-green/50",
        hoverEffect === 'glow' && "hover:shadow-[0_0_20px_rgba(155,135,245,0.3)]",
        hoverEffect === 'scale' && "hover:scale-105",
        hoverEffect === 'rotate' && "hover:rotate-1 hover:scale-[1.02]",
        className
      )}
      {...props}
    >
      <div className={cn(
        "h-full w-full",
        borderGradient && "bg-card rounded-[inherit]",
      )}>
        {children}
      </div>
    </Card>
  );
});

EnhancedCard.displayName = "EnhancedCard";

export { EnhancedCard };
