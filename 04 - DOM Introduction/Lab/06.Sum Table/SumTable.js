function sumTable() {
  const table = document.querySelectorAll('table tr');
  let total = 0;
  for (let i = 1; i < table.length; i++) {
    const cols = table[i].children;
    const cost = cols[cols.length - 1].textContent;
    total += Number(cost);
  }
  document.getElementById('sum').textContent = total;
}
