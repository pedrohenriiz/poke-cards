import { motion } from 'framer-motion';
import { CardProps } from '../types/cardTypes';

import './styles.css';

export interface CustomCardProps extends CardProps {
  index: number;
  isNew?: boolean;
}

export const Card = ({
  image,
  name,
  index,
  isShiny,
  cardRarity,
  isNew,
}: CustomCardProps) => {
  function defineCardRarity(
    rarity: 'common' | 'uncommon' | 'rare' | 'legendary' | 'mystic'
  ) {
    switch (rarity) {
      case 'common':
        return 'border-yellow-200 bg-yellow-50';
      case 'uncommon':
        return 'border-orange-200 bg-orange-50';
      case 'rare':
        return 'border-blue-200 bg-blue-50';
      case 'legendary':
        return 'border-purple-200 bg-purple-50';
      case 'mystic':
        return 'border-red-200 bg-red-50';
      default:
        return 'border-yellow-200 bg-yellow-50';
    }
  }

  function defineNewRarity(
    rarity: 'common' | 'uncommon' | 'rare' | 'legendary' | 'mystic'
  ) {
    switch (rarity) {
      case 'common':
        return 'bg-yellow-100';
      case 'uncommon':
        return 'bg-orange-100';
      case 'rare':
        return 'bg-blue-100';
      case 'legendary':
        return 'bg-purple-100';
      case 'mystic':
        return 'bg-red-100';
      default:
        return 'bg-yellow-100';
    }
  }

  return (
    <motion.div
      className={`rounded-lg relative shadow-lg flex flex-col items-center justify-center p-2 ${
        isShiny
          ? 'bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-700'
          : `border-4 ${defineCardRarity(cardRarity)}`
      }`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {isNew && (
        <span
          className={`absolute -top-4 right-50% ${defineNewRarity(
            cardRarity
          )} text-black text-xs font-semibold px-2 py-2 rounded-md shadow-sm`}
        >
          Novo⚡
        </span>
      )}

      <img
        src={image || ''}
        alt={name}
        className='w-40 h-40 object-cover rounded-md'
      />
      <p
        className={`text-lg ${
          isShiny ? 'text-white' : 'text-zinc-900'
        } mt-1 font-bold`}
      >
        {name}
      </p>
      {isShiny && (
        <p
          className={`text-md ${
            isShiny ? 'text-white font-bold' : 'text-zinc-900'
          }  mt-1 `}
        >
          ✨ Shiny
        </p>
      )}
    </motion.div>
  );
};
