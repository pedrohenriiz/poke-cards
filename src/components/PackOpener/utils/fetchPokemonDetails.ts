import { PokemonListProps } from '../../../data/pokemonRarity';
import api from '../../../service/api';

interface FetchPokemonDetailsProps {
  pokemonList: PokemonListProps[];
}

export default async function fetchPokemonDetails({
  pokemonList,
}: FetchPokemonDetailsProps) {
  const requests = pokemonList.map((pokemon) =>
    api.get(`pokemon/${pokemon?.id}`),
  );

  const responses = await Promise.all(requests);

  return responses.map((res) => res.data);
}
