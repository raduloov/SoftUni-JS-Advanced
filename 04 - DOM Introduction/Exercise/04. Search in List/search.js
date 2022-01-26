function search() {
  const input = document.getElementById('searchText').value;
  const result = document.getElementById('result');
  const items = document.querySelectorAll('li');

  let matches = 0;
  Array.from(items).forEach(item => {
    let town = item.textContent;
    if (input && town.indexOf(input) >= 0) {
      item.style.fontWeight = 'bold';
      item.style.textDecoration = 'underline';
      matches++;
    }
  });

  result.textContent = `${matches} matches found`;
}
