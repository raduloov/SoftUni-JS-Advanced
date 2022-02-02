const expect = require('chai').expect;
const lookupChar = require('./03_char_lookup');

describe('Char lookup', () => {
  it('Should return undefined for 1, "1"', () => {
    expect(lookupChar(1, '1')).to.equal(undefined);
  });
  it('Should return undefined for 1, 1', () => {
    expect(lookupChar(1, 1)).to.equal(undefined);
  });
  it('Should return undefined for true, false', () => {
    expect(lookupChar(true, false)).to.equal(undefined);
  });
  it('Should return undefined for "1", 1.1', () => {
    expect(lookupChar('1', 1.1)).to.equal(undefined);
  });
  it('Should return undefined for "1", -1.1', () => {
    expect(lookupChar('1', -1.1)).to.equal(undefined);
  });
  it('Should return "Incorrect index" for "", 0', () => {
    expect(lookupChar('', 0)).to.equal('Incorrect index');
  });
  it('Should return "Incorrect index" for "1", -1', () => {
    expect(lookupChar('1', -1)).to.equal('Incorrect index');
  });
  it('Should return "Incorrect index" for "1", 1', () => {
    expect(lookupChar('1', 1)).to.equal('Incorrect index');
  });
  it('Should return "Incorrect index" for "1", 2', () => {
    expect(lookupChar('1', 2)).to.equal('Incorrect index');
  });
  it('Should return "1" for "123", 0', () => {
    expect(lookupChar('123', 0)).to.equal('1');
  });
  it('Should return "2" for "123", 1', () => {
    expect(lookupChar('123', 1)).to.equal('2');
  });
  it('Should return "3" for "123", 2', () => {
    expect(lookupChar('123', 2)).to.equal('3');
  });
  it('Should return "f" for "abcdef", 5', () => {
    expect(lookupChar('abcdef', 5)).to.equal('f');
  });
});
