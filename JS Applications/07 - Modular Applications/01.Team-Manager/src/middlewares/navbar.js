import { html } from '../../node_modules/lit-html/lit-html.js';

const links = {
  '/browse': document.getElementById('browseLink'),
  '/login': document.getElementById('loginLink'),
  '/register': document.getElementById('registerLink'),
  '/my-teams': document.getElementById('myTeamsLink')
};

export function updateNav(ctx, next) {
  if (ctx.user) {
    
  }

  next();
}
