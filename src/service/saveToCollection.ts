function getParsedStoredCollection() {
  return JSON.parse(localStorage.getItem('collection') as string);
}

function findAlreadyStoredPokemonCard(id: number, storedCollection: unknown[]) {
  return storedCollection.find((pokeCard) => pokeCard.id === id);
}

const saveToCollection = (newCards) => {
  const storedCollection = getParsedStoredCollection();

  // Adiciona as novas cartas à coleção e remove duplicatas

  newCards.forEach((newCard) => {
    // console.log('newCard', newCard);

    const findAlreadyExists = findAlreadyStoredPokemonCard(
      newCard.id,
      storedCollection
    );

    // console.log('findAlreadyExists', findAlreadyExists);

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

      const updatedCollection = storedCollection.map((item) =>
        item.id === newCard.id ? findAlreadyExists : item
      );

      // console.log('updatedCollection', updatedCollection);

      localStorage.setItem('collection', JSON.stringify(updatedCollection));

      return;
    }
  });

  //   console.log(storedCollection);
};

export default saveToCollection;
