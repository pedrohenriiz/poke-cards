//*
// Comuns: 200
// Incomuns: 500
// Raros: 1000
// Lendário: 2000
// Mítico: 5000
//  */

export interface PokemonListProps {
  id: number;
  name: string;
  rarity: number;
  weight: number;
}

const pokemonList: PokemonListProps[] = [
  { id: 1, name: 'Bulbasaur', rarity: 200, weight: 8 },
  { id: 2, name: 'Ivysaur', rarity: 500, weight: 6 },
  { id: 3, name: 'Venusaur', rarity: 1000, weight: 3 },

  { id: 4, name: 'Charmander', rarity: 200, weight: 8 },
  { id: 5, name: 'Charmeleon', rarity: 500, weight: 6 },
  { id: 6, name: 'Charizard', rarity: 1000, weight: 3 },

  { id: 7, name: 'Squirtle', rarity: 200, weight: 8 },
  { id: 8, name: 'Wartortle', rarity: 500, weight: 6 },
  { id: 9, name: 'Blastoise', rarity: 1000, weight: 3 },

  { id: 10, name: 'Caterpie', rarity: 200, weight: 9 },
  { id: 11, name: 'Metapod', rarity: 500, weight: 6 },
  { id: 12, name: 'Butterfree', rarity: 1000, weight: 5 },

  { id: 13, name: 'Weedle', rarity: 200, weight: 9 },
  { id: 14, name: 'Kakuna', rarity: 500, weight: 6 },
  { id: 15, name: 'Beedrill', rarity: 1000, weight: 5 },

  { id: 16, name: 'Pidgey', rarity: 200, weight: 9 },
  { id: 17, name: 'Pidgeotto', rarity: 500, weight: 6 },
  { id: 18, name: 'Pidgeot', rarity: 1000, weight: 4 },

  { id: 19, name: 'Rattata', rarity: 200, weight: 9 },
  { id: 20, name: 'Raticate', rarity: 500, weight: 4 },

  { id: 21, name: 'Spearow', rarity: 200, weight: 9 },
  { id: 22, name: 'Fearow', rarity: 500, weight: 4 },

  { id: 23, name: 'Ekans', rarity: 200, weight: 8 },
  { id: 24, name: 'Arbok', rarity: 500, weight: 4 },

  { id: 25, name: 'Pikachu', rarity: 1000, weight: 5 },
  { id: 26, name: 'Raichu', rarity: 1000, weight: 4 },

  { id: 27, name: 'Sandshrew', rarity: 200, weight: 8 },
  { id: 28, name: 'Sandslash', rarity: 500, weight: 4 },

  { id: 29, name: 'Nidoran♀', rarity: 200, weight: 8 },
  { id: 30, name: 'Nidorina', rarity: 500, weight: 5 },
  { id: 31, name: 'Nidoqueen', rarity: 1000, weight: 4 },

  { id: 32, name: 'Nidoran♂', rarity: 200, weight: 8 },
  { id: 33, name: 'Nidorino', rarity: 500, weight: 5 },
  { id: 34, name: 'Nidoking', rarity: 1000, weight: 4 },

  { id: 35, name: 'Clefairy', rarity: 500, weight: 5 },
  { id: 36, name: 'Clefable', rarity: 1000, weight: 4 },

  { id: 37, name: 'Vulpix', rarity: 200, weight: 5 },
  { id: 38, name: 'Ninetales', rarity: 1000, weight: 4 },

  { id: 39, name: 'Jigglypuff', rarity: 200, weight: 4 },
  { id: 40, name: 'Wigglytuff', rarity: 500, weight: 4 },

  { id: 41, name: 'Zubat', rarity: 200, weight: 6 },
  { id: 42, name: 'Golbat', rarity: 500, weight: 4 },

  { id: 43, name: 'Oddish', rarity: 200, weight: 8 },
  { id: 44, name: 'Gloom', rarity: 500, weight: 6 },
  { id: 45, name: 'Vileplume', rarity: 1000, weight: 4 },

  { id: 46, name: 'Paras', rarity: 200, weight: 8 },
  { id: 47, name: 'Parasect', rarity: 500, weight: 5 },

  { id: 48, name: 'Venonat', rarity: 200, weight: 5 },
  { id: 49, name: 'Venomoth', rarity: 500, weight: 4 },

  { id: 50, name: 'Diglett', rarity: 200, weight: 8 },
  { id: 51, name: 'Dugtrio', rarity: 500, weight: 4 },

  { id: 52, name: 'Meowth', rarity: 200, weight: 4 },
  { id: 53, name: 'Persian', rarity: 500, weight: 3 },

  { id: 54, name: 'Psyduck', rarity: 200, weight: 6 },
  { id: 55, name: 'Golduck', rarity: 500, weight: 4 },

  { id: 56, name: 'Mankey', rarity: 200, weight: 6 },
  { id: 57, name: 'Primeape', rarity: 500, weight: 4 },

  { id: 58, name: 'Growlithe', rarity: 200, weight: 8 },
  { id: 59, name: 'Arcanine', rarity: 1000, weight: 4 },

  { id: 60, name: 'Poliwag', rarity: 200, weight: 8 },
  { id: 61, name: 'Poliwhirl', rarity: 500, weight: 6 },
  { id: 62, name: 'Poliwrath', rarity: 1000, weight: 5 },

  { id: 63, name: 'Abra', rarity: 200, weight: 8 },
  { id: 64, name: 'Kadabra', rarity: 500, weight: 5 },
  { id: 65, name: 'Alakazam', rarity: 1000, weight: 3 },

  { id: 66, name: 'Machop', rarity: 200, weight: 8 },
  { id: 67, name: 'Machoke', rarity: 500, weight: 5 },
  { id: 68, name: 'Machamp', rarity: 1000, weight: 3 },

  { id: 69, name: 'Bellsprout', rarity: 200, weight: 8 },
  { id: 70, name: 'Weepinbell', rarity: 500, weight: 6 },
  { id: 71, name: 'Victreebel', rarity: 1000, weight: 4 },

  { id: 72, name: 'Tentacool', rarity: 200, weight: 6 },
  { id: 73, name: 'Tentacruel', rarity: 500, weight: 5 },

  { id: 74, name: 'Geodude', rarity: 200, weight: 8 },
  { id: 75, name: 'Graveler', rarity: 500, weight: 6 },
  { id: 76, name: 'Golem', rarity: 1000, weight: 4 },

  { id: 77, name: 'Ponyta', rarity: 200, weight: 4 },
  { id: 78, name: 'Rapidash', rarity: 1000, weight: 3 },

  { id: 79, name: 'Slowpoke', rarity: 200, weight: 6 },
  { id: 80, name: 'Slowbro', rarity: 500, weight: 4 },

  { id: 81, name: 'Magnemite', rarity: 200, weight: 5 },
  { id: 82, name: 'Magneton', rarity: 500, weight: 4 },

  { id: 83, name: "Farfetch'd", rarity: 1000, weight: 3 },

  { id: 84, name: 'Doduo', rarity: 200, weight: 6 },
  { id: 85, name: 'Dodrio', rarity: 500, weight: 4 },

  { id: 86, name: 'Seel', rarity: 200, weight: 6 },
  { id: 87, name: 'Dewgong', rarity: 500, weight: 5 },

  { id: 88, name: 'Grimer', rarity: 200, weight: 5 },
  { id: 89, name: 'Muk', rarity: 500, weight: 4 },

  { id: 90, name: 'Shellder', rarity: 200, weight: 6 },
  { id: 91, name: 'Cloyster', rarity: 1000, weight: 4 },

  { id: 92, name: 'Gastly', rarity: 200, weight: 6 },
  { id: 93, name: 'Haunter', rarity: 500, weight: 4 },
  { id: 94, name: 'Gengar', rarity: 1000, weight: 3 },

  { id: 95, name: 'Onix', rarity: 1000, weight: 3 },

  { id: 96, name: 'Drowzee', rarity: 200, weight: 6 },
  { id: 97, name: 'Hypno', rarity: 500, weight: 4 },

  { id: 98, name: 'Krabby', rarity: 200, weight: 6 },
  { id: 99, name: 'Kingler', rarity: 500, weight: 5 },

  { id: 100, name: 'Voltorb', rarity: 200, weight: 6 },
  { id: 101, name: 'Electrode', rarity: 500, weight: 5 },

  { id: 102, name: 'Exeggcute', rarity: 200, weight: 6 },
  { id: 103, name: 'Exeggutor', rarity: 1000, weight: 5 },

  { id: 104, name: 'Cubone', rarity: 200, weight: 5 },
  { id: 105, name: 'Marowak', rarity: 500, weight: 4 },

  { id: 106, name: 'Hitmonlee', rarity: 1000, weight: 4 },
  { id: 107, name: 'Hitmonchan', rarity: 1000, weight: 4 },

  { id: 108, name: 'Lickitung', rarity: 1000, weight: 3 },

  { id: 109, name: 'Koffing', rarity: 200, weight: 6 },
  { id: 110, name: 'Weezing', rarity: 500, weight: 4 },

  { id: 111, name: 'Rhyhorn', rarity: 200, weight: 5 },
  { id: 112, name: 'Rhydon', rarity: 500, weight: 4 },

  { id: 113, name: 'Chansey', rarity: 1000, weight: 3 },

  { id: 114, name: 'Tangela', rarity: 1000, weight: 3 },

  { id: 115, name: 'Kangaskhan', rarity: 1000, weight: 3 },

  { id: 116, name: 'Horsea', rarity: 200, weight: 8 },
  { id: 117, name: 'Seadra', rarity: 500, weight: 6 },

  { id: 118, name: 'Goldeen', rarity: 200, weight: 8 },
  { id: 119, name: 'Seaking', rarity: 500, weight: 6 },

  { id: 120, name: 'Staryu', rarity: 200, weight: 8 },
  { id: 121, name: 'Starmie', rarity: 500, weight: 6 },

  { id: 122, name: 'Mr. Mime', rarity: 1000, weight: 3 },

  { id: 123, name: 'Scyther', rarity: 1000, weight: 3 },

  { id: 124, name: 'Jynx', rarity: 1000, weight: 3 },

  { id: 125, name: 'Electabuzz', rarity: 1000, weight: 3 },

  { id: 126, name: 'Magmar', rarity: 1000, weight: 3 },

  { id: 127, name: 'Pinsir', rarity: 1000, weight: 3 },

  { id: 128, name: 'Tauros', rarity: 1000, weight: 3 },

  { id: 129, name: 'Magikarp', rarity: 200, weight: 8 },
  { id: 130, name: 'Gyarados', rarity: 1000, weight: 2 },

  { id: 131, name: 'Lapras', rarity: 1000, weight: 3 },

  { id: 132, name: 'Ditto', rarity: 1000, weight: 2 },

  { id: 133, name: 'Eevee', rarity: 500, weight: 3 },
  { id: 134, name: 'Vaporeon', rarity: 1000, weight: 2 },
  { id: 135, name: 'Jolteon', rarity: 1000, weight: 2 },
  { id: 136, name: 'Flareon', rarity: 1000, weight: 2 },

  { id: 137, name: 'Porygon', rarity: 1000, weight: 2 },

  { id: 138, name: 'Omanyte', rarity: 500, weight: 2 },
  { id: 139, name: 'Omastar', rarity: 1000, weight: 2 },

  { id: 140, name: 'Kabuto', rarity: 500, weight: 3 },
  { id: 141, name: 'Kabutops', rarity: 1000, weight: 2 },

  { id: 142, name: 'Aerodactyl', rarity: 1000, weight: 2 },

  { id: 143, name: 'Snorlax', rarity: 1000, weight: 2 },

  { id: 144, name: 'Articuno', rarity: 2000, weight: 1 },
  { id: 145, name: 'Zapdos', rarity: 2000, weight: 1 },
  { id: 146, name: 'Moltres', rarity: 2000, weight: 1 },

  { id: 147, name: 'Dratini', rarity: 500, weight: 3 },
  { id: 148, name: 'Dragonair', rarity: 1000, weight: 2 },
  { id: 149, name: 'Dragonite', rarity: 2000, weight: 1 },

  { id: 150, name: 'Mewtwo', rarity: 5000, weight: 1 },
  { id: 151, name: 'Mew', rarity: 5000, weight: 1 },
];

export default pokemonList;
