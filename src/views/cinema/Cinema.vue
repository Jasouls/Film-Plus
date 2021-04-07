<template>
    <div class="cinema">
        <Topbar>
            <div slot="left" ref="getcity" @click="toChangeCity"></div>
            <div slot="center">影院</div>
            <div slot="right">
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
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        })
        this.$refs.getscroll.style.height = document.documentElement.clientHeight - 44 - 49 + 'px'
        request4({
            url:`/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=1588012`
        }).then(res => {
            this.cinemalist = res.data.data.cinemas
            this.$nextTick(() => {
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
        toChangeCity(){
            this.$router.push('/city')
        },
        cinemaView(cinemaId){
            this.$store.commit('setCinemaId',cinemaId)
            this.$router.push('/cinemapage')
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
    .cinemas{
        margin-top: 44px;
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