function solve() {
  const input = document.getElementById('text').value;
  const currentCase = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  let output = '';
  if (currentCase === 'Camel Case') {
    output = camelize(input);
  } else if (currentCase === 'Pascal Case') {
    output = pascalize(input);
  } else {
    output = 'Error!';
  }

  function camelize(str) {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }
  function pascalize(str) {
    const arr = [];
    const temp = str.split(' ');
    for (let word of temp) {
      const first = word[0].toUpperCase();
      word = word.slice(1).toLowerCase();
      word = first + word;
      arr.push(word);
    }
    return arr.join('');
  }

  result.textContent = output;
}
