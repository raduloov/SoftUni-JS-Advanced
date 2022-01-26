function solve(input) {
  return function (num) {
    return input + num;
  };
}

let add5 = solve(5);
console.log(add5(2));
console.log(add5(3));
