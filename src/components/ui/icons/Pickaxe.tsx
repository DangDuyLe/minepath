
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';

const Pickaxe = ({ size = 24, className, ...props }: LucideProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="square"
      strokeLinejoin="bevel"
      className={cn("pixelated", className)}
      style={{ imageRendering: 'pixelated' }}
      {...props}
    >
      {/* Pixelated pickaxe shape */}
      <path 
        d="M20 4L16 8L14 6L18 2L20 4Z" 
        fill="currentColor" 
        strokeWidth="0"
      />
      <path 
        d="M14 6L8 12L12 16L18 10L14 6Z" 
        fill="currentColor" 
        strokeWidth="0"
      />
      <path 
        d="M8 12L6 14L4 12L6 10L8 12Z" 
        fill="currentColor" 
        strokeWidth="0"
      />
      <path 
        d="M6 14L7 20L5 22L4 16L6 14Z" 
        fill="currentColor" 
        strokeWidth="0"
      />
    </svg>
  );
};

export { Pickaxe };
