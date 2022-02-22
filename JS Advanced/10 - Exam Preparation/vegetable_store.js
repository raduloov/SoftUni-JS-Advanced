class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    const veggies = [];

    vegetables.forEach(line => {
      const [type, quantity, price] = line.split(' ');

      const vegType = this.availableProducts.find(vegType => vegType.type === type);

      if (vegType) {
        vegType.quantity += Number(quantity);

        if (vegType.price < Number(price)) {
          vegType.price = Number(price);
        }
      } else {
        this.availableProducts.push({
          type,
          quantity: Number(quantity),
          price: Number(price),
        });
      }

      veggies.push(type);
    });

    return `Successfully added ${[...new Set(veggies)].join(', ')}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;

    selectedProducts.forEach(line => {
      const [type, quantity] = line.split(' ');

      const veggie = this.availableProducts.find(veggie => veggie.type === type);

      if (!veggie) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }

      if (veggie.quantity < Number(quantity)) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }

      totalPrice += veggie.price * Number(quantity);
      veggie.quantity -= Number(quantity);
    });

    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    const veggie = this.availableProducts.find(veggie => veggie.type === type);

    if (!veggie) {
      throw new Error(`${type} is not available in the store.`);
    }

    if (veggie.quantity < Number(quantity)) {
      veggie.quantity = 0;

      return `The entire quantity of the ${type} has been removed.`;
    }

    veggie.quantity -= Number(quantity);
    return `Some quantity of the ${type} has been removed.`;
  }

  revision() {
    return `Available vegetables:\n${this.availableProducts
      .sort((a, b) => a.price - b.price)
      .map(product => `${product.type}-${product.quantity}-$${product.price}`)
      .join('\n')}\nThe owner of the store is ${this.owner}, and the location is ${
      this.location
    }.`;
  }
}

const vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
console.log(
  vegStore.loadingVegetables([
    'Okra 2.5 3.5',
    'Beans 10 2.8',
    'Celery 5.5 2.2',
    'Celery 0.5 2.5',
  ])
);
console.log(vegStore.rottingVegetable('Okra', 1));
console.log(vegStore.rottingVegetable('Okra', 2.5));
console.log(vegStore.buyingVegetables(['Beans 8', 'Celery 1.5']));
console.log(vegStore.revision());
