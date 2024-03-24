import http from "@/utils/request";

//请求video数据的接口

 export const getData = () => {
    //返回一个promise对象
    return http.get('/video/getData');
  }

  export const getMenu = () => {
    return http.post('/permission/getMenu', data);
  }