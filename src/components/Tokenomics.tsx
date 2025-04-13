import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const TOKENOMICS_DATA = [
  { name: 'Liquidity', value: 40, color: '#9945FF' },
  { name: 'Development', value: 20, color: '#14F195' },
  { name: 'Marketing', value: 20, color: '#00C2FF' },
  { name: 'Team', value: 10, color: '#FF9900' },
  { name: 'Community', value: 10, color: '#8B5CF6' },
];

const Tokenomics = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-solana-blue/10 via-background/95 to-background/90 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-solana-green/20 via-solana-purple/20 to-solana-blue/20 mb-4">
            <div className="px-4 py-1.5 rounded-full bg-card/60 backdrop-blur-sm text-sm font-medium text-solana-green border border-solana-green/10">
              TOKENOMICS
            </div>
          </div>
          
          <h2 className="font-minecraft text-4xl md:text-5xl mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-green to-solana-blue drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              SUPPLY & DISTRIBUTION
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Our token distribution is designed to support long-term growth and community rewards while maintaining 
            a sustainable economy.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={TOKENOMICS_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={5}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {TOKENOMICS_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-solana-purple/10 group hover:bg-card/70 transition-all duration-300">
                <h3 className="font-minecraft text-3xl mb-2 text-solana-purple">10M</h3>
                <p className="text-sm text-muted-foreground">Total Supply</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-solana-purple/10 group hover:bg-card/70 transition-all duration-300">
                <h3 className="font-minecraft text-3xl mb-2 text-solana-blue">4M</h3>
                <p className="text-sm text-muted-foreground">Liquidity</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-solana-purple/10 group hover:bg-card/70 transition-all duration-300">
                <h3 className="font-minecraft text-3xl mb-2 text-solana-green">2M</h3>
                <p className="text-sm text-muted-foreground">Development</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-solana-purple/10 group hover:bg-card/70 transition-all duration-300">
                <h3 className="font-minecraft text-3xl mb-2 text-rarity-legendary">2M</h3>
                <p className="text-sm text-muted-foreground">Marketing</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
