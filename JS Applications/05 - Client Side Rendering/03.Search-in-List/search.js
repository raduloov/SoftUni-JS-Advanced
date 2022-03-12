import { render } from '../node_modules/lit-html/lit-html.js';

import { towns } from './towns.js';
import townsTemplate from './townsTemplate.js';

const townsElement = document.getElementById('towns');
const resultElement = document.getElementById('result');
const input = document.getElementById('searchText');
const searchBtn = document.querySelector('button');

render(townsTemplate(towns), townsElement);

searchBtn.addEventListener('click', search);

function search() {
  if (input.value.trim().length === 0) {
    return;
  }

  let matches = 0;
  document.querySelectorAll('li').forEach(li => {
    li.classList.remove('active');
    if (li.innerText.toLowerCase().includes(input.value.toLowerCase())) {
      li.classList.add('active');
      matches++;
    }
  });

  resultElement.innerText = `${matches} matches found`;
}
