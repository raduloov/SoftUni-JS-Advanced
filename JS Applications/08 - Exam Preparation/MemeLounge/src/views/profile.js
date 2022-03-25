import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as memeService from '../services/meme.js';

const memeTemplate = ({ title, imageUrl, _id }) => html`
  <div class="user-meme">
    <p class="user-meme-title">${title}</p>
    <img class="userProfileImage" alt="meme-img" src=${imageUrl} />
    <a class="button" href="/memes/${_id}">Details</a>
  </div>
`;

const profileTemplate = (user, memes) => html`
  <section id="user-profile-page" class="user-profile">
    <article class="user-info">
      <img id="user-avatar-url" alt="user-profile" src="/images/female.png" />
      <div class="user-content">
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>My memes count: ${memes.length}</p>
      </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
      ${memes.length
        ? memes.map(meme => memeTemplate(meme))
        : html`<p class="no-memes">No memes in database.</p>`}
    </div>
  </section>
`;

export const profileView = ctx => {
  memeService.getMyMemes(ctx.user._id).then(memes => {
    console.log(memes);
    ctx.render(profileTemplate(ctx.user, memes));
  });
};
