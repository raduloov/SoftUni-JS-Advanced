import { render } from '../../node_modules/lit-html/lit-html.js';

import { navigationView } from '../views/navigation.js';

const header = document.querySelector('header');
const root = document.querySelector('#content');

export const renderNavigationMiddleware = (ctx, next) => {
  render(navigationView(ctx), header);

  next();
};

export const renderContentMiddleware = (ctx, next) => {
  ctx.render = templateResult => {
    render(templateResult, root);
  };

  next();
};

export const renderNotificationMiddleware = (ctx, next) => {
  render(notificationView(ctx), notification);
};
