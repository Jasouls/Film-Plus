<template>
    <div class="page">
        <Topbar>
            <div slot="left" class="back" @click="backone">&lt;</div>
            <div slot="center">影院信息</div>
        </Topbar>
        <div class="main" v-if="cinemaobj">
            <div class="shop">
                <p class="shopname">{{cinemaobj.name}}</p>
                <p class="special"><span v-for="(data,index) in services" :key="index">{{data.name}}</span></p>
                <p class="time"> 营业时间: {{cinemaobj.businessTime}}</p>
                <p class="address">地址: {{cinemaobj.address}}</p>
            </div>
            <div class="films">
                <ul class="photo">
                    <li v-for="data in photolist" :key="data.filmId">
                        <img :src="data.poster" alt="">
                    </li>
                </ul>
                <div class="filmtype">
                    <div v-for="data in photolist" :key="data.filmId" ref="id" class="typelist">
                        <h3>{{data.name}}</h3>
                        <p>演员: {{data.actors | actorfilter}}</p>
                        <p>类型: {{data.category}}</p>
                        <p>评分: <span>{{data.filmType.name}}</span> | <span>{{data.grade}}分</span></p>
                        <p>{{data.nation}} | {{data.runtime}}分钟</p>
                        <div class="datetime">
                            <span>排期：</span>
                            <span class="date" v-for="(item,index) in data.showDate" :key="index">{{item | datefilter}}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import Topbar from "@/components/common/topbar/Topbar"
import {request41,request42} from "@/network/request"
import Vue from 'vue'
//将时间戳转化为日期
Vue.filter("datefilter",item => {
    const data = new Date(parseInt(item) * 1000)
    const month = data.getMonth() + 1
    const day = data.getDate()
    return `${month}月${day}日`
})
//过滤演员
Vue.filter("actorfilter",item => {
    const arr = item.map(data => data.name)
    return arr.join(" ")
})
export default {
    data(){
        return {
            cinemaobj:null,
            services:[],
            photolist:[]
        }
    },
    components: {
        Topbar
    },
    mounted () {
        //隐藏tabbar
        this.$store.commit("changeTab",false)
        //请求影院信息
        request41({
            url:`/gateway/?cinemaId=${this.$store.state.cinemaId}&k=5338318`
        }).then(res => {
            this.cinemaobj = res.data.data.cinema
            this.services = res.data.data.cinema.services
        })
        //请求相关电影信息
        request42({
            url:`/gateway/?cinemaId=${this.$store.state.cinemaId}&k=2365896`
        }).then(res => {
            this.photolist = res.data.data.films
        })
    },
    methods: {
        backone(){
            this.$router.push('/cinema')
        }
    },
    beforeDestroy () {
        this.$store.commit("changeTab",true)
    }
}
</script>
<style lang="less" scoped>
.page{
    width: 100vw;
    .back{
        font-size: 24px;
    }
    .main{
        margin-top: 44px;
        .shop{
            text-align: center;
            .shopname{
                font-size: 18px;
                line-height: 60px;
            }
            .special{
                span{
                    font-size: 12px;
                    border: 1px solid orange;
                    color: orange;
                    margin:0 2px;
                }
            }
            .time{
                line-height: 40px;
                color: dimgray;
            }
            .address{
                height: 50px;
                line-height: 50px;
                font-size: 14px;
                border-top: 1px solid lightgray;
                box-sizing: border-box;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100vw;
            }
        }
        .films{
            width: 100vw;
            .photo{
                display: flex;
                overflow: auto;
                li{
                    margin: 0 5px;
                    img{
                        width: 92px;
                        height: 130px;
                    }
                }
            }
            .filmtype{
                margin-top: 10px;
                padding: 10px;
                .typelist{
                    line-height: 24px;
                    font-size: 14px;
                    border-top: 1px solid lightgray;
                    margin-bottom: 20px;
                    h3{
                        font-size: 18px;
                        line-height: 40px;
                        font-weight: bold;
                        text-align: center;
                    }
                    .datetime{
                        .date{
                            margin: 0 5px;
                            border: 1px solid blueviolet;
                            color: blueviolet;
                        }
                    }
                }
            }
        }
    }
}
</style>