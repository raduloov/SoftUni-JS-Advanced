import page from '../node_modules/page/page.mjs';

import { authMiddleware } from './middleware/authMiddleware.js';
import {
  renderContentMiddleware,
  renderNavigationMiddleware
} from './middleware/renderMiddleware.js';
import { getMyListings } from './services/carService.js';
import { createView } from './views/createView.js';
import { deleteView } from './views/deleteView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { homeView } from './views/homeView.js';
import { listingsView } from './views/listingsView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { myListingsView } from './views/myListingsView.js';
import { registerView } from './views/registerView.js';
import { searchView } from './views/searchView.js';

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/listings', listingsView);
page('/create', createView);
page('/listings/:listingId', detailsView);
page('/listings/:listingId/edit', editView);
page('/listings/:listingId/delete', deleteView);
page('/my-listings', myListingsView);
page('/search', searchView);

page.start();
