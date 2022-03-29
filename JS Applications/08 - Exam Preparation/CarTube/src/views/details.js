import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as carService from '../services/car.js';

const detailsTemplate = (listing, isOwner, deleteHandler) => html`
  <section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
      <img src=${listing.imageUrl} />
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
            <a href="javascript:void(0)" @click=${deleteHandler} class="button-list"
              >Delete</a
            >
          </div>`
        : nothing}
    </div>
  </section>
`;

export const detailsView = async ctx => {
  const { listingId } = ctx.params;

  const listing = await carService.getListing(listingId);

  let isOwner;
  if (ctx.user) {
    isOwner = listing._ownerId === ctx.user._id;
  }

  const deleteHandler = async () => {
    const confirmed = confirm(`Are you sure you want to delete this listing?`);

    if (confirmed) {
      await carService.del(listingId);
      ctx.page.redirect('/listings');
    }
  };

  ctx.render(detailsTemplate(listing, isOwner, deleteHandler));
};
