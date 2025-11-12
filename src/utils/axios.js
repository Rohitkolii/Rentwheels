import axios from "axios";

export const AXIOS = axios.create({
  baseURL: "https://some-domain.com/api/",
//   timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

AXIOS.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

let isRedirecting = false;

AXIOS.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401 && !isRedirecting) {
      isRedirecting = true; // prevent further redirects
      localStorage.removeItem("token");
      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);
