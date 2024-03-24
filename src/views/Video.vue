<template>
    <el-row>
        <el-col :span="16">
            <el-card class="box-card" style="padding-right: 10px;">
                <div class = "video">
                    <video src="../assets/示例视频.mp4"></video>
                </div>
                
            </el-card>
        </el-col>
        <el-col :span="8" style="padding-left: 10px;">
            <div class="subtitle">
                <el-card :body-style="{display:'flex', }">
                    <p v-for="(subtitle, index) in subtitles" :key="index">{{ subtitle }}</p>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>

import {getData} from '../api'
export default {
    data() {
        return {
            subtitles: [
                // 这里是你的字幕
                "字幕 1",
                "字幕 2",
                // ...
            ]
        }
    },
    mounted(){
        getData().then((data)=>{
            console.log(data)
        })
    }
}
</script>

<style lang="less" scoped>
.user{
    display: flex;
    align-items: center;
    img{
        width : 150px;
        height: 150px;
        border-radius: 50%;
        margin-right: 40px;
    }
    .user-info{
        .name{
            font-size: 32px;
            color: #333;
            margin-bottom: 10px;
        }
        .access{
            color: #999999;
        }
    }
}
.login-info{
    p{
        font-size: 14px;
        line-height: 28px;
        color: #999999;
        span{
            color: #666666;
            margin-left: 60px;
        }
    }
}
.subtitle{
    display: flex ;
    flex-wrap: wrap;
    justify-content: space-between;

    .el-icon-success{
        font-size: 30px;
        width: 80px;
        height: 80px;
        text-align: center;
        line-height: 80px;
        color: #fff;
    }
    .detailed{
       display: flex;
       flex-direction: column;
       justify-content: center;
       margin-left: 15px;
    }
    .price{
        font-size: 30px;
        margin-bottom: 10px;
        color: #333;
        line-height: 30px;
    }
    .content{
        font-size: 14px;
        color: #999999;
        text-align: center;
    }
}
</style>
