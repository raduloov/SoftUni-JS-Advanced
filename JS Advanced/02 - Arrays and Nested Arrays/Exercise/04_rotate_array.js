function solve(arr, n) {
  for (let i = 0; i < n; i++) {
    const last = arr.pop();
    arr.unshift(last);
  }
  console.log(arr.join(' '));
}

solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
