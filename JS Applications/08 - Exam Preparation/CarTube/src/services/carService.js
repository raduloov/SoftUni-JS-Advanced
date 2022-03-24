import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/cars';

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc`);

export const getListing = listingId => request.get(`${baseUrl}/${listingId}`);

export const getMyListings = userId =>
  request.get(
    `${baseUrl}/?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
  );

export const create = carData => request.post(baseUrl, carData);

export const edit = (listingId, carData) =>
  request.put(`${baseUrl}/${listingId}`, carData);

export const del = listingId => {
  return request.del(`${baseUrl}/${listingId}`);
};

export const search = year => {
  return request.get(`${baseUrl}?where=year%3D${year}`);
};
