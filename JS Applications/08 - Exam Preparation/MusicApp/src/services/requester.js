import * as authService from './authService.js';

const request = (method, url, data) => {
  let options = {};

  if (method !== 'GET') {
    options.method = method;
    options.headers = {
      'Content-Type': 'application/json',
      'X-Authorization': authService.getToken()
    };

    options.body = JSON.stringify(data);
  }

  return fetch(url, options).then(res => res.json());
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const del = request.bind(null, 'DEL');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
