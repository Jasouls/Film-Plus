<template>
    <div class="cinema">
        <Topbar>
            <div slot="left" ref="getcity" @click="toChangeCity"></div>
            <div slot="center">影院</div>
            <div slot="right" @click="toSearch">
                <i class="iconfont icon-search"></i>
            </div>
        </Topbar>
        <div class="bscroll" ref="getscroll">
            <ul class="cinemas">
                <li v-for="data in cinemalist" :key="data.cinemaId" @click="cinemaView(data.cinemaId)">
                    <div class="shop">
                        <h3>{{data.name}}</h3>
                        <p>{{data.address}}</p>
                    </div>
                    <div class="other">
                        <p class="price">￥{{data.lowPrice/100}}起</p>
                        <p>距离未知</p>
                    </div>
                    
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>
import {request4} from '@/network/request'
import Topbar from '@/components/common/topbar/Topbar'
import { Indicator } from 'mint-ui'
import {betters} from '@/components/common/bscroll/bscroll'
export default {
    data () {
        return {
            cinemalist:[] 
        }
    },
    mounted () {
        //预加载
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        })
        //设置主题部分高度
        this.$refs.getscroll.style.height = document.documentElement.clientHeight - 44 - 49 + 'px'
        //请求影院数据
        request4({
            url:`/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=1588012`
        }).then(res => {
            this.cinemalist = res.data.data.cinemas
            this.$store.commit("saveCinema",this.cinemalist)
            this.$nextTick(() => {
                //应用better-scroll
                betters(".bscroll")
                Indicator.close()
                this.$refs.getcity.innerHTML = this.cinemalist[0].cityName
            })
        })
    },
    components: {
        Topbar
    },
    methods: {
        //跳转city页面
        toChangeCity(){
            this.$router.push('/city')
        },
        //跳转到影院详情页面
        cinemaView(cinemaId){
            this.$store.commit('setCinemaId',cinemaId)
            this.$router.push('/cinemapage')
        },
        toSearch(){
            this.$router.push("/search")
        }
    },
    beforeDestroy () {
        Indicator.close()
    }
}
</script>
<style lang="less" scoped>
.bscroll{
    position: relative;
    margin-top: 44px;
    overflow: hidden;
    .cinemas{
        // margin-top: 44px;
        li{
            height: 80px;
            border-bottom: 1px solid lightgray;
            box-sizing: border-box;
            padding: 12px;
            display: flex;
            justify-content: space-between;
            .shop{ 
                h3{
                    font-size: 16px;
                    line-height: 30px;
                    width: 60vw;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                p{
                    font-size: 14px;
                    color: #8f91b6;
                    line-height: 24px;
                    width: 64vw;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                } 
            }
            .other{
                p{
                    text-align: center;
                    font-size: 14px;
                    color: #8f91b6;
                    line-height: 26px;
                    &.price{
                        color: orange;
                        line-height: 30px;
                        font-size: 16px;
                    }
                }
            }
        }
    }
}
i{
    font-size: 24px;
}
</style>