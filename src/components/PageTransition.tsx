
import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 bg-black"
        initial={{ scaleY: 0 }}
        animate={{ 
          scaleY: [0, 1, 1, 0],
          transformOrigin: ["top", "top", "bottom", "bottom"]
        }}
        transition={{ 
          duration: 1.5, 
          times: [0, 0.4, 0.6, 1],
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
