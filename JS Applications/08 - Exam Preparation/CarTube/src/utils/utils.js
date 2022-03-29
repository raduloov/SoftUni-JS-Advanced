export const listingIsNotValid = listingData => {
  const requiredFields = [
    'brand',
    'model',
    'description',
    'year',
    'imageUrl',
    'price'
  ];

  return requiredFields.some(x => !listingData[x]);
};
