<template>
    <ul class="comingsoon" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
        <li class="comingfilm" v-for="data in $store.state.comelist" :key="data.filmId" @click="toDetail(data.filmId)">
            <img :src="data.poster" alt="">
            <div class="main">
                <p class="name">{{data.name}} <span>{{data.item.name}}</span></p>
                <p class="actor">主演: {{data.actors | actorfilter}}</p>
                <p class="other">{{data.nation}} | {{data.runtime}}分钟</p>
                <p class="date">上映日期: {{data.premiereAt | datefilter}}</p>
            </div>
            <div class="ticket">预购</div>
        </li>
        <li v-show="iShow" class="loading">正在加载中...</li>
    </ul>
</template>
<script>
import {request2} from '@/network/request'
import { Indicator } from 'mint-ui'
import Vue from 'vue'
//过滤演员信息，转化为字符串返回
Vue.filter('actorfilter',data => {
    const newArr = data.map(item => item.name)
    return newArr.join(" ")
})
//过滤日期，将时间戳转换为特定格式
Vue.filter('datefilter',data => {
    let week = new Date(parseInt(data) * 1000).getDay()
    let arr = ['日','一','二','三','四','五','六']
    week = arr[week]
    let month = new Date(parseInt(data) * 1000).getMonth() + 1
    let day = new Date(parseInt(data) * 1000).getDate()
    return `周${week} ${month}月${day}日`
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
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        })
        //判断vuex中是否有缓存数据，没有则请求，有则使用缓存
         if(this.$store.state.comelist.length === 0){
            this.loadMore()
        }else{
            setTimeout(() => {
                Indicator.close()
            },0)
        }
    },
    beforeDestroy () {
        Indicator.close()
    },
    methods: {
        toDetail(filmId){
            this.$router.push(`/detail/${filmId}`)
        },
        loadMore(){
            this.iShow = this.$store.state.comelist.length < 10 ? false : true
            this.loading = true
            request2({
                url:`/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.$store.state.comecurrent}&pageSize=10&type=2&k=886439`
            }).then(res => {
                this.total = res.total
                //通过vuex缓存请求到的数据
                this.$store.commit("pushcome",res.films)
                this.$store.commit("comeadd")
                this.$nextTick(() => {
                    Indicator.close()
                })
                if(this.total === this.$store.state.comelist.length){
                    this.iShow = false
                    return;
                }else{
                    setTimeout(() => {
                        this.loading = false
                    },1000)
                }
            })
            
        }
    }
}
</script>
<style lang="less" scoped>
    .comingsoon{
        font-size: 14px;
        color: #797d82;
        padding-bottom: 49px;
        .comingfilm{
            display: flex;
            padding: 4vw;
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