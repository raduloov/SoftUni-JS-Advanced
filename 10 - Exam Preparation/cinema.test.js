const expect = require('chai').expect;
const cinema = require('./cinema');

describe('Cinema', () => {
  describe('showMovies', () => {
    it('Should return correct output for correct input', () => {
      expect(cinema.showMovies([])).to.equal(
        'There are currently no movies to show.'
      );
    });
    it('Should return correct output for correct input', () => {
      expect(cinema.showMovies(['movie'])).to.equal('movie');
    });
    it('Should return correct output for correct input', () => {
      expect(cinema.showMovies(['movie1', 'movie2'])).to.equal('movie1, movie2');
    });
  });

  describe('ticketPrice', () => {
    it('Should throw error for invalid input', () => {
      expect(cinema.ticketPrice.bind(cinema, 1)).to.throw(
        'Invalid projection type.'
      );
    });
    it('Should throw error for invalid input', () => {
      expect(cinema.ticketPrice.bind(cinema, '1')).to.throw(
        'Invalid projection type.'
      );
    });
    it('Should throw error for invalid input', () => {
      expect(cinema.ticketPrice.bind(cinema, true)).to.throw(
        'Invalid projection type.'
      );
    });
    it('Should return correct output for correct input', () => {
      expect(cinema.ticketPrice('Premiere')).to.equal(12.0);
    });
    it('Should return correct output for correct input', () => {
      expect(cinema.ticketPrice('Normal')).to.equal(7.5);
    });
    it('Should return correct output for correct input', () => {
      expect(cinema.ticketPrice('Discount')).to.equal(5.5);
    });
  });

  describe('swapSeatsInHall', () => {
    it('Should return unsuccessful message for invalid input', () => {
      expect(cinema.swapSeatsInHall(1.1, 1.1)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('Should return unsuccessful message for invalid input', () => {
      expect(cinema.swapSeatsInHall(1, 1.1)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('Should return unsuccessful message for invalid input', () => {
      expect(cinema.swapSeatsInHall(1.1, 1)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('Should return unsuccessful message for invalid input', () => {
      expect(cinema.swapSeatsInHall(0, 1)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('Should return unsuccessful message for invalid input', () => {
      expect(cinema.swapSeatsInHall(1, 0)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('Should return unsuccessful message for invalid input', () => {
      expect(cinema.swapSeatsInHall(-1, 1)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('Should return unsuccessful message for invalid input', () => {
      expect(cinema.swapSeatsInHall(1, -1)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('Should return unsuccessful message for invalid input', () => {
      expect(cinema.swapSeatsInHall(-1, -1)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('Should return unsuccessful message for invalid input', () => {
      expect(cinema.swapSeatsInHall(1, 21)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('Should return unsuccessful message for invalid input', () => {
      expect(cinema.swapSeatsInHall(21, 1)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('Should return unsuccessful message for invalid input', () => {
      expect(cinema.swapSeatsInHall(1, 1)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('Should return successful message for valid input', () => {
      expect(cinema.swapSeatsInHall(1, 2)).to.equal(
        'Successful change of seats in the hall.'
      );
    });
    it('Should return successful message for valid input', () => {
      expect(cinema.swapSeatsInHall(2, 1)).to.equal(
        'Successful change of seats in the hall.'
      );
    });
    it('Should return successful message for valid input', () => {
      expect(cinema.swapSeatsInHall(1, 20)).to.equal(
        'Successful change of seats in the hall.'
      );
    });
  });
});
