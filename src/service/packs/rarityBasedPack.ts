import { generatePokemon } from '../../utils/generatePokemonCard';
import type { PokemonListProps } from '../../data/pokemonRarity';
import { pokemonRarityList } from '../../data/pokemonRarity';
import type { CardRarities } from '../../types/cardRarities';

interface CommonPackOptions {
  rarity?: CardRarities;
  amount?: number;
  shouldRollRarity?: boolean;
}

export default function rarityBasedPack({
  rarity = 'common',
  amount = 5,
  shouldRollRarity = true,
}: CommonPackOptions = {}): PokemonListProps[] {
  const pokemonsFound = [];

  while (pokemonsFound.length < amount) {
    const generatedRarity = generatePokemon({
      currentPackageRarity: rarity,
      shouldRollRarity: shouldRollRarity,
    });

    const rarityGroup = pokemonRarityList[generatedRarity];

    if (!rarityGroup || rarityGroup.length === 0) continue;

    const randomIndex = Math.floor(Math.random() * rarityGroup.length);
    pokemonsFound.push(rarityGroup[randomIndex]);
  }

  return pokemonsFound;
}
