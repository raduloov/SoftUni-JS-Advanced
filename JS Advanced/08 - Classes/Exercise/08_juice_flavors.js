function solve(input) {
  const juice = {};
  const bottles = {};

  input.forEach(line => {
    const [flavor, quantity] = line.split(' => ');

    if (!juice[flavor]) {
      juice[flavor] = Number(quantity);
    } else {
      juice[flavor] += Number(quantity);
    }

    if (juice[flavor] >= 1000) {
      bottles[flavor] = Math.floor(juice[flavor] / 1000);
    }
  });

  Object.entries(bottles).forEach(bottle =>
    console.log(`${bottle[0]} => ${bottle[1]}`)
  );
}

solve([
  'Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549',
]);
solve([
  'Kiwi => 234',
  'Pear => 2345',
  'Watermelon => 3456',
  'Kiwi => 4567',
  'Pear => 5678',
  'Watermelon => 6789',
]);
