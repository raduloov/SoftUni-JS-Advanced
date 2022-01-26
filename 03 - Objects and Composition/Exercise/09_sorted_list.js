function createSortedList() {
  return {
    list: [],
    add(element) {
      this.list.push(element);
      this.list.sort((a, b) => a - b);
      this.size++;
    },
    remove(index) {
      if (index >= this.size || index < 0) {
        throw new Error();
      } else {
        this.list.splice(index, 1);
        this.list.sort((a, b) => a - b);
        this.size--;
      }
    },
    get(index) {
      if (index >= this.size || index < 0) {
        throw new Error();
      } else {
        return this.list[index];
      }
    },
    size: 0,
  };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(2));
