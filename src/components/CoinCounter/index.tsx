import { Coins } from 'lucide-react';

interface CoinCounterProps {
  coins: number;
  animate: boolean;
  addedCoins: number;
}

export default function CoinCounter({
  coins,
  animate,
  addedCoins,
}: CoinCounterProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-6 p-6'>
      <div className='group relative flex items-center gap-2 bg-gray-800/80 border border-yellow-400/20 rounded-lg px-5 py-2 shadow-inner cursor-default'>
        <Coins size={18} className='text-yellow-400' />
        <span className='text-white font-black text-xl'>{coins}</span>

        {/* tooltip */}
        <div className='absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 border border-gray-700 text-gray-200 text-xs px-2.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none'>
          Total de moedas
          <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-r border-b border-gray-700 rotate-45' />
        </div>

        {animate && (
          <span className='absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-bold text-yellow-400 animate-bounce whitespace-nowrap'>
            +{addedCoins}
          </span>
        )}
      </div>
    </div>
  );
}
