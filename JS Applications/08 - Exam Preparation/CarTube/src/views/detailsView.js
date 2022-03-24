import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as carService from '../services/carService.js';

const detailsTemplate = (listing, isOwner) => html`
  <section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
      <img src="${listing.imageUrl}" />
      <hr />
      <ul class="listing-props">
        <li><span>Brand:</span>${listing.brand}</li>
        <li><span>Model:</span>${listing.model}</li>
        <li><span>Year:</span>${listing.year}</li>
        <li><span>Price:</span>${listing.price}$</li>
      </ul>

      <p class="description-para">${listing.description}</p>

      ${isOwner
        ? html`<div class="listings-buttons">
            <a href="/listings/${listing._id}/edit" class="button-list">Edit</a>
            <a href="/listings/${listing._id}/delete" class="button-list">Delete</a>
          </div>`
        : nothing}
    </div>
  </section>
`;

export const detailsView = ctx => {
  carService.getListing(ctx.params.listingId).then(listing => {
    const isOwner = ctx.user && listing._ownerId === ctx.user._id;
    console.log(isOwner);

    ctx.render(detailsTemplate(listing, isOwner));
  });
};
