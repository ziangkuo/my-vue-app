import Vue from "vue";
// import {Row, Button} from 'element-ui'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./api/mock";
import Cookie from "js-cookie";

Vue.config.productionTip = false;
// Vue.use(Row)
// Vue.use(Button)
Vue.use(ElementUI);

//添加全局前置导航守卫
router.beforeEach((to, from, next) => {
   //判断 token 是否存在
  const token = Cookie.get('token');
  //token 不存在,说明没有登录，跳转到登录页面
  if (!token && to.name !== 'login') {
    next({ name: 'login' });
  } else if (token && to.name === 'login') {
    //token存在，说明已经登录，跳转到首页
    next({ path: 'home' });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
