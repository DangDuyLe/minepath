import React from 'react';
import { motion } from 'framer-motion';
import { Code, Gamepad2, TrendingUp, Zap, Clock, DollarSign, Users, Rocket } from 'lucide-react';

type Persona = {
  id: string;
  name: string;
  subtitle: string;
  type: 'B2B' | 'B2C';
  image: string;
  description: string;
  painPoints: string[];
  benefits: string[];
  icon: any;
  gradient: string;
}

const PERSONAS: Persona[] = [
  {
    id: 'dev-alex',
    name: 'Dev Alex',
    subtitle: 'Server Developer',
    type: 'B2B',
    image: '/images/dev_persona.png',
    description: 'A server developer looking to retain players and create sustainable revenue without spending months on blockchain infrastructure.',
    painPoints: [
      'Wasting time rebuilding Web3 infrastructure from scratch',
      'Losing players to servers with better economies',
      'No monetization beyond donations and cosmetics',
      'Complex blockchain integration with steep learning curve'
    ],
    benefits: [
      'Launch Mine-to-Earn economy in minutes with plug-and-play SDK',
      'Save 90% of development time and focus on gameplay',
      'Tap into shared liquidity and cross-server player base',
      'New revenue stream from transaction fees and player retention'
    ],
    icon: Code,
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'grinder-sam',
    name: 'Grinder Sam',
    subtitle: 'Dedicated Player',
    type: 'B2C',
    image: '/images/player_persona.png',
    description: 'A dedicated Minecraft player with 500+ hours invested, wanting their grinding and building to have real-world value.',
    painPoints: [
      'Hundreds of hours grinding with no real-world value',
      'Server resets wipe all progress and investments',
      'Can\'t trade or sell valuable items for real money',
      'Complicated crypto wallets and blockchain friction'
    ],
    benefits: [
      'Every mining action instantly rewards with real value',
      'Zero friction—no crypto knowledge needed to play',
      'Trade and sell items across servers for real earnings',
      'True ownership—your items can\'t be taken or reset'
    ],
    icon: Gamepad2,
    gradient: 'from-green-500 to-emerald-600'
  }
];

const TargetPersonas = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        <div className="absolute inset-0 bg-[url('/images/bg-castle.png')] bg-no-repeat bg-cover bg-center opacity-30"></div>
        <div className="absolute left-0 inset-y-0 w-16 opacity-20">
          <div className="h-full w-full bg-[url('/public/lovable-uploads/571ce867-0253-4784-ba20-b363e73c1463.png')] bg-repeat-y"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block p-1.5 rounded-md bg-gradient-to-r from-blue-600/20 to-purple-600/20 mb-5"
          >
            <div className="px-4 py-1.5 font-minecraft text-cyan-400 text-sm border-b border-cyan-400/30">
              WHO WE SERVE
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-minecraft text-3xl md:text-4xl lg:text-5xl mb-6 text-white"
          >
            FROM <span className="text-cyan-400">CREATOR</span> → <span className="text-green-400">EARNER</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto font-minecraft"
          >
            MinePath empowers both server developers (B2B) and dedicated players (B2C) 
            to unlock real value in the Minecraft ecosystem.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {PERSONAS.map((persona, index) => (
            <PersonaCard 
              key={persona.id} 
              persona={persona} 
              index={index} 
            />
          ))}
        </div>

        {/* Value Proposition Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-4 text-center">
            <Clock className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
            <div className="font-minecraft text-2xl text-white mb-1">90%</div>
            <div className="font-minecraft text-xs text-white/60">Time Saved</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-4 text-center">
            <Users className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <div className="font-minecraft text-2xl text-white mb-1">140M+</div>
            <div className="font-minecraft text-xs text-white/60">Potential Users</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-4 text-center">
            <Rocket className="h-8 w-8 text-purple-400 mx-auto mb-2" />
            <div className="font-minecraft text-2xl text-white mb-1">B2B2C</div>
            <div className="font-minecraft text-xs text-white/60">Scalable Model</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 p-4 text-center">
            <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="font-minecraft text-2xl text-white mb-1">Minutes</div>
            <div className="font-minecraft text-xs text-white/60">To Integrate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PersonaCard = ({ persona, index }: { persona: Persona, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 overflow-hidden group"
    >
      {/* Header with gradient */}
      <div className={`relative p-6 bg-gradient-to-r ${persona.gradient}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <persona.icon className="h-10 w-10 text-white mr-3" />
            <div>
              <h3 className="font-minecraft text-2xl text-white">{persona.name}</h3>
              <p className="font-minecraft text-sm text-white/80">{persona.subtitle}</p>
            </div>
          </div>
          <div className={`px-3 py-1 bg-white/20 backdrop-blur-sm font-minecraft text-xs text-white border border-white/30`}>
            {persona.type}
          </div>
        </div>
        <p className="text-white/90 text-sm font-minecraft mt-3">{persona.description}</p>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Pain Points */}
        <div className="mb-6">
          <h4 className="font-minecraft text-lg text-red-400 mb-3 flex items-center">
            <span className="mr-2">⚠️</span> Pain Points
          </h4>
          <ul className="space-y-2">
            {persona.painPoints.map((point, idx) => (
              <li key={idx} className="flex items-start text-sm text-white/70">
                <span className="text-red-400 mr-2 mt-1">✗</span>
                <span className="font-minecraft">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="font-minecraft text-lg text-green-400 mb-3 flex items-center">
            <span className="mr-2">✓</span> How MinePath Helps
          </h4>
          <ul className="space-y-2">
            {persona.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start text-sm text-white/80">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span className="font-minecraft">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 pt-0">
        <button className={`w-full py-3 font-minecraft bg-gradient-to-r ${persona.gradient} text-white hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
          {persona.type === 'B2B' ? 'Get SDK Access' : 'Start Playing'}
          <TrendingUp className="ml-2 h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default TargetPersonas;
