import { html } from '../../node_modules/lit-html/lit-html.js';

import * as memeService from '../services/meme.js';
import { memeIsNotValid } from '../utils/utils.js';

const createTemplate = submitHandler => html`
  <section id="create-meme">
    <form id="create-form" @submit=${submitHandler}>
      <div class="container">
        <h1>Create Meme</h1>
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" />
        <label for="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter Description"
          name="description"
        ></textarea>
        <label for="imageUrl">Meme Image</label>
        <input
          id="imageUrl"
          type="text"
          placeholder="Enter meme ImageUrl"
          name="imageUrl"
        />
        <input type="submit" class="registerbtn button" value="Create Meme" />
      </div>
    </form>
  </section>
`;

export const createView = ctx => {
  const submitHandler = e => {
    e.preventDefault();

    const memeData = Object.fromEntries(new FormData(e.currentTarget));

    if (memeIsNotValid(memeData)) {
      const notification = document.querySelector('.notification');
      const notifMsg = notification.querySelector('span');

      notifMsg.innerText = 'Invalid fields!';
      notification.style.display = 'block';

      setTimeout(() => {
        notification.style.display = 'none';
      }, 3000);
      return;
    }

    memeService
      .create(memeData)
      .then(() => {
        ctx.page.redirect('/memes');
      })
      .catch(error => {
        const notification = document.querySelector('.notification');
        const notifMsg = notification.querySelector('span');

        notifMsg.innerText = error;
        notification.style.display = 'block';

        setTimeout(() => {
          notification.style.display = 'none';
        }, 3000);
      });
  };

  ctx.render(createTemplate(submitHandler));
};
