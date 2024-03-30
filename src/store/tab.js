export default{
    state:{
        isCollapse:false,//控制菜单的展开和收起
        isSignedIn: false,
        userData: null,
    },
    mutations:{
        //修改菜单的展开和收起的方法
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        setSignedIn(state, isSignedIn){
            state.isSignedIn = isSignedIn
        },
        clearUserData(state) {
            state.isSignedIn = false; // Reset isSignedIn to false
            state.userData = null; // Reset userData to null
        }
    }
}