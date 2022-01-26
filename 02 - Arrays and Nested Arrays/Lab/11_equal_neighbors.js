function solve(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (i !== input.length - 1) {
        if (input[i][j] === input[i + 1][j] || input[i][j] === input[i][j + 1]) {
          count++;
        }
      } else {
        if (input[i][j] === input[i][j + 1]) {
          count++;
        }
      }
    }
  }
  return count;
}

console.log(
  solve([
    [0, 2, 5, 7, 4],
    [4, 0, 5, 3, 0],
    [2, 5, 5, 4, 2],
    [0, 1, 5, 1, 0],
  ])
);
