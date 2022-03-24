import { html } from '../../node_modules/lit-html/lit-html.js';

import * as gameService from '../services/gameService.js';
import { latestGameTemplate } from './templates/latestGameTemplate.js';

const homeTemplate = games => html`
  <section id="welcome-world">
    <div class="welcome-message">
      <h2>ALL new games are</h2>
      <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero" />

    <div id="home-page">
      <h1>Latest Games</h1>

      ${games.length > 0
        ? games.map(game => latestGameTemplate(game))
        : html`<p class="no-articles">No games yet</p>`}
    </div>
  </section>
`;

export const homeView = ctx => {
  gameService.getLatest().then(games => {
    ctx.render(homeTemplate(games));
  });
};
