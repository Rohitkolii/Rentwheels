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
      localStorage.removeItem("refreshToken"); // also clear refresh token if exists
      window.location.replace("/login");
      // Reset flag after redirect to handle future 401s properly
      setTimeout(() => {
        isRedirecting = false;
      }, 1000);
    }

    return Promise.reject(error);
  }
);
