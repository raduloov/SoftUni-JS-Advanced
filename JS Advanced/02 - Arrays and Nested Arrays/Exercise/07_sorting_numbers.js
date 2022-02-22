function solve(input) {
  const arr = [...input];
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      const min = Math.min(...arr);
      result.push(min);
      arr.splice(arr.indexOf(min), 1);
    } else {
      const max = Math.max(...arr);
      result.push(max);
      arr.splice(arr.indexOf(max), 1);
    }
  }
  return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
