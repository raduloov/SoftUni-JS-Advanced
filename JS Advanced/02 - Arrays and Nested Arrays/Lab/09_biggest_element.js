function solve(input) {
  return Math.max(...input.flat());
}

console.log(
  solve([
    [20, 50, 10],
    [8, 33, 145],
  ])
);
