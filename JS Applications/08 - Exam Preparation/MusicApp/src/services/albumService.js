import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/albums';

export const getAll = () =>
  request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=name`);

export const getAlbum = albumId => request.get(`${baseUrl}/${albumId}`);

export const create = albumData => request.post(baseUrl, albumData);

export const edit = (albumId, albumData) =>
  request.put(`${baseUrl}/${albumId}`, albumData);

export const del = albumId => {
  console.log(albumId);
  return request.del(`${baseUrl}/${albumId}`);
};

export const search = searchTerm => {
  const query = encodeURIComponent(`name LIKE "${searchTerm}"`);
  return request.get(`${baseUrl}?where=${query}`);
};
