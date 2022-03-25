import page from '../node_modules/page/page.mjs';

import { authMiddleware } from './middlewares/auth.js';
import {
  renderContentMiddleware,
  renderNavigationMiddleware
} from './middlewares/render.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { logoutView } from './views/logout.js';
import { createView } from './views/create.js';
import { memesView } from './views/memes.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { profileView } from './views/profile.js';

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/create', createView);
page('/memes', memesView);
page('/memes/:memeId', detailsView);
page('/memes/:memeId/edit', editView);
page('/profile', profileView);

page.start();
