import { PokemonListProps } from '../data/pokemons';

export function getRandomPokemon(pokemonList: PokemonListProps[]) {
  const totalWeight = pokemonList.reduce(
    (sum, pokemon) => sum + pokemon.weight,
    0
  );

  const randomNum = Math.random() * totalWeight;

  let runningWeight = 0;

  for (let i = 0; i < pokemonList.length; i++) {
    runningWeight += pokemonList[i].weight;
    if (randomNum <= runningWeight) {
      return pokemonList[i];
    }
  }

  return pokemonList[0];
}

export function generateRandomPokemons(
  pokemonList: PokemonListProps[]
): number[] {
  return Array.from({ length: 5 }, () => getRandomPokemon(pokemonList).id);
}

export function chance(probability: number): boolean {
  return Math.random() < 1 / probability;
}
