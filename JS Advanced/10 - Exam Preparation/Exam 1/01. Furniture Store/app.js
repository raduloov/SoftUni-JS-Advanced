window.addEventListener('load', solve);

function solve() {
  const modelInput = document.getElementById('model');
  const yearInput = document.getElementById('year');
  const descriptionInput = document.getElementById('description');
  const priceInput = document.getElementById('price');
  const addBtn = document.getElementById('add');
  const listEl = document.getElementById('furniture-list');
  const totalPriceEl = document.querySelector('.total-price');

  let totalPrice = 0;

  addBtn.addEventListener('click', event => {
    event.preventDefault();

    if (
      modelInput.value !== '' &&
      descriptionInput.value !== '' &&
      Number(yearInput.value) > 0 &&
      Number(priceInput.value) > 0
    ) {
      const newItemMarkup = `
            <tr class="info">
                <td>${modelInput.value}</td>
                <td>${Number(priceInput.value).toFixed(2)}</td>
                <td>
                    <button class="moreBtn">More Info</button>
                    <button class="buyBtn">Buy it</button>
                </td>
            </tr>
            <tr class="hide">
                <td>Year: ${yearInput.value}</td>
                <td colspan="3">Description: ${descriptionInput.value}</td>
            </tr>
        `;
      listEl.innerHTML += newItemMarkup;

      modelInput.value = '';
      priceInput.value = '';
      yearInput.value = '';
      descriptionInput.value = '';
    }

    const moreBtns = Array.from(document.querySelectorAll('.moreBtn'));
    const buyBtns = Array.from(document.querySelectorAll('.buyBtn'));

    moreBtns.forEach(button =>
      button.addEventListener('click', event => {
        const moreInfoEl =
          event.target.parentElement.parentElement.nextElementSibling;

        if (event.target.innerText === 'More Info') {
          moreInfoEl.style.display = 'contents';
          event.target.innerText = 'Less Info';
        } else if (event.target.innerText === 'Less Info') {
          moreInfoEl.style.display = 'none';
          event.target.innerText = 'More Info';
        }
      })
    );

    buyBtns.forEach(button =>
      button.addEventListener('click', event => {
        const curPrice = Number(
          event.target.parentElement.parentElement.querySelectorAll('td')[1]
            .innerText
        );
        totalPrice += curPrice;

        const infoEl = event.target.parentElement.parentElement;
        const moreInfoEl =
          event.target.parentElement.parentElement.nextElementSibling;

        infoEl.remove();
        moreInfoEl.remove();

        totalPriceEl.innerText = totalPrice.toFixed(2);
      })
    );
  });
}
