import { html } from '../node_modules/lit-html/lit-html.js';

const townsTemplate = ctx => html`
  <ul>
    ${ctx.towns.map(town => html`<li>${town}</li>`)}
  </ul>
`;

export default townsTemplate;
