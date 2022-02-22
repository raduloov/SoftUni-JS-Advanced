function deleteByEmail() {
  const customers = document.querySelectorAll('#customers tbody tr td');
  const input = document.querySelector('input');
  const result = document.getElementById('result');

  let isFound = false;
  Array.from(customers).forEach(row => {
    if (row.textContent === input.value) {
      isFound = true;
      row.parentElement.remove();
      result.textContent = 'Deleted.';
    }
  });

  if (!isFound) {
    result.textContent = 'Not found.';
  }
}
