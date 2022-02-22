function validate() {
  const input = document.getElementById('email');

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  input.addEventListener('change', () => {
    if (!regex.test(input.value)) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });
}
