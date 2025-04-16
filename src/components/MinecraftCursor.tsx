
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MinecraftCursor = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  // Use motion values for smooth cursor movement
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Add spring physics for more natural feeling
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      // Show cursor after first movement
      if (!isVisible) {
        setIsVisible(true);
      }
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.getAttribute('role') === 'button';
      
      setCursorVariant(isClickable ? "clickable" : "default");
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      // Restore default cursor
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY, isVisible]);

  // Cursor variants for different states
  const variants = {
    default: {
      opacity: 0.7,
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      border: "2px solid rgba(255, 255, 255, 0.7)",
      x: 0,
      y: 0
    },
    clickable: {
      opacity: 1,
      scale: 1.2,
      backgroundColor: "rgba(34, 211, 238, 0.3)",
      border: "2px solid rgba(34, 211, 238, 0.7)",
      boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)"
    },
    clicking: {
      scale: 0.8,
      backgroundColor: "rgba(34, 211, 238, 0.5)",
      border: "2px solid rgba(34, 211, 238, 0.9)"
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 z-[9999] pointer-events-none mix-blend-difference pixelated"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0
        }}
        variants={variants}
        animate={isClicking ? "clicking" : cursorVariant}
        transition={{ duration: 0.15 }}
      >
        <div className="absolute inset-0 pixelated">
          <div className="absolute inset-0 bg-[url('/images/cursor.png')] bg-no-repeat bg-contain pixelated" style={{ imageRendering: 'pixelated' }} />
        </div>
      </motion.div>
      
      {/* Trail effect */}
      {isVisible && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed w-4 h-4 rounded-none bg-white/10 z-[9998] pointer-events-none"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
                scale: 0.8 - (i * 0.2),
                opacity: 0.3 - (i * 0.1),
                transition: `transform ${0.1 + (i * 0.05)}s ease-out`
              }}
            />
          ))}
        </>
      )}
    </>
  );
};

export default MinecraftCursor;
