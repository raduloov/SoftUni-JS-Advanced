function solve(input) {
  const [WIDTH, HEIGHT, X, Y] = [input[0], input[1], input[2], input[3]];

  const matrix = [];
  for (let i = 0; i < HEIGHT; i++) {
    const row = [];
    for (let j = 0; j < WIDTH; j++) {
      row.push(null);
    }
    matrix.push(row);
  }

  matrix[X][Y] = 1;

  for (let i = 0; i < WIDTH - X; i++) {}
  console.log(matrix);
}

solve([4, 4, 0, 0]);
