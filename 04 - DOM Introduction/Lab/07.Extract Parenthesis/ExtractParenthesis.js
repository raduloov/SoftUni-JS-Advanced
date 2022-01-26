function extract(content) {
  const text = document.getElementById(content).textContent;
  const regex = /\(([^)]+)\)/g;
  const result = [];

  let match = regex.exec(text);
  while (match) {
    result.push(match[1]);
    match = regex.exec(text);
  }

  return result.join('; ');
}
