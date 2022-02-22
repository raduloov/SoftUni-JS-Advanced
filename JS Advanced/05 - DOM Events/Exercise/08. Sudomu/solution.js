function solve() {
  const inputRows = Array.from(document.querySelectorAll('tbody tr'));
  const checkBtn = document.querySelectorAll('button')[0];
  const clearBtn = document.querySelectorAll('button')[1];

  const matrix = [];
  checkBtn.addEventListener('click', () => {
    inputRows.forEach(row => {
      const boxes = Array.from(row.querySelectorAll('input'));
      const matrixRow = [];
      boxes.forEach(box => {
        matrixRow.push(Number(box.value));
      });
      matrix.push(matrixRow);
    });
    console.log(matrix);

    let isSolved = true;
    const sum = matrix[0].reduce((a, b) => a + b);
    // Check horizontally
    for (let i = 0; i < 3; i++) {
      let temp = 0;
      const tempRow = [];
      for (let j = 0; j < 3; j++) {
        temp += matrix[i][j];
        tempRow.push(matrix[i][j]);
      }
      const set = new Set(tempRow);
      console.log(tempRow);
      console.log(set);
      console.log(eqSet(tempRow, set));
      if (temp !== sum) {
        isSolved = false;
      }
    }
    // Check vertically
    for (let i = 0; i < 3; i++) {
      let temp = 0;
      for (let j = 0; j < 3; j++) {
        temp += matrix[j][i];
      }
      if (temp !== sum) {
        isSolved = false;
      }
    }

    if (isSolved) console.log('solved');
  });

  function eqSet(as, bs) {
    if (as.size !== bs.size) return false;
    for (const a of as) if (!bs.has(a)) return false;
    return true;
  }
}
