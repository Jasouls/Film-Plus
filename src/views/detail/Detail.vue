<template>
    <div class="detail" v-if="datalist">
        <Topbar v-show="isShow">
            <div slot="center">{{datalist.name}}</div>
        </Topbar>
        <img :src="datalist.poster" alt="">
        <div class="main">
            <h3 class="title">
                {{datalist.name}}
                <span class="view">{{datalist.item.name}}</span>
                <span class="point">{{datalist.grade}}分</span>
            </h3>
            <p class="type">{{datalist.category}}</p>
            <p class="date">{{datalist.premiereAt | datefilter}} 上映</p>
            <p class="native">{{datalist.nation}} | {{datalist.runtime}}分钟</p>
            <p class="info">{{datalist.synopsis}}</p>
        </div>
        <!-- 返回按钮 -->
        <div class="back" @click="backone">
            <span>&lt;</span>
        </div>
        <!-- 演职人员 -->
        <div class="actors">
            <h3>演职人员</h3>
            <ul class="actorlist">
                <li v-for="data in datalist.actors" :key="data.role">
                    <img :src="data.avatarAddress" alt="">
                    <p>{{data.name}}</p>
                    <p>{{data.role}}</p>
                </li>
            </ul>
        </div>
        <!-- 剧照 -->
        <div class="photos">
            <h3>
                <span>剧照</span>
                <span class="num">全部({{datalist.photos.length}}) &gt;</span>
            </h3>
            <ul class="photolist">
                <li v-for="(data,index) in datalist.photos" :key="index">
                    <img :src="data" alt="">
                </li>
            </ul>
        </div>
        <Bottombar v-show="!$store.state.isTabbarShow" @click.native="isLogin">
            <div>选座购票</div>
        </Bottombar>
    </div>
</template>
<script>
import {request3} from '@/network/request'
import { MessageBox } from 'mint-ui'
import Topbar from '@/components/common/topbar/Topbar'
import Bottombar from '@/components/base/bottombar/Bottombar'
import Vue from 'vue'
//过滤日期，将时间戳转换为年月日格式
Vue.filter('datefilter',data => {
    let year = new Date(parseInt(data) * 1000).getFullYear()
    let month = new Date(parseInt(data) * 1000).getMonth() + 1
    let date = new Date(parseInt(data) * 1000).getDate()
    return `${year}-${month}-${date}`
})
export default {
    data () {
        return {
            filmId:0,
            datalist:null,
            isShow:false
        }
    },
    components: {
        Topbar,
        Bottombar
    },
    mounted () {
        //监听页面滚动
        window.onscroll = this.scrollTop
        this.filmId = this.$route.params.filmId;
        request3({
            url:`/gateway?filmId=${this.filmId}&k=2631414`
        }).then(res => {
            this.datalist = res.data.data.film
        })
    },
    methods: {
        //通过滚动高度设置topbar组件的显示与隐藏
        scrollTop(){
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop >= 44){
                this.isShow = true
            }else{
                this.isShow = false
            }
        },
        backone(){
            history.back()
        },
        isLogin(){
            //提示信息
            MessageBox({
                title: '提示',
                message: '请登录后购买',
                showCancelButton: true
            })
        }
    },
    beforeCreate () {
        this.$store.commit("changeTab",false) 
    },
    destroyed () {
        this.$store.commit("changeTab",true) 
    },
    beforeDestroy () {
        //页面销毁之前取消滚动监听
        window.onscroll = null
    }
}
</script>
<style lang="less" scoped>
.detail{
    position: relative;
    padding-bottom: 49px;
    background-color: #f4f4f4;
    img{
        width: 100vw;
    }
    .main{
        box-sizing: border-box;
        padding: 18px;
        line-height:24px ;
        font-size: 14px;
        background-color: white;
        color: #a47da2;
        h3{
            font-size: 20px;
            color: black;
            line-height: 30px;
            .view{
                font-size: 14px;
                background-color: lightgray;
                border-radius: 2px;
            }
            .point{
                float: right;
                color: orange;
            }
        }
        .info{
            line-height: 20px;
            margin-top: 6px;
        }
    }
    .back{
        width:20vw;
        height: 44px;
        line-height: 34px;
        text-align: center;
        color: white;
        position: fixed;
        top: 5px;
        left: 0;
        font-size: 24px;
        z-index: 10;
        span{
            border-radius: 50%;
            background-color: rgba(0,0,0,0.6);
            display: inline-block;
            padding:0 9px
        }
    }
    .actors{
        background-color: white;
        margin-top: 10px;
        box-sizing: border-box;
        padding: 18px;
        h3{
            font-size: 18px;
            line-height: 20px;
            margin-bottom: 10px;
        }
        .actorlist{
            display: flex;
            overflow: auto;
            li{
                flex: none;
                width: 20vw;
                font-size: 12px;
                margin-right: 10px;
                img{
                    width: 100%;
                }
                p{
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
    .photos{
        background-color: white;
        margin-top: 10px;
        box-sizing: border-box;
        padding: 18px;
        h3{
            font-size: 18px;
            line-height: 20px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            .num{
                font-size: 14px;
                color: gray;
            }
        }
        .photolist{
            display: flex;
            overflow: auto;
            li{
                flex: none;
                width: 40vw;
                font-size: 12px;
                margin-right: 10px;
                img{
                    width: 100%;
                }
            }
        }
    }
}
</style>