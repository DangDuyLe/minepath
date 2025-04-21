
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const DEMO_CREDENTIALS = { account: "Dangduy", password: "1234" };

const LoginPage: React.FC = () => {
  const [form, setForm] = useState({ account: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      form.account === DEMO_CREDENTIALS.account &&
      form.password === DEMO_CREDENTIALS.password
    ) {
      localStorage.setItem("mp_account", form.account);
      setError("");
      navigate("/", { replace: true });
      window.dispatchEvent(new Event("storage"));
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#1A1F2C] via-[#191b28] to-[#090a12] px-4">
      <div className="w-full max-w-md glass-card relative rounded-xl shadow-2xl border-4 border-cyan-400/30 p-10 text-center flex flex-col items-center animate-fade-in" style={{
        boxShadow: "0 4px 40px 0 rgba(9,200,255,0.15), 0 0 0 2px #146C74 inset",
        background: "linear-gradient(120deg, rgba(0,195,255,0.18) 10%, rgba(191,175,255,0.09) 100%), rgba(0,0,0,0.65)",
        backdropFilter: "blur(10px)"
      }}>
        <Sparkles className="mx-auto mb-4 h-10 w-10 text-cyan-400 drop-shadow-glow animate-pulse-glow" />
        <h2 className="font-minecraft text-2xl text-cyan-400 mb-2 glow-effect">Login to MinePath</h2>
        <p className="font-minecraft text-white/70 mb-6">Enter demo credentials to proceed.</p>
        <form className="space-y-4 w-full" onSubmit={handleLogin} autoComplete="off">
          <Input
            type="text"
            name="account"
            className="bg-black/60 text-cyan-200 border-cyan-400/40 font-minecraft"
            placeholder="Account Name"
            value={form.account}
            onChange={handleInputChange}
            required
            autoFocus
            autoComplete="off"
          />
          <Input
            type="password"
            name="password"
            className="bg-black/60 text-cyan-200 border-cyan-400/40 font-minecraft"
            placeholder="Account Password"
            value={form.password}
            onChange={handleInputChange}
            required
            autoComplete="off"
          />
          {error && (
            <div className="text-red-500 font-minecraft text-sm glow-effect animate-pulse">{error}</div>
          )}
          <Button
            type="submit"
            className="w-full minecraft-3d-btn bg-cyan-400/30 text-white border-cyan-400/50 font-minecraft text-lg py-2 rounded-lg glow-effect hover:bg-cyan-400/60 animate-float"
            style={{
              background: "linear-gradient(120deg, #13b0ff88 0%, #007aaf66 100%)"
            }}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
