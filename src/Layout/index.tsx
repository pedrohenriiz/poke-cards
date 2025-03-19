import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='min-h-screen flex'>
      <aside className='w-64 p-5 bg-gray-800'>
        <h3 className='mt-5 text-lg font-semibold text-gray-300'>PokeList</h3>
        <ul className='mt-2 space-y-3 text-gray-400'>
          <Link to='/' className='hover:text-white cursor-pointer block'>
            Início
          </Link>

          <Link
            to='/collection'
            className='hover:text-white cursor-pointer block'
          >
            Coleção
          </Link>
          <Link to='/shop' className='hover:text-white cursor-pointer block'>
            Loja
          </Link>
          <Link to='/inventory' className='hover:text-white cursor-pointer'>
            Inventário
          </Link>
        </ul>
      </aside>

      <div className='flex flex-1'>
        <Outlet />
      </div>
    </div>
  );
}
