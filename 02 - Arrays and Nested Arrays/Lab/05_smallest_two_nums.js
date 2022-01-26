function solve(input) {
  const arr = [...input];
  const smallest1 = Math.min(...arr);
  arr.splice(arr.indexOf(smallest1), 1);
  const smallest2 = Math.min(...arr);
  console.log(smallest1, smallest2);
}

solve([30, 15, 50, 5]);
