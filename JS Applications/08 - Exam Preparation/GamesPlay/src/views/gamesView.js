import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as gameService from '../services/gameService.js';
import { gameTemplate } from './templates/gameTemplate.js';

const gamesTemplate = games => html`
  <section id="catalog-page">
    <h1>All Games</h1>
    ${games.length > 0
      ? games.map(game => gameTemplate(game))
      : html`<h3 class="no-articles">No articles yet</h3>`}
  </section>
`;

export const gamesView = ctx => {
  gameService.getAll().then(games => {
    console.log(games);
    ctx.render(gamesTemplate(games));
  });
};
