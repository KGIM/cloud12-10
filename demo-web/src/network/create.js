import { request } from './request';

export function create(params) {
  return request({
    method: 'post',
    url: '/auth/create',
    // data属性才能传递数据
    data: { ...params },
  });
}
