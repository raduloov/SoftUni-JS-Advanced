import { html } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../services/user.js';

const registerTemplate = submitHandler => html`
  <section id="register-page" class="register">
    <form id="register-form" @submit=${submitHandler} method="POST">
      <fieldset>
        <legend>Register Form</legend>
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
        <p class="field">
          <label for="repeat-pass">Repeat Password</label>
          <span class="input">
            <input
              type="password"
              name="confirm-pass"
              id="repeat-pass"
              placeholder="Repeat Password"
            />
          </span>
        </p>
        <input class="button submit" type="submit" value="Register" />
      </fieldset>
    </form>
  </section>
`;

export const registerView = ctx => {
  const submitHandler = e => {
    e.preventDefault();

    const {
      email,
      password,
      ['confirm-pass']: confPass
    } = Object.fromEntries(new FormData(e.currentTarget));

    console.log(email, password, confPass);

    if (email === '' || password === '') {
      alert('Invalid fields.');
      return;
    }

    if (confPass !== password) {
      alert("Passwords don't match.");
      return;
    }

    userService
      .register(email, password)
      .then(() => {
        ctx.page.redirect('/');
      })
      .catch(error => alert(error));
  };

  ctx.render(registerTemplate(submitHandler));
};
