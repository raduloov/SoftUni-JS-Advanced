import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as memeService from '../services/meme.js';

const detailsTemplate = (meme, isOwner, deleteHandler) => html`
  <section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
      <div class="meme-img">
        <img alt="meme-alt" src=${meme.imageUrl} />
      </div>
      <div class="meme-description">
        <h2>Meme Description</h2>
        <p>${meme.description}</p>

        <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
        ${isOwner
          ? html`<a class="button warning" href="/memes/${meme._id}/edit">Edit</a>
              <button class="button danger" @click=${deleteHandler}>Delete</button>`
          : nothing}
      </div>
    </div>
  </section>
`;

export const detailsView = async ctx => {
  const { memeId } = ctx.params;

  const meme = await memeService.getMeme(memeId);

  let isOwner;
  if (ctx.user) {
    isOwner = meme._ownerId === ctx.user._id;
  }

  const deleteHandler = async () => {
    const confirmed = confirm(`Are you sure you want to delete ${meme.title}?`);

    if (confirmed) {
      await memeService.del(memeId);
      ctx.page.redirect('/memes');
    }
  };

  ctx.render(detailsTemplate(meme, isOwner, deleteHandler));
};
