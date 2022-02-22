function solve() {
  const generateBtn = document.querySelectorAll('button')[0];
  const buyBtn = document.querySelectorAll('button')[1];
  const table = document.querySelector('tbody');
  const input = document.querySelectorAll('textarea')[0];
  const output = document.querySelectorAll('textarea')[1];

  generateBtn.addEventListener('click', () => {
    const items = JSON.parse(input.value);
    items.forEach(item => {
      const markup = `<td><img src="${item.img}" /></td><td><p>${item.name}</p></td><td><p>${item.price}</p></td><td><p>${item.decFactor}</p></td><td><input type="checkbox" /></td>`;
      table.innerHTML += markup;

      console.log(item);
    });
  });

  buyBtn.addEventListener('click', () => {
    const boughtItems = [];
    let totalPrice = 0;
    let totalDecFactor = 0;
    Array.from(document.querySelectorAll('tr input')).forEach(checkbox => {
      if (checkbox.checked) {
        boughtItems.push(
          checkbox.parentElement.parentElement.querySelectorAll('td')[1].innerText
        );
        totalPrice += Number(
          checkbox.parentElement.parentElement.querySelectorAll('td')[2].innerText
        );
        totalDecFactor += Number(
          checkbox.parentElement.parentElement.querySelectorAll('td')[3].innerText
        );
      }
    });
    const str = `Bought furniture: ${boughtItems.join(
      ', '
    )}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${
      totalDecFactor / boughtItems.length
    }`;

    output.textContent = str;
  });
}
