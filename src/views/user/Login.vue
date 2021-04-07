<template>
    <div>
        <Topbar>
            <div slot="left" class="back" @click="backpage">&lt;</div>
            <div slot="center">登录您的账号</div>
            <div slot="right" @click="toRegister">注册</div>
        </Topbar>
        <div class="box">
            <div class="logo">
                <i class="iconfont icon-bussiness-man-fill"></i>
            </div>
            <form action="javascript:;">
                <div class="username">
                    <label for="username">用户名:</label>
                    <input type="text" id='username' autocomplete="off" placeholder="请输入用户名">
                </div>
                <div class="password">
                    <label for="password">密码:</label>
                    <input type="password" id='password' autocomplete="off" placeholder="请输入密码">
                </div>
                <input type="submit" value="登录" class="btn">
            </form>
        </div>
        
    </div>
</template>
<script>
import Topbar from '@/components/common/topbar/Topbar'
export default {
    name:'Login',
    components: {
        Topbar
    },
    mounted () {
        this.$store.commit('changeTab',false)
    },
    beforeDestroy () {
        this.$store.commit('changeTab',true)
    },
    methods: {
        backpage(){
            this.$router.push("/user")
        },
        toRegister(){
            this.$router.push('/register')
        }
    }
}
</script>
<style lang="less" scoped>
.box{
    width: 100%;
    box-sizing: border-box;
    background: rgb(183, 0, 255);
    color: rgb(245, 245, 245);
    margin-top: 44px;
    padding: 50px 20px;
    border-radius: 20px;
    .logo{
        text-align: center;
        i{
            font-size: 100px;
            background-color: rgb(0, 0, 0);
            border-radius: 50%;
        }
    }
    .username,.password{
        height: 120px;
    }
    .btn{
        background-color: black;
        color: rgb(255, 1, 192);
        font-size: 18px;
        margin-top: 30px;
    }
}
label{
    display: block;
    width: 60%;
    line-height: 60px;
    font-size: 24px;
    font-weight: 600;
}
input{
    outline: none;
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    border-radius: 10px;
    font-size: 18px;
}

.back{
    font-size: 20px;
}
</style>