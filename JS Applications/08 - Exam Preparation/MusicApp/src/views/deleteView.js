import * as albumService from '../services/albumService.js';

export const deleteView = async ctx => {
  try {
    const album = await albumService.getAlbum(ctx.params.albumId);

    const confirmed = confirm(`Are you sure you want to delete ${album.name}`);

    if (confirmed) {
      await albumService.del(ctx.params.albumId);
      ctx.page.redirect('/catalog');
    }
  } catch (error) {
    alert(error);
  }
};
