import Mock from 'mockjs'
export default {
    getMenu: config => {
        const { mail, password } = JSON.parse(config.body)
        if (mail === 'admin@kth.se' && password === 'password'){
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                        path:'/',
                        name: 'home',
                        label: '首页',
                        icon: 's-home',
                        url: '/home',
                        },
                        {
                        path:'/video',
                        name: 'video',
                        label: '视频',
                        icon: 'video-camera',
                        url: '/video',
                        },
                        {
                        path:'/voice',
                        name: 'voice',
                        label: '语音',
                        icon: 'message',
                        url: '/voice',
                        },
                        {
                            label:'Others',
                            icon:'location',
                            children:[
                                {
                                    path:'/page1',
                                    name:'page1',
                                    label:'页面1',
                                    icon:'setting',
                                    url:'/page1'
                                },
                                {
                                    path:'/page2',
                                    name:'page2',
                                    label:'页面2',
                                    icon:'setting',
                                    url:'/page2'
                                }
                            ]
                        }
                    ],
                    token: Mock.Random.guid(),
                    massage: '获取成功' 
                }
            }
        } else {
            return {
                code: -999,
                message: 'Account and password are incorrect.'
            }
        }
    }
}
