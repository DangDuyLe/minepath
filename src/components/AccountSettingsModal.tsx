
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  accountName: string;
};

const AccountSettingsModal: React.FC<Props> = ({ open, onOpenChange, accountName }) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(accountName);

  // For demo: Does not persist changes, just allows renaming locally
  const handleSave = () => {
    setEditing(false);
    onOpenChange(false);
  };

  if (!open) return null;

  // Glassy style and wow effect
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div
        className="bg-gradient-to-br from-[#232a37]/85 via-[#0b1120]/90 to-[#232a37]/85 border-4 border-cyan-400/25 rounded-2xl shadow-2xl max-w-sm w-full p-10 relative glass-card animate-scale-in"
        style={{
          boxShadow: "0 0 32px 4px #7E69AB55, 0 0 0 2px #146C74 inset",
          backdropFilter: "blur(18px)"
        }}
      >
        <h2 className="font-minecraft text-2xl text-cyan-400 mb-4 glow-effect">Account Settings</h2>
        <div className="mb-7">
          <label className="block font-minecraft mb-2 text-white/80">Account Name</label>
          {!editing ? (
            <div className="flex items-center justify-between">
              <span className="font-minecraft text-white">{inputValue}</span>
              <Button 
                size="sm"
                className="ml-3 border border-cyan-400/40 bg-cyan-400/15 text-cyan-300 glow-effect font-minecraft hover:bg-cyan-400/30 transition"
                onClick={() => setEditing(true)}
              >Edit</Button>
            </div>
          ) : (
            <div className="flex items-center">
              <Input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className="font-minecraft bg-black/70 text-white border-cyan-400/40 glow-effect"
                autoFocus
              />
              <Button 
                size="sm"
                className="ml-3 border border-cyan-400/40 bg-cyan-400/15 text-cyan-300 glow-effect font-minecraft hover:bg-cyan-400/30 transition"
                onClick={handleSave}
              >Save</Button>
              <Button 
                size="sm"
                variant="ghost"
                className="ml-2 text-gray-400 font-minecraft"
                onClick={() => setEditing(false)}
              >Cancel</Button>
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <Button
            size="sm"
            variant="ghost"
            className="text-gray-400 font-minecraft"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsModal;
