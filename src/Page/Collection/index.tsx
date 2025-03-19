import { useState } from 'react';
import Card from './Card';

export interface PokemonSavedProps {
  id: number;
  name: string;
  isShiny: boolean;
  shinyFound: number;
  normalFound: number;
  image: string;
  found: boolean;
}

export default function CollectionPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const pokeCollection = JSON.parse(
    localStorage.getItem('collection') as string
  ) as PokemonSavedProps[];

  const filteredCollection = pokeCollection.filter((pokemon) =>
    pokemon.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div className='min-h-screen bg-gray-900 text-white p-5 flex-1'>
      <div className='max-w-8xl mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-6'>PokeLista</h1>

        <input
          type='text'
          placeholder='Buscar Pokémon...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full p-2 mb-6 text-white rounded border-1 border-gray-600 placeholder:text-gray-600'
        />

        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4'>
          {filteredCollection.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
