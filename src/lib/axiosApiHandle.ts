"use server";
// src/utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5513", // Replace with your API base URL
});

// Adding a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken"); // Assuming you store the JWT token in local storage
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
