import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as bookService from '../services/book.js';
import { bookIsNotValid } from '../utils/utils.js';

const editTemplate = (book, submitHandler) => html`
  <section id="edit-page" class="edit">
    <form id="edit-form" @submit=${submitHandler} method="POST">
      <fieldset>
        <legend>Edit my Book</legend>
        <p class="field">
          <label for="title">Title</label>
          <span class="input">
            <input type="text" name="title" id="title" value=${book.title} />
          </span>
        </p>
        <p class="field">
          <label for="description">Description</label>
          <span class="input">
            <textarea
              name="description"
              id="description"
              .value=${book.description}
            ></textarea>
          </span>
        </p>
        <p class="field">
          <label for="image">Image</label>
          <span class="input">
            <input type="text" name="imageUrl" id="image" value=${book.imageUrl} />
          </span>
        </p>
        <p class="field">
          <label for="type">Type</label>
          <span class="input">
            <select id="type" name="type" value=${book.type}>
              <option value="Fiction" selected>Fiction</option>
              <option value="Romance">Romance</option>
              <option value="Mistery">Mistery</option>
              <option value="Classic">Clasic</option>
              <option value="Other">Other</option>
            </select>
          </span>
        </p>
        <input class="button submit" type="submit" value="Save" />
      </fieldset>
    </form>
  </section>
`;

export const editView = ctx => {
  const { bookId } = ctx.params;

  const submitHandler = e => {
    e.preventDefault();

    const bookData = Object.fromEntries(new FormData(e.currentTarget));

    if (bookIsNotValid(bookData)) {
      alert('All fields are required!');
      return;
    }

    bookService.edit(bookId, bookData).then(() => {
      ctx.page.redirect(`/dashboard/${bookId}`);
    });
  };

  bookService.getBook(bookId).then(book => {
    ctx.render(editTemplate(book, submitHandler));
  });
};
