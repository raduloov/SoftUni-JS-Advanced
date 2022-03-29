import { html } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../services/user.js';

const registerTemplate = submitHandler => html`
  <section id="registerPage">
    <form class="registerForm" @submit=${submitHandler}>
      <h2>Register</h2>
      <div class="on-dark">
        <label for="email">Email:</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="steven@abv.bg"
          value=""
        />
      </div>

      <div class="on-dark">
        <label for="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          value=""
        />
      </div>

      <div class="on-dark">
        <label for="repeatPassword">Repeat Password:</label>
        <input
          id="repeatPassword"
          name="repeatPassword"
          type="password"
          placeholder="********"
          value=""
        />
      </div>

      <button class="btn" type="submit">Register</button>

      <p class="field">
        <span>If you have profile click <a href="/login">here</a></span>
      </p>
    </form>
  </section>
`;

export const registerView = ctx => {
  const submitHandler = e => {
    e.preventDefault();

    const { email, password, repeatPassword } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    if (email === '' || password === '') {
      alert('Invalid fields.');
      return;
    }

    if (repeatPassword !== password) {
      alert("Passwords don't match.");
      return;
    }

    userService
      .register(email, password)
      .then(() => {
        ctx.page.redirect('/');
      })
      .catch(error => {
        alert(error);
      });
  };

  ctx.render(registerTemplate(submitHandler));
};
