<template>
    <div>
        
        <el-container>
           <el-aside width="auto">
                <common-aside />
           </el-aside>
           <el-container>
              <el-header>
                <common-header />
              </el-header>
              <el-main>
                <!-- 路由出口和匹配的组件将渲染在这里 -->
                <router-view></router-view>
              </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue';
import CommonHeader from '../components/CommonHeader.vue';

export default {
    components: {
            CommonAside,
            CommonHeader
        },
    data(){
        return{
          
        }  
           
    }
}
</script>

<style lang="less" scoped>
.el-header{
    padding:0
}
</style>
