import { html } from '../../node_modules/lit-html/lit-html.js';

import * as bookService from '../services/book.js';

const bookTemplate = book => html`
  <li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl} /></p>
    <a class="button" href="/dashboard/${book._id}">Details</a>
  </li>
`;

const dashboardTemplate = books => html`
  <section id="my-books-page" class="my-books">
    <h1>My Books</h1>

    <ul class="my-books-list">
      ${books.length > 0
        ? books.map(book => bookTemplate(book))
        : html`<p class="no-books">No books in database!</p>`}
    </ul>
  </section>
`;

export const myBooksView = ctx => {
  const userId = ctx.user._id;

  bookService.getMyBooks(userId).then(books => {
    ctx.render(dashboardTemplate(books));
  });
};
