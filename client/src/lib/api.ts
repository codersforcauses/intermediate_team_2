import axios from "axios";

// use env URL to call API
const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_BACKEND_URL });

// request interceptor attaches bearer token (logins & non public pages)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// response interceptor redirects to get new bearer token (expired tokens)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login page
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default api;
