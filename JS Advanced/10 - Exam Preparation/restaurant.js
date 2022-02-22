class Restaurant {
  constructor(budget) {
    this.budgetMoney = budget;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
    const actions = [];

    products.forEach(line => {
      const [product, quantity, price] = line.split(' ');

      if (Number(price) <= this.budgetMoney) {
        if (!this.stockProducts[product]) {
          this.stockProducts[product] = Number(quantity);
        } else {
          this.stockProducts[product] += Number(quantity);
        }

        this.budgetMoney -= Number(price);

        const action = `Successfully loaded ${quantity} ${product}`;

        this.history.push(action);
        actions.push(action);
      } else {
        const action = `There was not enough money to load ${quantity} ${product}`;

        this.history.push(action);
        actions.push(action);
      }
    });

    return actions.join('\n');
  }

  addToMenu(meal, neededProducts, price) {
    if (!this.menu[meal]) {
      this.menu[meal] = {
        products: neededProducts.reduce((acc, curr) => {
          const [product, quantity] = curr.split(' ');

          acc[product] = Number(quantity);
          return acc;
        }, {}),
        price,
      };

      if (Object.keys(this.menu).length === 1) {
        return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
      }

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

    return `${Object.keys(this.menu)
      .map(meal => `${meal} - $ ${this.menu[meal].price}`)
      .join('\n')}`;
  }

  makeTheOrder(meal) {
    if (!this.menu[meal]) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }

    if (
      !Object.entries(this.menu[meal].products).every(
        ([product, quantity]) => this.stockProducts[product] >= quantity
      )
    ) {
      return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
    }

    Object.entries(this.menu[meal].products).forEach(([product, quantity]) => {
      this.stockProducts[product] -= quantity;
    });

    this.budgetMoney += this.menu[meal].price;
    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
  }
}

const kitchen = new Restaurant(1000);
kitchen.loadProducts([
  'Yogurt 30 3',
  'Honey 50 4',
  'Strawberries 20 10',
  'Banana 5 1',
]);
kitchen.addToMenu(
  'frozenYogurt',
  ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 20'],
  9.99
);
console.log(kitchen.makeTheOrder('frozenYogurt'));
