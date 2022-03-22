import page from '../node_modules/page/page.mjs';

import { decorateContext } from './middlewares/render.js';
import { homePage } from './pages/home.js';
import { browsePage } from './pages/browse.js';
import { teamHomePage } from './pages/teamHome.js';
import { loginPage } from './pages/login.js';
import { registerPage } from './pages/register.js';
import { editPage } from './pages/edit.js';
import { createPage } from './pages/create.js';
import { myTeamsPage } from './pages/myTeams.js';

import { updateNav } from './middlewares/navbar.js';

page(updateNav);
page(decorateContext);
page('/', homePage);
page('/browse', browsePage);
page('/browse/:id', teamHomePage);
page('/login', loginPage);
page('/register', registerPage);
page('/edit/:id', editPage);
page('/create', createPage);
page('/my-teams', myTeamsPage);

page.start();
