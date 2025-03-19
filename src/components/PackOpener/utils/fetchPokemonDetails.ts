import { PokemonListProps } from '../../../data/pokemonRarity';
import api from '../../../service/api';

export default async function fetchPokemonDetails({
  pokemonList,
}: {
  pokemonList: PokemonListProps[];
}) {
  const requests = pokemonList.map((pokemon) =>
    api.get(`pokemon/${pokemon?.id}`)
  );

  const responses = await Promise.all(requests);

  return responses.map((res) => res.data);
}
