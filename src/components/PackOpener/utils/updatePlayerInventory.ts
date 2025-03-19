import { NavigateFunction } from 'react-router-dom';
import { InventoryProps, PackageProps } from '../../../types/inventoryTypes';

interface UpdatePlayerInventoryProps {
  packageData: PackageProps;
  navigate: NavigateFunction;
}

export default function updatePlayerInventory({
  packageData,
  navigate,
}: UpdatePlayerInventoryProps) {
  const inventory: InventoryProps[] =
    JSON.parse(localStorage.getItem('inventory') as string) || [];

  // Se eu não estou abrindo nenhum pacote, não preciso atualizar nada no inventário
  if (!packageData) return;

  const packageIndex = inventory.findIndex(
    (item) => item.id === packageData.id
  );

  // Se encontrar algo no inventário, atualiza
  if (packageIndex !== -1) {
    if (inventory[packageIndex].quantity > 1) {
      inventory[packageIndex].quantity -= 1;
    } else {
      inventory.splice(packageIndex, 1);
      navigate(location.pathname, { replace: true, state: undefined });
    }

    localStorage.setItem('inventory', JSON.stringify(inventory));
  }
}
