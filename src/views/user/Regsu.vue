<template>
    <div class="regsu">
        <Topbar>
            <template v-slot:left>
                <div @click="toLogin">登录</div>
            </template>
            <template v-slot:center>
                <div>注册成功</div>
            </template>
            
            
        </Topbar>
        <h2>
            <p class="ti">恭喜您：</p>
            <p class="mes">注册成功!请前往登录...</p>
        </h2>
    </div>
</template>
<script>
import Topbar from '@/components/common/topbar/Topbar'
export default {
    components: {
        Topbar
    },
    methods: {
        toLogin(){
            this.$router.push('/login')
        }
    },
    mounted () {
        this.$store.commit('changeTab',false)
    },
    beforeDestroy () {
        this.$store.commit('changeTab',true)
    }
}
</script>
<style lang="less" scoped>
.regsu{
    width: 100vw;
    h2{
        width: 96vw;
        margin: 54px auto;
        font-size: 28px;
        height: 200px;
        box-sizing: border-box;
        padding: 20px;
        color: rgb(0, 255, 200);
        font-weight: bold;
        background-color: darkorchid;
        border-radius: 20px;
        box-shadow: 0 0 10px gray;
        .ti{
            line-height: 80px;
        }
        .mes{
            text-align: center;
        }
    }
}
</style>