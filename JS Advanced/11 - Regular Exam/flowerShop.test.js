const expect = require('chai').expect;
const flowerShop = require('./flowerShop');

describe('Flower Shop', () => {
  describe('calcPriceOfFlowers', () => {
    it('Should throw error', () => {
      expect(
        flowerShop.calcPriceOfFlowers.bind(flowerShop, 1, '1', '1')
      ).to.throw('Invalid input!');
    });
    it('Should throw error', () => {
      expect(
        flowerShop.calcPriceOfFlowers.bind(flowerShop, 1, 1, '1')
      ).to.throw('Invalid input!');
    });
    it('Should throw error', () => {
      expect(
        flowerShop.calcPriceOfFlowers.bind(flowerShop, 1, '1', 1)
      ).to.throw('Invalid input!');
    });
    it('Should throw error', () => {
      expect(
        flowerShop.calcPriceOfFlowers.bind(flowerShop, '1', '1', '1')
      ).to.throw('Invalid input!');
    });
    it('Should return', () => {
      expect(flowerShop.calcPriceOfFlowers('1', 1, 1)).to.equal(
        'You need $1.00 to buy 1!'
      );
    });
    it('Should return', () => {
      expect(flowerShop.calcPriceOfFlowers('1', 2, 2)).to.equal(
        'You need $4.00 to buy 1!'
      );
    });
  });

  describe('checkFlowersAvailable', () => {
    it('Should return', () => {
      expect(flowerShop.checkFlowersAvailable('1', ['1'])).to.equal(
        'The 1 are available!'
      );
    });
    it('Should return', () => {
      expect(flowerShop.checkFlowersAvailable('1', ['0'])).to.equal(
        'The 1 are sold! You need to purchase more!'
      );
    });
    it('Should return', () => {
      expect(flowerShop.checkFlowersAvailable('1', [])).to.equal(
        'The 1 are sold! You need to purchase more!'
      );
    });
  });

  describe('sellFlowers', () => {
    it('Should throw error', () => {
      expect(flowerShop.sellFlowers.bind(flowerShop, 1, '1')).to.throw(
        'Invalid input!'
      );
    });
    it('Should throw error', () => {
      expect(flowerShop.sellFlowers.bind(flowerShop, 1, 1.1)).to.throw(
        'Invalid input!'
      );
    });
    it('Should throw error', () => {
      expect(flowerShop.sellFlowers.bind(flowerShop, 1, 1)).to.throw(
        'Invalid input!'
      );
    });
    it('Should throw error', () => {
      expect(flowerShop.sellFlowers.bind(flowerShop, [1], '1')).to.throw(
        'Invalid input!'
      );
    });
    it('Should throw error', () => {
      expect(flowerShop.sellFlowers.bind(flowerShop, [1], -1)).to.throw(
        'Invalid input!'
      );
    });
    it('Should throw error', () => {
      expect(flowerShop.sellFlowers.bind(flowerShop, [1], 1)).to.throw(
        'Invalid input!'
      );
    });
    it('Should throw error', () => {
      expect(flowerShop.sellFlowers.bind(flowerShop, [], 0)).to.throw(
        'Invalid input!'
      );
    });
    it('Should return', () => {
      expect(flowerShop.sellFlowers([1], 0)).to.equal('');
    });
    it('Should return', () => {
      expect(flowerShop.sellFlowers([1, 2], 0)).to.equal('2');
    });
    it('Should return', () => {
      expect(flowerShop.sellFlowers(['1', '2', '3', '4'], 2)).to.equal(
        '1 / 2 / 4'
      );
    });
  });
});
