import { useNavigate } from 'react-router-dom';
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

const CollectionPage = () => {
  const navigate = useNavigate();

  const pokeCollection = JSON.parse(
    localStorage.getItem('collection') as string
  ) as PokemonSavedProps[];

  return (
    <div className='min-h-screen bg-gray-900 text-white p-5'>
      <div className='max-w-8xl mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-6'>PokeLista</h1>
        <button
          onClick={() => navigate('/')}
          className='mb-6 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded'
        >
          Voltar
        </button>

        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-8 gap-4'>
          {pokeCollection.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
