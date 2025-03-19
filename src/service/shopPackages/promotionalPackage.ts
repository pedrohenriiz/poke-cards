import { ShopPackageProps } from '../../types/shopPackageTypes';

function getDiscountedPackage(packages: ShopPackageProps[]) {
  if (packages.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * packages.length);
  const selectedPackage = packages[randomIndex];

  const discountedOptions = [10, 20, 30]; // Quem sabe esse valor pode ser um parâmetro
  const discountPercentage =
    discountedOptions[Math.floor(Math.random() * discountedOptions.length)];

  const discountedPrice = Math.round(
    selectedPackage.price * (1 - discountPercentage / 100)
  );

  return {
    ...selectedPackage,
    price: discountedPrice,
    discount: discountPercentage,
    should_roll_rarity: false,
  };
}

export { getDiscountedPackage };
