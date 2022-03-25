import { html } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../services/user.js';

const registerTemplate = submitHandler => html`
  <section id="register">
    <form id="register-form" @submit=${submitHandler}>
      <div class="container">
        <h1>Register</h1>
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter Username"
          name="username"
        />
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Enter Email" name="email" />
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          name="password"
        />
        <label for="repeatPass">Repeat Password</label>
        <input
          id="repeatPass"
          type="password"
          placeholder="Repeat Password"
          name="repeatPass"
        />
        <div class="gender">
          <input type="radio" name="gender" id="female" value="female" />
          <label for="female">Female</label>
          <input type="radio" name="gender" id="male" value="male" checked />
          <label for="male">Male</label>
        </div>
        <input type="submit" class="registerbtn button" value="Register" />
        <div class="container signin">
          <p>Already have an account?<a href="/login">Sign in</a>.</p>
        </div>
      </div>
    </form>
  </section>
`;

export const registerView = ctx => {
  const submitHandler = e => {
    e.preventDefault();

    const { username, email, password, repeatPass, gender } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    if (username === '' || email === '' || password === '') {
      const notification = document.querySelector('.notification');
      const notifMsg = notification.querySelector('span');

      notifMsg.innerText = 'Invalid fields!';
      notification.style.display = 'block';

      setTimeout(() => {
        notification.style.display = 'none';
      }, 3000);
      return;
    }

    if (repeatPass !== password) {
      const notification = document.querySelector('.notification');
      const notifMsg = notification.querySelector('span');

      notifMsg.innerText = 'Invalid fields!';
      notification.style.display = 'block';

      setTimeout(() => {
        notification.style.display = 'none';
      }, 3000);
      return;
    }

    userService
      .register(username, email, password, gender)
      .then(() => {
        ctx.page.redirect('/memes');
      })
      .catch(error => {
        const notification = document.querySelector('.notification');
        const notifMsg = notification.querySelector('span');

        notifMsg.innerText = error;
        notification.style.display = 'block';

        setTimeout(() => {
          notification.style.display = 'none';
        }, 3000);
      });
  };

  ctx.render(registerTemplate(submitHandler));
};
