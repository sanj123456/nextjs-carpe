// import axios from 'axios';
// import { getLocalItem } from './helper';
// import toast from 'react-hot-toast';
// import store from '../store';
// import { logoutUser } from '../store/userReducer';

// const axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_DEV_BACKEND_URL,
//   timeout: 1002200,
// //   withCredentials: true,
// });

// // Request Interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = getLocalItem("Token");
//     if (token)
//       config.headers['Authorization'] = `Bearer ${token}`;
//     if (config.method === 'put') {
//       config.headers['Content-Type'] = 'multipart/form-data';
//     }
//     return config;
//   },
//   (error) => {
//     // Handle request errors
//     return Promise.reject(error);
//   },
// );

// // Response Interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.code === 'ERR_NETWORK') {
//       toast.error('Please check your connection');
//       return error;
//     }
//     if (error.response.status === 401) {
//       toast.error("Unauthenticated!")
//       store.dispatch(logoutUser());
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );
// export default axiosInstance;
