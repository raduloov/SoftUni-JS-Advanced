import { html } from '../../node_modules/lit-html/lit-html.js';

import * as eventService from '../services/event.js';

const eventTemplate = ({ title, date, imageUrl, _id }) => html`
  <div class="event-info">
    <img src=${imageUrl} />
    <h2>${title}</h2>
    <h6>${date}</h6>
    <a href="/events/${_id}" class="details-button">Details</a>
  </div>
`;

const profileTemplate = (user, events) => html`
  <section id="profilePage">
    <div class="userInfo">
      <div class="avatar">
        <img src="./images/profilePic.png" />
      </div>
      <h2>${user.email}</h2>
    </div>
    <div class="board">
      ${events.length > 0
        ? html`
            <div class="eventBoard">
              ${events.map(event => eventTemplate(event))}
            </div>
          `
        : html`
            <div class="no-events">
              <p>This user has no events yet!</p>
            </div>
          `}
    </div>
  </section>
`;

export const profileView = ctx => {
  eventService.getMyEvents(ctx.user._id).then(events => {
    console.log(events);
    ctx.render(profileTemplate(ctx.user, events));
  });
};
