<template>
    <div>
        <Topbar>
            <div slot="left" class="back" @click="backpage">&lt;</div>
            <div slot="center">注册新账号</div>
            <div slot="right" @click="toLogin">登录</div>
        </Topbar>
        <div class="box">
            <div class="logo">
                <i class="iconfont icon-bussiness-man-fill"></i>
            </div>
            <form action="javascript:;">
                <div class="username">
                    <label for="username">用户名:</label>
                    <input type="text" ref="value" @blur="see" id='username' autocomplete="off" placeholder="请输入用户名">
                    <div ref="color">{{message}}</div>
                </div>
                <div class="password">
                    <label for="password">密码:</label>
                    <input type="password" ref="number" id='password' @blur="saw" autocomplete="off" placeholder="请输入密码">
                    <div ref="passcolor">{{pass}}</div>
                </div>
                <div class="password">
                    <label for="password">确认密码:</label>
                    <input type="password" ref="isnumber" @blur="issaw" id='password' autocomplete="off" placeholder="请再次输入密码">
                    <div ref="ispasscolor">{{ispass}}</div>
                </div>
                <input type="submit" value="注册" class="btn" @click='tojump'>
            </form>
        </div>
        
    </div>
</template>
<script>
import Topbar from '@/components/common/topbar/Topbar'
import { MessageBox } from 'mint-ui'
export default {
    name:'Register',
    data () {
        return {
            message:'',
            pass:'',
            ispass:''   
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
        //返回上一页
        backpage(){
            history.back()
        },
        //跳转到登录页面
        toLogin(){
            this.$router.push('/login')
        },
        // 判断用户名是否合法
        see(){
            if(this.$refs.value.value.length < 3 && this.$refs.value.value.length > 0 || this.$refs.value.value.length > 8){
                this.message = "!用户名应为3-8位"
                this.$refs.color.className = 'da'
            }else if(this.$refs.value.value.length === 0){
                this.message = "!用户名不能为空"
                this.$refs.color.className = 'da'
            }else{
                this.message = "√用户名合法"
                this.$refs.color.className = 'su'
            }
        },
        //判断密码是否合法
        saw(){
            if(this.$refs.number.value.length < 6 && this.$refs.number.value.length > 0 || this.$refs.number.value.length > 12){
                this.pass = "!密码应为6-12位"
                this.$refs.passcolor.className = 'da'
            }else if(this.$refs.number.value.length === 0){
                this.pass = "!密码不能为空"
                this.$refs.passcolor.className = 'da'
            }else{
                this.pass = "√密码合法"
                this.$refs.passcolor.className = 'su'
            }
        },
        //判断密码是否与设置时一致
        issaw(){
            if(this.$refs.isnumber.value.length === 0){
                this.ispass = "!密码不能为空"
                this.$refs.ispasscolor.className = 'da'
            }else if(this.$refs.isnumber.value === this.$refs.number.value){
                this.ispass = "√密码合法"
                this.$refs.ispasscolor.className = 'su'
            }else{
                this.ispass = "!密码错误，请重新输入"
                this.$refs.ispasscolor.className = 'da'
            }
        },
        //判断注册信息是否全部合法，全部正确后允许提交
        tojump(){
            if(this.$refs.color.className === "su" && this.$refs.passcolor.className === "su" && this.$refs.ispasscolor.className === "su"){
                this.$router.push("/regsu")
            }else{
                MessageBox('提示', '用户名或密码不合法，请仔细核对！')
            }
        }
    }
}
</script>
<style lang="less" scoped>
.box{
    width: 100vw;
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
        height: 110px;
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
.su{
    color: rgb(2, 228, 2);
    font-weight: bold;
}
.da{
    color: red;
    font-weight: bold;
}
</style>