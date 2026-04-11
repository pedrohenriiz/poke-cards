import { useState } from 'react';
import Card from './Card';
import { Search } from 'lucide-react';

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
    localStorage.getItem('collection') as string,
  ) as PokemonSavedProps[];

  const filteredCollection = pokeCollection.filter((pokemon) =>
    pokemon.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
  );

  return (
    <div className='min-h-screen bg-gray-900 text-white p-5 flex-1'>
      <div className='max-w-8xl mx-auto'>
        <div className='relative mb-6'>
          <Search
            size={16}
            className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
          />
          <input
            className='w-full bg-gray-800 border border-gray-700 rounded-xl pl-9 pr-4 py-2.5 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/20 transition-all'
            placeholder='Buscar Pokémon...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4'>
          {filteredCollection.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
