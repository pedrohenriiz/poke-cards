function getParsedStoredCollection() {
  return JSON.parse(localStorage.getItem('coins') as string);
}

function saveToCoins(newCoins: number) {
  const findCurrentCoins = getParsedStoredCollection() ?? 0;

  const incrementCoins = findCurrentCoins + newCoins;

  localStorage.setItem('coins', JSON.stringify(incrementCoins));

  return incrementCoins;
}

export default saveToCoins;
