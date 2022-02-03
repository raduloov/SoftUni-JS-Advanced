const expect = require('chai').expect;
const library = require('./library');

describe('Library', () => {
  describe('calcPriceOfBook', () => {
    it('Should throw error for invalid input', () => {
      expect(library.calcPriceOfBook.bind(library, 1, '1')).to.throw(
        'Invalid input'
      );
    });
    it('Should throw error for invalid input', () => {
      expect(library.calcPriceOfBook.bind(library, 1, 1)).to.throw('Invalid input');
    });
    it('Should throw error for invalid input', () => {
      expect(library.calcPriceOfBook.bind(library, '1', 1.1)).to.throw(
        'Invalid input'
      );
    });
    it('Should throw error for invalid input', () => {
      expect(library.calcPriceOfBook.bind(library, 1, 1.1)).to.throw(
        'Invalid input'
      );
    });
    it('Should return correct output for correct input', () => {
      expect(library.calcPriceOfBook('book', 1981)).to.equal(
        'Price of book is 20.00'
      );
    });
    it('Should return correct output for correct input', () => {
      expect(library.calcPriceOfBook('book', 1980)).to.equal(
        'Price of book is 10.00'
      );
    });
    it('Should return correct output for correct input', () => {
      expect(library.calcPriceOfBook('book', 1979)).to.equal(
        'Price of book is 10.00'
      );
    });
  });

  describe('findBook', () => {
    it('Should throw error for no items in array', () => {
      expect(library.findBook.bind(library, [], 'book')).to.throw(
        'No books currently available'
      );
    });
    it('Should return correct output for correct input', () => {
      expect(library.findBook(['book'], 'book')).to.equal(
        'We found the book you want.'
      );
    });
    it('Should return correct output for correct input', () => {
      expect(library.findBook(['book'], 'bok')).to.equal(
        'The book you are looking for is not here!'
      );
    });
  });

  describe('arrangeTheBooks', () => {
    it('Should throw error for invalid input', () => {
      expect(library.arrangeTheBooks.bind(library, -1)).to.throw('Invalid input');
    });
    it('Should throw error for invalid input', () => {
      expect(library.arrangeTheBooks.bind(library, 1.1)).to.throw('Invalid input');
    });
    it('Should return correct output for correct input', () => {
      expect(library.arrangeTheBooks(40)).to.equal(
        'Great job, the books are arranged.'
      );
    });
    it('Should return correct output for correct input', () => {
      expect(library.arrangeTheBooks(39)).to.equal(
        'Great job, the books are arranged.'
      );
    });
    it('Should return correct output for correct input', () => {
      expect(library.arrangeTheBooks(41)).to.equal(
        'Insufficient space, more shelves need to be purchased.'
      );
    });
  });
});
