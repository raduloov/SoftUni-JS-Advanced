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
import { dashboardView } from './views/dashboard.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/dashboard', dashboardView);
page('/create', createView);
page('/dashboard/:petId', detailsView);
page('/dashboard/:petId/edit', editView);

page.start();
