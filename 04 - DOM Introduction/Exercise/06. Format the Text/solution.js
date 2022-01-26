function solve() {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');

  let arr = input.split('.').filter(p => p.length > 0);

  for (let i = 0; i < arr.length; i += 3) {
    let temp = [];
    for (let j = 0; j < 3; j++) {
      if (arr[i + j]) {
        temp.push(arr[i + j]);
      }
    }
    let paragraph = temp.join('. ') + '.';
    output.innerHTML += `<p>${paragraph}</p>`;
  }
}
