function solve(input) {
  const sum = input[0].reduce((a, b) => a + b);

  for (const row of input) {
    if (row.reduce((a, b) => a + b) !== sum) {
      return false;
    }
  }

  for (let i = 0; i < input.length; i++) {
    const col = [];
    for (let j = 0; j < input[i].length; j++) {
      col.push(input[j][i]);
    }
    if (col.reduce((a, b) => a + b) !== sum) {
      return false;
    }
  }

  return true;
}

console.log(
  solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
