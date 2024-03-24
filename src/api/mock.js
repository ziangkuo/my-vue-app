import Mock from "mockjs";
import videoApi from "./mockServeData/video";
import permission from "./mockServeData/permission";

//定义 mock 请求拦截
Mock.mock("/api/video/getData", videoApi.getStatisticalData)

Mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)



