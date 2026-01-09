// JWT variables
const ACCESS_KEY = "access_token";
const REFRESH_KEY = "refresh_token";

// when called, import JWT variables and store them in local storage

// set
export const setTokens = (access: string, refresh: string) => {
  localStorage.setItem(ACCESS_KEY, access);
  localStorage.setItem(REFRESH_KEY, refresh);
};

// get
export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_KEY);
};

// clear
export const clearTokens = () => {
  localStorage.removeItem(ACCESS_KEY);
  localStorage.removeItem(REFRESH_KEY);
};
