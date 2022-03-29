import { html } from '../../node_modules/lit-html/lit-html.js';

const guestLinks = html`
  <li><a href="/login">Login</a></li>
  <li><a href="/register">Register</a></li>
`;

const userLinks = html`
  <li><a href="/profile">Profile</a></li>
  <li><a href="/create">Create Event</a></li>
  <li><a href="/logout">Logout</a></li>
`;

const navigationTemplate = user => html`
  <nav>
    <a href="/">Theater</a>
    <ul>
      ${user ? userLinks : guestLinks}
    </ul>
  </nav>
`;

export const navigationView = ctx => {
  return navigationTemplate(ctx.user);
};
