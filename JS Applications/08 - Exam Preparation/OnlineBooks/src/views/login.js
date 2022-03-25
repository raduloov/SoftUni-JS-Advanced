import { html } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../services/user.js';

const loginTemplate = submitHandler => html`
  <section id="login-page" class="login">
    <form id="login-form" @submit=${submitHandler} method="POST">
      <fieldset>
        <legend>Login Form</legend>
        <p class="field">
          <label for="email">Email</label>
          <span class="input">
            <input type="text" name="email" id="email" placeholder="Email" />
          </span>
        </p>
        <p class="field">
          <label for="password">Password</label>
          <span class="input">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </span>
        </p>
        <input class="button submit" type="submit" value="Login" />
      </fieldset>
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
      .catch(error => alert(error));
  };

  ctx.render(loginTemplate(submitHandler));
};
