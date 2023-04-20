import request from "../util/request.js"; // 引入我们封装好的request
// 定义一个函数 getLogin
export function showbmp(obj) {
  return request({
    // 利用我们封装好的request发送请求
    url: "/showbmp", // 请求地址 已经去除前面request中baseUrl相同的内容
    method: "post", // 请求方法
      data: obj, // 向后端传递数据
  });
}
export function showhist(obj) {
  return request({
    // 利用我们封装好的request发送请求
    url: "/showhist", // 请求地址 已经去除前面request中baseUrl相同的内容
    method: "post", // 请求方法
    data: obj, // 向后端传递数据
  });
}

export function upload(obj) {
  return request({
    // 利用我们封装好的request发送请求
    url: "/up_photo", // 请求地址 已经去除前面request中baseUrl相同的内容
    method: "post", // 请求方法
    data: obj, // 向后端传递数据
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
