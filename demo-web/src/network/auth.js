import { request } from './request';

export function create(params) {
  return request({
    method: 'post',
    url: '/auth/create',
    // data属性才能传递数据
    data: { ...params },
  });
}

export function deleteData(params) {
  return request({
    method: 'post',
    url: '/auth/delete',
    data: { ...params },
  });
}

export function nodifyData(params) {
  return request({
    method: 'post',
    url: '/auth/nodify',
    data: { ...params },
  });
}

// 后端会自动解密获取到参数，直接在后端进行解密即可
export function queryall() {
  return request({
    url: '/auth/retrieveall',
  });
}

export function query(params) {
  return request({
    method: 'post',
    url: '/auth/retrieve',
    data: { ...params },
  });
}
