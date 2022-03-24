import * as carService from '../services/carService.js';

export const deleteView = async ctx => {
  try {
    const listing = await carService.getListing(ctx.params.listingId);

    const confirmed = confirm(
      `Are you sure you want to delete this listing for ${listing.brand} ${listing.model}?`
    );

    if (confirmed) {
      await carService.del(ctx.params.listingId);
      ctx.page.redirect('/listings');
    }
  } catch (error) {
    alert(error);
  }
};
