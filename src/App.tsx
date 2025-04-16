import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NFTCatalog from "./pages/NFTCatalog";
import HowToPlayPage from "./pages/HowToPlayPage";
import StorePage from "./pages/StorePage";
import MinecraftCursor from './components/MinecraftCursor';
import { AnimatePresence } from "framer-motion";

// Create a custom Minecraft-themed toast styles
const toastStyles = {
  background: 'url("/images/bg-planks.png")',
  color: 'white',
  border: '4px solid #8b5a2b',
  fontFamily: '"Minecraft", monospace',
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <MinecraftCursor />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/nfts" element={<NFTCatalog />} />
              <Route path="/how-to-play" element={<HowToPlayPage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </AnimatePresence>
  );
};

export default App;
