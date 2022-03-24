import page from '../node_modules/page/page.mjs';

import { authMiddleware } from './middlewares/authMiddleware.js';
import {
  renderContentMiddleware,
  renderNavigationMiddleware
} from './middlewares/renderMiddleware.js';
import { createView } from './views/createView.js';
import { deleteView } from './views/deleteView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { gamesView } from './views/gamesView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/games', gamesView);
page('/create', createView);
page('/games/:gameId', detailsView);
page('/games/:gameId/edit', editView);
page('/games/:gameId/delete', deleteView);

page.start();
