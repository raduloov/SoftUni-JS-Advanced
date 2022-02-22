function solve(input) {
  const cars = {};

  input.forEach(line => {
    const [brand, model, quantity] = line.split(' | ');

    if (!cars[brand]) {
      cars[brand] = {};
      cars[brand][model] = Number(quantity);
    } else if (!cars[brand][model]) {
      cars[brand][model] = Number(quantity);
    } else {
      cars[brand][model] += Number(quantity);
    }
  });

  Object.keys(cars).forEach(brand => {
    console.log(brand);
    Object.entries(cars[brand]).forEach(kvp => {
      console.log(`###${kvp[0]} -> ${kvp[1]}`);
    });
  });
}

solve([
  'Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10',
]);
