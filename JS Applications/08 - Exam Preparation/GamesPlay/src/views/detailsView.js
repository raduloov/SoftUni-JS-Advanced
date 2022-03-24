import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as gameService from '../services/gameService.js';
import * as commentService from '../services/commentService.js';

const detailsTemplate = (game, comments, user, isOwner, postCommentHandler) => html`
  <section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
      <div class="game-header">
        <img class="game-img" src="${game.imageUrl}" />
        <h1>${game.title}</h1>
        <span class="levels">MaxLevel: ${game.maxLevel}</span>
        <p class="type">${game.category}</p>
      </div>

      <p class="text">${game.summary}</p>

      <!-- Bonus ( for Guests and Users ) -->
      <div class="details-comments">
        <h2>Comments:</h2>
        <ul>
          ${comments.length > 0
            ? comments.map(
                comment => html`
                  <li class="comment">
                    <p>Content: ${comment.comment}</p>
                  </li>
                `
              )
            : html`<p class="no-comment">No comments.</p>`}
        </ul>
      </div>
      ${isOwner
        ? html`
            <div class="buttons">
              <a href="/games/${game._id}/edit" class="button">Edit</a>
              <a href="/games/${game._id}/delete" class="button">Delete</a>
            </div>
          `
        : nothing}
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${user && !isOwner
      ? html`<article class="create-comment">
          <label>Add new comment:</label>
          <form class="form" @submit=${postCommentHandler}>
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>`
      : nothing}
  </section>
`;

export const detailsView = async ctx => {
  const { gameId } = ctx.params;

  const game = await gameService.getGame(gameId);
  const comments = await commentService.getAll(gameId);
  console.log(comments);

  let isOwner = false;
  if (ctx.user) {
    isOwner = game._ownerId === ctx.user._id;
  }

  const postCommentHandler = e => {
    e.preventDefault();

    const { comment } = Object.fromEntries(new FormData(e.currentTarget));

    if (comment.trim().length === 0) {
      alert('Invalid comment!');
      return;
    }

    commentService
      .postComment({ gameId, comment })
      .then(() => {
        document.querySelector('.form textarea').value = '';
        ctx.page.redirect(`/games/${gameId}`);
      })
      .catch(error => alert(error));
  };

  ctx.render(detailsTemplate(game, comments, ctx.user, isOwner, postCommentHandler));
};
