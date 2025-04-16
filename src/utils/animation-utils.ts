
import { useState, useEffect } from 'react';

// Hook for parallax effect
export const useParallax = (strength: number = 20) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * strength;
      const y = (e.clientY / window.innerHeight - 0.5) * strength;
      
      setPosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [strength]);
  
  return position;
};

// Hook for Minecraft-style damage flash effect
export const useDamageEffect = () => {
  const [isDamaged, setIsDamaged] = useState(false);
  
  const triggerDamage = () => {
    setIsDamaged(true);
    setTimeout(() => setIsDamaged(false), 200);
  };
  
  return { isDamaged, triggerDamage };
};

// Function to generate floating particles
export const generateFloatingParticles = (count: number = 20, options: {
  minSize?: number;
  maxSize?: number;
  minSpeed?: number;
  maxSpeed?: number;
  colors?: string[];
} = {}) => {
  const {
    minSize = 1,
    maxSize = 3,
    minSpeed = 0.1,
    maxSpeed = 0.3,
    colors = ['white']
  } = options;
  
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: minSize + Math.random() * (maxSize - minSize),
    speedX: (Math.random() - 0.5) * (maxSpeed - minSpeed) * 2,
    speedY: -minSpeed - Math.random() * (maxSpeed - minSpeed),
    opacity: Math.random() * 0.5 + 0.2,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
};

// Function to play Minecraft style sound
export const playMinecraftSound = (
  type: 'click' | 'pop' | 'success' | 'dig' | 'place' | 'break' | 'hurt' | 'levelup', 
  volume: number = 0.2
) => {
  try {
    const audio = new Audio(`/sounds/${type}.mp3`);
    audio.volume = volume;
    audio.play();
    return audio;
  } catch (error) {
    console.error(`Failed to play sound: ${type}`, error);
    return null;
  }
};

// Hook for typewriter text effect
export const useTypewriterEffect = (text: string, speed: number = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);
    
    return () => clearInterval(interval);
  }, [text, speed]);
  
  return { displayedText, isComplete };
};

// Animation variants for staggered children animations
export const staggeredContainerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const staggeredItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Helper to create Minecraft-style pixelated shadow
export const createPixelShadow = (color: string = 'black', opacity: number = 0.5) => {
  return `
    -1px 0 0 rgba(0,0,0,${opacity}),
    1px 0 0 rgba(0,0,0,${opacity}),
    0 -1px 0 rgba(0,0,0,${opacity}),
    0 1px 0 rgba(0,0,0,${opacity})
  `;
};
