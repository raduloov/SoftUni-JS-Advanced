function validate() {
  const emailInput = document.getElementById('email');

  emailInput.addEventListener('change', event => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
      event.target.classList.add('error');
    } else {
      event.target.classList.remove('error');
    }
  });
}
