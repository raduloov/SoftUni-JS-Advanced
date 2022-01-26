function solve() {
  const output = document.getElementById('result');
  const input = document.getElementById('input');
  const to = document.getElementById('selectMenuTo');
  const btn = document.querySelector('button');

  const binaryOption = document.createElement('option');
  const hexadecimalOption = document.createElement('option');

  to.appendChild(binaryOption);
  to.appendChild(hexadecimalOption);
  binaryOption.textContent = 'Binary';
  binaryOption.value = 'binary';
  hexadecimalOption.textContent = 'Hexadecimal';
  hexadecimalOption.value = 'hexadecimal';

  btn.addEventListener('click', () => {
    if (to.value === 'binary') {
      output.value = Number(input.value).toString(2);
    }
    if (to.value === 'hexadecimal') {
      output.value = Number(input.value).toString(16).toUpperCase();
    }
  });
}
