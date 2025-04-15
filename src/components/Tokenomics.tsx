
import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { MinecraftProgress } from '@/components/ui/minecraft-progress';

const TOKENOMICS_DATA = [
  { name: 'Liquidity', value: 40, color: '#9945FF' },
  { name: 'Development', value: 20, color: '#14F195' },
  { name: 'Marketing', value: 20, color: '#00C2FF' },
  { name: 'Team', value: 10, color: '#FF9900' },
  { name: 'Community', value: 10, color: '#8B5CF6' },
];

// Minecraft chest contents animation
const chestContents = [
  { name: "Diamond", color: "#5feaea", amount: "x64", delay: 0.1 },
  { name: "Emerald", color: "#4adc65", amount: "x32", delay: 0.2 },
  { name: "Gold", color: "#f8bd17", amount: "x48", delay: 0.3 },
  { name: "Iron", color: "#b0b0b0", amount: "x64", delay: 0.4 },
];

const Tokenomics = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ 
      background: 'linear-gradient(180deg, rgba(21,26,49,1) 0%, rgba(13,14,22,1) 100%)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed' 
    }}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/public/lovable-uploads/571ce867-0253-4784-ba20-b363e73c1463.png')] bg-repeat"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          background: 'radial-gradient(circle, rgba(10, 21, 77, 0.3) 0%, rgba(13, 14, 22, 0) 70%)'
        }}></div>
        
        {/* Minecraft particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute pixelated w-2 h-2 bg-white opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating blocks */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={`block-${i}`}
              className="absolute pixelated w-8 h-8"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundImage: `url('/images/${['dirt', 'stone', 'diamond', 'gold'][Math.floor(Math.random() * 4)]}_block.png')`,
                backgroundSize: 'cover',
                transform: 'rotate(10deg)',
                imageRendering: 'pixelated',
                animation: `float ${7 + Math.random() * 7}s ease-in-out infinite ${Math.random() * 7}s, rotate ${15 + Math.random() * 10}s linear infinite ${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-block p-1.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-400/20 mb-4 border border-cyan-400/30">
            <div className="px-4 py-1.5 bg-black/60 backdrop-blur-sm font-minecraft text-cyan-400 text-sm">
              TOKENOMICS
            </div>
          </div>
          
          <h2 className="font-minecraft text-4xl md:text-5xl mb-6 mt-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)]">
              SUPPLY & DISTRIBUTION
            </span>
          </h2>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 font-minecraft tracking-wide">
            Our token distribution is designed to support long-term growth and community rewards while maintaining 
            a sustainable economy.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[400px]">
              {/* Minecraft-styled pie chart border */}
              <div className="relative h-full">
                <div className="absolute inset-0 border border-cyan-400/30 bg-black/60 backdrop-blur-sm"></div>
                <ResponsiveContainer width="100%" height="100%" className="relative z-10">
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
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="#000" strokeWidth={2} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                
                {/* Corner pixels */}
                <div className="absolute top-0 left-0 w-3 h-3 bg-white/20"></div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-white/20"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 bg-black/40"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-black/40"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Minecraft chest animation */}
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                whileInView={{ scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="minecraft-chest col-span-full mb-8 bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-6 rounded-lg"
              >
                <h3 className="font-minecraft text-2xl mb-6 text-minecraft-gold text-center">TOTAL SUPPLY</h3>
                <div className="bg-black/60 border border-cyan-400/30 p-4">
                  <div className="flex justify-center items-center">
                    <div className="text-minecraft-gold font-minecraft text-5xl animate-pulse-glow">
                      10M
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <ul className="space-y-2">
                    {chestContents.map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: item.delay }}
                        viewport={{ once: true }}
                        className="flex justify-between items-center bg-black/50 border border-cyan-400/20 px-3 py-2"
                      >
                        <span className="font-minecraft" style={{ color: item.color }}>{item.name}</span>
                        <span className="font-minecraft text-white">{item.amount}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-4 rounded-lg group hover:bg-black/50 transition-all duration-300">
                <h3 className="font-minecraft text-3xl mb-4 text-minecraft-blue">4M</h3>
                <p className="text-sm text-white/80 font-minecraft">Liquidity</p>
                <div className="mt-3">
                  <MinecraftProgress 
                    value={40} 
                    max={100} 
                    variant="blue" 
                    height="md" 
                    showValue 
                  />
                </div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-4 rounded-lg group hover:bg-black/50 transition-all duration-300">
                <h3 className="font-minecraft text-3xl mb-4 text-minecraft-green">2M</h3>
                <p className="text-sm text-white/80 font-minecraft">Development</p>
                <div className="mt-3">
                  <MinecraftProgress 
                    value={20} 
                    max={100} 
                    variant="green" 
                    height="md" 
                    showValue 
                  />
                </div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-4 rounded-lg group hover:bg-black/50 transition-all duration-300">
                <h3 className="font-minecraft text-3xl mb-4 text-minecraft-gold">2M</h3>
                <p className="text-sm text-white/80 font-minecraft">Marketing</p>
                <div className="mt-3">
                  <MinecraftProgress 
                    value={20} 
                    max={100} 
                    variant="gold" 
                    height="md" 
                    showValue 
                  />
                </div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-4 rounded-lg group hover:bg-black/50 transition-all duration-300">
                <h3 className="font-minecraft text-3xl mb-4 text-rarity-epic">2M</h3>
                <p className="text-sm text-white/80 font-minecraft">Team & Community</p>
                <div className="mt-3">
                  <MinecraftProgress 
                    value={20} 
                    max={100} 
                    variant="red" 
                    height="md" 
                    showValue 
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
