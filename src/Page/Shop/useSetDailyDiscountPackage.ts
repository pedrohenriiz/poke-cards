import { getDiscountedPackage } from '../../service/shopPackages/promotionalPackage';

import { rarityPackages } from '../../data/shopPackages';
import { useEffect } from 'react';
import { DailyDiscountPackage } from '../../types/shopPackageTypes';

export default function useSetDailyDiscountPackage() {
  useEffect(() => {
    const packages = [rarityPackages];

    if (packages.length === 0) return undefined;

    const today = new Date().toISOString().split('T')[0];

    const savedData: DailyDiscountPackage = JSON.parse(
      localStorage.getItem('dailyDiscountPackage') as string
    );

    if (savedData && savedData.date === today) return undefined;

    const promotionalPackage = getDiscountedPackage(rarityPackages);

    localStorage.setItem(
      'dailyDiscountPackage',
      JSON.stringify({ date: today, package: promotionalPackage })
    );
  }, []);
}
