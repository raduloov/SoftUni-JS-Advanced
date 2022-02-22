function solve(input) {
  const store = {};

  for (const line of input) {
    const [item, price] = line.split(' : ');
    const symbol = item[0];

    if (!store.hasOwnProperty(symbol)) {
      store[symbol] = {};
      store[symbol][item] = price;
    } else {
      store[symbol][item] = price;
    }
  }

  Object.entries(store)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(kvp => {
      console.log(kvp[0]);
      Object.entries(store[kvp[0]])
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(el => {
          console.log(`  ${el[0]}: ${el[1]}`);
        });
    });
}

solve([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);
