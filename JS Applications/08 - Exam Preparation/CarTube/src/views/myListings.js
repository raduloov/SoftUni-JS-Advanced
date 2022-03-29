import { html } from '../../node_modules/lit-html/lit-html.js';

import * as carService from '../services/car.js';
import listingTemplate from './templates/listing.js';

const listingsTemplate = listings => html`
  <section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
      ${listings.length > 0
        ? listings.map(listing => listingTemplate(listing))
        : html`<p class="no-cars">You haven't listed any cars yet.</p>`}
    </div>
  </section>
`;

export const myListingsView = ctx => {
  carService.getMyListings(ctx.user._id).then(listings => {
    ctx.render(listingsTemplate(listings));
  });
};
