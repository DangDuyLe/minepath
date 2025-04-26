
import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { ChartLineUp } from 'lucide-react';

const playerData = [
  { month: 'Jan', players: 1200 },
  { month: 'Feb', players: 1800 },
  { month: 'Mar', players: 2400 },
  { month: 'Apr', players: 3600 },
  { month: 'May', players: 4800 },
  { month: 'Jun', players: 6000 },
];

const nftData = [
  { name: 'Common', value: 45 },
  { name: 'Rare', value: 30 },
  { name: 'Epic', value: 15 },
  { name: 'Legendary', value: 10 },
];

const rewardData = [
  { month: 'Jan', rewards: 5000 },
  { month: 'Feb', rewards: 7500 },
  { month: 'Mar', rewards: 10000 },
  { month: 'Apr', rewards: 15000 },
  { month: 'May', rewards: 22500 },
  { month: 'Jun', rewards: 30000 },
];

const COLORS = ['#00C2FF', '#14F195', '#9945FF', '#FF9900'];

const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/public/lovable-uploads/571ce867-0253-4784-ba20-b363e73c1463.png')] bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mb-4">
            <div className="px-4 py-1 rounded-full bg-black/60 backdrop-blur-sm text-sm font-medium text-cyan-400 flex items-center">
              <ChartLineUp className="w-4 h-4 mr-2" />
              STATISTICS
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-minecraft mb-6 text-white">
            Our <span className="text-cyan-400">Growth</span> Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Player Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-6 rounded-lg"
          >
            <h3 className="font-minecraft text-xl mb-6 text-center text-white">Monthly Active Players</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={playerData}>
                  <defs>
                    <linearGradient id="playerGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00C2FF" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#00C2FF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(0, 194, 255, 0.3)',
                      borderRadius: '8px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="players"
                    stroke="#00C2FF"
                    fill="url(#playerGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* NFT Distribution Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-6 rounded-lg"
          >
            <h3 className="font-minecraft text-xl mb-6 text-center text-white">NFT Rarity Distribution</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={nftData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => `${name} ${value}%`}
                  >
                    {nftData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(0, 194, 255, 0.3)',
                      borderRadius: '8px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Rewards Distribution Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-6 rounded-lg lg:col-span-2"
          >
            <h3 className="font-minecraft text-xl mb-6 text-center text-white">Monthly Rewards Distribution</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={rewardData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(0, 194, 255, 0.3)',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="rewards" fill="#14F195">
                    {rewardData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={`${COLORS[1]}${index % 2 === 0 ? 'FF' : 'CC'}`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
