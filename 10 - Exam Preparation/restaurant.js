class Restaurant {
  constructor(budget) {
    this.budgetMoney = budget;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(array) {
    array.forEach(string => {
      const [productName, productQuantity, totalPrice] = string.split(' ');

      if (this.budgetMoney < Number(totalPrice)) {
        this.history.push(
          `There was not enough money to load ${productQuantity} ${productName}`
        );
        return;
      }

      this.stockProducts[productName] = productQuantity;

      this.budgetMoney -= totalPrice;
      this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
    });

    return this.history.join('\n');
  }

  addToMenu(meal, neededProducts, price) {
    const products = neededProducts.map(string => {
      return { product: string.split(' ')[0], price: Number(string.split(' ')[1]) };
    });

    if (!this.menu[meal]) {
      this.menu[meal] = { neededProducts: products, price };
    }

    if (Object.keys(this.menu).length === 1) {
      return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
    }

    if (Object.keys(this.menu).length === 0 || Object.keys(this.menu).length > 1) {
      return `Great idea! Now with the ${meal} we have ${
        Object.keys(this.menu).length
      } meals in the menu, other ideas?`;
    }

    return `The ${meal} is already in the our menu, try something different.`;
  }

  showTheMenu() {
    if (Object.keys(this.menu).length === 0) {
      return 'Our menu is not ready yet, please come later...';
    }

    return Object.entries(this.menu)
      .map(el => `${el[0]} - $ ${el[1].price}`)
      .join('\n');
  }

  makeTheOrder(meal) {
    const curMeal = Object.keys(this.menu).find(m => m === meal);

    if (!curMeal) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }

    this.menu[meal].neededProducts.forEach(product => {
      if (!this.stockProducts[product]) {
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
      }

      this.stockProducts[product]--;
    });

    this.budgetMoney += this.menu[meal].price;
    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
  }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts([
  'Yogurt 30 3',
  'Honey 50 4',
  'Strawberries 20 10',
  'Banana 5 1',
]);
kitchen.addToMenu(
  'frozenYogurt',
  ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'],
  9.99
);
console.log(kitchen.makeTheOrder('frozenYogurt'));
