import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow:true,
    nowlist:[],
    nowcurrent:1,
    comelist:[],
    comecurrent:1,
    cityId:110100,
    cinemaId:0
  },
  mutations: {
    changeTab(state,data){
      state.isTabbarShow = data
    },
    changeCity(state,id){
      state.cityId = id
    },
    setCinemaId(state,cinemaId){
      state.cinemaId = cinemaId
    },
    nowadd(state){
      state.nowcurrent++
    },
    comeadd(state){
      state.comecurrent++
    },
    pushnow(state,data){
      state.nowlist.push(...data)
    },
    pushcome(state,data){
      state.comelist.push(...data)
    }
  },
  actions: {

  }
})
