<template>

    <el-menu default-active="1-4-1"
             class="el-menu-vertical-demo" 
             @open="handleOpen" 
             @close="handleClose"
             :collapse="isCollapse"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
    <h3>
        {{isCollapse? 'TITLE': 'SUBTITLE SYSTEM'}}
    </h3>
        <el-menu-item @click="clickMenu(item)"
          v-for="item in noChildren" :key="item.name" :index="item.name">
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>

        <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
            <template slot="title">
                <i :class="'el-icon-' + item.icon"></i>
                <span slot="title">{{ item.label }}</span>

            </template>
            <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
                <el-menu-item @click="clickMenu(subItem)" index="subItem.path">{{ subItem.label }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>


</template>


<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.el-menu {
    height: 100vh;
    h3 {
        color:antiquewhite;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;
    }
}
</style>

<script>
export default {
    data() {
        return {
            menuData: [
                {
                    path: "/home",
                    name: "Home",
                    label: "首页",
                    icon: "s-home",
                    url: "Home/home"
                },
                {
                    path: "/video",
                    name: "Video",
                    label: "视频",
                    icon: "info",
                    url: "Home/video"
                },
                {
                    path: "/voice",
                    name: "Voice",
                    label: "音频",
                    icon: "location",
                    url: "Home/voice"
                },
                {
                    label: "设置",
                    icon: "setting",
                    children: [
                        {
                            path: "/page1",
                            name: "Page1",
                            label: "页面1",
                            icon: "location",
                            url: "Setting/pageOne",
                        },
                        {
                            path: "/page2",
                            name: "Page2",
                            label: "页面2",
                            icon: "location",
                            url: "Setting/pageTwo",
                        }

                    ]
                }

            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        clickMenu(item) {
            console.log(item);
            //当页面路由和菜单路由一致时，不跳转
            if (this.$route.path !== item.path) {
                this.$router.push(item.path);
            };
        }
    },
    computed: {
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },
        hasChildren() {
            return this.menuData.filter(item => item.children)
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu{
    border-right: none;
}
</style>