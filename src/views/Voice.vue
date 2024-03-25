<template>
    <el-row>
        <el-col :span="16">
            <el-card class="box-card" style="padding-right: 10px;">
                <div class="user">
                    <img src="../assets/logo.png" alt="">
                </div>

                <div class="login-info">
                    <p>上次登录时间：<span>2024-06-06</span></p>
                    <p>上次登录地点：<span>Stockholm</span></p>
                </div>
            </el-card>
            <el-card style="margin-top: 20px;height: 460px;">
                <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column v-for="(value, key) in tableLable" :prop="key" :label="value">
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="8" style="padding-left: 10px;">
            <div class="subtitle">
                <el-card :body-style="{ display: 'flex', }">
                    <i class="el-icon-success" style="background-color: darkkhaki;"></i>
                    <div class="detailed">
                        <p class="price">Price</p>
                        <p class="content">1000</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height: 280px; margin-top: 20px;">

            </el-card>
            <div class="graph">
                <el-card style="height: 260px;">

                </el-card>
                <el-card style="height: 260px;"></el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import { getData } from '../api'

export default {
    data() {
        return {
            tableData: [  ],
            tableLable: {
                name: '课程',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总购买'
            }
        }
    },
    mounted() {
        getData().then(({ data }) => {
            console.log(data)
            const {tableData} = data.data
            console.log(tableData)
            this.$set(this, 'tableData', tableData)
        })
    }
}
</script>

<style lang="less" scoped>
.user {
    display: flex;
    align-items: center;

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-right: 40px;
    }

    .user-info {
        .name {
            font-size: 32px;
            color: #333;
            margin-bottom: 10px;
        }

        .access {
            color: #999999;
        }
    }
}

.login-info {
    p {
        font-size: 14px;
        line-height: 28px;
        color: #999999;

        span {
            color: #666666;
            margin-left: 60px;
        }
    }
}

.subtitle {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .el-icon-success {
        font-size: 30px;
        width: 80px;
        height: 80px;
        text-align: center;
        line-height: 80px;
        color: #fff;
    }

    .detailed {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 15px;
    }

    .price {
        font-size: 30px;
        margin-bottom: 10px;
        color: #333;
        line-height: 30px;
    }

    .content {
        font-size: 14px;
        color: #999999;
        text-align: center;
    }

}

.graph {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;

    .el-card {
        width: 48%;
    }



}
</style>
