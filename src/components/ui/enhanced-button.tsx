import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

interface EnhancedButtonProps extends ButtonProps {
  glowing?: boolean;
  hoverable?: boolean;
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant, glowing = false, hoverable = false, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn(
          "relative overflow-hidden transition-all duration-300 font-medium",
          glowing && "shadow-[0_0_15px_rgba(155,135,245,0.4)] hover:shadow-[0_0_20px_rgba(155,135,245,0.6)]",
          hoverable && "hover:scale-105",
          variant === 'default' && "bg-solana-purple hover:bg-solana-purple/90",
          className
        )}
        {...props}
      >
        {hoverable && (
          <span className="absolute inset-0 bg-gradient-to-r from-solana-purple/0 via-white/10 to-solana-purple/0 bg-[length:500%_100%] animate-shimmer pointer-events-none"></span>
        )}
        {children}
      </Button>
    );
  }
);

EnhancedButton.displayName = "EnhancedButton";

export { EnhancedButton };
