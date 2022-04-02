import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/donation';

export const donate = petId => request.post(baseUrl, { petId });

export const getDonations = petId =>
  request.get(`${baseUrl}?where=petId%3D%22${petId}%22&distinct=_ownerId&count
  `);

export const hasDonated = (petId, userId) =>
  request.get(
    `${baseUrl}?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count
    `
  );
