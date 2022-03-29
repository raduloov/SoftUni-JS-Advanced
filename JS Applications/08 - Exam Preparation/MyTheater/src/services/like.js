import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/likes';

export const likeEvent = eventId => request.post(baseUrl, { eventId });

export const getLikes = eventId =>
  request.get(`${baseUrl}?where=theaterId%3D%22${eventId}%22&distinct=_ownerId&count
  `);

export const hasLiked = (eventId, userId) =>
  request.get(
    `${baseUrl}?where=theaterId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count
    `
  );
