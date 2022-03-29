import { html } from '../../node_modules/lit-html/lit-html.js';

import * as carService from '../services/car.js';
import listingTemplate from './templates/listing.js';

const listingsTemplate = listings => html`
  <section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
      ${listings.length > 0
        ? listings.map(listing => listingTemplate(listing))
        : html`<p class="no-cars">No cars in database.</p>`}
    </div>
  </section>
`;

export const listingsView = ctx => {
  carService.getAll().then(listings => {
    ctx.render(listingsTemplate(listings));
  });
};
