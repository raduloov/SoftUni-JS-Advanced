(function () {
  String.prototype.ensureStart = function (str) {
    if (this.startsWith(str)) {
      return this.toString();
    }

    return str + this;
  };
  String.prototype.ensureEnd = function (str) {
    if (this.endsWith(str)) {
      return this.toString();
    }

    return this + str;
  };
  String.prototype.isEmpty = function () {
    if (this.length === 0) {
      return true;
    }

    return false;
  };
  String.prototype.truncate = function (n) {
    if (this.length <= n) {
      return this.toString();
    }

    if (n < 4) {
      return '.'.repeat(n);
    }

    const arr = this.split(' ');
    let str = this.substring(0, n - 3);
    if (str.split(' ').length > 1 && str.split(' ').pop() !== arr.pop()) {
      str = str.split(' ');
      str.pop();
      str = str.join(' ');
    }

    return str + '.'.repeat(3);
  };
  String.format = function (str, ...params) {
    return str
      .split(' ')
      .map(word => {
        if (word.startsWith('{') && word.endsWith('}')) {
          const index = Number(word[1]);

          if (params[index]) {
            return params[index];
          }
        }
        return word;
      })
      .join(' ');
  };
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}', 'dog');
console.log(str);
