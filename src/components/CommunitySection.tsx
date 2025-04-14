import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, CalendarDays, MessageSquare, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunitySection = () => {
  return (
    <section className="py-24 relative overflow-hidden minecraft-dirt-bg">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/images/bg-pattern.png')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-solana-blue/20 via-solana-purple/20 to-solana-green/20 mb-4">
            <div className="px-4 py-1.5 rounded-full bg-card/60 backdrop-blur-sm text-sm font-medium text-solana-blue">
              JOIN US
            </div>
          </div>
          
          <h2 className="font-minecraft text-4xl md:text-5xl mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-solana-blue drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              JOIN THE MINEPATH COMMUNITY
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with thousands of players across the world, form guilds, and participate in exclusive events.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Global Reach */}
          <motion.div 
            className="minecraft-container p-6 border-minecraft-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-minecraft-blue mr-4" />
              <h3 className="font-minecraft text-2xl text-minecraft-blue">GLOBAL REACH</h3>
            </div>
            <p className="text-white mb-6">
              Connect with thousands of players across Cross-Server networks and compete in real-time leaderboards.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-black/50 p-2">
                <div className="font-minecraft text-minecraft-blue text-xl">1000+</div>
                <div className="text-xs">Daily Players</div>
              </div>
              <div className="bg-black/50 p-2">
                <div className="font-minecraft text-minecraft-blue text-xl">50+</div>
                <div className="text-xs">Countries</div>
              </div>
              <div className="bg-black/50 p-2">
                <div className="font-minecraft text-minecraft-blue text-xl">5</div>
                <div className="text-xs">Game Modes</div>
              </div>
            </div>
          </motion.div>
          
          {/* Guilds & Parties */}
          <motion.div 
            className="minecraft-container p-6 border-minecraft-purple"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Trophy className="h-8 w-8 text-minecraft-purple mr-4" />
              <h3 className="font-minecraft text-2xl text-minecraft-purple">GUILDS & PARTIES</h3>
            </div>
            <p className="text-white mb-6">
              Form alliances, tackle boss battles, and dominate leaderboards together. Guilds earn bonus rewards!
            </p>
            <div className="bg-black/50 p-4">
              <div className="font-minecraft text-minecraft-purple mb-2">TOP GUILDS</div>
              <div className="flex justify-between items-center mb-2">
                <span>Diamond Miners</span>
                <span className="font-minecraft text-minecraft-gold">1250 $FARM</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Emerald Knights</span>
                <span className="font-minecraft text-minecraft-gold">980 $FARM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Redstone Wizards</span>
                <span className="font-minecraft text-minecraft-gold">840 $FARM</span>
              </div>
            </div>
          </motion.div>
          
          {/* Limited Events */}
          <motion.div 
            className="minecraft-container p-6 border-minecraft-gold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <CalendarDays className="h-8 w-8 text-minecraft-gold mr-4" />
              <h3 className="font-minecraft text-2xl text-minecraft-gold">LIMITED EVENTS</h3>
            </div>
            <p className="text-white mb-6">
              Participate in exclusive events like Crystal Rush or Boss Raid Festival for rare rewards and unique NFTs.
            </p>
            <div className="bg-black/50 p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="font-minecraft text-minecraft-gold">DRAGON HUNT</div>
                  <div className="text-xs">Starting in 3 days</div>
                </div>
                <div className="bg-minecraft-gold/20 p-1.5 text-sm">
                  LEGENDARY REWARDS
                </div>
              </div>
              <button className="minecraft-btn-green text-sm w-full">
                Set Reminder
              </button>
            </div>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="minecraft-container p-6 border-minecraft-green"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <MessageSquare className="h-8 w-8 text-minecraft-green mr-4" />
              <h3 className="font-minecraft text-2xl text-minecraft-green">JOIN OUR CHANNELS</h3>
            </div>
            <p className="text-white mb-6">
              Follow us for the latest news, updates, and exclusive giveaways. New followers receive 1 $FARM!
            </p>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://discord.gg/minepath" 
                target="_blank" 
                rel="noopener noreferrer"
                className="minecraft-btn-green flex items-center justify-center"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Join Discord
              </a>
              <a 
                href="https://twitter.com/minepath" 
                target="_blank" 
                rel="noopener noreferrer"
                className="minecraft-btn-blue flex items-center justify-center"
              >
                <Twitter className="mr-2 h-4 w-4" />
                Follow on X
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
