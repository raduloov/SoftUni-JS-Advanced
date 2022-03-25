import { html } from '../../node_modules/lit-html/lit-html.js';

import * as bookService from '../services/book.js';

const bookTemplate = book => html`
  <li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}" /></p>
    <a class="button" href="/dashboard/${book._id}">Details</a>
  </li>
`;

const dashboardTemplate = books => html`
  <section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>

    <ul class="other-books-list">
      ${books.length > 0
        ? books.map(book => bookTemplate(book))
        : html`<p class="no-books">No books in database!</p>`}
    </ul>
  </section>
`;

export const dashboardView = ctx => {
  bookService.getAll().then(books => {
    ctx.render(dashboardTemplate(books));
  });
};
