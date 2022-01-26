function solve(input) {
  const arr = [];
  input
    .toUpperCase()
    .split(/\W+/)
    .forEach(word => (word !== '' ? arr.push(word) : ''));
  console.log(arr.join(', '));
}

solve('Hi, how are you?');
