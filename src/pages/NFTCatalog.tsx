
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NFTCatalog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-16 px-4">
        <h1 className="font-minecraft text-4xl md:text-5xl text-center mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-green">
            NFT CATALOG
          </span>
        </h1>
        <div className="text-center mb-16">
          <p className="text-xl text-muted-foreground">
            Coming soon! Browse our complete collection of in-game NFTs.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NFTCatalog;
