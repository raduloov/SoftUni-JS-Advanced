const expect = require('chai').expect;
const dealership = require('./dealership');

describe('Dealership', () => {
  describe('newCarCost', () => {
    it('Should return correct output for correct input', () => {
      expect(dealership.newCarCost('Audi A4 B8', 1)).to.equal(-14999);
    });
    it('Should return correct output for correct input', () => {
      expect(dealership.newCarCost('Audi A4 B', 1)).to.equal(1);
    });
    it('Should return correct output for correct input', () => {
      expect(dealership.newCarCost('Audi TT 8J', 1)).to.equal(-13999);
    });
    it('Should return correct output for correct input', () => {
      expect(dealership.newCarCost('Audi TT 8J', -1)).to.equal(-14001);
    });
  });

  describe('carEquipment', () => {
    it('Should return correct output for correct input', () => {
      expect(dealership.carEquipment(['1', '2', '3'], [1])).to.deep.equal(['2']);
    });
    it('Should return correct output for correct input', () => {
      expect(dealership.carEquipment(['1', '2', '3'], ['1'])).to.deep.equal(['2']);
    });
    it('Should return correct output for correct input', () => {
      expect(dealership.carEquipment(['1'], ['1'])).to.deep.equal([undefined]);
    });
  });

  describe('euroCategory', () => {
    it('Should return correct output for correct input', () => {
      expect(dealership.euroCategory(1)).to.equal(
        'Your euro category is low, so there is no discount from the final price!'
      );
    });
    it('Should return correct output for correct input', () => {
      expect(dealership.euroCategory(-1)).to.equal(
        'Your euro category is low, so there is no discount from the final price!'
      );
    });
    it('Should return correct output for correct input', () => {
      expect(dealership.euroCategory('1')).to.equal(
        'Your euro category is low, so there is no discount from the final price!'
      );
    });
    it('Should return correct output for correct input', () => {
      expect(dealership.euroCategory('1')).to.equal(
        'Your euro category is low, so there is no discount from the final price!'
      );
    });
    it('Should return correct output for correct input', () => {
      expect(dealership.euroCategory(4)).to.equal(
        'We have added 5% discount to the final price: 14250.'
      );
    });
    it('Should return correct output for correct input', () => {
      expect(dealership.euroCategory(5)).to.equal(
        'We have added 5% discount to the final price: 14250.'
      );
    });
  });
});
