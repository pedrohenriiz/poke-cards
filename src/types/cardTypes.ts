export interface CardProps {
  id?: number;
  image: string | null;
  name: string;
  isShiny: boolean;
  cardRarity: 'common' | 'uncommon' | 'rare' | 'legendary' | 'mystic';
}
