import axios from 'axios';

const AxiosInstance = (token = '', contentType = 'application/json') => {
  const axiosInstance = axios.create({
    baseURL: 'https://api-coffeeshop-wkmh.onrender.com', //domain
    // baseURL: 'http://192.168.40.21:4000', //locahost wifid
    // baseURL: 'http://172.20.10.5:4000', //locahost ip8
    // baseURL: 'http://192.0.0.2:4000', //locahost xsmax
    // baseURL: 'http:172.16.91.127:4000', //locahost mang truong
  });
  //
  axiosInstance.interceptors.request.use(
    async config => {
      // const token = '';
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': contentType,
      };
      return config;
    },
    err => Promise.reject(err),
  );

  axiosInstance.interceptors.response.use(
    res => res.data,
    err => Promise.reject(err),
  );
  return axiosInstance;
};

export default AxiosInstance;
