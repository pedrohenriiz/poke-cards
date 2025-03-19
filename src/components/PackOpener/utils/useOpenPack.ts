import { Dispatch, SetStateAction, useCallback } from 'react';
import rarityBasedPack from '../../../service/packs/rarityBasedPack';
import saveToCollection from '../../../service/saveToCollection';
import calculateCoins from './calculateCoins';
import fetchPokemonDetails from './fetchPokemonDetails';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import formatPokemonData from './formatPokemonData';
import { PackageProps } from '../../../types/inventoryTypes';
import { CardProps } from '../../../types/cardTypes';
import { CardRarities } from '../../../types/cardRarities';
import { PokemonListProps } from '../../../data/pokemonRarity';

interface UseOpenPackProps {
  setIsOpening: Dispatch<SetStateAction<boolean>>;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
  packageData: PackageProps;
  setAddedCoins: Dispatch<SetStateAction<number>>;
  setCards: Dispatch<SetStateAction<CardProps[]>>;
  setAnimate: Dispatch<SetStateAction<boolean>>;
  setCoins: Dispatch<SetStateAction<number>>;
  saveToCoins: (coins: number) => number;
  updatePlayerInventory: ({
    navigate,
    packageData,
  }: {
    navigate: NavigateFunction;
    packageData: PackageProps;
  }) => void;
}

export default function useOpenPack({
  setIsOpening,
  setIsAnimating,
  packageData,
  setAddedCoins,
  setCards,
  setAnimate,
  setCoins,
  saveToCoins,
  updatePlayerInventory,
}: UseOpenPackProps) {
  const navigate = useNavigate();

  const animation = useCallback(
    (pokeCoins: number) => {
      setIsOpening(false);
      setAnimate(true);

      setTimeout(() => {
        setCoins(saveToCoins(pokeCoins));
        setAnimate(false);
        setIsAnimating(false);

        if (packageData)
          updatePlayerInventory({
            navigate,
            packageData,
          });
      }, 1100);
    },
    [
      navigate,
      packageData,
      saveToCoins,
      setAnimate,
      setCoins,
      setIsAnimating,
      setIsOpening,
      updatePlayerInventory,
    ]
  );

  const openPack = useCallback(async () => {
    setIsOpening(true);
    setIsAnimating(true);

    const packType = packageData?.package_type?.toLowerCase() as CardRarities;
    const packShouldRollRarity = packageData?.should_roll_rarity as boolean;

    let commonPackPokemons: PokemonListProps[];

    if (packType) {
      commonPackPokemons = rarityBasedPack({
        rarity: packType,
        shouldRollRarity: packShouldRollRarity,
      });
    } else {
      commonPackPokemons = rarityBasedPack(undefined);
    }

    const pokemonsFound = await fetchPokemonDetails({
      pokemonList: commonPackPokemons,
    });

    const pokeCoins = calculateCoins({ pokemonList: commonPackPokemons });
    setAddedCoins(pokeCoins);

    const formattedData = formatPokemonData({
      pokemonList: pokemonsFound,
      currentPackPokemons: commonPackPokemons,
    });
    saveToCollection(formattedData);

    setCards(formattedData);

    animation(pokeCoins);
  }, [
    setIsOpening,
    setIsAnimating,
    packageData?.package_type,
    packageData?.should_roll_rarity,
    setAddedCoins,
    setCards,
    animation,
  ]);

  return { openPack };
}
