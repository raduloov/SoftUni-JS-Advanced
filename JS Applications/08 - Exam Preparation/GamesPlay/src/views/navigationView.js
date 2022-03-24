import { html } from '../../node_modules/lit-html/lit-html.js';

const guestLinks = html`
  <div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>
`;

const userLinks = html`
  <div id="user">
    <a href="/create">Create Game</a>
    <a href="/logout">Logout</a>
  </div>
`;

const navigationTemplate = user => html`
  <h1><a class="home" href="/">GamesPlay</a></h1>
  <nav>
    <a href="/games">All games</a>
    ${user ? userLinks : guestLinks}
  </nav>
`;

export const navigationView = ctx => {
  return navigationTemplate(ctx.user);
};
