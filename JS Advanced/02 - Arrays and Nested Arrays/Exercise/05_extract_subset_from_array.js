function solve(input) {
  const arr = [];
  let max = 0;
  for (const num of input) {
    if (num >= max) {
      arr.push(num);
      max = num;
    }
  }
  return arr;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
