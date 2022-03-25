import { render } from '../../node_modules/lit-html/lit-html.js';

import { navigationView } from '../views/navigation.js';

const header = document.querySelector('#site-header');
const root = document.querySelector('#site-content');

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
