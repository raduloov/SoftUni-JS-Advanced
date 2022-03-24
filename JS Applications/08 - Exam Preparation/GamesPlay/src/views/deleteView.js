import * as gameService from '../services/gameService.js';

export const deleteView = async ctx => {
  try {
    const game = await gameService.getGame(ctx.params.gameId);

    const confirmed = confirm(`Are you sure you want to delete ${game.name}`);

    if (confirmed) {
      await gameService.del(ctx.params.gameId);
      ctx.page.redirect('/');
    }
  } catch (error) {
    alert(error);
  }
};
