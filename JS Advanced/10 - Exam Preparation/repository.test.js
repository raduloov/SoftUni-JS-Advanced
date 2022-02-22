const expect = require('chai').expect;
const Repository = require('./repository');

describe('Repository', () => {
  let instance = {};

  beforeEach(
    () =>
      (instance = new Repository({
        name: 'string',
        age: 'number',
        birthday: 'object',
      }))
  );

  describe('count', () => {
    it('Should work', () => {
      expect(instance.count).to.equal(0);
    });
  });

  describe('add', () => {
    it('Should throw error', () => {
      const entity = {
        name: 1,
        age: 22,
        birthday: new Date(1998, 0, 7),
      };
      expect(instance.add.bind(instance, entity)).to.throw(
        'Property name is not of correct type!'
      );
    });
    it('Should throw error', () => {
      const entity = {
        name: 'Pesho',
        age: '22',
        birthday: new Date(1998, 0, 7),
      };
      expect(instance.add.bind(instance, entity)).to.throw(
        'Property age is not of correct type!'
      );
    });
    it('Should throw error', () => {
      const entity = {
        name: 'Pesho',
        age: 22,
        birthday: 'new Date(1998, 0, 7)',
      };
      expect(instance.add.bind(instance, entity)).to.throw(
        'Property birthday is not of correct type!'
      );
    });
    it('Should throw error', () => {
      const entity = {
        name: 'Pesho',
        age: 22,
      };
      expect(instance.add.bind(instance, entity)).to.throw(
        'Property birthday is missing from the entity!'
      );
    });
    it('Should throw error', () => {
      const entity = {
        name: 'Pesho',
        birthday: new Date(1998, 0, 7),
      };
      expect(instance.add.bind(instance, entity)).to.throw(
        'Property age is missing from the entity!'
      );
    });
    it('Should throw error', () => {
      const entity = {
        age: 22,
        birthday: new Date(1998, 0, 7),
      };
      expect(instance.add.bind(instance, entity)).to.throw(
        'Property name is missing from the entity!'
      );
    });
    it('Should return id', () => {
      const entity = {
        name: 'Pesho',
        age: 22,
        birthday: new Date(1998, 0, 7),
      };
      expect(instance.add(entity)).to.equal(0);
    });
  });

  describe('getId', () => {
    it('Should throw error', () => {
      expect(instance.getId.bind(instance, 1)).to.throw(
        'Entity with id: 1 does not exist!'
      );
    });
    it('Should throw error', () => {
      expect(instance.getId.bind(instance, 0)).to.throw(
        'Entity with id: 0 does not exist!'
      );
    });
    it('Should throw error', () => {
      expect(instance.getId.bind(instance, -1)).to.throw(
        'Entity with id: -1 does not exist!'
      );
    });
  });

  describe('update', () => {
    it('Should throw error', () => {
      const entity = {
        name: 'Pesho',
        age: 22,
        birthday: new Date(1998, 0, 7),
      };
      expect(instance.update.bind(instance, 0, entity)).to.throw(
        'Entity with id: 0 does not exist!'
      );
    });
    it('Should throw error', () => {
      const entity = {
        name: 1,
        age: 22,
        birthday: new Date(1998, 0, 7),
      };
      expect(instance.update.bind(instance, 0, entity)).to.throw;
    });
    it('Should throw error', () => {
      const entity = {
        name: 'Pesho',
        age: 22,
        birthday: new Date(1998, 0, 7),
      };
      const entity2 = {
        age: 22,
        birthday: new Date(1998, 0, 7),
      };
      instance.add(entity);
      expect(instance.update.bind(instance, 0, entity2)).to.throw(
        'Property name is missing from the entity!'
      );
    });
  });

  describe('del', () => {
    it('Should throw error', () => {
      expect(instance.del.bind(instance, 1)).to.throw(
        'Entity with id: 1 does not exist!'
      );
    });
    it('Should work', () => {
      const entity = {
        name: 'Pesho',
        age: 22,
        birthday: new Date(1998, 0, 7),
      };
      instance.add(entity);
      instance.add(entity);
      instance.del(1);
      expect(instance.data.has(1)).to.equal(false);
    });
  });
});
