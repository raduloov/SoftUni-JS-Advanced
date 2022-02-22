function solve(input) {
  const sorted = input.sort((a, b) => a - b);
  const biggerHalf = sorted.slice(sorted.length / 2);
  return biggerHalf;
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);
