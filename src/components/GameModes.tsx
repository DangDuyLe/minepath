import React from 'react';
import { motion } from 'framer-motion';
import { Pickaxe } from './ui/icons/Pickaxe';
import { Wheat, Swords, Hammer, Crown, ChevronRight, Lock } from 'lucide-react';
import { MinecraftIcon } from '@/components/ui/minecraft-icon';

// Define all game modes, marking availability per phase
const GAME_MODES = [
  {
    id: 'mining',
    name: 'Mining',
    description: 'Collect ores to earn $FARM, upgrade with Tool NFTs, and unlock rare lootboxes.',
    icon: Pickaxe,
    bgColor: 'bg-minecraft-stone',
    iconVariant: 'diamond',
    image: '/images/game_mode_mining.png',
    available: true,
    phase: 'Phase 1',
    additionalImages: ['/images/mining_1.png', '/images/mining_2.png'],
  },
  {
    id: 'farming',
    name: 'Farming',
    description: 'Plant crops, harvest $FARM, and boost yields with Pet NFTs and fertilizers.',
    icon: Wheat,
    bgColor: 'bg-minecraft-grass',
    iconVariant: 'grass',
    available: false,
    phase: 'Phase 2',
    previewImage: '/images/farming_preview.png',
  },
  {
    id: 'pvp',
    name: 'PVP',
    description: 'Battle in arenas with Weapon NFTs, earn $FARM, and climb leaderboards.',
    icon: Swords,
    bgColor: 'bg-minecraft-diamond',
    iconVariant: 'iron',
    available: false,
    phase: 'Phase 3',
    previewImage: '/images/pvp_preview.png',
  },
  {
    id: 'crafting',
    name: 'Crafting',
    description: 'Combine resources to create Armor and Potions, powering up your journey.',
    icon: Hammer,
    bgColor: 'bg-minecraft-planks',
    iconVariant: 'gold',
    available: false,
    phase: 'Phase 4',
    previewImage: '/images/crafting_preview.png',
  },
  {
    id: 'bossbattle',
    name: 'Boss Battle MMORPG',
    description: 'Form parties, complete quests, and defeat epic bosses for $PATH and Relic NFTs.',
    icon: Crown,
    bgColor: 'bg-solana-purple',
    iconVariant: 'gold',
    available: false,
    phase: 'Phase 5',
    previewImage: '/images/boss_preview.png',
  },
];

const GameModes: React.FC = () => {
  const availableModes = GAME_MODES.filter((mode) => mode.available);
  const futureModes = GAME_MODES.filter((mode) => !mode.available);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-[#0D0E16] to-[#151A31]">
      {/* Background particle blocks */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 pixelated"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundImage: `url('/images/${
                ['dirt', 'stone', 'diamond', 'gold'][
                  Math.floor(Math.random() * 4)
                ]
              }_block.png')`,
              backgroundSize: 'cover',
              transform: 'rotate(10deg)',
              imageRendering: 'pixelated',
              animation: `float ${7 + Math.random() * 7}s ease-in-out infinite ${
                Math.random() * 7
              }s, rotate ${15 + Math.random() * 10}s linear infinite ${
                Math.random() * 10
              }s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="inline-block p-1.5 rounded-md backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-purple-600/20 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="px-3 py-1 font-minecraft text-cyan-400 text-xs sm:text-sm border-b border-cyan-400/30">
              GAME MODES
            </div>
          </motion.div>

          <motion.h2
            className="font-minecraft text-3xl sm:text-4xl md:text-5xl mb-4 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            DISCOVER THE <span className="text-cyan-400">MINEPATH</span> UNIVERSE
          </motion.h2>

          <motion.p
            className="text-white/80 max-w-lg sm:max-w-2xl mx-auto font-minecraft text-sm sm:text-base tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our Web3 MMORPG ecosystem will feature five unique gameplay modes. Currently in Phase 1,
            only Mining is available. Additional modes will unlock in future phases.
          </motion.p>
        </motion.div>

        {/* Current Available Mode */}
        {availableModes.map((mode) => (
          <motion.div
            key={mode.id}
            className="flex flex-col md:flex-row gap-6 bg-black/30 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 sm:p-6 mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* ...unchanged mining layout... */}
          </motion.div>
        ))}

        {/* Upcoming Modes */}
        <h3 className="font-minecraft text-lg sm:text-xl md:text-2xl text-cyan-400 text-center mb-6">
          UPCOMING GAME MODES
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {futureModes.map((mode) => (
            <motion.div
              key={mode.id}
              className="bg-black/30 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4 sm:p-6 relative flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Phase badge on top */}
              <div className="absolute top-2 right-2 bg-blue-500/20 px-2 py-1 text-xs sm:text-sm font-minecraft text-white/80 rounded backdrop-blur-sm z-20">
                {mode.phase}
              </div>

              {/* Locked preview */}
              {mode.previewImage && (
                <div className="relative mb-3 h-32 sm:h-40 rounded-md z-0 overflow-hidden">
                  <img
                    src={mode.previewImage}
                    alt={`${mode.name} preview`}
                    className="w-full h-full object-cover pixelated grayscale opacity-50"
                  />
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <Lock className="h-8 w-8 text-white opacity-70" />
                  </div>
                </div>
              )}

              {/* Icon + Title */}
              <div className="flex items-center mb-3 relative z-20">
                <div className="relative mr-3">
                  <MinecraftIcon
                    icon={mode.icon as any}
                    size="md"
                    variant={mode.iconVariant as any}
                    className="opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lock className="h-3 w-3 text-white" />
                  </div>
                </div>
                <h4 className="font-minecraft text-base sm:text-lg text-white opacity-50">
                  {mode.name}
                </h4>
              </div>

              {/* Description */}
              <p className="text-white/50 text-xs sm:text-sm font-minecraft mb-6 flex-grow">
                {mode.description}
              </p>

              {/* Disabled button */}
              <button
                disabled
                className="mt-auto w-full text-sm font-minecraft bg-blue-400/10 text-blue-400/40 py-2 border border-blue-400/20 backdrop-blur-sm rounded-md cursor-not-allowed"
              >
                Coming Soon
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModes;
