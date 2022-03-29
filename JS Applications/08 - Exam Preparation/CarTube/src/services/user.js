import * as request from './requester.js';
import * as authService from './auth.js';

const baseUrl = 'http://localhost:3030/users';

// Could be refactored
export const login = (username, password) =>
  request
    .post(`${baseUrl}/login`, { username, password })
    .then(user => {
      authService.saveUser(user);
      return user;
    })
    .catch(error => {
      throw error;
    });

export const register = (username, password) =>
  request.post(`${baseUrl}/register`, { username, password }).then(user => {
    authService.saveUser(user);
    return user;
  });

export const logout = () =>
  fetch(`${baseUrl}/logout`, {
    headers: { 'X-Authorization': authService.getToken() }
  }).then(() => {
    authService.clearUser();
  });
