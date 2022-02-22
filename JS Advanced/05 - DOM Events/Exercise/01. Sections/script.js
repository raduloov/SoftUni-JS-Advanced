function create(words) {
  const content = document.getElementById('content');

  words.forEach(word => {
    const div = document.createElement('div');
    const paragraph = document.createElement('p');
    paragraph.appendChild(document.createTextNode(word));
    div.appendChild(paragraph);
    paragraph.style.display = 'none';
    content.appendChild(div);
  });

  const divs = document.querySelectorAll('div');
  Array.from(divs).forEach(div => {
    div.addEventListener('click', () => {
      const p = div.querySelector('p');
      p.style.display = 'block';
    });
  });
}
