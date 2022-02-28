const firstNameInput = document.querySelectorAll('input')[0];
const lastNameInput = document.querySelectorAll('input')[1];
const facultyInput = document.querySelectorAll('input')[2];
const gradeInput = document.querySelectorAll('input')[3];
const submitBtn = document.getElementById('submit');
const tBody = document.querySelector('tbody');

const getData = async () => {
  const response = await fetch(
    'http://localhost:3030/jsonstore/collections/students'
  );
  const data = await response.json();
  return data;
};

const sendData = async () => {
  if (
    firstNameInput.value.trim().length === 0 ||
    lastNameInput.value.trim().length === 0 ||
    facultyInput.value.trim().length === 0 ||
    gradeInput.value.trim().length === 0
  ) {
    return;
  }

  const data = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    facultyNumber: facultyInput.value,
    grade: gradeInput.value,
  };

  await fetch('http://localhost:3030/jsonstore/collections/students', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

const setData = async () => {
  const data = await getData();

  tBody.innerHTML = Object.values(data)
    .map(
      student => `
    <tr>
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.facultyNumber}</td>
      <td>${student.grade}</td>
    </tr>
  `
    )
    .join('\n');
};

submitBtn.addEventListener('click', event => {
  event.preventDefault();

  sendData();
  setData();
});

setData();
