<template>
    <div>
        <Topbar v-show="isFixed">
            <div slot="center">电影</div>
        </Topbar>
        <Swiper ref="gethigh"></Swiper>
        <Headerbar :class="isFixed?'fixed':''"></Headerbar>
        <router-view></router-view>
    </div>
</template>
<script>
import Swiper from '@/components/common/swiper/Swiper'
import Headerbar from '@/components/base/headerbar/Headerbar'
import Topbar from '@/components/common/topbar/Topbar'
export default {
    data () {
        return {
            isFixed:false      
        }
    },
    components: {
        Swiper,
        Headerbar,
        Topbar
    },
    mounted () {
        window.onscroll = this.scrollHigh
    },
    beforeDestroy () {
        window.onscroll = null
    },
    methods: {
        scrollHigh(){
            if(document.documentElement.scrollTop >= this.$refs.gethigh.$el.offsetHeight){
                this.isFixed = true
            }else{
                this.isFixed = false
            }
        }
    }
}
</script>