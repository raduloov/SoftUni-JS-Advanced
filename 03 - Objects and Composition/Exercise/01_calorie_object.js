function solve(input) {
  const output = {};
  for (let i = 0; i < input.length; i += 2) {
    output[input[i]] = +input[i + 1];
  }
  console.log(output);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
