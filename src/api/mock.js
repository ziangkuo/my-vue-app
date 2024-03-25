import Mock from "mockjs";
import voiceApi from "./mockServeData/voice";
import permission from "./mockServeData/permission";

//定义 mock 请求拦截
Mock.mock("/api/voice/getData", voiceApi.getStatisticalData);

Mock.mock("/api/permission/getMenu", permission.getMenu);



