import { PokemonListProps } from '../../../data/pokemonRarity';

export default function calculateCoins({
  pokemonList,
}: {
  pokemonList: PokemonListProps[];
}) {
  return pokemonList.reduce(
    (accumulator, currentValue) => currentValue.gold + accumulator,
    0
  );
}
