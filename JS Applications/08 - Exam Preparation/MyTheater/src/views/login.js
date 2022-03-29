import { html } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../services/user.js';

const loginTemplate = submitHandler => html`
  <section id="loginaPage">
    <form class="loginForm" @submit=${submitHandler}>
      <h2>Login</h2>
      <div>
        <label for="email">Email:</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="steven@abv.bg"
          value=""
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          value=""
        />
      </div>

      <button class="btn" type="submit">Login</button>

      <p class="field">
        <span>If you don't have profile click <a href="/register">here</a></span>
      </p>
    </form>
  </section>
`;

export const loginView = ctx => {
  const submitHandler = e => {
    e.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    userService
      .login(email, password)
      .then(() => {
        ctx.page.redirect('/');
      })
      .catch(error => {
        alert(error);
      });
  };

  ctx.render(loginTemplate(submitHandler));
};
