export const gameIsNotValid = gameData => {
  const requiredFields = ['title', 'category', 'maxLevel', 'imageUrl', 'summary'];

  return requiredFields.some(x => !gameData[x]);
};
