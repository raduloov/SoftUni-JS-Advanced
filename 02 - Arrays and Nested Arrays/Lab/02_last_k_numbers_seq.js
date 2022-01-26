function solve(n, k) {
  const arr = [1];
  for (let i = 1; i < n; i++) {
    let sum = 0;
    if (k > arr.length) {
      const temp = [...arr];
      sum = temp.reduce((a, b) => a + b);
    } else {
      const temp = arr.slice(-k);
      sum = temp.reduce((a, b) => a + b);
    }
    arr.push(sum);
  }
  console.log(arr);
}

solve(6, 3);
solve(8, 2);
