function solve() {
  const firstName = document.getElementById('fname');
  const lastName = document.getElementById('lname');
  const email = document.getElementById('email');
  const birth = document.getElementById('birth');
  const position = document.getElementById('position');
  const salary = document.getElementById('salary');
  const addWorkerBtn = document.getElementById('add-worker');
  const tBody = document.getElementById('tbody');
  const totalSalaryEl = document.getElementById('sum');

  let totalSalary = 0;

  addWorkerBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (
      firstName.value === '' ||
      lastName.value === '' ||
      email.value === '' ||
      birth.value === '' ||
      position.value === '' ||
      salary.value === ''
    ) {
      return;
    }

    tBody.innerHTML += `
      <tr>
        <td>${firstName.value}</td>
        <td>${lastName.value}</td>
        <td>${email.value}</td>
        <td>${birth.value}</td>
        <td>${position.value}</td>
        <td>${salary.value}</td>
        <td><button class="fired">Fired</button> <button class="edit">Edit</button></td>
      </tr>
    `;

    totalSalary += Number(salary.value);
    totalSalaryEl.innerText = totalSalary.toFixed(2);

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    birth.value = '';
    position.value = '';
    salary.value = '';

    Array.from(tBody.querySelectorAll('.edit')).forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const curElement = event.target.parentElement.parentElement;

        // console.log(Array.from(curElement.querySelectorAll('td')));
        // console.log(curElement);

        firstName.value = Array.from(
          curElement.querySelectorAll('td')
        )[0].innerText;
        lastName.value = Array.from(
          curElement.querySelectorAll('td')
        )[1].innerText;
        email.value = Array.from(
          curElement.querySelectorAll('td')
        )[2].innerText;
        birth.value = Array.from(
          curElement.querySelectorAll('td')
        )[3].innerText;
        position.value = Array.from(
          curElement.querySelectorAll('td')
        )[4].innerText;
        salary.value = Array.from(
          curElement.querySelectorAll('td')
        )[5].innerText;

        totalSalary -= Number(
          Array.from(curElement.querySelectorAll('td'))[5].innerText
        );
        totalSalaryEl.innerText = totalSalary.toFixed(2);

        curElement.remove();
      });
    });
    Array.from(tBody.querySelectorAll('.fired')).forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const curElement = event.target.parentElement.parentElement;

        totalSalary -= Number(
          Array.from(curElement.querySelectorAll('td'))[5].innerText
        );
        totalSalaryEl.innerText = totalSalary.toFixed(2);

        curElement.remove();
      });
    });
  });
}
solve();
