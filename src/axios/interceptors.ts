import axios from 'axios';

axios.interceptors.response.use(
  response => {
    console.log('Response Interceptor');

    return response;
  },
  error => {
    if (error && error.response === undefined) {
      return Promise.reject(console.log('Error'));
    } else if (error && error.response && error.response.status === 401) {
      return Promise.reject(console.log('Not Logged In'));
    }
  },
);

axios.interceptors.request.use(
  config => {
    console.log('Request Interceptor');
    const token = 'Something';
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    Promise.reject(error);
  },
);
