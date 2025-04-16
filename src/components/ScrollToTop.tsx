
import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Use a higher threshold for better user experience
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add throttling for better performance
    let throttleTimeout: number | null = null;
    const throttledToggleVisibility = () => {
      if (throttleTimeout === null) {
        throttleTimeout = window.setTimeout(() => {
          toggleVisibility();
          throttleTimeout = null;
        }, 200);
      }
    };

    window.addEventListener('scroll', throttledToggleVisibility);

    return () => {
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
      window.removeEventListener('scroll', throttledToggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 minecraft-dirt-bg border-4 border-minecraft-stone shadow-lg opacity-80 hover:opacity-100 transition-all duration-300 group"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 0 15px rgba(0, 195, 255, 0.6)",
            rotate: [0, -2, 2, -2, 0],
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-white" />
          
          {/* Minecraft-style arrow animation */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <div className="pixelated absolute top-1 left-[44%] w-2 h-2 bg-white"></div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
