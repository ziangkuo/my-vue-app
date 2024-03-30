<template>
  <el-form ref="form" class="register-container":model="form" :rules="rules">
    <h3 class="title">Register Page</h3>
    
    <form @submit.prevent="pressed" ></form>

      <el-form-item label="邮箱" prop="mail">
            <el-input type="email" v-model="form.email"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" ></el-input>
        </el-form-item>

        <el-form-item style="display: flex; justify-content: center ;">
            <el-button @click="signUp" type="primary">Register</el-button>
        </el-form-item>

  </el-form>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

  export default {
    data() {
      return {
        form: {
                email: '',
                password: '',
                error: '',
      },
      rules: {
                email: [
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
  methods: {
    signUp(){

      const auth = getAuth();

      createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then(() => {
        alert('Successfully registered! Please login.');
        this.$router.push('/home');
      })
      .catch(error => {
        alert(error.message);
      });
  },
},
  }

</script>

<style lang="less" scoped>
.register-container {
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