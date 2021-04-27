import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow:true,   //控制tabbar的显示与隐藏
    nowlist:[],          //正在热映电影数据
    nowcurrent:1,        //正在热映所处页面
    comelist:[],         //即将上映电影数据
    comecurrent:1,       //即将上映所处页面
    cityId:110100,       //当前城市id
    cinemaId:0,          //当前影院id
    cinemadata:[],       //影院数据
    logname:''
  },
  mutations: {
    //改变tabbar状态
    changeTab(state,data){
      state.isTabbarShow = data
    },
    //更改城市id
    changeCity(state,id){
      state.cityId = id
    },
    //更改影院id
    setCinemaId(state,cinemaId){
      state.cinemaId = cinemaId
    },
    //加载下一页面
    nowadd(state){
      state.nowcurrent++
    },
    comeadd(state){
      state.comecurrent++
    },
    //缓存电影数据
    pushnow(state,data){
      state.nowlist.push(...data)
    },
    pushcome(state,data){
      state.comelist.push(...data)
    },
    saveCinema(state,data){
      state.cinemadata = data
    },
    logname(state,data){
      state.logname = data
    },
    nolog(state){
      state.logname = ''
    }
  }
})
