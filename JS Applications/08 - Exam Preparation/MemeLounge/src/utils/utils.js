export const memeIsNotValid = memeData => {
  const requiredFields = ['title', 'description', 'imageUrl'];

  return requiredFields.some(x => !memeData[x]);
};
