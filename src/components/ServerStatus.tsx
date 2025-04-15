
import React, { useState, useEffect } from 'react';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const ServerStatus = () => {
  const { toast } = useToast();
  const [playerCount, setPlayerCount] = useState<number | null>(null);
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const serverAddress = 'play.minepath.com';

  useEffect(() => {
    // Simulate fetching server status
    // In a real app, you would call an API to get the actual server status
    const timer = setTimeout(() => {
      setPlayerCount(Math.floor(Math.random() * 500) + 100);
      setIsOnline(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const copyServerAddress = () => {
    navigator.clipboard.writeText(serverAddress);
    toast({
      title: "Server address copied!",
      description: "Ready to paste in your Minecraft client"
    });
  };

  return (
    <motion.div 
      className="relative py-12 overflow-hidden" 
      style={{ 
        background: 'linear-gradient(180deg, rgba(13,14,22,1) 0%, rgba(21,26,49,1) 100%)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed' 
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/public/lovable-uploads/571ce867-0253-4784-ba20-b363e73c1463.png')] bg-repeat"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          background: 'radial-gradient(circle, rgba(10, 21, 77, 0.3) 0%, rgba(13, 14, 22, 0) 70%)'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-6 rounded-lg mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div>
              <h3 className="font-minecraft text-xl mb-2 text-cyan-400">Server Status</h3>
              <div className="flex items-center mb-1">
                <span className="mr-2 text-white/80">Status:</span>
                {isOnline ? (
                  <span className="text-green-500 flex items-center">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span> Online
                  </span>
                ) : (
                  <span className="text-red-500 flex items-center">
                    <span className="h-2 w-2 bg-red-500 rounded-full mr-1"></span> Offline
                  </span>
                )}
              </div>
              {playerCount !== null && isOnline && (
                <div className="text-sm">
                  <span className="text-white/60">Players:</span> {playerCount}/1000
                </div>
              )}
            </div>
            
            <div className="mt-4 sm:mt-0">
              <div className="flex items-center">
                <div className="font-minecraft bg-black/60 p-2 border border-cyan-400/30 rounded-l-md text-white/80">
                  {serverAddress}
                </div>
                <button 
                  onClick={copyServerAddress}
                  className="p-2 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 hover:from-cyan-400 hover:to-blue-400 border border-cyan-400/30 rounded-r-md transition-colors"
                >
                  <Copy size={16} className="text-white" />
                </button>
              </div>
              <div className="text-xs text-center mt-1 text-white/60">Click to copy</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServerStatus;
