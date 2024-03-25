import Mock from "mockjs";

//图表数据

let list = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            list.push(
                Mock.mock({
                    Apple: Mock.Random.float(100, 8000, 0, 0),
                    Huawei: Mock.Random.float(100, 8000, 0, 0),
                    Xiaomi: Mock.Random.float(100, 8000, 0, 0),
                    Oppo: Mock.Random.float(100, 8000, 0, 0),
                    Vivo: Mock.Random.float(100, 8000, 0, 0),
                    Samsung: Mock.Random.float(100, 8000, 0, 0),
                })
            )
        }
        return {
            code: 20000,
            data: {
                videoData: [
                    {
                        name: 'Apple',
                        value: 5999
                    },
                    {
                        name: 'Huawei',
                        value: 6999
                    },
                    {
                        name: 'Xiaomi',
                        value: 3999
                    },
                    {
                        name: 'Oppo',
                        value: 2999
                    },
                    {
                        name: 'Vivo',
                        value: 4999
                    },
                    {
                        name: 'Samsung',
                        value: 8999
                    }
                ],

                //柱状图
                userData: [
                    {
                        data: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周二',
                        new: 10,
                        active: 300
                    },
                    {
                        data: '周三',
                        new: 15,
                        active: 400
                    },
                    {
                        data: '周四',
                        new: 20,
                        active: 500
                    },
                    {
                        data: '周五',
                        new: 25,
                        active: 600
                    },
                    {
                        data: '周六',
                        new: 30,
                        active: 700
                    },
                    {
                        data: '周日',
                        new: 35,
                        active: 800
                    }
                ],
                //折线图
                orderData: {
                    date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
                    data: list
                },
                tableData: [
                    {
                        name: 'Apple',
                        todayBuy: 100,
                        monthBuy: 1000,
                        totalBuy: 10000
                    },
                    {
                        name: 'Huawei',
                        todayBuy: 200,
                        monthBuy: 2000,
                        totalBuy: 20000
                    },
                    {
                        name: 'Xiaomi',
                        todayBuy: 300,
                        monthBuy: 3000,
                        totalBuy: 30000
                    },
                    {
                        name: 'Oppo',
                        todayBuy: 400,
                        monthBuy: 4000,
                        totalBuy: 40000
                    },
                    {
                        name: 'Vivo',
                        todayBuy: 500,
                        monthBuy: 5000,
                        totalBuy: 50000
                    },
                    {
                        name: 'Samsung',
                        todayBuy: 600,
                        monthBuy: 6000,
                        totalBuy: 60000
                    }
                ]
            }
        }
    }
}
