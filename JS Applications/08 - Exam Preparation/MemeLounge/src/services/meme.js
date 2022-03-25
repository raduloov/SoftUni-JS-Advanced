import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/memes';

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc`);

export const getMeme = memeId => request.get(`${baseUrl}/${memeId}`);

export const getLatest = () =>
  request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=category`);

export const create = memeData => request.post(baseUrl, memeData);

export const edit = (bookId, bookData) =>
  request.put(`${baseUrl}/${bookId}`, bookData);

export const del = bookId => request.del(`${baseUrl}/${bookId}`);

export const getMyMemes = userId =>
  request.get(
    `${baseUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
  );
