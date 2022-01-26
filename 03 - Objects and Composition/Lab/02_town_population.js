function solve(input) {
  const obj = {};
  for (const line of input) {
    const [town, pop] = line.split(' <-> ');
    if (!obj.hasOwnProperty(town)) {
      obj[town] = +pop;
    } else {
      obj[town] += +pop;
    }
  }
  for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
}

solve([
  'Sofia <-> 1200000',
  'Montana <-> 20000',
  'New York <-> 10000000',
  'Washington <-> 2345000',
  'Las Vegas <-> 1000000',
]);
