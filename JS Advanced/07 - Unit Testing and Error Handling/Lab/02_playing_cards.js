function solve(face, suit) {
  const valid = {
    faces: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    suits: {
      S: '\u2660',
      H: '\u2665',
      D: '\u2666',
      C: '\u2663',
    },
  };

  if (!valid.faces.includes(face) || !valid.suits[suit]) {
    throw new Error('Error');
  }

  return {
    face: face.toUpperCase(),
    suit: suit.toUpperCase(),
    toString() {
      return `${face}${valid.suits[suit]}`;
    },
  };
}

const card = solve('A', 'S');
card.toString();
