import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { MinecraftProgress } from '@/components/ui/minecraft-progress';

// Token distribution for $MINE (in-game currency)
const TOKENOMICS_DATA = [
  { name: 'Mining Rewards', value: 40, color: '#9945FF' },
  { name: 'Quest Rewards', value: 25, color: '#14F195' },
  { name: 'PvP & Events', value: 15, color: '#00C2FF' },
  { name: 'Marketplace Fees', value: 10, color: '#FF9900' },
  { name: 'Liquidity Pool', value: 10, color: '#8B5CF6' },
];

// Detailed breakdown of token utility
const tokenUtility = [
  { name: "Mining Rewards", color: "#9945FF", amount: "40%", percentage: "40%", detail: "Earn tokens by mining blocks and resources" },
  { name: "Quest Rewards", color: "#14F195", amount: "25%", percentage: "25%", detail: "Complete quests and challenges for rewards" },
  { name: "PvP & Events", color: "#5feaea", amount: "15%", percentage: "15%", detail: "Win PvP battles and limited-time events" },
  { name: "Marketplace Fees", color: "#f8bd17", amount: "10%", percentage: "10%", detail: "Small fees sustain the economy long-term" },
  { name: "Liquidity Pool", color: "#b0b0b0", amount: "10%", percentage: "10%", detail: "Ensures you can always trade your earnings" }
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
            <span className="bg-clip-text ">
              SUSTAINABLE <span className="text-blue-500">ECONOMY</span>
            </span>
          </h2>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 font-minecraft tracking-wide">
            MinePath's economy is designed for long-term sustainability. Real rewards from real gameplay—
            powered by Solana blockchain technology.
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
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                whileInView={{ scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="minecraft-chest col-span-full mb-8 bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-6 rounded-lg"
              >
                <h3 className="font-minecraft text-2xl mb-6 text-minecraft-gold text-center">TOKEN UTILITY</h3>
                <div className="bg-black/60 border border-cyan-400/30 p-4">
                  <div className="flex justify-center items-center mb-4">
                    <div className="text-minecraft-gold font-minecraft text-4xl animate-pulse-glow">
                      $MINE
                    </div>
                  </div>
                  <p className="text-center text-white/80 font-minecraft text-sm">
                    In-game currency earned through mining, quests, and PvP. Trade on DEX or use in-game.
                  </p>
                </div>
                
                <div className="mt-4">
                  <ul className="space-y-2">
                    {tokenUtility.map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-black/50 border border-cyan-400/20 px-3 py-2"
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-minecraft" style={{ color: item.color }}>{item.name}</span>
                          <span className="font-minecraft text-white">{item.amount}</span>
                        </div>
                        <p className="text-xs text-white/60">{item.detail}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-4 rounded-lg group hover:bg-black/50 transition-all duration-300">
                <h3 className="font-minecraft text-3xl mb-4 text-[#9945FF]">40%</h3>
                <p className="text-sm text-white/80 font-minecraft">Mining Rewards</p>
                <div className="mt-3">
                  <MinecraftProgress 
                    value={40} 
                    max={100} 
                    variant="blue" 
                    height="md" 
                    showValue 
                  />
                </div>
                <p className="text-xs text-white/60 mt-2">Earn tokens by mining blocks and resources</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-4 rounded-lg group hover:bg-black/50 transition-all duration-300">
                <h3 className="font-minecraft text-3xl mb-4 text-[#14F195]">25%</h3>
                <p className="text-sm text-white/80 font-minecraft">Quest Rewards</p>
                <div className="mt-3">
                  <MinecraftProgress 
                    value={25} 
                    max={100} 
                    variant="green" 
                    height="md" 
                    showValue 
                  />
                </div>
                <p className="text-xs text-white/60 mt-2">Complete quests and challenges for rewards</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-4 rounded-lg group hover:bg-black/50 transition-all duration-300">
                <h3 className="font-minecraft text-3xl mb-4 text-[#00C2FF]">15%</h3>
                <p className="text-sm text-white/80 font-minecraft">PvP & Events</p>
                <div className="mt-3">
                  <MinecraftProgress 
                    value={15} 
                    max={100} 
                    variant="blue" 
                    height="md" 
                    showValue 
                  />
                </div>
                <p className="text-xs text-white/60 mt-2">Win PvP battles and limited-time events</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-4 rounded-lg group hover:bg-black/50 transition-all duration-300">
                <h3 className="font-minecraft text-3xl mb-4 text-[#FF9900]">10%</h3>
                <p className="text-sm text-white/80 font-minecraft">Marketplace Fees</p>
                <div className="mt-3">
                  <MinecraftProgress 
                    value={10} 
                    max={100} 
                    variant="gold" 
                    height="md" 
                    showValue 
                  />
                </div>
                <p className="text-xs text-white/60 mt-2">Small fees sustain the economy long-term</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-4 rounded-lg group hover:bg-black/50 transition-all duration-300 col-span-full">
                <h3 className="font-minecraft text-3xl mb-4 text-[#8B5CF6]">10%</h3>
                <p className="text-sm text-white/80 font-minecraft">Liquidity Pool</p>
                <div className="mt-3">
                  <MinecraftProgress 
                    value={10} 
                    max={100} 
                    variant="blue" 
                    height="md" 
                    showValue 
                  />
                </div>
                <p className="text-xs text-white/60 mt-2">Ensures you can always trade your earnings</p>
              </div>
              
              {/* Economy highlights */}
              <motion.div 
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="col-span-full mt-4 bg-black/40 backdrop-blur-sm border-2 border-[#00C2FF]/50 p-4 rounded-lg"
              >
                <h3 className="font-minecraft text-xl mb-3 text-center text-[#00C2FF]">WHY IT WORKS</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-black/50 border border-cyan-400/20 p-3 text-center">
                    <div className="font-minecraft text-2xl text-cyan-400 mb-2">No Inflation</div>
                    <div className="font-minecraft text-white text-sm">Sustainable Model</div>
                  </div>
                  <div className="bg-black/50 border border-cyan-400/20 p-3 text-center">
                    <div className="font-minecraft text-2xl text-green-400 mb-2">Real Utility</div>
                    <div className="font-minecraft text-white text-sm">In-game & Trading</div>
                  </div>
                  <div className="bg-black/50 border border-cyan-400/20 p-3 text-center">
                    <div className="font-minecraft text-2xl text-purple-400 mb-2">Fair Launch</div>
                    <div className="font-minecraft text-white text-sm">Everyone Earns</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
