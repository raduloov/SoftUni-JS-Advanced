const expect = require('chai').expect;
const testNumbers = require('./test_numbers');

describe('Test numbers', () => {
  describe('sumNumbers', () => {
    it('Should return undefined for invalid input', () => {
      expect(testNumbers.sumNumbers('1', '1')).to.equal(undefined);
    });
    it('Should return undefined for invalid input', () => {
      expect(testNumbers.sumNumbers(1, '1')).to.equal(undefined);
    });
    it('Should return undefined for invalid input', () => {
      expect(testNumbers.sumNumbers('1', 1)).to.equal(undefined);
    });
    it('Should return correct output for correct input', () => {
      expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
    });
    it('Should return correct output for correct input', () => {
      expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
    });
    it('Should return correct output for correct input', () => {
      expect(testNumbers.sumNumbers(1, -1)).to.equal('0.00');
    });
    it('Should return correct output for correct input', () => {
      expect(testNumbers.sumNumbers(1.5, 1)).to.equal('2.50');
    });
    it('Should return correct output for correct input', () => {
      expect(testNumbers.sumNumbers(-1, -1)).to.equal('-2.00');
    });
  });

  describe('numberChecker', () => {
    it('Should throw error for invalid input', () => {
      expect(testNumbers.numberChecker.bind(testNumbers, 'a')).to.throw(
        'The input is not a number!'
      );
    });
    it('Should throw error for invalid input', () => {
      expect(testNumbers.numberChecker.bind(testNumbers, 'true')).to.throw(
        'The input is not a number!'
      );
    });
    it('Should return correct output for valid input', () => {
      expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
    });
    it('Should return correct output for valid input', () => {
      expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
    });
    it('Should return correct output for valid input', () => {
      expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
    });

    describe('averageSumArrays', () => {
      it('Should return correct output for correct input', () => {
        expect(testNumbers.averageSumArray([1])).to.equal(1);
      });
      it('Should return correct output for correct input', () => {
        expect(testNumbers.averageSumArray([1, 1])).to.equal(1);
      });
      it('Should return correct output for correct input', () => {
        expect(testNumbers.averageSumArray([1, 1, 2])).to.equal(1.3333333333333333);
      });
      it('Should return correct output for correct input', () => {
        expect(testNumbers.averageSumArray([])).to.be.NaN;
      });
    });
  });
});
