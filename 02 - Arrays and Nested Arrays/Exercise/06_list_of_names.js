function solve(input) {
  let i = 1;
  input
    .sort((a, b) => a.localeCompare(b))
    .forEach(name => {
      console.log(`${i}.${name}`);
      i++;
    });
}

solve(['John', 'Bob', 'Christina', 'Ema']);
