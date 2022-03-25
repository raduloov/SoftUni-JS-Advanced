import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as memeService from '../services/meme.js';
import { memeIsNotValid } from '../utils/utils.js';

const editTemplate = (meme, submitHandler) => html`
  <section id="edit-meme">
    <form id="edit-form" @submit=${submitHandler}>
      <h1>Edit Meme</h1>
      <div class="container">
        <label for="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter Title"
          name="title"
          value=${meme.title}
        />
        <label for="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter Description"
          name="description"
          .value=${meme.description}
        >
        </textarea>
        <label for="imageUrl">Image Url</label>
        <input
          id="imageUrl"
          type="text"
          placeholder="Enter Meme ImageUrl"
          name="imageUrl"
          value=${meme.imageUrl}
        />
        <input type="submit" class="registerbtn button" value="Edit Meme" />
      </div>
    </form>
  </section>
`;

export const editView = ctx => {
  const { memeId } = ctx.params;

  const submitHandler = e => {
    e.preventDefault();

    const memeData = Object.fromEntries(new FormData(e.currentTarget));

    if (memeIsNotValid(memeData)) {
      alert('All fields are required!');
      return;
    }

    memeService
      .edit(memeId, memeData)
      .then(() => {
        ctx.page.redirect(`/memes/${memeId}`);
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

  memeService.getMeme(memeId).then(meme => {
    ctx.render(editTemplate(meme, submitHandler));
  });
};
