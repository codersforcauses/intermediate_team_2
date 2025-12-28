import axios from "axios";

import { getAccessToken } from "./auth";

// use env URL to call API
const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_BACKEND_URL });

// for login, register interceptor to attach bearer token
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
