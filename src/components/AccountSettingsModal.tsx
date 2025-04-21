
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
    // Here you'd usually propagate the name to backend.
    setEditing(false);
    onOpenChange(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-neutral-900 border-2 border-cyan-400/30 rounded-lg shadow-2xl max-w-sm w-full p-8 relative">
        <h2 className="font-minecraft text-xl text-cyan-400 mb-4">Account Settings</h2>
        <div className="mb-5">
          <label className="block font-minecraft mb-2 text-white/70">Account Name</label>
          {!editing ? (
            <div className="flex items-center justify-between">
              <span className="font-minecraft text-white">{inputValue}</span>
              <Button 
                size="sm"
                className="ml-3 bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 font-minecraft hover:bg-cyan-400/50 transition"
                onClick={() => setEditing(true)}
              >Edit</Button>
            </div>
          ) : (
            <div className="flex items-center">
              <Input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className="font-minecraft bg-black/70 text-white border-cyan-400/30"
                autoFocus
              />
              <Button 
                size="sm"
                className="ml-3 bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 font-minecraft hover:bg-cyan-400/50 transition"
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
