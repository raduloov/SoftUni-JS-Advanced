function solve(input) {
  const arr = [];
  input.forEach(num => {
    if (num < 0) {
      arr.unshift(num);
    } else {
      arr.push(num);
    }
  });
  arr.forEach(num => console.log(num));
}

solve([7, -2, 8, 9]);
