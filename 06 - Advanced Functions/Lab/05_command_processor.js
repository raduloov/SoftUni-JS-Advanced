function solve() {
  return {
    str: '',
    append(str) {
      this.str += str;
    },
    removeStart(n) {
      this.str = this.str.substring(n);
    },
    removeEnd(n) {
      this.str = this.str.slice(0, -n);
    },
    print() {
      console.log(this.str);
    },
  };
}

let firstZeroTest = solve();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
