import * as api from './api.js';

const baseUrl = '/data/comments';

export const getById = async id => api.get(`${baseUrl}?where=gameId%3D%22${id}%22`);

export const postComment = async data => api.post(baseUrl, data);
