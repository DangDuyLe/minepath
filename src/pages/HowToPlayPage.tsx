
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Copy, CheckCircle2, Wallet, Pickaxe, Coins, Share2, ChevronRight, Server, Download, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const SERVER_ADDRESS = 'play.minepath.fun';

const SETUP_STEPS = [
  {
    number: '01',
    title: 'Launch Minecraft Java Edition',
    description: 'Make sure you have Minecraft Java Edition (version 1.20+) installed on your computer',
    icon: Play,
    details: [
      'MinePath requires Minecraft Java Edition',
      'Version 1.18.2 is recommended',
      'Available on Windows, Mac, and Linux'
    ]
  },
  {
    number: '02',
    title: 'Add MinePath Server',
    description: 'Open Multiplayer and add our server address to your server list',
    icon: Server,
    details: [
      'Click "Multiplayer" from the main menu',
      'Click "Add Server"',
      'Enter server name: MinePath',
      `Server address: ${SERVER_ADDRESS}`
    ]
  },
  {
    number: '03',
    title: 'Join & Create Wallet',
    description: 'Connect to the server and follow the in-game prompts to set up your crypto wallet',
    icon: Wallet,
    details: [
      'Join the MinePath server',
      'Follow the welcome tutorial',
      'Create your in-game wallet (takes 30 seconds)',
      'Your wallet is secured by your Minecraft account'
    ]
  },
  {
    number: '04',
    title: 'Start Mining & Earning',
    description: 'Every block you mine earns you token rewards automatically',
    icon: Pickaxe,
    details: [
      'Mine any block to start earning',
      'Rare ores give bigger rewards',
      'Track your earnings in real-time',
      'Rewards appear instantly in your wallet'
    ]
  }
];

const GAMEPLAY_FEATURES = [
  {
    icon: Pickaxe,
    title: 'Mine to Earn',
    description: 'Every block you mine generates token rewards. Diamond and rare ores earn premium rewards.',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Coins,
    title: 'Collect Rewards',
    description: 'Your earnings accumulate automatically. View your balance anytime.',
    color: 'from-yellow-400 to-orange-500'
  }
];

const FAQS = [
  {
    question: 'Do I need cryptocurrency experience?',
    answer: 'No! MinePath handles everything automatically. Just play Minecraft normally and earn rewards.'
  },
  {
    question: 'What Minecraft version do I need?',
    answer: 'MinePath works best with Minecraft Java Edition 1.18.2.'
  }
];

const HowToPlayPage = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  useEffect(() => {
    // Ensure the page loads scrolled to top when navigated to
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (e) {
      // fallback
      window.scrollTo(0, 0);
    }
  }, []);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const copyServerAddress = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_ADDRESS);
      setCopiedAddress(true);
      toast({
        title: 'Server address copied!',
        description: SERVER_ADDRESS
      });
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textarea = document.createElement('textarea');
      textarea.value = SERVER_ADDRESS;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedAddress(true);
      toast({
        title: 'Server address copied!',
        description: SERVER_ADDRESS
      });
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ 
      background: 'linear-gradient(180deg, rgba(13,14,22,1) 0%, rgba(21,26,49,1) 100%)'
    }}>
      <Navbar />
      
      <main className="flex-grow relative">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/public/lovable-uploads/571ce867-0253-4784-ba20-b363e73c1463.png')] bg-repeat"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(isMobile ? 10 : 20)].map((_, i) => (
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
        </div>

        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block p-1.5 rounded-md backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-purple-600/20 mb-5">
                <div className="px-4 py-1.5 font-minecraft text-cyan-400 text-sm border-b border-cyan-400/30">
                  GETTING STARTED GUIDE
                </div>
              </div>
              
              <h1 className="font-minecraft text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
                <span className="text-cyan-400">HOW TO</span> GET STARTED
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Join MinePath and start earning crypto while playing Minecraft. 
                Follow these simple steps to begin your mine-to-earn journey.
              </p>

              {/* Server Address Copy Box */}
              <div className="max-w-lg mx-auto bg-black/40 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 mb-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 text-left">
                    <p className="text-xs text-white/60 font-minecraft mb-1">SERVER ADDRESS</p>
                    <p className="font-minecraft text-lg text-cyan-400">{SERVER_ADDRESS}</p>
                  </div>
                  <button
                    onClick={copyServerAddress}
                    className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 rounded transition-colors flex items-center gap-2"
                  >
                    {copiedAddress ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="font-minecraft text-sm text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-cyan-400" />
                        <span className="font-minecraft text-sm text-white">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Setup Steps */}
            <div className="max-w-5xl mx-auto space-y-8 mb-16">
              {SETUP_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-black/30 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex items-start gap-4 md:gap-6 flex-1">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                          <step.icon className="h-6 w-6 md:h-8 md:w-8 text-black" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-minecraft text-2xl md:text-3xl text-cyan-400">{step.number}</span>
                          <h3 className="font-minecraft text-xl md:text-2xl text-white">{step.title}</h3>
                        </div>
                        <p className="text-white/80 mb-4">{step.description}</p>
                        
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                              <ChevronRight className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gameplay Features */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-minecraft text-3xl md:text-4xl text-center mb-12 text-white">
                GAMEPLAY <span className="text-cyan-400">FEATURES</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {GAMEPLAY_FEATURES.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-black/30 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-minecraft text-xl text-cyan-400 mb-3">{feature.title}</h3>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-minecraft text-3xl md:text-4xl text-center mb-12 text-white">
                FREQUENTLY ASKED <span className="text-cyan-400">QUESTIONS</span>
              </h2>
              
              <div className="space-y-4">
                {FAQS.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-black/30 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-minecraft text-lg text-cyan-400 mb-3">{faq.question}</h3>
                    <p className="text-white/80">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="font-minecraft text-xl text-white mb-6">Ready to start earning?</p>
              <button
                onClick={copyServerAddress}
                className="play-now-btn relative px-8 py-3 bg-white text-black font-minecraft tracking-wider hover:scale-105 transition-all duration-300 overflow-hidden group inline-flex items-center"
              >
                <span className="relative z-10 flex items-center">
                  {copiedAddress ? 'Address Copied!' : 'Copy Server Address'}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowToPlayPage;
