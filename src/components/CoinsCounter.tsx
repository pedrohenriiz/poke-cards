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
      <div className='relative flex items-center gap-3 bg-yellow-100 border border-yellow-400 px-6 py-3 rounded-lg shadow-md'>
        <span className='text-2xl'>💰</span>

        <span className='text-3xl font-bold text-yellow-800'>{coins}</span>

        {animate && (
          <span className='absolute -top-6 left-10 text-lg font-bold text-yellow-600 animate-bounce'>
            +{addedCoins}
          </span>
        )}
      </div>
    </div>
  );
}
