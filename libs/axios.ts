import axios from "axios";
import { error } from "console";
import { config } from "process";
import toast from "react-hot-toast";

const Api = axios.create({
  baseURL: "http://localhost:5001/api", // Replace with your API URL
  timeout: 10000, // Optional: set timeout
  headers: {
    "Content-Type": "application/json", // Optional headers
  },
});

Api.interceptors.request.use(
  (config) => {
    // Modify request (e.g., add Authorization token)
    config.headers.Authorization = `${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const status = error.response.status;
    if ([400, 404, 501].includes(status)) {
      toast.error(`Error ${status}`)
    }
  }
)

export default Api;
