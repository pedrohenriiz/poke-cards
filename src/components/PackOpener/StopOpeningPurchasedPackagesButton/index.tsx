import { useNavigate } from 'react-router-dom';

interface StopOpeningPurchasedPackagesButtonProps {
  isOpening: boolean;
  isAnimating: boolean;
}

export default function StopOpeningPurchasedPackagesButton({
  isOpening,
  isAnimating,
}: StopOpeningPurchasedPackagesButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      className='px-6 py-2 bg-red-700 text-white font-bold rounded-lg shadow-lg cursor-pointer disabled:bg-blue-200 disabled:cursor-not-allowed'
      onClick={() => {
        navigate(location.pathname, { replace: true, state: undefined });
      }}
      type='button'
      disabled={
        isOpening || isAnimating || location.pathname === '/open-package'
      }
    >
      Parar de abrir pacotes comprados
    </button>
  );
}
