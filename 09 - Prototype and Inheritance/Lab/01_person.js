function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
  Object.definePropertiy(this, 'fullName', {
    set: function (value) {
      if (this.firstName !== first || this.lastName !== last) {
        fullName = first + ' ' + last;
      }
    },
    get: function () {
      return fullName;
    },
  });
}

let person = new Person('Peter', 'Ivanov');
console.log(person.fullName); //Peter Ivanov
person.firstName = 'George';
console.log(person.fullName); //George Ivanov
person.lastName = 'Peterson';
console.log(person.fullName); //George Peterson
person.fullName = 'Nikola Tesla';
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
