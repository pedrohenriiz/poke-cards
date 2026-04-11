import { InventoryProps } from '../../../types/inventoryTypes';

interface OpenPackButtonProps {
  isOpening: boolean;
  isAnimating: boolean;
  currentPackage: InventoryProps | undefined;
  openPack: () => Promise<void>;
}

export default function OpenPackButton({
  isOpening,
  isAnimating,
  currentPackage,
  openPack,
}: OpenPackButtonProps) {
  const isButtonDisabled =
    isOpening ||
    isAnimating ||
    (location.pathname === '/open-package' && !currentPackage);

  return (
    <button
      className={`
          relative px-8 py-3 rounded-lg font-bold uppercase tracking-widest cursor-pointer
          transition-all duration-200
          disabled:opacity-40 disabled:cursor-not-allowed
          active:scale-95 active:shadow-[0_2px_0_#a37a00]
          ${
            isOpening || isAnimating
              ? 'bg-yellow-300 text-yellow-900 shadow-[0_4px_0_#a37a00]'
              : 'bg-yellow-300 text-yellow-900 shadow-[0_4px_0_#a37a00] hover:-translate-y-0.5 hover:shadow-[0_6px_0_#a37a00]'
          }
        `}
      onClick={openPack}
      type='button'
      disabled={isButtonDisabled}
    >
      <span className='flex items-center gap-2'>
        {isOpening || isAnimating ? (
          <>
            <span className='w-4 h-4 border-2 border-yellow-900/30 border-t-yellow-900 rounded-full animate-spin' />
            Abrindo...
          </>
        ) : (
          <>Abrir Pacote</>
        )}
      </span>
    </button>
  );
}
