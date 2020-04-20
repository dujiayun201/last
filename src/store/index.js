import Vue from 'vue'
import Vuex from 'vuex'

//vuex 注册给vue
Vue.use(Vuex);

//数据中心
let state = {
        list: [],
    }
    //actions 异步操作（定时器，ajax）
let actions = {}
    //mutations 同步修改state中的数据
let mutations = {}
    // getters  可以对state中的数据进行计算。（相当于组件中的computed）
let getters = {}

//实例化 仓库
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});