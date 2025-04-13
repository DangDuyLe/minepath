
import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, Wallet } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Mock wallet detection function
const detectWallet = (type: string) => {
  return type === 'Phantom'; // Mock Phantom as detected
};

type WalletOption = {
  id: string;
  name: string;
  icon: React.ReactNode;
  detected?: boolean;
};

const WalletModal = () => {
  const [view, setView] = useState<'intro' | 'options'>('intro');
  const [showAllOptions, setShowAllOptions] = useState(false);
  const { toast } = useToast();

  const walletOptions: WalletOption[] = [
    { 
      id: 'phantom', 
      name: 'Phantom',
      detected: detectWallet('Phantom'),
      icon: <div className="bg-purple-600 rounded-full p-1.5 w-8 h-8 flex items-center justify-center">
              <img src="/lovable-uploads/fb07d11d-3a8b-4117-af9c-10ef663a1935.png" alt="Phantom" className="w-5 h-5" />
            </div>
    },
    { 
      id: 'torus', 
      name: 'Torus',
      icon: <div className="bg-blue-500 rounded-full p-1.5 w-8 h-8 flex items-center justify-center text-white font-bold">T</div>
    },
    { 
      id: 'ledger', 
      name: 'Ledger',
      icon: <div className="bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
              </div>
            </div>
    },
    { 
      id: 'sollet', 
      name: 'Sollet',
      icon: <div className="bg-green-400 rounded-full p-1.5 w-8 h-8 flex items-center justify-center">
              <div className="w-5 h-2.5 bg-white rounded-sm"></div>
            </div>
    },
    { 
      id: 'slope', 
      name: 'Slope',
      icon: <div className="bg-blue-400 rounded-full p-1.5 w-8 h-8 flex items-center justify-center">
              <div className="rotate-45 bg-white w-3.5 h-3.5"></div>
            </div>
    },
    { 
      id: 'solflare', 
      name: 'Solflare',
      icon: <div className="bg-orange-500 rounded-full p-1.5 w-8 h-8 flex items-center justify-center">
              <div className="text-white text-xs">*</div>
            </div>
    },
    { 
      id: 'sollet-extension', 
      name: 'Sollet (Extension)',
      icon: <div className="bg-blue-500 rounded-full p-1.5 w-8 h-8 flex items-center justify-center text-white font-bold">S</div>
    }
  ];

  // Limit displayed options unless "show all" is clicked
  const displayedOptions = showAllOptions 
    ? walletOptions 
    : walletOptions.slice(0, 4);

  const handleWalletSelect = (walletId: string) => {
    toast({
      title: "Wallet Connection",
      description: `Connecting to ${walletId}...`
    });
    // Here you would typically implement actual wallet connection logic
  };

  const handleGetStarted = () => {
    setView('options');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-solana-purple hover:bg-solana-purple/90">
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#1A1F2C] border-none text-white p-0 w-full max-w-md rounded-xl">
        <div className="relative p-6">
          <button 
            className="absolute right-4 top-4 rounded-full hover:bg-gray-700/50 p-1.5"
            onClick={() => setView('intro')}
          >
            <X size={20} />
          </button>

          {view === 'intro' ? (
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold mb-8 mt-4">You'll need a wallet on Solana to continue</h2>
              
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-solana-purple/30 to-solana-green/30 flex items-center justify-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-solana-purple/50 to-solana-green/50 flex items-center justify-center">
                  <Wallet size={32} className="text-[#00C2FF]" />
                </div>
              </div>
              
              <Button 
                onClick={handleGetStarted}
                className="w-full py-6 bg-solana-purple hover:bg-solana-purple/90 rounded-md text-white font-medium text-lg"
              >
                Get started
              </Button>
              
              <button 
                onClick={() => setView('options')}
                className="mt-6 flex items-center text-gray-300 hover:text-white"
              >
                Already have a wallet? View options <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-8 mt-4">Connect a wallet on Solana to continue</h2>
              
              <div className="space-y-3">
                {displayedOptions.map((wallet) => (
                  <button
                    key={wallet.id}
                    className="flex items-center justify-between w-full p-3 hover:bg-white/5 rounded-md transition-colors"
                    onClick={() => handleWalletSelect(wallet.id)}
                  >
                    <div className="flex items-center">
                      {wallet.icon}
                      <span className="ml-3 text-lg">{wallet.name}</span>
                    </div>
                    {wallet.detected && (
                      <span className="text-gray-400 text-sm">Detected</span>
                    )}
                  </button>
                ))}
              </div>
              
              {!showAllOptions && walletOptions.length > 4 && (
                <button 
                  onClick={() => setShowAllOptions(true)}
                  className="mt-4 flex items-center justify-center w-full text-gray-300 hover:text-white py-2"
                >
                  More options <ChevronDown size={16} className="ml-1" />
                </button>
              )}
              
              {showAllOptions && (
                <button 
                  onClick={() => setShowAllOptions(false)}
                  className="mt-4 flex items-center justify-center w-full text-gray-300 hover:text-white py-2"
                >
                  Less options <ChevronUp size={16} className="ml-1" />
                </button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletModal;
