import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001"
});

axiosInstance.interceptors.request.use(
  request => {
    request.headers.authorization = localStorage.getItem("token");
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
