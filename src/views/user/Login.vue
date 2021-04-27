<template>
    <div>
        <Topbar>
            <template v-slot:left>
                <div class="back" @click="backpage">&lt;</div>
            </template>
            <template v-slot:center>
                <div>登录您的账号</div>
            </template>
            <template v-slot:right>
                <div @click="toRegister">注册</div>
            </template>
        </Topbar>
        <div class="box">
            <div class="logo">
                <i class="iconfont icon-bussiness-man-fill"></i>
            </div>
            <form action="javascript:;">
                <div class="username">
                    <label for="username">用户名:</label>
                    <input type="text" id='username' autocomplete="off" placeholder="请输入用户名" v-model="name">
                </div>
                <div class="password">
                    <label for="password">密码:</label>
                    <input type="password" id='password' autocomplete="off" placeholder="请输入密码" v-model="word">
                </div>
                <input type="submit" value="登录" class="btn" @click="toUser">
            </form>
        </div>
        
    </div>
</template>
<script>
import Topbar from '@/components/common/topbar/Topbar'
import { MessageBox } from 'mint-ui'
export default {
    name:'Login',
    data () {
        return {
            name:"",
            word:""    
        }
    },
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
        },
        toUser(){
            const arr = []
            const pass = []
            this.$store.state.userList.forEach(itemObj => {
                arr.push(itemObj.name)
                pass.push(itemObj.word)
            })
            if(arr.includes(this.name)){
                const num = arr.findIndex(item => item == this.name)
                if(pass[num] === this.word){
                    this.$store.commit("logname",this.name)
                    this.$router.push("/user")
                }else{
                    MessageBox({
                        title: '提示',
                        message: '密码错误，请重新输入',
                        showCancelButton: false
                    })
                }
            }else{
                MessageBox({
                    title: '提示',
                    message: '用户名不存在，请重新输入',
                    showCancelButton: false
                })
            }
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