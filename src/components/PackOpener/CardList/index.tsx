import { CardProps } from '../../../types/cardTypes';
import { CollectionProps } from '../../../types/collectionTypes';
import { Card } from './Card';

interface CardListProps {
  card: CardProps;
  index: number;
  pokemonsAlreadyFound: CollectionProps[];
  pokemonShinyAlreadyFound: CollectionProps[];
}

export default function CardList({
  card,
  pokemonsAlreadyFound,
  pokemonShinyAlreadyFound,
  index,
}: CardListProps) {
  const cardId = card.id;

  const isFirstOccurrence = pokemonsAlreadyFound.find(
    (pokemonId) => pokemonId.id === cardId,
  );

  const isFirstShinyOcurrence = pokemonShinyAlreadyFound.find(
    (pokemonId) => pokemonId.id === cardId,
  );

  return (
    <Card
      key={index}
      image={card.image}
      name={card.name}
      isShiny={card.isShiny}
      index={index}
      cardRarity={card.cardRarity}
      isNew={!!isFirstOccurrence || !!isFirstShinyOcurrence}
      pokemonId={card.id}
    />
  );
}
