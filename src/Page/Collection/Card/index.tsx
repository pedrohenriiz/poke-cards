import { PokemonSavedProps } from '..';

const baseContainerStyle =
  'relative border-4 bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform min-h-70 content-end';

export default function Card({ card }: { card: PokemonSavedProps }) {
  return (
    <div
      className={`${baseContainerStyle} ${
        card.isShiny ? 'border-yellow-400' : 'border-gray-600'
      } `}
    >
      {card.found && (
        <img src={card.image} alt={card.name} className='w-full rounded-md' />
      )}

      <h2 className='text-lg font-bold text-center mt-2'>{card.name}</h2>

      {!card.found && (
        <p className='w-full rounded-md text-center content-center'>
          Não encontrado
        </p>
      )}

      {card.isShiny && (
        <span className='absolute top-2 right-2 bg-yellow-500 text-xs px-2 py-1 rounded-md font-bold'>
          ✨ Shiny
        </span>
      )}
      {card.found && (
        <>
          <p className='text-center'>Normal encontrados: {card.normalFound}</p>
          <p className='text-center'>Shiny encontrados: {card.shinyFound}</p>
        </>
      )}
    </div>
  );
}
