import { getUserData } from '../utils.js';

export const addSession = (ctx, next) => {
  ctx.user = getUserData();

  next();
};
