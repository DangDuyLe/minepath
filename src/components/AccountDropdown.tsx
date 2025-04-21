
import React, { useState, useEffect } from "react";
import { ChevronDown, LogOut, UserRound, Wallet as WalletIcon, Settings } from "lucide-react";
import AccountSettingsModal from "./AccountSettingsModal";

type AccountDropdownProps = {
  accountName: string;
  onLogout: () => void;
};

const AccountDropdown: React.FC<AccountDropdownProps> = ({ accountName, onLogout }) => {
  const [open, setOpen] = useState(false);
  const [phantomConnected, setPhantomConnected] = useState(false);
  const [phantomAccount, setPhantomAccount] = useState<string | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Detect Phantom connection status only (no connect/disconnect, just check)
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).solana?.isPhantom) {
      (window as any).solana.connect({ onlyIfTrusted: true }).then(({ publicKey }: any) => {
        setPhantomConnected(true);
        setPhantomAccount(publicKey?.toString() || null);
      }).catch(() => {
        setPhantomConnected(false);
        setPhantomAccount(null);
      });
    }
  }, []);

  return (
    <>
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
            className="absolute right-0 mt-2 min-w-[240px] bg-black/95 backdrop-blur border border-cyan-400/20 rounded-lg shadow-xl z-50"
            onClick={() => setOpen(false)}
          >
            <div
              className="px-5 py-4 font-minecraft flex flex-col gap-3 text-white"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                <UserRound className="h-4 w-4 text-cyan-400" />
                <span>{accountName}</span>
              </div>
              <div className="flex items-center gap-2">
                <WalletIcon className="h-4 w-4 text-cyan-400" />
                {typeof window !== "undefined" && (window as any).solana?.isPhantom ? (
                  <>
                    {phantomConnected ? (
                      <span className="text-green-400">
                        You have connected the wallet
                        <span className="block text-xs text-white/60 truncate">{phantomAccount}</span>
                      </span>
                    ) : (
                      <span className="text-yellow-400">
                        You have not connected the wallet
                      </span>
                    )}
                  </>
                ) : (
                  <span className="text-yellow-400">Phantom not installed</span>
                )}
              </div>
              <button
                className="w-full flex items-center bg-cyan-400/10 border border-cyan-400/20 px-3 py-2 rounded-md text-cyan-400 font-minecraft text-sm hover:bg-cyan-400/30 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                  setSettingsOpen(true);
                }}
              >
                <Settings className="h-4 w-4 mr-2" /> Account Settings
              </button>
              <button
                className="w-full flex items-center bg-red-400/10 border border-red-400/20 px-3 py-2 rounded-md text-red-400 font-minecraft text-sm hover:bg-red-400/30 transition mt-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                  onLogout();
                }}
              >
                <LogOut className="h-4 w-4 mr-2" /> Logout
              </button>
            </div>
          </div>
        )}
      </div>
      <AccountSettingsModal 
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        accountName={accountName}
      />
    </>
  );
};

export default AccountDropdown;
