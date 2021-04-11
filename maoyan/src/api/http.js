import axios from "axios";

export function get({ url, params }) {
  return axios.get(url, { params }).then(rs => {
    return rs;
  });
}

/**
 * 封装Post请求
 * @param {*} param0
 */
export function post({ url, params }) {
  return axios.post(url, params).then(rs => {
    return rs;
  });
}

//请求之前的拦截
axios.interceptors.request.use(config => {
  return config;
});

//请求响应返回时候的拦截器
axios.interceptors.response.use(response => {
  return response;
});
