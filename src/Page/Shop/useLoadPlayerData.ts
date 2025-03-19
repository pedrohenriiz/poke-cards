import { useEffect, useState } from 'react';
import { InventoryProps } from '../../types/inventoryTypes';
import { DailyDiscountPackage } from '../../types/shopPackageTypes';

export default function useLoadPlayerData() {
  const [playerCoins, setPlayerCoins] = useState<number>(0);
  const [inventory, setInventory] = useState<InventoryProps[]>([]);
  const [promotionalPackage, setPromotionalPackage] =
    useState<DailyDiscountPackage | null>(null);

  function getPlayerInventory() {
    return JSON.parse(localStorage.getItem('inventory') as string) || [];
  }

  function getPlayerCoins() {
    return Number(localStorage.getItem('coins')) || 0;
  }

  useEffect(() => {
    setPlayerCoins(getPlayerCoins());
    setInventory(getPlayerInventory());
    setPromotionalPackage(
      JSON.parse(localStorage.getItem('dailyDiscountPackage') as string)
    );
  }, []);

  return {
    playerCoins,
    inventory,
    promotionalPackage,
    setInventory,
    setPlayerCoins,
  };
}
