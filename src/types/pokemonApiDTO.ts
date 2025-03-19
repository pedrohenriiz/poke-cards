interface SpritesProps {
  front_default: string | null;
  front_shiny: string | null;
}

export interface PokemonDTO {
  id: number;
  name: string;
  sprites: SpritesProps;
}
