import React from 'react';
import { motion } from 'framer-motion';

const ROADMAP_DATA = [
  {
    year: "2025 Q1",
    title: "Foundation Phase",
    items: [
      "Launch of MinePath with key features for blockchain exploration",
      "Basic user functions and strategic partnerships",
      "Set up initial NFT marketplace integration"
    ]
  },
  {
    year: "2025 Q2",
    title: "Enhancement Phase",
    items: [
      "Major UI/UX enhancements for improved navigation",
      "Performance optimizations for scalability",
      "Introduction of seasonal in-game events with rewards"
    ]
  },
  {
    year: "2025 Q3",
    title: "Integration Phase",
    items: [
      "Integration of smart contract analysis tools",
      "Security insights and code verification",
      "Expanded cross-server compatibility"
    ]
  },
  {
    year: "2025 Q4",
    title: "Community Phase",
    items: [
      "Focus on community engagement through forums",
      "Educational resources for players",
      "Community-driven governance implementation"
    ]
  }
];

const Roadmap = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-solana-purple/10 via-background/95 to-background/90 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-solana-blue/20 via-solana-purple/20 to-solana-green/20 mb-4">
            <div className="px-4 py-1.5 rounded-full bg-card/60 backdrop-blur-sm text-sm font-medium text-solana-blue border border-solana-blue/10">
              PROJECT TIMELINE
            </div>
          </div>
          
          <h2 className="font-minecraft text-4xl md:text-5xl mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-blue drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              ROADMAP
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Our development journey is carefully planned to deliver ongoing improvements and new features.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-solana-purple/20 transform -translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-24">
            {ROADMAP_DATA.map((phase, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="w-full md:w-5/12 text-center md:text-right">
                  <div className={`inline-block p-1.5 rounded-full mb-3 ${index % 2 === 0 ? 'bg-solana-purple/20' : 'bg-solana-blue/20'}`}>
                    <div className="px-4 py-1.5 rounded-full bg-card/60 backdrop-blur-sm text-sm font-medium border border-solana-purple/10">
                      {phase.year}
                    </div>
                  </div>
                  <h3 className="font-minecraft text-2xl mb-4 text-solana-blue">{phase.title}</h3>
                </div>
                
                <div className="relative">
                  <div className={`w-8 h-8 rounded-full ${index % 2 === 0 ? 'bg-solana-purple' : 'bg-solana-blue'} border-4 border-background z-10 relative`}></div>
                </div>
                
                <div className="w-full md:w-5/12">
                  <div className="bg-card/40 backdrop-blur-md rounded-xl p-6 border border-solana-purple/10">
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-solana-green mr-2 mt-1">▶</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
