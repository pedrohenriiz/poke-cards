import { chance } from '../../../utils/generatePokemonCard';

import { pokemonList as pokemonData } from '../../../data/pokemonRarity';
import { PokemonDTO } from '../../../types/pokemonApiDTO';
import { PokemonListProps } from '../../../data/pokemonRarity';
import { CardProps } from '../../../types/cardTypes';

interface FormatPokemonData {
  pokemonList: PokemonDTO[];
  currentPackPokemons: PokemonListProps[];
}

export default function formatPokemonData({
  pokemonList,
  currentPackPokemons,
}: FormatPokemonData): CardProps[] {
  return pokemonList.map(({ id, name, sprites }, index) => {
    const isShiny = chance(pokemonData[id - 1].rarity);
    return {
      id,
      name,
      image: isShiny ? sprites.front_shiny : sprites.front_default,
      isShiny,
      cardRarity: currentPackPokemons[index].cardRarity,
    };
  });
}
