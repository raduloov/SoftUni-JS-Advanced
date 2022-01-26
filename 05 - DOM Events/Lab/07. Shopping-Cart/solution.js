function solve() {
  const textarea = document.querySelector('textarea');
  const buttons = document.querySelectorAll('.add-product');
  const checkoutBtn = document.querySelector('.checkout');

  const cart = {
    items: [],
    totalPrice: 0,
  };

  Array.from(buttons).forEach(button => {
    button.addEventListener('click', () => {
      const parentEl = button.parentElement.parentElement;
      const name = parentEl.querySelector('.product-title').textContent;
      const price = Number(
        parentEl.querySelector('.product-line-price').textContent
      );

      cart.items.push(name);
      cart.totalPrice += price;

      const str = `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

      textarea.textContent += str;
    });
  });

  checkoutBtn.addEventListener('click', () => {
    const items = [...new Set(cart.items)];
    const str = `You bought ${items.join(', ')} for ${cart.totalPrice.toFixed(2)}.`;
    textarea.textContent += str;

    Array.from(buttons).forEach(button => (button.disabled = true));
    checkoutBtn.disabled = true;
  });
}
