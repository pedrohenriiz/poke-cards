import { useCallback, useEffect } from 'react';

import { pokemonList } from '../../../data/pokemonRarity';

export default function useResetStorage() {
  const reset = useCallback(() => {
    localStorage.removeItem('coins');
    localStorage.removeItem('collection');
    localStorage.removeItem('inventory');
    localStorage.removeItem('dailyDiscountPackage');
  }, []);

  const start = useCallback(() => {
    localStorage.setItem('coins', String(0));

    const data = pokemonList.map((item) => ({
      id: item.id,
      name: item.name,
      found: false,
      shinyFound: 0,
      normalFound: 0,
      isShiny: false,
      isCompleted: false,
    }));

    localStorage.setItem('collection', JSON.stringify(data));
  }, []);

  useEffect(() => {
    const currentVersion = Number(localStorage.getItem('version'));

    if (currentVersion !== 2) {
      reset();

      localStorage.setItem('version', '2');

      start();
    }
  }, [reset, start]);
}
