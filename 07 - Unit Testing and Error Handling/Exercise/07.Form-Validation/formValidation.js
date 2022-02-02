function validate() {
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const companyCheckbox = document.getElementById('company');
  const companyNumberInput = document.getElementById('companyNumber');
  const companyInfoEl = document.getElementById('companyInfo');
  const validEl = document.getElementById('valid');
  const submitBtn = document.getElementById('submit');

  let allIsValid = true;

  submitBtn.addEventListener('click', event => {
    event.preventDefault();

    if (!/^[A-Za-z0-9]{3,20}$/.test(usernameInput.value)) {
      usernameInput.style.borderColor = 'red';
      allIsValid = false;
    } else {
      usernameInput.style.border = 'none';
      allIsValid = true;
    }

    if (
      !/^[A-Za-z0-9_]{5,15}$/.test(passwordInput.value) ||
      passwordInput.value !== confirmPasswordInput.value
    ) {
      passwordInput.style.borderColor = 'red';
      confirmPasswordInput.style.borderColor = 'red';
      allIsValid = false;
    } else {
      passwordInput.style.border = 'none';
      confirmPasswordInput.style.border = 'none';
      allIsValid = true;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
      emailInput.style.borderColor = 'red';
      allIsValid = false;
    } else {
      emailInput.style.border = 'none';
      allIsValid = true;
    }

    if (allIsValid) {
      validEl.style.display = 'block';
    }
  });

  companyCheckbox.addEventListener('change', event => {
    if (event.target.checked) {
      companyInfoEl.style.display = 'block';
      if (companyNumberInput.value < 1000 || companyNumberInput.value > 9999) {
        companyNumberInput.style.borderColor = 'red';
        allIsValid = false;
      } else {
        companyNumberInput.style.border = 'none';
        allIsValid = true;
      }
    } else {
      companyInfoEl.style.display = 'none';
    }
  });
}
