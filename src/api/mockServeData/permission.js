import Mock from 'mockjs'

export default {
    getMenu: config => {
            const { mail, password } = JSON.parse(config.body)
            if (mail === 'admin@kth.se' && password === 'password'){
                return{
                    code: 20000,
                    data:{
                        token: Mock.Random.guid(),
                        message: 'success'
                    }
                }

            } else {
                return{
                    code: -999,
                    data:{
                        message: 'wrong password'
                    }
                }
            }
    }
}