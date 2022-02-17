window.addEventListener('load', solve);

function solve() {
  const typeProduct = document.getElementById('type-product');
  const description = document.getElementById('description');
  const clientName = document.getElementById('client-name');
  const clientPhone = document.getElementById('client-phone');
  const sendFormBtn = document.querySelector('#right button');
  const clearBtn = document.querySelector('.clear-btn');
  const receivedOrdersEl = document.getElementById('received-orders');
  const completedOrdersEl = document.getElementById('completed-orders');

  sendFormBtn.addEventListener('click', event => {
    event.preventDefault();

    if (
      typeProduct.value === '' ||
      description.value === '' ||
      clientName === '' ||
      clientPhone === ''
    ) {
      return;
    }

    receivedOrdersEl.innerHTML += `
    <div class="container">
        <h2>Product type for repair: ${typeProduct.value}</h2>
        <h3>Client information: ${clientName.value}, ${clientPhone.value}</h3>
        <h4>Description of the problem: ${description.value}</h4>
        <button class="start-btn">Start repair</button>
        <button class="finish-btn" disabled>Finish repair</button>
    </div>
    `;

    description.value = '';
    clientName.value = '';
    clientPhone.value = '';

    Array.from(receivedOrdersEl.querySelectorAll('.start-btn')).forEach(btn => {
      btn.addEventListener('click', event => {
        event.target.disabled = true;
        event.target.nextElementSibling.disabled = false;
      });
    });
    Array.from(receivedOrdersEl.querySelectorAll('.finish-btn')).forEach(btn => {
      btn.addEventListener('click', event => {
        completedOrdersEl.insertAdjacentHTML(
          'beforeend',
          `
        <div class="container">
            <h2>${event.target.parentElement.querySelector('h2').innerText}</h2>
            <h3>${event.target.parentElement.querySelector('h3').innerText}</h3>
            <h4>${event.target.parentElement.querySelector('h4').innerText}</h4>
        </div>
    `
        );

        event.target.parentElement.remove();
      });
    });
  });
  document.querySelector('.clear-btn').addEventListener('click', event => {
    Array.from(completedOrdersEl.querySelectorAll('div')).forEach(div =>
      div.remove()
    );
  });
}
