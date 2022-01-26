function solve(...input) {
  const counter = {};

  input.forEach(el => {
    console.log(`${typeof el}: ${el}`);

    if (!counter[typeof el]) {
      counter[typeof el] = 1;
    } else {
      counter[typeof el]++;
    }
  });

  Object.entries(counter)
    .sort((a, b) => b[1] - a[1])
    .forEach(el => console.log(`${el[0]} = ${el[1]}`));
}

solve(
  { name: 'bob' },
  'cat',
  42,
  function () {
    console.log('Hello world!');
  },
  true,
  false
);
