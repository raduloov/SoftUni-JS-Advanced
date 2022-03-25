import * as api from './api.js';

const baseUrl = '/data/games';

export const getRecent = async () =>
  api.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=category`);

export const getAll = async () => api.get(`${baseUrl}?sortBy=_createdOn%20desc`);

export const create = async data => api.post(baseUrl, data);

export const getById = async id => api.get(`${baseUrl}/${id}`);

export const update = async (id, data) => api.put(`${baseUrl}/${id}`, data);

export const deleteById = async id => api.del(`${baseUrl}/${id}`);
