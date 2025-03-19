function getParsedStoredCollection() {
  return JSON.parse(localStorage.getItem('collection') as string);
}

function findAlreadyStoredPokemonCard(id: number, storedCollection: unknown[]) {
  return storedCollection.find((pokeCard) => pokeCard.id === id);
}

// Adicionar tipagem
const saveToCollection = (newCards) => {
  const storedCollection = getParsedStoredCollection();

  newCards.forEach((newCard) => {
    const findAlreadyExists = findAlreadyStoredPokemonCard(
      newCard.id,
      storedCollection
    );

    if (findAlreadyExists) {
      if (newCard.isShiny) {
        findAlreadyExists.shinyFound += 1;
        findAlreadyExists.isShiny = true;
        findAlreadyExists.image = newCard.image;
        findAlreadyExists.found = true;
      } else {
        findAlreadyExists.normalFound += 1;
        findAlreadyExists.image = !findAlreadyExists.isShiny
          ? newCard.image
          : findAlreadyExists.image;
        findAlreadyExists.found = true;
      }

      if (
        findAlreadyExists.shinyFound > 0 &&
        findAlreadyExists.normalFound > 0
      ) {
        findAlreadyExists.isCompleted = true;
      }

      const updatedCollection = storedCollection.map((item) =>
        item.id === newCard.id ? findAlreadyExists : item
      );

      localStorage.setItem('collection', JSON.stringify(updatedCollection));

      return;
    }
  });
};

export default saveToCollection;
