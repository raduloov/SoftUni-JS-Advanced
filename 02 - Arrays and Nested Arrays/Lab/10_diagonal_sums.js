function solve(input) {
  const length = input[0].length;
  let sum = 0;
  const arr = [];
  for (let i = 0; i < length; i++) {
    sum += input[i][i];
  }
  arr.push(sum);
  sum = 0;
  for (let i = 0, j = length - 1; i < length; i++, j--) {
    sum += input[i][j];
  }
  arr.push(sum);
  console.log(arr.join(' '));
}

solve([
  [20, 40],
  [10, 60],
]);
