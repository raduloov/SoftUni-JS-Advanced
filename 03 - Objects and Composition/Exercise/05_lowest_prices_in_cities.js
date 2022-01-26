function solve(input) {
  const object = {};

  for (const line of input) {
    const info = line.split(' | ');
    const town = info[0];
    const product = info[1];
    const price = +info[2];

    if (!object.hasOwnProperty(product)) {
      object[product] = [];
      object[product].push({ town, price });
    } else {
      object[product].push({ town, price });
    }
  }

  const output = [];

  Object.entries(object).forEach(kvp => {
    const lowest = [...kvp[1]].sort((a, b) => a[1] - b[1])[0];
    output.push(
      `${kvp[0]} -> ${Object.values(lowest)[1]} (${Object.values(lowest)[0]})`
    );
  });

  console.log(output.join('\n'));
}

solve([
  'Sofia City | NoOffenseToCarLovers | 0',
  'Mexico City | Audi | 1000',
  'Mexico City | BMW | 99999',
  'Mexico City | Mitsubishi | 10000',
  'New York City | Mitsubishi | 1000',
  'Washington City | Mercedes | 1000',
]);
