import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/games';

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc`);

export const getGame = gameId => request.get(`${baseUrl}/${gameId}`);

export const getLatest = () =>
  request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=category`);

export const create = gameData => request.post(baseUrl, gameData);

export const edit = (gameId, gameData) =>
  request.put(`${baseUrl}/${gameId}`, gameData);

export const del = gameId => {
  return request.del(`${baseUrl}/${gameId}`);
};

export const search = searchTerm => {
  const query = encodeURIComponent(`name LIKE "${searchTerm}"`);
  return request.get(`${baseUrl}?where=${query}`);
};
