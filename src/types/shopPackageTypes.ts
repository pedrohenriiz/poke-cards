export interface ShopPackageProps {
  id: string;
  name: string;
  package_type: string;
  type: 'card' | 'booster';
  description: string;
  price: number;
  should_roll_rarity: boolean;
}

interface ExtendedPackageProps extends ShopPackageProps {
  discount: number;
}

export interface DailyDiscountPackage {
  date: string;
  package: ExtendedPackageProps;
}
