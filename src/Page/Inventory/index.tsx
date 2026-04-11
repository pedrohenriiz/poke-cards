import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { InventoryProps } from '../../types/inventoryTypes';
import { Package } from 'lucide-react';

const packageConfig: Record<
  string,
  { border: string; thumb: string; card: string; label: string }
> = {
  UNCOMMON: {
    border: 'border-amber-400/40',
    thumb: 'from-amber-900 to-amber-950',
    card: 'from-amber-500 to-orange-500',
    label: 'Incomum',
  },
  RARE: {
    border: 'border-blue-400/40',
    thumb: 'from-blue-900 to-blue-950',
    card: 'from-blue-500 to-sky-500',
    label: 'Raro',
  },
  LEGENDARY: {
    border: 'border-purple-400/40',
    thumb: 'from-purple-900 to-purple-950',
    card: 'from-purple-500 to-fuchsia-500',
    label: 'Lendário',
  },
  MYSTIC: {
    border: 'border-red-400/40',
    thumb: 'from-red-900 to-red-950',
    card: 'from-red-500 to-rose-500',
    label: 'Místico',
  },
};

export default function Inventory() {
  const playerInventory: InventoryProps[] =
    JSON.parse(localStorage.getItem('inventory') as string) ?? [];

  const cards = playerInventory.filter((item) => item.type === 'card');

  return (
    <div className='p-8 bg-gray-900 min-h-screen flex-1 flex flex-col gap-6'>
      <header className='flex items-center justify-between px-6 py-3 bg-gray-800 border border-white/5 rounded-xl'>
        <h1 className='text-base font-bold text-gray-100'>Inventário</h1>
        <span className='text-[11px] font-bold uppercase tracking-widest text-gray-500'>
          {cards.length} {cards.length === 1 ? 'tipo' : 'tipos'} de pacote
        </span>
      </header>

      <div>
        <p className='text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-3'>
          Seus pacotes
        </p>

        {cards.length > 0 ? (
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl'>
            {cards.map((item, i) => {
              const cfg = packageConfig[item.package_type ?? ''];

              return (
                <Link to='/' state={{ openingPackage: item }} key={item.id}>
                  <motion.div
                    className={`bg-gray-800 border ${cfg?.border ?? 'border-white/5'} rounded-xl overflow-hidden hover:border-white/20 transition-colors`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.15, delay: 0 },
                    }}
                  >
                    {/* thumbnail */}
                    <div
                      className={`h-24 bg-gradient-to-br ${cfg?.thumb ?? 'from-gray-700 to-gray-800'} flex items-center justify-center`}
                    >
                      <div className='flex'>
                        {[8, 0, -8].map((rot, j) => (
                          <div
                            key={j}
                            className={`rounded-md border border-white/20 bg-gradient-to-br ${cfg?.card ?? 'from-gray-500 to-gray-600'} -ml-2 first:ml-0`}
                            style={{
                              transform: `rotate(${rot}deg)`,
                              zIndex: j,
                              height: '44px',
                              width: '32px',
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* info */}
                    <div className='p-3 flex flex-col gap-1'>
                      <div className='flex items-center justify-between'>
                        <span className='text-sm font-bold text-gray-100'>
                          {item.name}
                        </span>
                        <Package size={13} className='text-gray-500' />
                      </div>
                      <span className='text-[11px] text-gray-500'>
                        {cfg?.label ?? item.package_type}
                      </span>
                      <div className='flex items-center justify-between mt-2 pt-2 border-t border-white/5'>
                        <span className='text-[11px] text-gray-500'>
                          Disponíveis
                        </span>
                        <span className='text-sm font-black text-yellow-400'>
                          {item.quantity}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center py-20 text-center'>
            <Package size={36} className='text-gray-700 mb-3' />
            <p className='text-gray-500 text-sm'>
              Nenhum pacote no inventário.
            </p>
            <p className='text-gray-600 text-xs mt-1'>
              Visite a loja para comprar pacotes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
