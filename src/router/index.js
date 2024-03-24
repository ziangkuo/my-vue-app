import vue from 'vue'
import vueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Video from '../views/Video.vue'
import Voice from '../views/Voice.vue'
import Page1 from '../views/Pageone.vue'
import Page2 from '../views/Pagetwo.vue'
import Login from '../views/Login.vue'


vue.use(vueRouter)

const routes = [
    {
       path: '/', 
       component: Main,
       redirect: '/home',//重定向
       children: [
         { path: 'home', component: Home },
         { path: 'user', component: User },
         {path: 'video', component: Video},
         {path: 'voice', component: Voice},
         {path: 'page1', component: Page1},
          {path: 'page2', component: Page2}
       ]
    },
    {
      path:'/login',
      name:'login',
      component: Login,
    },
    
  ]

  const router = new vueRouter({
    routes
    })

export default router