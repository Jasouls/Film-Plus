<template>
    <ul class="nowplaying"  v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
        <li class="nowfilms" v-for="data in $store.state.nowlist" :key="data.filmId" @click="toDetail(data.filmId)">
            <img :src="data.poster" alt="">
            <div class="main">
                <p class="name">{{data.name}} <span>{{data.item.name}}</span></p>
                <p class="grade">观众评分: <span>{{data.grade}}</span></p>
                <p class="actor">主演: {{data.actors | actorfilter}}</p>
                <p class="other">{{data.nation}} | {{data.runtime}}分钟</p>
            </div>
            <div class="ticket">购票</div>
        </li>
        <li v-show="iShow" class="loading">正在加载中...</li>
    </ul>
</template>
<script>
import {request1} from '@/network/request'
import { Indicator } from 'mint-ui'
import Vue from 'vue'
Vue.filter('actorfilter',data => {
    const newArr = data.map(item => item.name)
    return newArr.join(" ")
})
export default {
    data () {
        return {
            loading:false,
            iShow:false,
            total:0     
        }
    },
    mounted () {
        //预加载显示
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        })
        //判断vuex中是否有缓存数据，没有则请求，有则使用缓存
        if(this.$store.state.nowlist.length === 0){
            this.loadMore()
        }else{
            setTimeout(() => {
                Indicator.close()
            },0)
        }
    },
    methods: {
        toDetail(filmId){
            this.$router.push(`/detail/${filmId}`)
        },
        loadMore(){
            this.iShow = this.$store.state.nowlist.length < 1?false:true
            this.loading = true
            request1({
                url:`/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.$store.state.nowcurrent}&pageSize=10&type=1&k=9026056`
            }).then(res => {
                //将电影的总数记录到total中
                this.total = res.data.data.total
                //通过vuex缓存请求到的数据
                this.$store.commit("pushnow",res.data.data.films)
                this.$store.commit("nowadd")
                this.$nextTick(() => {
                    Indicator.close()
                })
                //判断加载电影信息是否到达上限，到上限则取消上拉加载容器
                if(this.total === this.$store.state.nowlist.length){
                    this.iShow = false
                    return;
                }else{
                    setTimeout(() => {
                        this.loading = false
                    },1000)
                }
            })
            
        }
    },
    beforeDestroy () {
        Indicator.close()
    }
}
</script>
<style lang="less" scoped>
    .nowplaying{
        font-size: 14px;
        color: #797d82;
        padding-bottom: 49px;
        width: 100vw;
        .nowfilms{
            box-sizing: border-box;
            display: flex;
            padding: 15px;
            border-bottom: 1px solid lightgray;
            position: relative;
            img{
                width: 76px;
                height: 110px;
                margin-right: 10px;
            }
            .main{
                line-height: 22px;
                width: 60vw;
                margin-top: 6px;
                .name{
                    color: black;
                    font-size: 16px;
                    span{
                        background-color: lightgray;
                        color: white;
                        font-size: 12px;
                        border-radius: 4px;
                    }
                }
                .grade{
                    span{
                        color: orange;
                    }
                }
                .actor{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
            .ticket{
                border:1px solid orange;
                color: orange;
                padding: 4px;
                border-radius: 4px;
                position: absolute;
                right: 16px;
                top: 50%;
                transform: translateY(-50%);

            }
        }
        .loading{
            text-align: center;
            font-size: 18px;
            color: black;
            line-height: 48px;
        }
    }
</style>