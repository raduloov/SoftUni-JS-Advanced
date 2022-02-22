function sameNumbers(input) {
  const arr = input.toString().split('');
  const number = arr[0];
  console.log(arr.every(num => num === number));
  console.log(arr.map(Number).reduce((a, b) => a + b));
}

sameNumbers(122222);
