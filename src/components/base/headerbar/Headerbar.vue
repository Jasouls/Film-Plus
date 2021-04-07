<template>
    <div class="header">
        <router-link to="/home/nowplaying" tag="div" class="headeritem">
        <span>正在热映</span>
        </router-link>
        <router-link to="/home/comingsoon" tag="div" class="headeritem">
        <span>即将上映</span>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.header{
    width: 100vw;
    display: flex;
    height: 40px;
    line-height: 40px;
    background-color: black;
    box-shadow:0 1px 4px gray;
    color: white;
    .headeritem{
        flex: 1;
        text-align: center;
        &.active{
            color: yellow;
            span{
                border-bottom: 2px solid yellow;
                padding-bottom: 8px;
            }
        }
    }
}
.fixed{
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 9;
}
</style>