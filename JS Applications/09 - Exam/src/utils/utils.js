export const petIsNotValid = petData => {
  const requiredFields = ['name', 'breed', 'age', 'weight', 'image'];

  return requiredFields.some(x => !petData[x]);
};
