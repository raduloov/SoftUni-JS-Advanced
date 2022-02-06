function solve() {
  const taskInput = document.getElementById('task');
  const descriptionInput = document.getElementById('description');
  const dateInput = document.getElementById('date');
  const addBtn = document.getElementById('add');

  const openEl = document.querySelector('.orange').parentElement.nextElementSibling;
  const inProgressEl = document.getElementById('in-progress');
  const completeEl = Array.from(
    Array.from(document.querySelectorAll('section'))[3].querySelectorAll('div')
  )[1];

  addBtn.addEventListener('click', event => {
    event.preventDefault();

    if (
      taskInput.value === '' ||
      descriptionInput.value === '' ||
      dateInput.value === ''
    ) {
      return;
    }

    openEl.innerHTML += `
    <article>
      <h3>${taskInput.value}</h3>
      <p>Description: ${descriptionInput.value}</p>
      <p>Due Date: ${dateInput.value}</p>
      <div class="flex">
        <button class="green">Start</button>
        <button class="red">Delete</button>
      </div>
    </article>
    `;

    taskInput.value = '';
    descriptionInput.value = '';
    dateInput.value = '';

    Array.from(openEl.querySelectorAll('.flex .green')).forEach(btn => {
      btn.addEventListener('click', event => {
        inProgressEl.innerHTML += `
          <article>
            <h3>${
              event.target.parentElement.parentElement.querySelector('h3').innerText
            }</h3>
            <p>${
              Array.from(
                event.target.parentElement.parentElement.querySelectorAll('p')
              )[0].innerText
            }</p>
            <p>${
              Array.from(
                event.target.parentElement.parentElement.querySelectorAll('p')
              )[1].innerText
            }</p>
            <div class="flex">
              <button class="red">Delete</button>
              <button class="orange">Finish</button>
            </div>
          </article>
        `;

        event.target.parentElement.parentElement.remove();

        Array.from(inProgressEl.querySelectorAll('.red')).forEach(btn => {
          btn.addEventListener('click', event => {
            event.target.parentElement.parentElement.remove();
          });
        });

        Array.from(inProgressEl.querySelectorAll('.orange')).forEach(btn => {
          btn.addEventListener('click', event => {
            completeEl.innerHTML += `
            <article>
              <h3>${
                event.target.parentElement.parentElement.querySelector('h3')
                  .innerText
              }</h3>
              <p>${
                Array.from(
                  event.target.parentElement.parentElement.querySelectorAll('p')
                )[0].innerText
              }</p>
              <p>${
                Array.from(
                  event.target.parentElement.parentElement.querySelectorAll('p')
                )[1].innerText
              }</p>
            </article>
            `;

            event.target.parentElement.parentElement.remove();
          });
        });
      });
    });

    Array.from(openEl.querySelectorAll('.red')).forEach(btn => {
      btn.addEventListener('click', event => {
        event.target.parentElement.parentElement.remove();
      });
    });
  });
}
