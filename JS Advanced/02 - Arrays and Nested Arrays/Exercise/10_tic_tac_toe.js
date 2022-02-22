function solve(input) {
  const dashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let player = 1;
  let isOver = false;

  for (let i = 0; i < input.length; i++) {
    const coords = input[i].split(' ');
    const Y = +coords[0];
    const X = +coords[1];

    if (dashboard[Y][X] === false) {
      dashboard[Y][X] = player === 1 ? 'X' : 'O';
      player = player === 1 ? 2 : 1;
    } else {
      console.log('This place is already taken. Please choose another!');
    }

    // Check rows for win
    for (const row of dashboard) {
      if (row.every(space => space === 'X') || row.every(space => space === 'O')) {
        console.log(`Player ${row[0]} wins!`);
        isOver = true;
      }
    }

    // Check columns for win
    for (let i = 0; i < 3; i++) {
      const col = [];
      for (let j = 0; j < 3; j++) {
        col.push(dashboard[j][i]);
      }
      if (col.every(space => space === 'X') || col.every(space => space === 'O')) {
        console.log(`Player ${col[0]} wins!`);
        isOver = true;
      }
    }

    // Check diagonal for win
    let diag = [];
    for (let i = 0; i < 3; i++) {
      diag.push(dashboard[i][i]);
    }
    if (diag.every(space => space === 'X') || diag.every(space => space === 'O')) {
      console.log(`Player ${diag[0]} wins!`);
      isOver = true;
    }
    diag = [];
    let j = 2;
    for (let i = 0; i < 3; i++) {
      diag.push(dashboard[i][j]);
      j--;
    }
    if (diag.every(space => space === 'X') || diag.every(space => space === 'O')) {
      console.log(`Player ${diag[0]} wins!`);
      isOver = true;
    }
    diag = [];

    if (dashboard.every(row => row.every(space => space !== false))) {
      console.log('The game ended! Nobody wins :(');
      isOver = true;
    }

    if (isOver) {
      dashboard.forEach(row => console.log(row.join('\t')));
      break;
    }
  }
}

solve(['0 1', '0 0', '0 2', '2 0', '1 0', '1 1', '1 2', '2 2', '2 1', '0 0']);
solve(['0 0', '0 0', '1 1', '0 1', '1 2', '0 2', '2 2', '1 2', '2 2', '2 1']);
solve(['0 1', '0 0', '0 2', '2 0', '1 0', '1 2', '1 1', '2 1', '2 2', '0 0']);
