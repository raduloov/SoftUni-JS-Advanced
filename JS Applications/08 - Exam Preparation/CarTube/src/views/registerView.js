import { html } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../services/userService.js';

const registerTemplate = submitHandler => html`
  <section id="register">
    <div class="container">
      <form id="register-form" @submit=${submitHandler} method="POST">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <p>Username</p>
        <input type="text" placeholder="Enter Username" name="username" required />

        <p>Password</p>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />

        <p>Repeat Password</p>
        <input
          type="password"
          placeholder="Repeat Password"
          name="repeatPass"
          required
        />
        <hr />

        <input type="submit" class="registerbtn" value="Register" />
      </form>
      <div class="signin">
        <p>Already have an account? <a href="/login">Sign in</a>.</p>
      </div>
    </div>
  </section>
`;

export const registerView = ctx => {
  const submitHandler = e => {
    e.preventDefault();

    const { username, password, repeatPass } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    if (username === '' || password === '') {
      alert('Invalid fields.');
      return;
    }

    if (repeatPass !== password) {
      alert("Passwords don't match.");
      return;
    }

    userService
      .register(username, password)
      .then(() => {
        console.log('aaa');
        ctx.page.redirect('/listings');
      })
      .catch(error => alert(error));
  };

  ctx.render(registerTemplate(submitHandler));
};
