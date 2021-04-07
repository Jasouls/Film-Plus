<template>
    <div class="topbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .topbar{
        position: fixed;
        z-index: 9;
        top: 0;
        left: 0;
        right: 0;
        height: 44px;
        line-height: 44px;
        width: 100vw;
        background-color: black;
        color: white;
        display: flex;
        text-align: center;
        .left{
            width: 20vw;
        }
        .right{
            width: 20vw;
        }
        .center{
            flex: 1;
        }
    }
</style>