<template>
    <div class="swiper" @touchstart="stop" @touchend="autoplay">
        <ul class="swiperlist clearfix" :style='changestyle'>
            <li>
                <img :src="imglist[imglist.length - 1].img" alt="">
            </li>
            <li v-for="data in imglist" :key="data.id">
                <img :src="data.img" alt="">
            </li>
            <li>
                <img :src="imglist[0].img" alt="">
            </li>
        </ul>
        <a href="javascript:;" class="prev" @click="move(100,1)">&lt;</a>
        <a href="javascript:;" class="next" @click="move(100,-1)">&gt;</a>
        <ul class="navline">
            <li v-for="(data,index) in imglist" :key="index" :class="{active:index === (current - 1)}" @click="linemove(index + 1)"></li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            imglist:[
                {
                    id:1,
                    img:require('@/assets/images/swiper/1.jpg')
                },
                {
                    id:2,
                    img:require('@/assets/images/swiper/2.jpg')
                },
                {
                    id:3,
                    img:require('@/assets/images/swiper/3.jpg')
                },
                {
                    id:4,
                    img:require('@/assets/images/swiper/4.jpg')
                },
                {
                    id:5,
                    img:require('@/assets/images/swiper/5.jpg')
                },
                {
                    id:6,
                    img:require('@/assets/images/swiper/6.jpg')
                },
            ],
            current:1,
            startx:-100,
            oneoffset:100,
            isRun:false,
            speed:1
        }
    },
    mounted () {
        this.init()  
    },
    computed: {
        changestyle(){
            return {
                width:`${(this.imglist.length + 2) * 100}vw`,
                transform:`translate3d(${this.startx}vw,0,0)`
            }
        }
    },
    methods: {
        move(offset,next){
            //节流阀
            if(this.isRun){
                return
            }
            this.isRun = true
            next === -1?this.current += (offset / this.oneoffset):this.current -= (offset / this.oneoffset)
            if(this.current < 1){
                this.current = this.imglist.length
            }else if(this.current > this.imglist.length){
                this.current = 1
            }

            const target = this.startx + offset * next
            this.animate(target,next)
        },
        animate(target,next){
            window.timer = setInterval(() => {
                if((next === -1 && this.startx > target) || (next === 1 && this.startx < target)){
                    this.startx += 1 * next * this.speed
                }else{
                    clearInterval(timer)
                    this.startx = target
                    this.isRun = false
                    this.speed = 1
                    if(this.startx === 0){
                        this.startx = -this.imglist.length * this.oneoffset
                    }
                    if(this.startx === -(this.imglist.length + 1) * this.oneoffset){
                        this.startx = -this.oneoffset
                    } 
                }
            }, 1);
        },
        linemove(index){
            let next = 0
            if(index - this.current === 0){
                return
            }else if(index - this.current > 0){
                next = -1
            }else{
                next = 1
            }
            const offset = Math.abs(index - this.current) * this.oneoffset
            this.speed = Math.abs(index - this.current)
            this.move(offset,next)
        },
        autoplay(){
            clearInterval(window.play)
            window.play = setInterval(() => {
                this.move(this.oneoffset,-1)
            }, 3000);
        },
        stop(){
            clearInterval(window.play)
        },
        init(){
            this.autoplay()
        }
    }
}
</script>
<style lang="less" scoped>
.swiper{
    width: 100vw;
    position: relative;
    overflow: hidden;
    .swiperlist{
        li{
            float: left;
            img{
                width: 100vw;
                vertical-align: top;
            }
        }
    }
    &>a{
        text-decoration: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color:rgba(255,255,255,0.6);
        color: black;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        line-height: 26px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        &.next{
            right: 0;
        }
    }
    .navline{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 10px;
        li{
            width: 10px;
            height: 10px;
            background-color: rgba(255,255,255,0.2);
            float: left;
            border: 2px solid white;
            border-radius: 50%;
            margin: 0 8px;
            &.active{
                background-color: orangered;
            }
        }
    }
}
.clearfix::after,
.clearfix::before
{
    content: "";
    display: table;
    clear: both;
}
</style>