import { html } from '../../node_modules/lit-html/lit-html.js';

const guestLinks = html`
  <li><a href="/login">Login</a></li>
  <li><a href="/register">Register</a></li>
`;

const userLinks = html`
  <li><a href="/create">Create Postcard</a></li>
  <li><a href="/logout">Logout</a></li>
`;

const navigationTemplate = user => html`
  <nav>
    <section class="logo">
      <img src="./images/logo.png" alt="logo" />
    </section>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/dashboard">Dashboard</a></li>
      ${user ? userLinks : guestLinks}
    </ul>
  </nav>
`;

export const navigationView = ctx => {
  return navigationTemplate(ctx.user);
};
