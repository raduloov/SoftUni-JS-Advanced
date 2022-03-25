import page from '../node_modules/page/page.mjs';

import { authMiddleware } from './middlewares/auth.js';
import {
  renderContentMiddleware,
  renderNavigationMiddleware
} from './middlewares/render.js';
import { createView } from './views/create.js';
import { dashboardView } from './views/dashboard.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { loginView } from './views/login.js';
import { logoutView } from './views/logout.js';
import { myBooksView } from './views/myBooks.js';
import { registerView } from './views/register.js';

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/', dashboardView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/create', createView);
page('/dashboard/:bookId', detailsView);
page('/dashboard/:bookId/edit', editView);
page('/my-books', myBooksView);

page.start();
