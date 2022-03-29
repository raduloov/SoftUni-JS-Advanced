import * as userService from '../services/user.js';

export const logoutView = async ctx => {
  userService.logout().then(() => {
    ctx.page.redirect('/');
  });
};
