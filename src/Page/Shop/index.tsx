import { rarityPackages } from '../../data/shopPackages';
import useLoadPlayerData from './useLoadPlayerData';

import type { InventoryProps } from '../../types/inventoryTypes';
import { ShopPackageProps } from '../../types/shopPackageTypes';

function savePlayerInventory(inventory: InventoryProps[]) {
  localStorage.setItem('inventory', JSON.stringify(inventory));
}

function savePlayerCoins(coins: number) {
  localStorage.setItem('coins', String(coins));
}

export default function Shop() {
  const {
    playerCoins,
    inventory,
    promotionalPackage,
    setInventory,
    setPlayerCoins,
  } = useLoadPlayerData();

  function addOrIncrementPurchasedPackage(purchasedPackage: ShopPackageProps) {
    const existingPackageIndex = inventory.findIndex(
      (item) => item.id === purchasedPackage.id
    );
    const updatedInventory = [...inventory];

    if (existingPackageIndex === -1) {
      updatedInventory.push({ ...purchasedPackage, quantity: 1 });
    } else {
      updatedInventory[existingPackageIndex].quantity += 1;
    }

    setInventory(updatedInventory);
    savePlayerInventory(updatedInventory);
  }

  function purchasePackage(purchasePackage: ShopPackageProps) {
    if (purchasePackage.price > playerCoins) {
      return window.alert(
        'Você não possui moedas suficientes para este pacote!'
      );
    }

    const updatedCoins = playerCoins - purchasePackage.price;

    setPlayerCoins(updatedCoins);
    savePlayerCoins(updatedCoins);

    addOrIncrementPurchasedPackage(purchasePackage);
  }

  let promotionalPackageColor;
  if (promotionalPackage?.package) {
    if (promotionalPackage?.package.package_type === 'UNCOMMON') {
      promotionalPackageColor = 'from-amber-400 to-orange-400 text-black';
    } else if (promotionalPackage?.package.package_type === 'RARE') {
      promotionalPackageColor = 'from-blue-400 to-sky-400 text-black';
    } else if (promotionalPackage?.package.package_type === 'LEGENDARY') {
      promotionalPackageColor = 'from-purple-400 to-fuchsia-400 text-black';
    } else if (promotionalPackage?.package.package_type === 'MYSTIC') {
      promotionalPackageColor = 'from-red-400 to-rose-500 text-black';
    }
  } else {
    promotionalPackageColor = 'from-blue-500 to-cyan-400 text-black';
  }

  return (
    <div className='flex min-h-screen bg-gray-900 text-white flex-1'>
      <main className='flex-1 p-8'>
        <header className='flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md mb-8 rounded-sm'>
          <h1 className='text-xl font-bold'>Loja</h1>
          <div className='flex items-center gap-3'>
            <span className='text-yellow-400 font-semibold'>
              {playerCoins} Gold 💰
            </span>
          </div>
        </header>

        {/* Banner de Promoção */}
        {promotionalPackage?.package && (
          <div
            className={`relative bg-gradient-to-r ${promotionalPackageColor} p-8 rounded-xl shadow-lg mb-8`}
          >
            <h2 className='text-2xl font-bold'>
              [Promoção] {promotionalPackage.package.name} -{' '}
              {promotionalPackage.package.discount}% de desconto
            </h2>
            <p className='mt-2'>{promotionalPackage.package.description}</p>
            <button
              className='mt-4 bg-white text-black px-6 py-2 rounded-lg font-bold cursor-pointer'
              onClick={() => purchasePackage(promotionalPackage.package)}
            >
              Comprar - {promotionalPackage.package.price} Gold
            </button>
          </div>
        )}

        <h2 className='text-2xl font-semibold mb-4'>Pacotes de cartas</h2>

        {/* Grade de Produtos */}
        <div className='grid grid-cols-6 gap-6'>
          {rarityPackages.map((rarityPackage) => {
            if (rarityPackage.name === promotionalPackage?.package.name) {
              return false;
            }

            let packageColor;

            if (rarityPackage.package_type === 'UNCOMMON') {
              packageColor = 'bg-orange-100';
            } else if (rarityPackage.package_type === 'RARE') {
              packageColor = 'bg-blue-200';
            } else if (rarityPackage.package_type === 'LEGENDARY') {
              packageColor = 'bg-purple-200';
            } else if (rarityPackage.package_type === 'MYSTIC') {
              packageColor = 'bg-red-200';
            }

            return (
              <div
                key={rarityPackage.id}
                className='bg-gray-800 p-4 rounded-lg shadow-lg'
              >
                <div className={`h-32 ${packageColor} rounded-md mb-4`}></div>
                <h3 className='text-lg font-semibold'>{rarityPackage.name}</h3>
                <p className='text-yellow-400 mt-1'>
                  {rarityPackage.price} Gold
                </p>
                <button
                  className='mt-3 bg-blue-500 px-4 py-2 rounded-md w-full cursor-pointer'
                  onClick={() => purchasePackage(rarityPackage)}
                >
                  Comprar
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
