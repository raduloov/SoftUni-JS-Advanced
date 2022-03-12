import { render } from '../node_modules/lit-html/lit-html.js';

import townsTemplate from './townsTemplate.js';

const input = document.getElementById('towns');
const loadBtn = document.getElementById('btnLoadTowns');
const rootElement = document.getElementById('root');

loadBtn.addEventListener('click', event => {
  event.preventDefault();

  if (input.value.trim().length !== 0) {
    const towns = input.value.split(', ');
    render(townsTemplate({ towns }), rootElement);
  }
});
