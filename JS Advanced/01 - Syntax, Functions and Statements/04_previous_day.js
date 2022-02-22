function solve(year, month, day) {
  const thisDay = new Date(year, month - 1, day - 1);

  const newYear = thisDay.getFullYear();
  const newMonth = thisDay.getMonth();
  const newDate = thisDay.getDate();

  console.log(`${newYear}-${newMonth + 1}-${newDate}`);
}

solve(2016, 10, 1);
