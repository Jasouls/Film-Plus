import Vue from 'vue'
import Router from 'vue-router'

//一级路由
const Home = () => import('@/views/home/Home')
const Cinema = () => import('@/views/cinema/Cinema')
const Cinemapage = () => import('@/views/cinema/Cinemapage')
const Search = () => import('@/views/cinema/Search')
const News = () => import('@/views/news/News')
const User = () => import('@/views/user/User')
const Login = () => import('@/views/user/Login')
const Register = () => import('@/views/user/Register')
const Regsu = () => import('@/views/user/Regsu')
const Detail = () => import('@/views/detail/Detail')
const City = () => import('@/views/city/City')

//二级路由
const Nowplaying = () => import('@/views/home/childs/Nowplaying')
const Comingsoon = () => import('@/views/home/childs/Comingsoon')
Vue.use(Router)
const routes = [
  {
    path:'*',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta: {
      title:"首页"
    },
    children:[
      {
        path:'',
        redirect:'nowplaying'
      },
      {
        path:'nowplaying',
        component:Nowplaying
      },
      {
        path:'comingsoon',
        component:Comingsoon
      }
    ]
  },
  {
    path:'/cinema',
    component:Cinema,
    meta: {
      title:"影院"
    }
  },
  {
    path:'/cinemapage',
    component:Cinemapage,
    meta: {
      title:"影院详情"
    }
  },
  {
    path:'/search',
    component:Search,
    meta: {
      title:"搜索"
    }
  },
  {
    path:'/news',
    component:News,
    meta: {
      title:"快讯"
    }
  },
  {
    path:'/user',
    component:User,
    meta: {
      title:"我的"
    }
  },
  {
    path:'/login',
    component:Login,
    meta: {
      title:"登录"
    }
  },
  {
    path:'/register',
    component:Register,
    meta: {
      title:"注册"
    }
  },
  {
    path:'/regsu',
    component:Regsu,
    meta: {
      title:"注册成功"
    }
  },
  {
    path:'/detail/:filmId',
    component:Detail,
    props: true,
    meta: { 
      title:"详情"
    }
  },
  {
    path:'/city',
    component:City,
    meta: {
      title:"城市"
    }
  }
]
const router = new Router({
  routes,
  mode:'history',
  linkActiveClass:'active'
})
//前置路由守卫，将页面标题修改为对应内容
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
export default router
