const expect = require('chai').expect;
const sum = require('./04_sum_of_numbers');

describe('Sum of numbers', () => {
  it('Should return the sum of the numbers in the array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const expectedSum = 15;

    const actualSum = sum(numbers);

    expect(actualSum).to.equal(expectedSum);
  });

  it('Should return the sum with negative numbers in the array', () => {
    const numbers = [1, 2, 3, 4, -5];
    const expectedSum = 5;

    const actualSum = sum(numbers);

    expect(actualSum).to.equal(expectedSum);
  });

  it('Should return zero when only zeroes is given', () => {
    const numbers = [0, 0, 0, 0];
    const expectedSum = 0;

    const actualSum = sum(numbers);

    expect(actualSum).to.equal(expectedSum);
  });
});
