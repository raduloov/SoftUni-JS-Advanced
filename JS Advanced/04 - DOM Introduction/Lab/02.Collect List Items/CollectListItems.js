function extractText() {
  const items = document.querySelectorAll('ul#items li');
  const textarea = document.querySelector('#result');
  for (const item of items) {
    textarea.value += item.textContent + '\n';
  }
}
