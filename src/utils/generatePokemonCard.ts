import type { CardRarities } from '../types/cardRarities';

export function chance(probability: number): boolean {
  return Math.random() < 1 / probability;
}

const availableRarities: CardRarities[] = [
  'common',
  'uncommon',
  'rare',
  'legendary',
  'mystic',
];

const rarityWeight = {
  common: 80,
  uncommon: 70,
  rare: 60,
  legendary: 40,
  mystic: 100,
};

function rollRarity(currentTry: number, currentRarity: CardRarities) {
  if (currentTry <= rarityWeight[currentRarity] || currentRarity === 'mystic') {
    return currentRarity;
  }

  const nextRarityIndex = availableRarities.indexOf(currentRarity) + 1;

  const nextRarity = availableRarities[nextRarityIndex];
  const nextRandomTry = Math.random() * 100;

  return rollRarity(nextRandomTry, nextRarity);
}

export function generatePokemon({
  currentPackageRarity = 'common',
  shouldRollRarity = true,
}: {
  currentPackageRarity: CardRarities;
  shouldRollRarity: boolean;
}) {
  const currentRarity = currentPackageRarity;

  const randomTry = Math.random() * 100;

  if (shouldRollRarity) {
    return rollRarity(randomTry, currentRarity);
  }
  return currentRarity;
}
