
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import HowToPlayPage from './pages/HowToPlayPage';
import StorePage from './pages/StorePage';
import LoginPage from './pages/LoginPage';
import NFTCatalog from './pages/NFTCatalog';
import NFTDetail from './pages/NFTDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/how-to-play" element={<HowToPlayPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/nfts" element={<NFTCatalog />} />
        <Route path="/nfts/:id" element={<NFTDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
