function solve(input) {
  let number = 1;
  const arr = [];
  for (const el of input) {
    if (el === 'add') {
      arr.push(number);
    } else {
      arr.pop();
    }
    number++;
  }
  if (arr.length !== 0) {
    arr.forEach(num => console.log(num));
  } else {
    console.log('Empty');
  }
}

solve(['add', 'add', 'remove', 'add', 'add']);
