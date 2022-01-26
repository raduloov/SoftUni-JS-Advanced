function solve(arr, startStr, endStr) {
  const start = arr.indexOf(startStr);
  const end = arr.indexOf(endStr);
  const result = arr.splice(start, end - start + 1);
  return result;
}

console.log(
  solve(
    ['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
  )
);
