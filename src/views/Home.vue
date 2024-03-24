<template>
    <el-row>
        <div class="title">
            <p>添加的视频</p>
            <el-button class="button" type="text">查看更多</el-button>
        </div>

        <el-col :span="24">
            <el-card class="box-card">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="image-container">
                            <img src="../assets/video.png" alt="1">
                            <p class="image-title">标题 1标题 1标题 1标题 1标题 1标题 1标题 1标题 1标题 1标题 1标题 1</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="image-container">
                            <img src="../assets/video.png" alt="2">
                            <p class="image-title">标题 2</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="image-container">
                            <img src="../assets/video.png" alt="3">
                            <p class="image-title">标题 3</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="image-container">
                            <img src="../assets/video.png" alt="4">
                            <p class="image-title">标题 4</p>
                        </div>
                    </el-col>
                </el-row>
            </el-card>

            <div class="title" style="margin-top: 50px;">
                <p>添加的音频</p>
                <el-button class="button" type="text">查看更多</el-button>
            </div>
            <el-card>
                <!-- <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传音频文件</div>
                </el-upload> -->
                <el-row :gutter="20">
        <el-col :span="4">
            <div class="image-container">
                        <img src="../assets/sound-waves.png" alt="1">
                        <p class="image-title">标题 1</p>
                    </div>
                </el-col>
                <!-- 添加更多的列 -->
                <el-col :span="4">
                    <div class="image-container">
                        <img src="../assets/sound-waves.png" alt="2">
                        <p class="image-title">标题 2</p>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="image-container">
                        <img src="../assets/sound-waves.png" alt="3">
                        <p class="image-title">标题 3</p>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="image-container">
                        <img src="../assets/sound-waves.png" alt="4">
                        <p class="image-title">标题 4</p>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="image-container">
                        <img src="../assets/sound-waves.png" alt="5">
                        <p class="image-title">标题 5</p>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="image-container">
                        <img src="../assets/sound-waves.png" alt="6">
                <p class="image-title">标题 6</p>
            </div>
        </el-col>
    </el-row>

            </el-card>


            <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="24">
            <div class="grid-content bg-purple-light"></div>
        </el-col>
    </el-row>
</template>

<script>

export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.upload-demo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    p {
        font-size: 16px;
        color: #333;
    }

    .button {
        color: #409EFF;
    }

}
.image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        object-position: center;
        border: 1px solid black;
    }

    .image-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 200px;
    }
}
</style>
