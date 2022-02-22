function solve() {
  const nameInput = document.querySelectorAll('#container input')[0];
  const hallInput = document.querySelectorAll('#container input')[1];
  const priceInput = document.querySelectorAll('#container input')[2];
  const onScreenBtn = document.querySelector('#container button');
  const moviesEl = document.querySelector('#movies ul');
  const archiveEl = document.querySelector('#archive ul');
  const clearBtn = document.querySelector('#archive button');

  onScreenBtn.addEventListener('click', event => {
    event.preventDefault();

    if (
      nameInput.value !== '' &&
      hallInput.value !== '' &&
      priceInput.value !== '' &&
      !isNaN(Number(priceInput.value))
    ) {
      const markup = `<li><span>${nameInput.value}</span><strong>Hall: ${
        hallInput.value
      }</strong><div><strong>${Number(priceInput.value).toFixed(
        2
      )}</strong><input placeholder="Tickets Sold" /><button>Archive</button></div></li>`;

      moviesEl.innerHTML += markup;
      nameInput.value = '';
      hallInput.value = '';
      priceInput.value = '';
    }

    Array.from(document.querySelectorAll('li div button')).forEach(button => {
      button.addEventListener('click', () => {
        const quantity = Number(button.parentElement.querySelector('input').value);

        if (
          isNaN(button.parentElement.querySelector('input').value) ||
          button.parentElement.querySelector('input').value === ''
        )
          return;

        const price = Number(button.parentElement.querySelector('strong').innerText);
        const name =
          button.parentElement.parentElement.querySelector('span').innerText;
        const total = price * quantity;

        const markup = `<li><span>${name}</span><strong>Total amount: ${total.toFixed(
          2
        )}</strong><button>Delete</button></li>`;

        archiveEl.innerHTML += markup;
        button.parentElement.parentElement.remove();

        Array.from(archiveEl.querySelectorAll('li button')).forEach(button => {
          button.addEventListener('click', () => {
            button.parentElement.remove();
          });
        });
      });
    });
  });

  clearBtn.addEventListener('click', () => {
    Array.from(archiveEl.querySelectorAll('*')).forEach(el => el.remove());
  });
}
