const expect = require('chai').expect;
const { Repository } = require('./solution.js');

describe('Repository', () => {
  describe('Instantiation', () => {
    it('Should return correct output for correct input', () => {
      const props = {
        name: 'string',
        age: 'number',
        birthday: 'object',
      };

      expect(new Repository(props)).to.equal();
    });
  });
  // TODO: …
});
