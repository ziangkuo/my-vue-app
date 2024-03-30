<template>
    <el-form ref="form" class="login-container" :model="form" :rules="rules">
        <h3 class="title">系统登录</h3>

        <el-form-item label="邮箱" prop="mail">
            <el-input v-model="form.mail"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item style="display: flex; justify-content: center ;">
            <el-button @click="submit" type="primary">登录</el-button>
        </el-form-item>

        <el-form-item style="display: flex; justify-content: right ;">
            <router-link to="/register">Register</router-link>
        </el-form-item>

        <el-form-item id= "GoogleSignIn" v-if="!isSignedIn">
        <h3>Google SignIn </h3>
        <el-button @click="handleSignInGoogle">login</el-button>
    </el-form-item>
    </el-form>
    
</template>

<script>
import Mock from 'mockjs'
import Cookie from 'js-cookie'
import { getMenu } from '../api'
import firebaseConfig from '../firebase/init.js'
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth"


const provider = new GoogleAuthProvider()
const auth = getAuth()

export default {
    data() {
        return {
            form: {
                mail: '',
                password: '',
                user: '',
                isSignedIn: false,
            },
            rules: {
                mail: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 12, message: '密码长度在6-12位之间', trigger: 'blur' }
                ]
            }

        }
    },
    methods:{
        submit(){
            const token = Mock.Random.guid()
            Cookie.set('token', token)
            this.$router.push('/home')
        },

        handleSignInGoogle() {
            signInWithPopup(auth, provider)
                .then((result) => {
                    this.isSignedIn = true
                    this.$router.push('/home')
                }).catch((error) => {
                  console.log(error)
                });         
            },
        handleSignOutGoogle() {
            const auth = getAuth();
                signOut(auth).then(() => {
                    this.user = ''
                    this.isSignedIn = false
                }).catch((error) => {
                    console.log(error)
                });
        }
    }
}
</script>

<style lang="less" scoped>
.login-container {
    width: 400px;
    margin: 180px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 15px;
    box-shadow: 0 0 10px #ccc;

    .title {
        text-align: center;
        font-size: 24px;
        margin-bottom: 20px;
    }

    .el-button {
        text-align: center;
    }
}
</style>