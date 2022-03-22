import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/users';

const saveUser = user => {
  if (!user.accessToken) {
    return;
  }

  localStorage.setItem('user', JSON.stringify(user));
};

const clearUser = () => {
  localStorage.removeItem('user');
};

export const getUser = () => {
  const serializedUser = localStorage.getItem('user');

  if (serializedUser) {
    const user = JSON.parse(serializedUser);

    return user;
  }
};

export const getToken = () => {
  return getUser()?.accessToken;
};

// Could be refactored
export const login = (email, password) =>
  request.post(`${baseUrl}/login`, { email, password }).then(user => {
    saveUser(user);
    return user;
  });

export const register = (email, password) =>
  request.post(`${baseUrl}/register`, { email, password }).then(user => {
    saveUser(user);
    return user;
  });

export const logout = () => {
  fetch(`${baseUrl}/logout`, {
    headers: { 'X-Authorization': getToken() }
  }).then(() => {
    clearUser();
  });
};
