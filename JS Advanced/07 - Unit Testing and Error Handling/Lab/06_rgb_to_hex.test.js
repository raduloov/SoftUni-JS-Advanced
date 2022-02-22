const expect = require('chai').expect;
const rgbToHexColor = require('./06_rgb_to_hex');

describe('RGB to HEX', () => {
  it('Should return #FFFFFF for 255,255,255', () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
  });
  it('Should return undefined for 256,255,255', () => {
    expect(rgbToHexColor(256, 255, 255)).to.equal(undefined);
  });
  it('Should return undefined for 255,256,255', () => {
    expect(rgbToHexColor(255, 256, 255)).to.equal(undefined);
  });
  it('Should return undefined for 255,255,256', () => {
    expect(rgbToHexColor(255, 255, 256)).to.equal(undefined);
  });
  it('Should return undefined for -1,255,255', () => {
    expect(rgbToHexColor(-1, 255, 255)).to.equal(undefined);
  });
  it('Should return undefined for -1,255,255', () => {
    expect(rgbToHexColor(-1, 255, 255)).to.equal(undefined);
  });
  it('Should return undefined for 255,-1,255', () => {
    expect(rgbToHexColor(255, -1, 255)).to.equal(undefined);
  });
  it('Should return undefined for 255,255,-1', () => {
    expect(rgbToHexColor(255, 255, -1)).to.equal(undefined);
  });
  it('Should return undefined for 255,255,"a"', () => {
    expect(rgbToHexColor(255, 255, 'a')).to.equal(undefined);
  });
  it('Should return undefined for "a",255,255', () => {
    expect(rgbToHexColor('a', 255, 255)).to.equal(undefined);
  });
  it('Should return undefined for 255,"a",255', () => {
    expect(rgbToHexColor(255, 'a', 255)).to.equal(undefined);
  });
  it('Should return undefined', () => {
    expect(rgbToHexColor(255, true, 255)).to.equal(undefined);
  });
  it('Should return #000000', () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
  });
});
