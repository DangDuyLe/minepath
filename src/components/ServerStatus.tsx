import React, { useState, useEffect } from 'react';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    <div className="minecraft-container p-4 mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div>
          <h3 className="font-minecraft text-lg mb-2">Server Status</h3>
          <div className="flex items-center mb-1">
            <span className="mr-2">Status:</span>
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
              <span className="text-gray-300">Players:</span> {playerCount}/1000
            </div>
          )}
        </div>
        
        <div className="mt-4 sm:mt-0">
          <div className="flex items-center">
            <div className="font-minecraft bg-theme-darker p-2 border border-minecraft-dirt">
              {serverAddress}
            </div>
            <button 
              onClick={copyServerAddress}
              className="p-2 bg-minecraft-green/80 hover:bg-minecraft-green border border-minecraft-dirt ml-2"
            >
              <Copy size={16} />
            </button>
          </div>
          <div className="text-xs text-center mt-1 text-gray-400">Click to copy</div>
        </div>
      </div>
    </div>
  );
};

export default ServerStatus;
