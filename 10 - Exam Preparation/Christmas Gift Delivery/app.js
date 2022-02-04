function solution() {
  const nameInput = document.querySelector('.card input');
  const addBtn = document.querySelector('.card button');
  const listEl = document.querySelector('.card ul');
  const sentEl = Array.from(document.querySelectorAll('.card ul'))[1];
  const discardedEl = Array.from(document.querySelectorAll('.card ul'))[2];

  const list = [];

  addBtn.addEventListener('click', () => {
    list.push(nameInput.value);

    listEl.innerHTML = list
      .sort((a, b) => a.localeCompare(b))
      .map(
        item =>
          `<li class="gift">${item}<button id="sendButton">Send</button><button id="discardButton">Discard</button></li>`
      )
      .join('');

    nameInput.value = '';

    Array.from(listEl.querySelectorAll('#sendButton')).forEach(btn => {
      btn.addEventListener('click', event => {
        const itemName = event.target.parentElement.innerText.replace(
          'SendDiscard',
          ''
        );
        list.splice(list.indexOf(itemName), 1);

        const markup = `<li class="gift">${itemName}</li>`;

        sentEl.innerHTML += markup;
        event.target.parentElement.remove();
      });
    });

    Array.from(listEl.querySelectorAll('#discardButton')).forEach(btn => {
      btn.addEventListener('click', event => {
        const itemName = event.target.parentElement.innerText.replace(
          'SendDiscard',
          ''
        );
        list.splice(list.indexOf(itemName), 1);

        const markup = `<li class="gift">${itemName}</li>`;

        discardedEl.innerHTML += markup;
        event.target.parentElement.remove();
      });
    });
  });
}
