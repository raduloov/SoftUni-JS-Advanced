function factory(library, orders) {
  const result = [];

  function makeObj(order) {
    const obj = {
      name: order.template.name,
    };
    order.parts.forEach(part => {
      obj[part] = library[part];
    });
    return obj;
  }

  for (const order of orders) {
    result.push(makeObj(order));
  }

  return result;
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};
const orders = [
  {
    template: { name: 'ACME Printer' },
    parts: ['print'],
  },
  {
    template: { name: 'Initech Scanner' },
    parts: ['scan'],
  },
  {
    template: { name: 'ComTron Copier' },
    parts: ['scan', 'print'],
  },
  {
    template: { name: 'BoomBox Stereo' },
    parts: ['play'],
  },
];
const products = factory(library, orders);
console.log(products);
