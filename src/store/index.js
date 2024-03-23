import Vue from 'vue';
import Vuex from 'vuex';
import tab from './tab';

Vue.use(Vuex);


//创建 vuex 的示例
export default new Vuex.Store({
    modules: {
        tab
    }
});
