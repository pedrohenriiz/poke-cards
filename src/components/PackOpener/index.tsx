import { Dispatch, SetStateAction, useState } from 'react';
import { useLocation } from 'react-router-dom';

import saveToCoins from '../../service/saveCoins';
import { InventoryProps } from '../../types/inventoryTypes';
import updatePlayerInventory from './utils/updatePlayerInventory';
import useOpenPack from './utils/useOpenPack';
import { CardProps } from '../../types/cardTypes';
import { CollectionProps } from '../../types/collectionTypes';
import OpenPackButton from './OpenPackButton';
import CardList from './CardList';
import StopOpeningPurchasedPackagesButton from './StopOpeningPurchasedPackagesButton';

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
            return (
              <CardList
                card={card}
                index={index}
                pokemonShinyAlreadyFound={pokemonShinyAlreadyFound}
                pokemonsAlreadyFound={pokemonsAlreadyFound}
                key={card.id}
              />
            );
          })}
      </div>

      <OpenPackButton
        currentPackage={currentPackage}
        isAnimating={isAnimating}
        isOpening={isOpening}
        openPack={openPack}
      />

      {packageData && currentPackage && (
        <StopOpeningPurchasedPackagesButton
          isAnimating={isAnimating}
          isOpening={isOpening}
        />
      )}
    </div>
  );
}
