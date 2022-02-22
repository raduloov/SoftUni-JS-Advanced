const expect = require('chai').expect;
const mathEnforcer = require('./04_math_enforcer');

describe('Math enforcer', () => {
  describe('addFive', () => {
    it('Should return undefined for NaN', () => {
      expect(mathEnforcer.addFive('1')).to.equal(undefined);
    });
    it('Should return undefined for NaN', () => {
      expect(mathEnforcer.addFive(true)).to.equal(undefined);
    });
    it('Should return correct result for number', () => {
      expect(mathEnforcer.addFive(1)).to.equal(6);
    });
    it('Should return correct result for number', () => {
      expect(mathEnforcer.addFive(-1)).to.equal(4);
    });
    it('Should return correct result for floating number', () => {
      expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.01);
    });
    it('Should return correct result for floating number', () => {
      expect(mathEnforcer.addFive(-1.1)).to.be.closeTo(3.9, 0.01);
    });
  });

  describe('subtractTen', () => {
    it('Should return undefined for NaN', () => {
      expect(mathEnforcer.subtractTen('1')).to.equal(undefined);
    });
    it('Should return undefined for NaN', () => {
      expect(mathEnforcer.subtractTen(true)).to.equal(undefined);
    });
    it('Should return correct result for number', () => {
      expect(mathEnforcer.subtractTen(1)).to.equal(-9);
    });
    it('Should return correct result for number', () => {
      expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
    });
    it('Should return correct result for floating number', () => {
      expect(mathEnforcer.subtractTen(1.1)).to.be.closeTo(-8.9, 0.01);
    });
    it('Should return correct result for floating number', () => {
      expect(mathEnforcer.subtractTen(-1.1)).to.be.closeTo(-11.1, 0.01);
    });
  });

  describe('sum', () => {
    it('Should return undefined for NaN', () => {
      expect(mathEnforcer.sum('1', '1')).to.equal(undefined);
    });
    it('Should return undefined for NaN', () => {
      expect(mathEnforcer.sum(1, '1')).to.equal(undefined);
    });
    it('Should return undefined for NaN', () => {
      expect(mathEnforcer.sum('1', 1)).to.equal(undefined);
    });
    it('Should return undefined for NaN', () => {
      expect(mathEnforcer.sum(1, true)).to.equal(undefined);
    });
    it('Should return correct result for two numbers', () => {
      expect(mathEnforcer.sum(1, 1)).to.equal(2);
    });
    it('Should return correct result for two numbers', () => {
      expect(mathEnforcer.sum(1, -1)).to.equal(0);
    });
    it('Should return correct result for floating numbers', () => {
      expect(mathEnforcer.sum(1.1, 1.1)).to.be.closeTo(2.2, 0.01);
    });
    it('Should return correct result for floating numbers', () => {
      expect(mathEnforcer.sum(-1.1, -1.1)).to.be.closeTo(-2.2, 0.01);
    });
  });
});
