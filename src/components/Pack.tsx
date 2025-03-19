import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Card } from '../components/Card';
import api from '../service/api';
import { chance } from '../utils/generatePokemonCard';

import { pokemonList as pokemonData } from '../data/pokemonRarity';
import saveToCoins from '../service/saveCoins';
import saveToCollection from '../service/saveToCollection';
import rarityBasedPack from '../service/packs/rarityBasedPack';

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  isShiny: boolean;
  cardRarity: 'common' | 'uncommon' | 'rare' | 'legendary' | 'mystic';
}

interface PackOpenerProps {
  setCoins: (coins: number) => void;
  setAnimate: (animate: boolean) => void;
  setAddedCoins: (coins: number) => void;
  openingPackage?: {
    id: string;
    package_type: string;
  };
}

export default function PackOpener({
  setCoins,
  setAnimate,
  setAddedCoins,
  openingPackage,
}: PackOpenerProps) {
  const [cards, setCards] = useState<PokemonCardProps[]>([]);
  const [isOpening, setIsOpening] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const packageData = openingPackage || location.state?.openingPackage;

  const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
  const currentPackage = inventory.find((item) => item.id === packageData?.id);

  function updatePlayerInventory() {
    if (!packageData) return;

    const packageIndex = inventory.findIndex(
      (item) => item.id === packageData.id
    );

    if (packageIndex !== -1) {
      if (inventory[packageIndex].quantity > 1) {
        inventory[packageIndex].quantity -= 1;
      } else {
        inventory.splice(packageIndex, 1);
        navigate(location.pathname, { replace: true, state: undefined });
      }

      localStorage.setItem('inventory', JSON.stringify(inventory));
    }
  }

  async function fetchPokemonDetails(pokemonList) {
    const requests = pokemonList.map((pokemon) =>
      api.get(`pokemon/${pokemon?.id}`)
    );
    const responses = await Promise.all(requests);

    return responses.map((res) => res.data);
  }

  function calculateCoins(pokemonList) {
    return pokemonList.reduce(
      (accumulator, currentValue) => currentValue.gold + accumulator,
      0
    );
  }

  function formatPokemonData(pokemonList, commonPackPokemons) {
    return pokemonList.map(({ id, name, sprites }, index) => {
      const isShiny = chance(pokemonData[id - 1].rarity);
      return {
        id,
        name,
        image: isShiny ? sprites.front_shiny : sprites.front_default,
        isShiny,
        cardRarity: commonPackPokemons[index].cardRarity,
      };
    });
  }

  async function openPack() {
    setIsOpening(true);
    setIsAnimating(true);

    const packType = packageData?.package_type?.toLowerCase();
    const commonPackPokemons = rarityBasedPack(
      packType ? { rarity: packType } : undefined
    );

    const pokemonsFound = await fetchPokemonDetails(commonPackPokemons);
    const pokeCoins = calculateCoins(commonPackPokemons);
    setAddedCoins(pokeCoins);

    const formattedData = formatPokemonData(pokemonsFound, commonPackPokemons);
    saveToCollection(formattedData);

    setCards(formattedData);

    setIsOpening(false);
    setAnimate(true);

    setTimeout(() => {
      setCoins(saveToCoins(pokeCoins));
      setAnimate(false);
      setIsAnimating(false);

      if (packageData) updatePlayerInventory();
    }, 1100);
  }

  return (
    <div className='flex flex-col items-center justify-center gap-6 text-white p-6 w-full'>
      {packageData && currentPackage && (
        <p className='text-2xl text-black'>
          Pacotes restantes: {currentPackage?.quantity || 0}
        </p>
      )}

      <div className='flex flex-row justify-center items-center w-full h-48 space-x-5 my-12'>
        {!isOpening &&
          cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              name={card.name}
              isShiny={card.isShiny}
              index={index}
              cardRarity={card.cardRarity}
            />
          ))}
      </div>

      <button
        className='px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-lg cursor-pointer disabled:bg-blue-200 disabled:cursor-not-allowed'
        onClick={openPack}
        type='button'
        disabled={
          isOpening ||
          isAnimating ||
          (location.pathname === '/open-package' && !currentPackage)
        }
      >
        {isOpening || isAnimating ? 'Abrindo Pacote...' : 'Abrir Pacote'}
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
