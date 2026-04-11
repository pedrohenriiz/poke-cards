import { rarityPackages } from '../../data/shopPackages';
import useLoadPlayerData from './useLoadPlayerData';
import { Coins } from 'lucide-react';

import type { InventoryProps } from '../../types/inventoryTypes';
import { ShopPackageProps } from '../../types/shopPackageTypes';

function savePlayerInventory(inventory: InventoryProps[]) {
  localStorage.setItem('inventory', JSON.stringify(inventory));
}

function savePlayerCoins(coins: number) {
  localStorage.setItem('coins', String(coins));
}

const packageConfig: Record<
  string,
  { border: string; thumb: string; card: string; dot: string; detail: string }
> = {
  UNCOMMON: {
    border: 'border-amber-400/40',
    thumb: 'from-amber-900 to-amber-950',
    card: 'from-amber-500 to-orange-500',
    dot: '#f59e0b',
    detail: 'Incomum, Comum',
  },
  RARE: {
    border: 'border-blue-400/40',
    thumb: 'from-blue-900 to-blue-950',
    card: 'from-blue-500 to-sky-500',
    dot: '#3b82f6',
    detail: 'Raro, Incomum, Comum',
  },
  LEGENDARY: {
    border: 'border-purple-400/40',
    thumb: 'from-purple-900 to-purple-950',
    card: 'from-purple-500 to-fuchsia-500',
    dot: '#a855f7',
    detail: 'Lendário, Raro, Incomum',
  },
  MYSTIC: {
    border: 'border-red-400/40',
    thumb: 'from-red-900 to-red-950',
    card: 'from-red-500 to-rose-500',
    dot: '#f43f5e',
    detail: 'Místico, Lendário, Raro',
  },
};

const bannerConfig: Record<string, string> = {
  UNCOMMON: 'border-amber-400/30',
  RARE: 'border-blue-400/30',
  LEGENDARY: 'border-purple-400/30',
  MYSTIC: 'border-red-400/30',
};

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
      (item) => item.id === purchasedPackage.id,
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
        'Você não possui moedas suficientes para este pacote!',
      );
    }
    const updatedCoins = playerCoins - purchasePackage.price;
    setPlayerCoins(updatedCoins);
    savePlayerCoins(updatedCoins);
    addOrIncrementPurchasedPackage(purchasePackage);
  }

  const promoType = promotionalPackage?.package?.package_type;
  const promoCfg = promoType ? packageConfig[promoType] : null;

  function getInventoryCount(packageId: string) {
    return inventory.find((item) => item.id === packageId)?.quantity ?? 0;
  }

  return (
    <div className='flex min-h-screen bg-gray-900 text-white flex-1'>
      <main className='flex-1 p-8 flex flex-col gap-6'>
        {/* topbar */}
        <header className='flex justify-between items-center px-6 py-3 bg-gray-800 border border-white/5 rounded-xl'>
          <h1 className='text-base font-bold text-gray-100'>Loja</h1>
          <div className='flex items-center gap-2 bg-gray-900 border border-yellow-400/20 rounded-lg px-4 py-1.5'>
            <Coins size={15} className='text-yellow-400' />
            <span className='text-yellow-400 font-bold text-sm'>
              {playerCoins} Gold
            </span>
          </div>
        </header>

        {/* banner promocional */}
        {promotionalPackage?.package && promoCfg && (
          <div
            className={`relative bg-gray-800 border ${bannerConfig[promoType!]} rounded-xl p-6 overflow-hidden`}
          >
            <div
              className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${promoCfg.card} opacity-70`}
            />
            <span className='inline-block text-[10px] font-black uppercase tracking-widest bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 px-2.5 py-1 rounded mb-3'>
              Promoção
            </span>
            <h2 className='text-lg font-black text-white mb-1'>
              {promotionalPackage.package.name} —{' '}
              {promotionalPackage.package.discount}% de desconto
            </h2>
            <p className='text-sm text-gray-400 mb-4'>
              {promotionalPackage.package.description}
            </p>
            <button
              className='bg-yellow-400 text-yellow-900 text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-[0_3px_0_#a37a00] hover:-translate-y-0.5 hover:shadow-[0_5px_0_#a37a00] active:translate-y-0 active:shadow-[0_1px_0_#a37a00] transition-all cursor-pointer'
              onClick={() => purchasePackage(promotionalPackage.package)}
            >
              Comprar — {promotionalPackage.package.price} Gold
            </button>
          </div>
        )}

        {/* pacotes */}
        <div>
          <p className='text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-3'>
            Pacotes de cartas
          </p>
          <div className='grid grid-cols-3 gap-4 max-w-3xl'>
            {rarityPackages.map((rarityPackage) => {
              if (rarityPackage.name === promotionalPackage?.package.name)
                return null;

              const cfg = packageConfig[rarityPackage.package_type];

              return (
                <div
                  key={rarityPackage.id}
                  className={`bg-gray-800 border ${cfg?.border ?? 'border-white/5'} rounded-xl overflow-hidden hover:border-white/20 transition-colors`}
                >
                  {/* thumbnail */}
                  <div
                    className={`h-28 bg-gradient-to-br ${cfg?.thumb ?? 'from-gray-700 to-gray-800'} flex items-center justify-center`}
                  >
                    <div className='flex'>
                      {[8, 0, -8].map((rot, i) => (
                        <div
                          key={i}
                          className={`w-9 h-13 rounded-md border border-white/20 bg-gradient-to-br ${cfg?.card ?? 'from-gray-500 to-gray-600'} -ml-2 first:ml-0`}
                          style={{
                            transform: `rotate(${rot}deg)`,
                            zIndex: i,
                            height: '52px',
                            width: '36px',
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* info */}
                  <div className='p-4 flex flex-col gap-2'>
                    <h3 className='text-md font-bold text-gray-100'>
                      {rarityPackage.name}
                    </h3>
                    <p className='text-sm text-gray-400'>
                      Garante 5 cartas {rarityPackage.name.split(' ')[1]}.
                    </p>

                    <div className='flex items-center justify-between mt-1'>
                      <span className='text-sm font-bold text-yellow-400'>
                        {rarityPackage.price} Gold
                      </span>
                      <button
                        className='bg-yellow-400 text-yellow-900 text-[11px] font-black uppercase tracking-wide px-4 py-1.5 rounded-md shadow-[0_2px_0_#a37a00] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer'
                        onClick={() => purchasePackage(rarityPackage)}
                      >
                        Comprar
                      </button>
                    </div>

                    <p className='text-[11px] text-gray-500'>
                      No inventário:{' '}
                      <span className='text-yellow-400 font-bold'>
                        {getInventoryCount(rarityPackage.id)} pacote
                        {getInventoryCount(rarityPackage.id) > 1 ? 's' : ''}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
