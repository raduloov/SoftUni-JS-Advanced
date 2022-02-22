function solve() {
  const [taskInput, dateInput] = document.querySelectorAll('form input');
  const descriptionInput = document.querySelector('form textarea');
  const addBtn = document.querySelector('form button');
  const openEl = document.querySelector('.orange').parentElement.parentElement;
  const inProgressEl = document.getElementById('in-progress');
  const completeEl = document.querySelector('.green').parentElement.parentElement;

  addBtn.addEventListener('click', event => {
    event.preventDefault();

    if (
      taskInput.value === '' ||
      descriptionInput.value === '' ||
      dateInput.value === ''
    )
      return;

    const openElHTML = `<article><h3>${taskInput.value}</h3><p>${descriptionInput.value}</p><p>Due date: ${dateInput.value}</p><div class="flex"><button class="green">Start</button><button class="red">Delete</button></div></article>`;

    openEl.innerHTML += openElHTML;
    taskInput.value = '';
    descriptionInput.value = '';
    dateInput.value = '';

    Array.from(document.querySelectorAll('button[class="green"]')).forEach(
      button => {
        button.addEventListener('click', () => {
          let name =
            button.parentElement.parentElement.querySelector('h3').innerText;
          let description =
            button.parentElement.parentElement.querySelectorAll('p')[0].innerText;
          let date =
            button.parentElement.parentElement.querySelectorAll('p')[1].innerText;

          const inProgressElHTML = `<article><h3>${name}</h3><p>${description}</p><p>Due date: ${date}</p><div class="flex"><button class="red">Delete</button><button class="orange">Finish</button></div></article>`;
          inProgressEl.innerHTML += inProgressElHTML;
          button.parentElement.parentElement.remove();

          Array.from(inProgressEl.querySelectorAll('button[class="red"]')).forEach(
            button => {
              button.addEventListener('click', () => {
                deleteElement(button);
              });
            }
          );
          Array.from(
            inProgressEl.querySelectorAll('button[class="orange"]')
          ).forEach(button => {
            button.addEventListener('click', () => {
              name =
                button.parentElement.parentElement.querySelector('h3').innerText;
              description =
                button.parentElement.parentElement.querySelectorAll('p')[0]
                  .innerText;
              date =
                button.parentElement.parentElement.querySelectorAll('p')[1]
                  .innerText;

              const completeElHTML = `<article><h3>${name}</h3><p>${description}</p><p>Due date: ${date}</p></article>`;

              completeEl.innerHTML += completeElHTML;
              deleteElement(button);
            });
          });
        });
      }
    );
    Array.from(document.querySelectorAll('button[class="red"]')).forEach(button => {
      button.addEventListener('click', () => {
        deleteElement(button);
      });
    });
  });

  function deleteElement(element) {
    element.parentElement.parentElement.remove();
  }
}
