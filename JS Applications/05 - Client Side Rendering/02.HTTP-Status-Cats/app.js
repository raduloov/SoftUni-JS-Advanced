import { render } from '../node_modules/lit-html/lit-html.js';

import { cats } from './catSeeder.js';
import mainTemplate from './mainTemplate.js';

const rootElement = document.getElementById('allCats');

render(mainTemplate(cats), rootElement);

const btns = document.querySelectorAll('button');

btns.forEach(btn =>
  btn.addEventListener('click', event => {
    const button = event.target;

    if (button.innerText === 'Show status code') {
      event.target.parentElement.querySelector('div').style.display = 'block';
      button.innerText = 'Hide status code';
    } else {
      event.target.parentElement.querySelector('div').style.display = 'none';
      button.innerText = 'Show status code';
    }
  })
);
