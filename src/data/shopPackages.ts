/*

--- Pacote raridade

- Ao comprar uma carta, o valor do pacote deve ser reduzido do total de moedas e o pacote adicionado ao inventário
- Se ao clicar para comprar, não tiver moeda, não adicionar ao inventário

- A desenvolver:
- [] Uncommon
- [] Rare
- [] Legendary
- [] Mystic

-- Ao comprar um pacote, essas são as informações a serem salvas:
- id
- quantity
- name

*/

import { ShopPackageProps } from '../types/shopPackageTypes';

const rarityPackages: ShopPackageProps[] = [
  {
    id: 'uncommon-package-001',
    name: 'Pacote incomum',
    package_type: 'UNCOMMON',
    type: 'card',
    description: 'Obtenha pokémons incomuns para sua coleção.',
    price: 250,
    should_roll_rarity: false,
  },
  {
    id: 'rare-package-001',
    name: 'Pacote raro',
    package_type: 'RARE',
    type: 'card',
    description: 'Encontre os pokémons mais raros.',
    price: 500,
    should_roll_rarity: false,
  },
  {
    id: 'legendary-package-001',
    name: 'Pacote lendário',
    package_type: 'LEGENDARY',
    type: 'card',
    description: 'Pegue um pokémon lendário',
    price: 750,
    should_roll_rarity: false,
  },
  {
    id: 'mystic-package-001',
    name: 'Pacote místico',
    package_type: 'MYSTIC',
    type: 'card',
    description: 'Encontre um pokémon único para sua coleção',
    price: 1000,
    should_roll_rarity: false,
  },
];

export { rarityPackages };
