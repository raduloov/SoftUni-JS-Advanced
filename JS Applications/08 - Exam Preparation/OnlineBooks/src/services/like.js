import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/likes';

export const likeBook = bookId => request.post(baseUrl, { bookId });

export const getLikes = bookId =>
  request.get(`${baseUrl}?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);

export const hasLiked = (bookId, userId) =>
  request.get(
    `${baseUrl}?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
