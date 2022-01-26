function solve(input) {
  const matrix = [];

  while (input.length > 0) {
    matrix.push(input.shift().split(' ').map(Number));
  }

  let diag1 = 0;
  let diag2 = 0;

  for (let i = 0; i < matrix.length; i++) {
    diag1 += matrix[i][i];
    diag2 += matrix[i][matrix.length - 1 - i];
  }

  if (diag1 === diag2) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (j !== matrix.length - 1 - i && j !== i) {
          matrix[i][j] = diag1;
        }
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(' '));
  }
}

solve(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
