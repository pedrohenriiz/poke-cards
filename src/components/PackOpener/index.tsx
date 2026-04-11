import { Dispatch, SetStateAction, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Card } from '../../components/Card';
import saveToCoins from '../../service/saveCoins';
import { InventoryProps } from '../../types/inventoryTypes';
import updatePlayerInventory from './utils/updatePlayerInventory';
import useOpenPack from './utils/useOpenPack';
import { CardProps } from '../../types/cardTypes';
import { CollectionProps } from '../../types/collectionTypes';

interface PackOpenerProps {
  openingPackage?: {
    id: string;
    package_type: string;
  };
  setCoins: Dispatch<SetStateAction<number>>;
  setAnimate: Dispatch<SetStateAction<boolean>>;
  setAddedCoins: Dispatch<SetStateAction<number>>;
}

export default function PackOpener({
  openingPackage,
  setCoins,
  setAnimate,
  setAddedCoins,
}: PackOpenerProps) {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [isOpening, setIsOpening] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const packageData = openingPackage || location.state?.openingPackage;

  const inventory: InventoryProps[] =
    JSON.parse(localStorage.getItem('inventory') as string) || [];
  const currentPackage = inventory.find((item) => item.id === packageData?.id);

  const { openPack } = useOpenPack({
    packageData,
    setAddedCoins,
    saveToCoins,
    setAnimate,
    setCards,
    setCoins,
    setIsAnimating,
    setIsOpening,
    updatePlayerInventory,
  });

  const pokemonCollection: CollectionProps[] =
    JSON.parse(localStorage.getItem('collection') as string) || [];

  const pokemonsAlreadyFound = pokemonCollection.filter(
    (p) => p.id && p.normalFound === 1,
  );

  const pokemonShinyAlreadyFound = pokemonCollection.filter(
    (p) => p.id && p.shinyFound === 1 && !p.isCompleted,
  );

  return (
    <div className='flex flex-col items-center justify-center gap-6 text-white p-6 w-full'>
      {packageData && currentPackage && (
        <p className='text-2xl text-white'>
          Pacotes restantes: {currentPackage?.quantity || 0}
        </p>
      )}

      <div className='flex flex-row justify-center items-center w-full h-48 space-x-5 my-12'>
        {!isOpening &&
          cards.map((card, index) => {
            const cardId = card.id;

            const isFirstOccurrence = pokemonsAlreadyFound.find(
              (pokemonId) => pokemonId.id === cardId,
            );

            const isFirstShinyOcurrence = pokemonShinyAlreadyFound.find(
              (pokemonId) => pokemonId.id === cardId,
            );

            return (
              <Card
                key={index}
                image={card.image}
                name={card.name}
                isShiny={card.isShiny}
                index={index}
                cardRarity={card.cardRarity}
                isNew={!!isFirstOccurrence || !!isFirstShinyOcurrence}
                pokemonId={card.id}
              />
            );
          })}
      </div>

      <button
        className={`
          relative px-8 py-3 rounded-lg font-bold uppercase tracking-widest cursor-pointer
          transition-all duration-200
          disabled:opacity-40 disabled:cursor-not-allowed
          active:scale-95 active:shadow-[0_2px_0_#a37a00]
          ${
            isOpening || isAnimating
              ? 'bg-yellow-300 text-yellow-900 shadow-[0_4px_0_#a37a00]'
              : 'bg-yellow-300 text-yellow-900 shadow-[0_4px_0_#a37a00] hover:-translate-y-0.5 hover:shadow-[0_6px_0_#a37a00]'
          }
        `}
        onClick={openPack}
        type='button'
        disabled={
          isOpening ||
          isAnimating ||
          (location.pathname === '/open-package' && !currentPackage)
        }
      >
        <span className='flex items-center gap-2'>
          {isOpening || isAnimating ? (
            <>
              <span className='w-4 h-4 border-2 border-yellow-900/30 border-t-yellow-900 rounded-full animate-spin' />
              Abrindo...
            </>
          ) : (
            <>Abrir Pacote</>
          )}
        </span>
      </button>

      {packageData && currentPackage && (
        <button
          className='px-6 py-2 bg-red-700 text-white font-bold rounded-lg shadow-lg cursor-pointer disabled:bg-blue-200 disabled:cursor-not-allowed'
          onClick={() => {
            navigate(location.pathname, { replace: true, state: undefined });
          }}
          type='button'
          disabled={
            isOpening ||
            isAnimating ||
            (location.pathname === '/open-package' && !currentPackage)
          }
        >
          Parar de abrir pacotes comprados
        </button>
      )}
    </div>
  );
}
