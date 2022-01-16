import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//属性
    token: '',
    userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
  },
  mutations: {
    //set
    SET_TOKEN: (state, token) =>{
      state.token = token
      localStorage.setItem("token",token)//存在浏览器里
    },
    SET_USERINFO: (state, userInfo) =>{
      state.userInfo = userInfo
      sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
    },
    REMOVE_INFO: (state) =>{
      state.token = ''
      state.userInfo = {}
      localStorage.setItem("token",'')//存在浏览器里
      sessionStorage.setItem("userInfo",JSON.stringify(''))
    },
  },
  getters: {
    //get
    getUser: state => {
      return state.userInfo
    }

  },
  actions: {
  },
  modules: {
  }
})
