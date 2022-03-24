import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = gameId =>
  request.get(`${baseUrl}?where=gameId%3D%22${gameId}%22`);

export const postComment = commentData => request.post(baseUrl, commentData);
