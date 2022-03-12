import { html } from '../node_modules/lit-html/lit-html.js';

import catCard from './catCard.js';

const mainTemplate = cats => html`
  <ul>
    ${cats.map(cat => html`${catCard(cat)}`)}
  </ul>
`;

export default mainTemplate;
