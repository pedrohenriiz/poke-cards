import { useState } from 'react';
import CoinCounter from '../../components/CoinsCounter';
import PackOpener from '../../components/PackOpener';
import useResetStorage from './utils/useResetStorage';

export default function Home() {
  const [coins, setCoins] = useState(
    Number(localStorage.getItem('coins')) || 0
  );
  const [animate, setAnimate] = useState(false);
  const [addedCoins, setAddedCoins] = useState(0);

  useResetStorage();

  return (
    <div className='flex flex-col items-center justify-center flex-1 bg-gray-900'>
      <CoinCounter coins={coins} animate={animate} addedCoins={addedCoins} />

      <PackOpener
        setCoins={setCoins}
        setAnimate={setAnimate}
        setAddedCoins={setAddedCoins}
      />
    </div>
  );
}
