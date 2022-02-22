function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    const search = document.getElementById('searchField');
    const result = document.getElementById('result');
    const rows = document.querySelectorAll('tr');

    Array.from(rows).forEach(row => {
      row.classList.remove('select');
    });

    Array.from(rows).forEach(row => {
      const content = row.textContent;
      const searchTerm = search.value;
      if (searchTerm && content.indexOf(searchTerm) >= 0) {
        row.classList.add('select');
      }
    });
    search.value = '';
  }
}
