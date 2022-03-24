import * as userService from '../services/userService.js';

export const logoutView = async ctx => {
  userService.logout().then(() => {
    ctx.page.redirect('/');
  });
};
