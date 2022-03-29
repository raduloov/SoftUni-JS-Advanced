import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as eventService from '../services/event.js';
import * as likeService from '../services/like.js';

const detailsTemplate = (
  event,
  isOwner,
  deleteHandler,
  user,
  hasLiked,
  likes,
  likeHandler
) => html`
  <section id="detailsPage">
    <div id="detailsBox">
      <div class="detailsInfo">
        <h1>Title: ${event.title}</h1>
        <div>
          <img src=${event.imageUrl} />
        </div>
      </div>

      <div class="details">
        <h3>Theater Description</h3>
        <p>${event.description}</p>
        <h4>Date: ${event.date}</h4>
        <h4>Author: ${event.author}</h4>
        <div class="buttons">
          ${isOwner
            ? html`<a
                  class="btn-delete"
                  href="javascript:void(0)"
                  @click=${deleteHandler}
                  >Delete</a
                >
                <a class="btn-edit" href="/events/${event._id}/edit">Edit</a>`
            : nothing}
          ${user && !isOwner && !hasLiked
            ? html`<a
                class="btn-like"
                href="javascript:void(0)"
                @click=${likeHandler}
                >Like</a
              >`
            : nothing}
        </div>
        <p class="likes">Likes: ${likes}</p>
      </div>
    </div>
  </section>
`;

export const detailsView = async ctx => {
  const { eventId } = ctx.params;

  const event = await eventService.getEvent(eventId);
  const likes = await likeService.getLikes(eventId);

  console.log(likes);

  let hasLiked;
  if (ctx.user) {
    hasLiked = await likeService.hasLiked(eventId, ctx.user._id);
  }

  let isOwner;
  if (ctx.user) {
    isOwner = event._ownerId === ctx.user._id;
  }

  const likeHandler = async e => {
    e.preventDefault();

    const like = await likeService.likeEvent(eventId);

    console.log(like);
    ctx.page.redirect(`/events/${eventId}`);
  };

  const deleteHandler = async () => {
    const confirmed = confirm(`Are you sure you want to delete ${event.title}?`);

    if (confirmed) {
      await eventService.del(eventId);
      ctx.page.redirect('/');
    }
  };

  ctx.render(
    detailsTemplate(
      event,
      isOwner,
      deleteHandler,
      ctx.user,
      hasLiked,
      likes,
      likeHandler
    )
  );
};
