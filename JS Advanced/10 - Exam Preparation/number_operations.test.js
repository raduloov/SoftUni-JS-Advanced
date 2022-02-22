const expect = require('chai').expect;
const numberOperations = require('./number_operations');

describe('Number operations', () => {
  describe('powNumber', () => {
    it('Should return correct output for correct input', () => {
      expect(numberOperations.powNumber(2)).to.equal(4);
    });
    it('Should return correct output for correct input', () => {
      expect(numberOperations.powNumber(3)).to.equal(9);
    });
  });

  describe('numberChecker', () => {
    it('Should throw error for invalid input', () => {
      expect(numberOperations.numberChecker.bind(numberOperations, 'a')).to.throw(
        'The input is not a number!'
      );
    });
    it('Should throw error for invalid input', () => {
      expect(numberOperations.numberChecker.bind(numberOperations, 'true')).to.throw(
        'The input is not a number!'
      );
    });
    it('Should return correct output for valid input', () => {
      expect(numberOperations.numberChecker(1)).to.equal(
        'The number is lower than 100!'
      );
    });
    it('Should return correct output for valid input', () => {
      expect(numberOperations.numberChecker(100)).to.equal(
        'The number is greater or equal to 100!'
      );
    });
    it('Should return correct output for valid input', () => {
      expect(numberOperations.numberChecker(101)).to.equal(
        'The number is greater or equal to 100!'
      );
    });
  });

  describe('sumArrays', () => {
    it('Should return correct output for correct input', () => {
      expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3])).to.deep.equal([
        2, 4, 6,
      ]);
    });
    it('Should return correct output for correct input', () => {
      expect(numberOperations.sumArrays(['a'], ['a'])).to.deep.equal(['aa']);
    });
    it('Should return correct output for correct input', () => {
      expect(numberOperations.sumArrays([1, 2, 3, 4], [1, 2, 3])).to.deep.equal([
        2, 4, 6, 4,
      ]);
    });
    it('Should return correct output for correct input', () => {
      expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4])).to.deep.equal([
        2, 4, 6, 4,
      ]);
    });
  });
});
