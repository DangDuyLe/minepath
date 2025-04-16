
import React, { useEffect, useState } from 'react';
import { ChevronUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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
          className="fixed bottom-8 right-8 z-50 p-0 overflow-hidden shadow-lg opacity-90 hover:opacity-100 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          aria-label="Scroll to top"
        >
          {/* Main button with glowing border effect */}
          <div className="relative group">
            {/* Animated border effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-none"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 200%' }}
            />
            
            {/* Dark inner area */}
            <div className="minecraft-dirt-bg border-4 border-minecraft-stone/40 relative p-3 m-[3px] flex items-center justify-center group-hover:border-minecraft-diamond/40 transition-all duration-300">
              <ChevronUp className="w-6 h-6 text-white relative z-10 group-hover:text-cyan-300 transition-colors duration-300" />
              
              {/* Particles that appear on hover */}
              <AnimatePresence>
                {isHovering && (
                  <>
                    {[...Array(6)].map((_, index) => (
                      <motion.div
                        key={index}
                        className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-none pixelated"
                        initial={{ 
                          x: 0, 
                          y: 0, 
                          opacity: 0.8 
                        }}
                        animate={{ 
                          x: [0, (Math.random() - 0.5) * 30], 
                          y: [0, -20 - Math.random() * 20],
                          opacity: [0.8, 0] 
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        style={{
                          left: `${50 + (Math.random() - 0.5) * 20}%`,
                          top: `${50 + (Math.random() - 0.5) * 20}%`
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Tooltip that appears on hover */}
          <AnimatePresence>
            {isHovering && (
              <motion.div 
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 border border-cyan-500/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
              >
                Back to top
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
