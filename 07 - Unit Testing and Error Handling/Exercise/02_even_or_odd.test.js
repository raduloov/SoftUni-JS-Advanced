const expect = require('chai').expect;
const isOddOrEven = require('./02_even_or_odd');

describe('Even or odd', () => {
  it('Should return undefined for 245', () => {
    expect(isOddOrEven(245)).to.equal(undefined);
  });
  it('Should return undefined for true', () => {
    expect(isOddOrEven(true)).to.equal(undefined);
  });
  it('Should return even for "twofortyfive"', () => {
    expect(isOddOrEven('twofortyfive')).to.equal('even');
  });
  it('Should return odd for "twofortysix"', () => {
    expect(isOddOrEven('twofortysix')).to.equal('odd');
  });
  it('Should return odd for "a"', () => {
    expect(isOddOrEven('a')).to.equal('odd');
  });
  it('Should return even for "aa"', () => {
    expect(isOddOrEven('aa')).to.equal('even');
  });
  it('Should return odd for "aaa"', () => {
    expect(isOddOrEven('aaa')).to.equal('odd');
  });
});
