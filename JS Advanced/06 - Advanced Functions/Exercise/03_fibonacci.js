function getFibonator() {
  let f0 = 0;
  let f1 = 1;

  return function () {
    let oldf0 = f0;
    let oldf1 = f1;

    f0 = oldf1;
    f1 = oldf0 + oldf1;

    return f0;
  };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
