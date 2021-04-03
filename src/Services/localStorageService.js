const USER_DATA = 'user-data';

export const setUserDataInLocalStorage = data => localStorage.setItem(USER_DATA, JSON.stringify(data));

export const getUserDataInLocalStorage = () => JSON.parse(localStorage.getItem(USER_DATA));
