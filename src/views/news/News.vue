<template>
    <div class="new">
        <Topbar>
            <div slot="left" @click="download">App</div>
            <div slot="center">影视快讯</div>
            <div slot="right">
                <i class="iconfont icon-search"></i>
            </div>
        </Topbar>
        <div class="bscroll" ref="getscroll">
            <ul class="news" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
                <li class="area" v-for="data in newlist" :key="data.contentId"  @click='openApp'>
                   <img :src="data.images[0].url" alt="">
                   <div>
                       <p>{{data.title}}</p>
                        <span>下载app查看</span>
                   </div>
                </li>
                <li v-show="isShow" class="loading">正在加载中...</li>
            </ul>
        </div>
        
    </div>
</template>
<script>
import {request5} from '@/network/request'
import Topbar from '@/components/common/topbar/Topbar'
import { MessageBox,Indicator } from 'mint-ui'
export default {
    data () {
        return {
            newlist:[],
            initpage:0,
            isShow:false,
            loading:false    
        }
    },
    mounted () {
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        })
        this.$refs.getscroll.style.height = document.documentElement.clientHeight - 44 - 49 + 'px'
        this.loadMore()
    },
    components: {
        Topbar
    },
    methods: {
        loadMore(){
            this.loading = true
            this.isShow = this.newlist.length < 1?false:true
            setTimeout(() => {
                this.loading = false
            },1000)
            request5({url:`/sns/group/1481351/contents.json?_v_=yes&offset=${this.initpage}&timestamp=1616494619221`}).then(res => {
                this.newlist = [...this.newlist,...res.data.data]
                this.initpage += 10
                this.$nextTick(() => {
                    Indicator.close()
                })
            })
        },
        download(){
            MessageBox({
                title: '提示',
                message: '是否下载APP',
                showCancelButton: true
            })
        },
        openApp(){
            MessageBox('提示', '详情信息请前往APP查看')
        }
    },
    beforeDestroy () {
        Indicator.close()
    }
}
</script>
<style lang="less" scoped>
.bscroll{
    margin-top: 44px;
    position: relative;
    .news{    
        .area{
            border-bottom: 1px solid lightgray;
            box-sizing: border-box;
            padding: 12px;
            display: flex;
            justify-content: space-between;
            img{
                width: 113px;
                height: 86px;
            }
            div{
                width: 60vw;
                position: relative;
                p{
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 22px;
                }
                span{
                    font-size: 12px;
                    color: orange;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
            }
        }
        .loading{
            text-align: center;
            line-height: 60px;
            font-size: 18px;
        }
        &::after{
            content: '';
            display: block;
            height: 49px;
        }
    }
}
i{
    font-size: 24px;
}
</style>