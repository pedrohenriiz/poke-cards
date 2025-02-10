import { Link } from 'react-router-dom';
import { Pack } from '../../components/Pack';
import { useEffect } from 'react';
import pokemonList from '../../data/pokemons';

export default function Home() {
  useEffect(() => {
    function startCollection() {
      const data = pokemonList.map((item) => ({
        id: item.id,
        name: item.name,
        found: false,
        shinyFound: 0,
        normalFound: 0,
        isShiny: false,
      }));

      localStorage.setItem('collection', JSON.stringify(data));
    }

    if (!localStorage.getItem('collection')) {
      startCollection();
    }
  }, []);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center '>
      <Link
        to='/collection'
        className='bg-blue-200 font-bold px-3 py-2 rounded-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1'
      >
        Coleção
      </Link>

      <Pack />
    </div>
  );
}
