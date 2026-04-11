import { motion, useAnimation } from 'framer-motion';
import { CardProps } from '../types/cardTypes';
import { Zap } from 'lucide-react';
import { useEffect } from 'react';

export interface CustomCardProps extends CardProps {
  index: number;
  isNew?: boolean;
  pokemonId?: number;
  totalPokemon?: number;
}

type RarityProps = 'common' | 'uncommon' | 'rare' | 'legendary' | 'mystic';

const rarityConfig: Record<
  RarityProps,
  {
    border: string;
    bg: string;
    label: string;
    labelColor: string;
    badgeBg: string;
    badgeText: string;
  }
> = {
  common: {
    border: 'border-yellow-400',
    bg: 'from-yellow-200 via-green-100 to-yellow-50',
    label: 'Comum',
    labelColor: 'text-yellow-400',
    badgeBg: 'bg-yellow-400',
    badgeText: 'text-yellow-900',
  },
  uncommon: {
    border: 'border-green-400',
    bg: 'from-green-300 via-emerald-100 to-green-50',
    label: 'Incomum',
    labelColor: 'text-green-400',
    badgeBg: 'bg-green-400',
    badgeText: 'text-green-900',
  },
  rare: {
    border: 'border-blue-400',
    bg: 'from-blue-400 via-cyan-200 to-blue-50',
    label: 'Raro',
    labelColor: 'text-blue-400',
    badgeBg: 'bg-blue-400',
    badgeText: 'text-blue-900',
  },
  legendary: {
    border: 'border-purple-400',
    bg: 'from-purple-400 via-pink-200 to-purple-50',
    label: 'Lendário',
    labelColor: 'text-purple-400',
    badgeBg: 'bg-purple-400',
    badgeText: 'text-purple-900',
  },
  mystic: {
    border: 'border-red-400',
    bg: 'from-red-400 via-orange-200 to-red-50',
    label: 'Místico',
    labelColor: 'text-red-400',
    badgeBg: 'bg-red-400',
    badgeText: 'text-red-900',
  },
};

export const Card = ({
  image,
  name,
  index,
  isShiny,
  cardRarity,
  isNew,
  pokemonId,
}: CustomCardProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.set({ opacity: 0, scale: 0.5 });
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.2 },
    });
  }, [controls, index]);

  const rarity = rarityConfig[cardRarity] ?? rarityConfig.common;
  const formattedId = pokemonId
    ? `#${String(pokemonId).padStart(3, '0')}`
    : null;

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden shadow-xl border-4 w-44 h-64 flex flex-col cursor-pointer
        ${isShiny ? 'border-yellow-300' : rarity.border}`}
      animate={controls}
      whileHover={{ scale: 1.05, transition: { duration: 0.15, delay: 0 } }}
      onHoverEnd={() =>
        controls.start({ scale: 1, transition: { duration: 0.15 } })
      }
      whileTap={{ scale: 0.97, transition: { duration: 0.1, delay: 0 } }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-b ${isShiny ? 'from-yellow-300 via-pink-300 to-purple-400' : rarity.bg}`}
      />

      {isNew && (
        <span
          className={`absolute top-3 right-3 z-20 whitespace-nowrap text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md ${rarity.badgeBg} ${rarity.badgeText}`}
        >
          Novo <Zap size={11} className='inline' fill='currentColor' />
        </span>
      )}

      <div className='relative z-10 flex flex-1 items-center justify-center'>
        <img
          src={image || ''}
          alt={name}
          className='w-36 h-36 object-contain drop-shadow-xl'
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      <div className='relative z-10 bg-gray-900/90 backdrop-blur-sm px-3 py-2'>
        <p className='text-white font-black text-base capitalize leading-tight'>
          {name}
        </p>
        <div className='flex items-center justify-between mt-0.5'>
          <span
            className={`text-[11px] font-bold uppercase tracking-widest ${isShiny ? 'text-yellow-300' : rarity.labelColor}`}
          >
            {isShiny ? 'Shiny' : rarity.label}
          </span>
          {formattedId && (
            <span className='text-[11px] font-mono text-gray-400'>
              {formattedId}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
