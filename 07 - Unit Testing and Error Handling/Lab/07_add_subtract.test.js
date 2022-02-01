const expect = require('chai').expect;
const createCalculator = require('./07_add_subtract');

describe('Add / Subtract', () => {
  let calc;

  beforeEach(function () {
    calc = createCalculator();
  });

  it('should return', () => {
    expect(calc.get()).to.equal(0);
  });
  it('should return', () => {
    calc.add(5);

    expect(calc.get()).to.equal(5);
  });
  it('should return', () => {
    calc.add(-5);

    expect(calc.get()).to.equal(-5);
  });
  it('should return', () => {
    calc.subtract(5);
    calc.subtract(5);

    expect(calc.get()).to.equal(-10);
  });
  it('should return', () => {
    calc.add('string');

    expect(calc.get()).to.be.NaN;
  });
  it('should return', () => {
    calc.subtract('string');

    expect(calc.get()).to.be.NaN;
  });
  it('should return', () => {
    calc.add('7');

    expect(calc.get()).to.equal(7);
  });
});
