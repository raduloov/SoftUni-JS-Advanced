window.addEventListener('load', solution);

function solution() {
  const nameInput = document.getElementById('fname');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const addressInput = document.getElementById('address');
  const postalCodeInput = document.getElementById('code');
  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');
  const infoEl = document.getElementById('infoPreview');
  const blockEl = document.getElementById('block');

  const currentData = {
    name: '',
    email: '',
    phone: '',
    address: '',
    code: '',
  };

  submitBtn.addEventListener('click', () => {
    if (nameInput.value === '' || emailInput === '') return;

    currentData.name = nameInput.value;
    currentData.email = emailInput.value;
    currentData.phone = phoneInput.value;
    currentData.address = addressInput.value;
    currentData.code = postalCodeInput.value;

    const markup = `
    <li>Full Name: ${currentData.name}</li>
    <li>Email: ${currentData.email}</li>
    <li>Phone Number: ${currentData.phone}</li>
    <li>Address: ${currentData.address}</li>
    <li>Postal Code: ${currentData.code}</li>
    `;

    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';
    postalCodeInput.value = '';

    infoEl.innerHTML += markup;
    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;
  });

  editBtn.addEventListener('click', () => {
    nameInput.value = currentData.name;
    emailInput.value = currentData.email;
    phoneInput.value = currentData.phone;
    addressInput.value = currentData.address;
    postalCodeInput.value = currentData.code;

    infoEl.innerHTML = '';
    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
  });

  continueBtn.addEventListener('click', () => {
    blockEl.innerHTML = '<h3>Thank you for your reservation!</h3>';
  });
}
