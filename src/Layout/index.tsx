import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, Package, ShoppingBag, Archive } from 'lucide-react';

export default function Layout() {
  const { pathname } = useLocation();

  const navLinks = [
    { to: '/', label: 'Início', icon: Home },
    { to: '/collection', label: 'Coleção', icon: Package },
    { to: '/shop', label: 'Loja', icon: ShoppingBag },
    { to: '/inventory', label: 'Inventário', icon: Archive },
  ];

  return (
    <div className='min-h-screen flex'>
      <aside className='w-64 p-5 bg-gray-800'>
        <h3 className='mt-5 text-lg font-semibold text-gray-300'>PokeList</h3>
        <ul className='mt-2 space-y-1 text-gray-400'>
          {navLinks.map(({ to, label, icon: Icon }) => {
            const isActive = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors cursor-pointer
                  ${
                    isActive
                      ? 'bg-gray-700 text-white border-r-2 border-blue-400'
                      : 'hover:text-white hover:bg-gray-700/50'
                  }`}
              >
                <Icon size={16} />
                {label}
              </Link>
            );
          })}
        </ul>
      </aside>

      <div className='flex flex-1'>
        <Outlet />
      </div>
    </div>
  );
}
