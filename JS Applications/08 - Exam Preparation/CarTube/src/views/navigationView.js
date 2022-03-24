import { html } from '../../node_modules/lit-html/lit-html.js';

const guestLinks = html`
  <div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>
`;

const userLinks = user => html`
  <div id="profile">
    <a>Welcome ${user.username}</a>
    <a href="/my-listings">My Listings</a>
    <a href="/create">Create Listing</a>
    <a href="/logout">Logout</a>
  </div>
`;

const navigationTemplate = user => html`
  <nav>
    <a class="active" href="/">Home</a>
    <a href="/listings">All Listings</a>
    <a href="/search">By Year</a>
    ${user ? userLinks(user) : guestLinks}
  </nav>
`;

export const navigationView = ctx => {
  return navigationTemplate(ctx.user);
};
