import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as bookService from '../services/book.js';
import * as likeService from '../services/like.js';

const detailsTemplate = (
  book,
  isOwner,
  deleteHandler,
  user,
  hasLiked,
  likes,
  likeHandler
) => html`
  <section id="details-page" class="details">
    <div class="book-information">
      <h3>${book.title}</h3>
      <p class="type">Type: ${book.type}</p>
      <p class="img"><img src=${book.imageUrl} /></p>
      <div class="actions">
        ${isOwner
          ? html`
              <a class="button" href="/dashboard/${book._id}/edit">Edit</a>
              <a class="button" href="javascript:void(0)" @click=${deleteHandler}
                >Delete</a
              >
            `
          : nothing}
        ${user && !isOwner
          ? html`<a class="button" href="javascript:void(0)" @click=${likeHandler}>
              Like
            </a>`
          : nothing}

        <div class="likes">
          <img class="hearts" src="/images/heart.png" />
          <span id="total-likes">Likes: ${likes}</span>
        </div>
      </div>
    </div>
    <div class="book-description">
      <h3>Description:</h3>
      <p>${book.description}</p>
    </div>
  </section>
`;

export const detailsView = async ctx => {
  const { bookId } = ctx.params;

  const book = await bookService.getBook(bookId);
  const likes = await likeService.getLikes(bookId);

  let hasLiked = false;
  if (ctx.user) {
    hasLiked = await likeService.hasLiked(bookId, ctx.user._id);
  }

  let isOwner = false;
  if (ctx.user) {
    isOwner = book._ownerId === ctx.user._id;
  }

  const likeHandler = e => {
    e.preventDefault();

    likeService
      .likeBook(bookId)
      .then(() => {
        ctx.page.redirect(`/dashboard/${bookId}`);
      })
      .catch(error => alert(error));
  };

  const deleteHandler = async () => {
    const confirmed = confirm(`Are you sure you want to delete ${book.title}?`);

    if (confirmed) {
      await bookService.del(bookId);
      ctx.page.redirect('/');
    }
  };

  ctx.render(
    detailsTemplate(
      book,
      isOwner,
      deleteHandler,
      ctx.user,
      hasLiked,
      likes,
      likeHandler
    )
  );
};
