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
    shopcar:[],          //购物车数据
    logname:'',
    userList:[]
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
    //存储注册信息
    saveUser(state,data){
      state.userList.push(data)
    },
    //登录成功后缓存用户名
    logname(state,data){
      state.logname = data
    },
    //退出登录后删除用户名缓存
    nolog(state){
      state.logname = ''
    },
    //添加购物车信息
    addShop(state,data){
      state.shopcar.push(JSON.parse(JSON.stringify(data)))
    },
    //移除购物车信息
    removeShop(state,data){
      state.shopcar.splice(data,1)
    }
  }
})
