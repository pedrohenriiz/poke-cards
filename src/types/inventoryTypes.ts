export interface InventoryProps {
  id: string;
  description: string;
  name: string;
  package_type: string;
  price: number;
  quantity: number;
  type: 'card' | 'booster';
  should_roll_rarity: boolean;
}

export interface PackageProps extends InventoryProps {
  type: 'card';
}

export interface BoosterProps extends InventoryProps {
  type: 'booster';
}
