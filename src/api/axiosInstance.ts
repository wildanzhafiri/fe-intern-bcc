import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://lentara-be.syafahadyan.com:8080/api/v1',
});

export default axiosInstance;
