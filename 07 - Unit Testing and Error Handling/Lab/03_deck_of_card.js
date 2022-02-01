function solve(input) {
  const valid = {
    faces: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    suits: {
      S: '\u2660',
      H: '\u2665',
      D: '\u2666',
      C: '\u2663',
    },
  };

  let output = [];
  input.forEach(string => {
    const data = string.split('');
    const suit = data.pop();
    if (!valid.faces.includes(data.join('')) || !valid.suits[suit]) {
      console.log(`Invalid card: ${string}`);
      return;
    }
    output.push(`${data.join('')}${valid.suits[suit]}`);
  });
  console.log(output.join(' '));
}

solve(['5S', '3D', 'QD', '1C']);
