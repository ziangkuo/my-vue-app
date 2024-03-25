<template>

    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <div class="header" :class="{ 'is-collapsed': isCollapse }">
            <img src="../assets/user.png" alt="" class="logo" v-show="!isCollapse">
            <span class="title" v-show="!isCollapse">{{ isCollapse ? '' : 'SUBTITLE' }}</span>
            <el-button class="menu-button" @click="handleMenu"
                :icon="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'" size="mini"></el-button>
        </div>
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
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
    border-right: none;

    h3 {
        color: antiquewhite;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;
    }
}

.header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center; /* 默认居中，主要影响标题 */
    height: 60px;

    &.is-collapsed {
        justify-content: flex-start; /* 折叠时标题和按钮靠左 */
        .title, .logo {
            display: none; /* 折叠时不显示标题 */
        }
        .menu-button {
            position: absolute; /* 使用绝对定位来精确控制按钮位置 */
            top: 50%; /* 垂直方向的中点 */
            left: 50%; /* 水平方向的中点 */
            transform: translate(-50%, -50%); /* 确保按钮完全居中 */
            font-size: 0.8em;
        }
    }

    &:not(.is-collapsed) {
        .menu-button {
            position: absolute;
            top: 50%;
            right: 10px; /* 展开时按钮在右边 */
            transform: translateY(-50%);
        }
    }
    .logo {
        width : 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 10px
    }

    .title {
        flex-grow: 1;
        margin-left: 10px; /* 标题始终居中 */
    }

    .menu-button {
        font-size: 0.8em;
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
        },
        handleMenu() {
            this.$store.commit('collapseMenu')
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