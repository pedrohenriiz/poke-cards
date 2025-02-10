import { motion } from 'framer-motion';

interface CardProps {
  image: string;
  name: string;
  index: number;
  isShiny: boolean;
}

export const Card = ({ image, name, index, isShiny }: CardProps) => {
  return (
    <motion.div
      className={`rounded-lg shadow-lg flex flex-col items-center justify-center p-2 ${
        isShiny
          ? 'bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-700'
          : 'border-4 border-yellow-200 bg-yellow-50'
      }`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <img
        src={image}
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
