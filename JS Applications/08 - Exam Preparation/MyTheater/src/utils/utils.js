export const eventIsNotValid = eventData => {
  const requiredFields = ['title', 'date', 'author', 'imageUrl', 'description'];

  return requiredFields.some(x => !eventData[x]);
};
