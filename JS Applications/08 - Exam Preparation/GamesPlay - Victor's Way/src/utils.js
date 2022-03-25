export const getUserData = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const getAccessToken = () => {
  const user = getUserData();

  if (user) {
    return user.accessToken;
  } else {
    return null;
  }
};

export const clearUserData = () => {
  localStorage.removeItem('user');
};

export const setUserData = data => {
  localStorage.setItem('user', JSON.stringify(data));
};

export const createSubmitHandler = (ctx, handler) => {
  return event => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target));

    handler(ctx, formData, event);
  };
};
