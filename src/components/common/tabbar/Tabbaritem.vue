<template>
    <router-link class="tabbaritem" :to="path" tag="div" :style="changecolor">
        <slot name="icon"></slot>
        <slot name="title"></slot>
    </router-link>
</template>
<script>
export default {
    props: {
        path:String,
        fontcolor:{
            type:String,
            default:'red'
        }
    },
    computed: {
        //给不同路由添加对应颜色
        changecolor(){
            return !this.$route.path.indexOf(this.path)?{color:this.fontcolor}:{}
        }
    }
}
</script>
<style lang="less">
    .tabbaritem{
        flex: 1;
        text-align: center;
        box-sizing: border-box;
        padding: 2px;
        i{
            font-size: 28px;
        }
    }
</style>