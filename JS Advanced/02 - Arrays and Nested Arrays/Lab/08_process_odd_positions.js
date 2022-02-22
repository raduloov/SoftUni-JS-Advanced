function solve(input) {
  const arr = [];
  for (let i = 0; i < input.length; i++) {
    if (i % 2 !== 0) {
      arr.push(input[i]);
    }
  }
  return arr.map(num => num * 2).reverse();
}

console.log(solve([10, 15, 20, 25]));
