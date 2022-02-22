function solve() {
  const total = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  const macros = {
    apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
    lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
    burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 5 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    cookRecipe(recipe, quantity) {
      const deductedQuantity = {};

      for (const value in this[recipe]) {
        if (this[recipe][value] * Number(quantity) > total[value]) {
          return `Error: not enough ${value} in stock`;
        }

        deductedQuantity[value] =
          total[value] - this[recipe][value] * Number(quantity);
      }

      Object.assign(total, deductedQuantity);
      return 'Success';
    },
  };

  return function (str) {
    if (str.includes('restock')) {
      const [, nutrient, quantity] = str.split(' ');
      total[nutrient] += Number(quantity);
      return 'Success';
    }

    if (str.includes('prepare')) {
      const [, recipe, quantity] = str.split(' ');
      return macros.cookRecipe(recipe, Number(quantity));
    }

    return `protein=${total.protein} carbohydrate=${total.carbohydrate} fat=${total.fat} flavour=${total.flavour}`;
  };
}

const manager = solve();
console.log(manager('restock flavour 50')); // Success
console.log(manager('prepare lemonade 4')); // Error: not enough carbohydrate in stock
