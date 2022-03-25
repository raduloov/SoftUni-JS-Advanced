import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as gamesService from '../api/games.js';

const detailsTemplate = (game, onDelete) => html`
  <section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
      <div class="game-header">
        <img class="game-img" src=${game.imageUrl} />
        <h1>${game.title}</h1>
        <span class="levels">MaxLevel: ${game.maxLevel}</span>
        <p class="type">${game.category}</p>
      </div>

      <p class="text">${game.summary}</p>

      <!-- Bonus ( for Guests and Users ) -->
      <div class="details-comments">
        <h2>Comments:</h2>
        <ul>
          <!-- list all comments for current game (If any) -->
          <li class="comment">
            <p>Content: I rate this one quite highly.</p>
          </li>
          <li class="comment">
            <p>Content: The best game.</p>
          </li>
        </ul>
        <!-- Display paragraph: If there are no games in the database -->
        <p class="no-comment">No comments.</p>
      </div>

      ${game.isOwner
        ? html`
            <div class="buttons">
              <a href="/edit/${game._id}" class="button">Edit</a>
              <a href="javascript:void(0)" @click=${onDelete} class="button"
                >Delete</a
              >
            </div>
          `
        : nothing}
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    <article class="create-comment">
      <label>Add new comment:</label>
      <form class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment" />
      </form>
    </article>
  </section>
`;

export const detailsPage = async ctx => {
  const gameId = ctx.params.id;
  const game = await gamesService.getById(gameId);

  if (ctx.user) {
    game.isOwner = ctx.user._id === game._ownerId;
  }

  const onDelete = async () => {
    const confirmed = confirm(`Are you sure you want to delete ${game.title}?`);

    if (confirmed) {
      await gamesService.deleteById(gameId);
      ctx.page.redirect('/');
    }
  };

  ctx.render(detailsTemplate(game, onDelete));
};
