<template>
    <el-row>
        <el-col :span="16">
            <el-card class="box-card" style="padding-right: 10px;">
                <div class = "audio">
                    <audio ref="audio" src="../assets/jfk.wav"></audio>
                </div>
            </el-card>
        </el-col>
        <el-col :span="8" style="padding-left: 10px;">
            <div class="subtitle">
                <el-card :body-style="{display:'flex', flexDirection: 'column', alignItems: 'start', padding: '10px'}">
                    <div v-for="(subtitle, index) in subtitles" :key="index" class="subtitle-text">
                        <p>{{ subtitle.text }}</p>
                        <p>{{ subtitle.start }} --> {{ subtitle.end }}</p>
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'
export default {
    data() {
        return {
            player: null,
            subtitles: []
        }
    },
    mounted(){
        this.player = new Plyr(this.$refs.audio)
        this.loadSubtitles()
    },
    beforeDestroy(){
        if(this.player){
            this.player.destroy()
        }
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
.subtitle-text {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 10px;
}
</style>
