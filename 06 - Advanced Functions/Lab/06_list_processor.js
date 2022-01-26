function solve(input) {
  let arr = [];

  input.forEach(el => {
    const [action, str] = el.split(' ');

    switch (action) {
      case 'add':
        arr.push(str);
        break;
      case 'remove':
        arr = arr.filter(el => el !== str);
        break;
      case 'print':
        console.log(arr.join());
        break;
    }
  });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
