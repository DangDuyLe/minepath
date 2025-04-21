
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0d0e16] via-[#20244a] to-[#151a31] px-4">
      <div className="w-full max-w-md bg-black/60 rounded-lg shadow-xl border-2 border-cyan-400/30 p-8 text-center">
        <Sparkles className="mx-auto mb-4 h-8 w-8 text-cyan-400" />
        <h2 className="font-minecraft text-2xl text-cyan-400 mb-2">Login to MinePath</h2>
        <p className="font-minecraft text-white/70 mb-6">Enter demo credentials to proceed.</p>
        <form className="space-y-4" onSubmit={handleLogin} autoComplete="off">
          <Input
            type="text"
            name="account"
            className="bg-black/70 text-white border-cyan-400/30 font-minecraft"
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
            className="bg-black/70 text-white border-cyan-400/30 font-minecraft"
            placeholder="Account Password"
            value={form.password}
            onChange={handleInputChange}
            required
            autoComplete="off"
          />
          {error && (
            <div className="text-red-500 font-minecraft text-sm">{error}</div>
          )}
          <Button
            type="submit"
            className="w-full bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 font-minecraft text-lg py-2 rounded-md hover:bg-cyan-400/50 transition"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
