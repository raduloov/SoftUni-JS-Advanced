function toggle() {
  const button = document.querySelector('.button');
  const div = document.getElementById('extra');

  if (div.style.display === 'none') {
    div.style.display = 'block';
    button.textContent = 'Less';
  } else {
    div.style.display = 'none';
    button.textContent = 'More';
  }
}
