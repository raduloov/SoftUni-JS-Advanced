export const saveUser = user => {
  if (!user.accessToken) {
    return;
  }

  localStorage.setItem('user', JSON.stringify(user));
};

export const clearUser = () => {
  localStorage.removeItem('user');
};

export const getUser = () => {
  const serializedUser = localStorage.getItem('user');

  if (serializedUser) {
    const user = JSON.parse(serializedUser);

    return user;
  }
};

export const getToken = () => getUser()?.accessToken;
