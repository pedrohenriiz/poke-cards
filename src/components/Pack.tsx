import { useState } from 'react';
import { Card } from './Card';
import api from '../service/api';

import pokemonData from '../data/pokemons';
import saveToCollection from '../service/saveToCollection';
import { generateRandomPokemons, chance } from '../utils/generatePokemonCard';

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  isShiny: boolean;
}

export const Pack = () => {
  const [cards, setCards] = useState<PokemonCardProps[]>([]);
  const [isOpening, setIsOpening] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  async function openPack() {
    setIsOpening(true);
    setIsAnimating(true);
    const pokemonsFound = [];

    const pokemons = generateRandomPokemons(pokemonData);

    for (let i = 0; i < pokemons.length; i++) {
      const response = await api.get(`pokemon/${pokemons[i]}`);

      pokemonsFound.push(response.data);
    }

    const formattedData = pokemonsFound.map((item) => {
      const { id, name, sprites } = item;

      const isShiny = chance(pokemonData[id - 1].rarity);

      return {
        id,
        name,
        image: isShiny ? sprites.front_shiny : sprites.front_default,
        isShiny,
      };
    });

    saveToCollection(formattedData);

    setCards(formattedData);
    setIsOpening(false);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1100);
  }

  return (
    <div className='flex flex-col items-center justify-center gap-6  text-white p-6 w-full h-full'>
      <div className=' flex flex-row justify-center items-center w-full h-48 space-x-5 my-12'>
        {!isOpening &&
          cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              name={card.name}
              isShiny={card.isShiny}
              index={index}
            />
          ))}
      </div>

      <button
        className='px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-lg cursor-pointer disabled:bg-blue-200 disabled:cursor-not-allowed'
        onClick={openPack}
        disabled={isOpening || isAnimating}
        type='button'
      >
        {isOpening || isAnimating ? 'Abrindo Pacote...' : 'Abrir Pacote'}
      </button>
    </div>
  );
};
