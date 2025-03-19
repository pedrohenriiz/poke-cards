import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { InventoryProps } from '../../types/inventoryTypes';

export default function Inventory() {
  const playerInventory: InventoryProps[] =
    JSON.parse(localStorage.getItem('inventory') as string) ?? [];

  const cards = playerInventory.filter((item) => item.type === 'card');

  // let promotionalPackageColor;
  // if (promotionalPackage?.package) {
  //   if (promotionalPackage?.package.package_type === 'UNCOMMON') {
  //     promotionalPackageColor = 'from-amber-400 to-orange-400 text-black';
  //   } else if (promotionalPackage?.package.package_type === 'RARE') {
  //     promotionalPackageColor = 'from-blue-400 to-sky-400 text-black';
  //   } else if (promotionalPackage?.package.package_type === 'LEGENDARY') {
  //     promotionalPackageColor = 'from-purple-400 to-fuchsia-400 text-black';
  //   } else if (promotionalPackage?.package.package_type === 'MYSTIC') {
  //     promotionalPackageColor = 'from-red-400 to-rose-500 text-black';
  //   }
  // } else {
  //   promotionalPackageColor = 'from-blue-500 to-cyan-400 text-black';
  // }

  return (
    <div className='p-6 bg-gray-900 min-h-screen text-gray-900 flex-1'>
      <h1 className='text-4xl font-bold text-white text-center mb-6'>
        Inventário
      </h1>

      {/* 🃏 Seção de Cartas */}
      <div className='mb-8'>
        <h2 className='text-2xl font-bold text-blue-300 mb-4'>Cartas 🎴</h2>
        {cards.length > 0 ? (
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
            {cards.map((item) => {
              let promotionalPackageColor;

              if (item?.package_type === 'UNCOMMON') {
                promotionalPackageColor =
                  'bg-amber-100 border-amber-400 text-black';
              } else if (item?.package_type === 'RARE') {
                promotionalPackageColor =
                  'bg-sky-300 border-sky-400 text-black';
              } else if (item?.package_type === 'LEGENDARY') {
                promotionalPackageColor =
                  'bg-purple-400 border-fuchsia-500 text-black';
              } else if (item?.package_type === 'MYSTIC') {
                promotionalPackageColor =
                  'bg-red-400 border-rose-500 text-black';
              }
              return (
                <Link to='/' state={{ openingPackage: item }} key={item.id}>
                  <motion.div
                    className={`${promotionalPackageColor} p-4 rounded-xl shadow-lg flex flex-col items-center border-2 hover:scale-105 hover:cursor-pointer transition`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <span className='text-5xl'>🎴</span>
                    <span className='text-lg font-semibold mt-2'>
                      {item.name}
                    </span>
                    <span className='text-sm text-gray-700 mt-1'>
                      Quantidade: {item.quantity}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className='text-center text-gray-200'>Nenhuma carta comprada...</p>
        )}
      </div>
    </div>
  );
}
