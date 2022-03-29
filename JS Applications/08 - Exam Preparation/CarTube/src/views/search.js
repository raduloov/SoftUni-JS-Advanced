import { html } from '../../node_modules/lit-html/lit-html.js';

import * as carService from '../services/car.js';
import listingTemplate from './templates/listing.js';

const searchTemplate = (searchHandler, listings) => html`
  <section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
      <input
        id="search-input"
        type="text"
        name="search"
        placeholder="Enter desired production year"
      />
      <button class="button-list" @click=${searchHandler}>Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">
      ${listings.length > 0
        ? listings.map(listing => listingTemplate(listing))
        : html`<p class="no-cars">No results.</p>`}
    </div>
  </section>
`;

export const searchView = ctx => {
  const searchHandler = () => {
    const enteredYear = document.getElementById('search-input');

    if (enteredYear.value.trim().length === 0) {
      return;
    }

    carService.getByYear(enteredYear.value).then(listings => {
      ctx.render(searchTemplate(searchHandler, listings));
    });
  };

  ctx.render(searchTemplate(searchHandler, []));
};
