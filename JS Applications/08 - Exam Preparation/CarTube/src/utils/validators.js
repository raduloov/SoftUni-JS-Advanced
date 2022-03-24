export const listingIsNotValid = carData => {
  const requiredFields = [
    'brand',
    'model',
    'description',
    'year',
    'imageUrl',
    'price'
  ];

  return requiredFields.some(x => !carData[x]);
};
