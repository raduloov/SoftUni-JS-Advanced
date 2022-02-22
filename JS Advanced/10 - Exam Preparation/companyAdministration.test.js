const expect = require('chai').expect;
const companyAdministration = require('./companyAdministration');

describe('Company Administration', () => {
  describe('hiringEmployee', () => {
    it('Should throw error', () => {
      expect(
        companyAdministration.hiringEmployee.bind(companyAdministration, '1', '1', 1)
      ).to.throw('We are not looking for workers for this position.');
    });
    it('Should throw error', () => {
      expect(
        companyAdministration.hiringEmployee.bind(companyAdministration, '1')
      ).to.throw('We are not looking for workers for this position.');
    });
    it('Should return', () => {
      expect(companyAdministration.hiringEmployee('1', 'Programmer', 3)).to.equal(
        '1 was successfully hired for the position Programmer.'
      );
    });
    it('Should return', () => {
      expect(companyAdministration.hiringEmployee('1', 'Programmer', 4)).to.equal(
        '1 was successfully hired for the position Programmer.'
      );
    });
    it('Should return', () => {
      expect(companyAdministration.hiringEmployee('1', 'Programmer', 1)).to.equal(
        '1 is not approved for this position.'
      );
    });
  });

  describe('calculateSalary', () => {
    it('Should throw error', () => {
      expect(
        companyAdministration.calculateSalary.bind(companyAdministration, '1')
      ).to.throw('Invalid hours');
    });
    it('Should throw error', () => {
      expect(
        companyAdministration.calculateSalary.bind(companyAdministration, -1)
      ).to.throw('Invalid hours');
    });
    it('Should return', () => {
      expect(companyAdministration.calculateSalary(1)).to.equal(15);
    });
    it('Should return', () => {
      expect(companyAdministration.calculateSalary(160)).to.equal(2400);
    });
    it('Should return', () => {
      expect(companyAdministration.calculateSalary(161)).to.equal(3415);
    });
    it('Should return', () => {
      expect(companyAdministration.calculateSalary(161)).to.equal(3415);
    });
  });

  describe('firedEmployee', () => {
    it('Should throw error', () => {
      expect(
        companyAdministration.firedEmployee.bind(companyAdministration, 1, 1)
      ).to.throw('Invalid input');
    });
    it('Should throw error', () => {
      expect(
        companyAdministration.firedEmployee.bind(companyAdministration, [1], '1')
      ).to.throw('Invalid input');
    });
    it('Should throw error', () => {
      expect(
        companyAdministration.firedEmployee.bind(companyAdministration, [1], -1)
      ).to.throw('Invalid input');
    });
    it('Should throw error', () => {
      expect(
        companyAdministration.firedEmployee.bind(companyAdministration, [1], 1)
      ).to.throw('Invalid input');
    });
    it('Should throw error', () => {
      expect(
        companyAdministration.firedEmployee.bind(companyAdministration, [], 1)
      ).to.throw('Invalid input');
    });
    it('Should throw error', () => {
      expect(
        companyAdministration.firedEmployee.bind(companyAdministration, [])
      ).to.throw('Invalid input');
    });
    it('Should return', () => {
      expect(companyAdministration.firedEmployee(['1', '2'], 0)).to.equal('2');
    });
    it('Should return', () => {
      expect(companyAdministration.firedEmployee(['1'], 0)).to.equal('');
    });
    it('Should return', () => {
      expect(companyAdministration.firedEmployee(['1', '2', '3'], 0)).to.equal(
        '2, 3'
      );
    });
    it('Should return', () => {
      expect(companyAdministration.firedEmployee(['1', '2', '3'], 1)).to.equal(
        '1, 3'
      );
    });
  });
});
