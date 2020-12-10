import axios from 'axios';

const token = localStorage.getItem('token');

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:7001',
  });
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common['Authorization'];
  }
  return instance(config);
}
