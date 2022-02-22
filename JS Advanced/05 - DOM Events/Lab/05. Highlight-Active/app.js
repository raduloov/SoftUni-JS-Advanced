function focused() {
  const inputs = document.querySelectorAll('input');

  Array.from(inputs).forEach(input => {
    input.addEventListener('focus', () => addClass(input));
    input.addEventListener('blur', () => removeClass(input));
  });

  function addClass(input) {
    input.parentElement.classList.add('focused');
  }

  function removeClass(input) {
    input.parentElement.classList.remove('focused');
  }
}
