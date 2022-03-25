export const bookIsNotValid = bookData => {
  const requiredFields = ['title', 'description', 'imageUrl', 'type'];

  return requiredFields.some(x => !bookData[x]);
};
