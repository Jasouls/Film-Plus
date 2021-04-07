<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.tabbar{
    display: flex;
    position: fixed;
    width: 100vw;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    font-size: 14px;
    background-color: black;
    color: white;
    box-shadow: 0 -1px 4px gray;
    z-index: 20;
}
</style>