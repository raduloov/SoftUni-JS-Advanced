import { html } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../services/user.js';

const loginTemplate = submitHandler => html`
  <section id="login">
    <div class="container">
      <form id="login-form" @submit=${submitHandler} method="post">
        <h1>Login</h1>
        <p>Please enter your credentials.</p>
        <hr />

        <p>Username</p>
        <input placeholder="Enter Username" name="username" type="text" />

        <p>Password</p>
        <input type="password" placeholder="Enter Password" name="password" />
        <input type="submit" class="registerbtn" value="Login" />
      </form>
      <div class="signin">
        <p>Dont have an account? <a href="/register">Sign up</a>.</p>
      </div>
    </div>
  </section>
`;

export const loginView = ctx => {
  const submitHandler = e => {
    e.preventDefault();

    const { username, password } = Object.fromEntries(new FormData(e.currentTarget));

    if (username.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    userService
      .login(username, password)
      .then(() => {
        ctx.page.redirect('/listings');
      })
      .catch(error => {
        alert(error);
      });
  };

  ctx.render(loginTemplate(submitHandler));
};
