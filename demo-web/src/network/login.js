import { request } from './request';

export function login(params) {
  return request({
    method: 'post',
    url: '/auth/login',
    data: params,
  });
}
