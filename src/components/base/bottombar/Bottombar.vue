<template>
    <div class="bottombar">
        <div class="center">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.bottombar{
    display: flex;
    height: 49px;
    line-height: 49px;
    background-color:  black;
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    .center{
        flex: 1;
        text-align: center;
    }
}
</style>