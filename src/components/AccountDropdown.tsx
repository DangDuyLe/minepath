
import React, { useState, useEffect } from "react";
import { ChevronDown, LogOut, UserRound, Wallet as WalletIcon } from "lucide-react";

type AccountDropdownProps = {
  accountName: string;
  onLogout: () => void;
};

const AccountDropdown: React.FC<AccountDropdownProps> = ({ accountName, onLogout }) => {
  const [open, setOpen] = useState(false);
  const [phantomConnected, setPhantomConnected] = useState(false);
  const [phantomAccount, setPhantomAccount] = useState<string | null>(null);

  // Attempt to check Phantom wallet connection (demo)
  useEffect(() => {
    const detectPhantom = () => {
      if (typeof window !== "undefined" && (window as any).solana?.isPhantom) {
        (window as any).solana.connect({ onlyIfTrusted: true })
          .then(({ publicKey }: any) => {
            setPhantomConnected(true);
            setPhantomAccount(publicKey?.toString() || null);
          })
          .catch(() => {
            setPhantomConnected(false);
            setPhantomAccount(null);
          });
      }
    };
    detectPhantom();
  }, []);

  // Connect/Disconnect Phantom (demo)
  const handlePhantomConnect = async () => {
    if (typeof window !== "undefined" && (window as any).solana?.isPhantom) {
      try {
        const res = await (window as any).solana.connect();
        setPhantomConnected(true);
        setPhantomAccount(res.publicKey?.toString() || null);
      } catch {
        setPhantomConnected(false);
        setPhantomAccount(null);
      }
    }
  };

  const handlePhantomDisconnect = async () => {
    if (typeof window !== "undefined" && (window as any).solana?.isPhantom) {
      if ((window as any).solana.isConnected) {
        await (window as any).solana.disconnect();
      }
      setPhantomConnected(false);
      setPhantomAccount(null);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center space-x-2 font-minecraft text-sm text-white bg-black/30 px-4 py-2 rounded-md hover:bg-black/60 transition"
      >
        <UserRound className="h-5 w-5 mr-1 text-cyan-400" />
        <span>{accountName}</span>
        <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          className="absolute right-0 mt-2 min-w-[220px] bg-black/95 backdrop-blur border border-cyan-400/20 rounded-lg shadow-xl z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="px-5 py-4 font-minecraft flex flex-col gap-2 text-white"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-2">
              <UserRound className="h-4 w-4 text-cyan-400" />
              <span>{accountName}</span>
            </div>
            <div className="mb-2 flex items-center gap-2">
              <WalletIcon className="h-4 w-4 text-cyan-400" />
              {phantomConnected ? (
                <span>
                  Phantom: <span className="text-green-400">Connected</span>
                  <br />
                  <span className="truncate text-xs">{phantomAccount}</span>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      handlePhantomDisconnect();
                    }}
                    className="ml-2 text-xs underline text-red-400 hover:text-red-600"
                  >
                    Disconnect
                  </button>
                </span>
              ) : (
                (typeof window !== "undefined" && (window as any).solana?.isPhantom) ? (
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      handlePhantomConnect();
                    }}
                    className="text-xs underline text-cyan-400 hover:text-cyan-300"
                  >
                    Connect Phantom
                  </button>
                ) : (
                  <span className="text-yellow-400">Not Installed</span>
                )
              )}
            </div>
            <button
              className="w-full mt-1 flex items-center bg-cyan-400/10 border border-cyan-400/20 px-3 py-2 rounded-md text-cyan-400 font-minecraft text-sm hover:bg-cyan-400/30 transition"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
                onLogout();
              }}
            >
              <LogOut className="h-4 w-4 mr-1" /> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
