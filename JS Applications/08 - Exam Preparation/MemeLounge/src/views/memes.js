import { html } from '../../node_modules/lit-html/lit-html.js';

import * as memeService from '../services/meme.js';

const memeTemplate = meme => html`
  <div class="meme">
    <div class="card">
      <div class="info">
        <p class="meme-title">${meme.title}</p>
        <img class="meme-image" alt="meme-img" src=${meme.imageUrl} />
      </div>
      <div id="data-buttons">
        <a class="button" href="/memes/${meme._id}">Details</a>
      </div>
    </div>
  </div>
`;

const memesTemplate = memes => html`
  <section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
      ${memes.length > 0
        ? memes.map(meme => memeTemplate(meme))
        : html`<p class="no-memes">No memes in database.</p>`}
    </div>
  </section>
`;

export const memesView = ctx => {
  memeService.getAll().then(memes => {
    ctx.render(memesTemplate(memes));
  });
};
