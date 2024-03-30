<template>
    <div class="header-container">
        <!-- <div class="l-content">
            <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <span class="text">首页</span>
        </div> -->
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/logo.png" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item @click.native="handleSignOut">退出</el-dropdown-item>
                   
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>


import Cookie from 'js-cookie'
import { getAuth, signOut } from "firebase/auth";

export default {
    data() {
        return {

        }
    },
    methods:{
        handleMenu(){
            this.$store.commit('collapseMenu')
        },
        handleSignOut() {
            const auth = getAuth();
            signOut(auth)
            .then(() => {
               this.$store.commit('clearUserData');
                this.$router.push('/login');
            })
            .catch((error) => {
                console.error("Sign out error:", error);
            });
        }
    }
}

</script>

<style lang="less" scoped>
.header-container {
    background-color: #333;
    height: 60px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }
    .user{
        width : 40px;
        height: 40px;
        border-radius: 50%;
    }
    .r-content {
    position: absolute;
    right: 20px; /* 将 .r-content 推到右侧 */
    top: 10px; /* 根据需要调整 */
    }
}
</style>
