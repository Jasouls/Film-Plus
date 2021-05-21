  
<template>
    <div class="main">
        <div class="nowlogin" @click="toLogin">
            <i class="iconfont icon-bussiness-man-fill"></i>
            <div v-if="isLog">{{$store.state.logname}}</div>
            <div v-else>登录</div>
        </div>
        <ul class="order">
            <li @click="toShopcar">
                <i class="iconfont icon-manage-order-fill"></i>
                <div>电影订单</div>
            </li>
            <li @click="isLogin">
                <i class="iconfont icon-signboard-fill"></i>
                <div>商品订单</div>
            </li>
        </ul>
        <ul class="others">
            <li @click="isLogin">
                <i class="iconfont icon-bussiness-man-fill"></i>
                <span>个人信息</span>
                <i class="next">&gt;</i>
            </li>
            <li @click="isLogin">
                <i class="iconfont icon-inquiry-template"></i>
                <span>兑换券</span>
                <i class="next">&gt;</i>
            </li>
            <li @click="isLogin">
                <i class="iconfont icon-discounts-fill"></i>
                <span>组合红包</span>
                <i class="next">&gt;</i>
            </li>
            <li @click="isLogin">
                <i class="iconfont icon-consumption-fill"></i>
                <span>余额</span>
                <i class="next">&gt;</i>
            </li>
            <li @click="isLogin">
                <i class="iconfont icon-coupons"></i>
                <span>其他</span>
                <i class="next">&gt;</i>
            </li>
        </ul>
        <button class="nolog" @click="nolog" v-if="isLog">退出登录</button>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
    name:'User',
    computed: {
      isLog(){
          return this.$store.state.logname === ''?false:true
      }  
    },
    methods: {
        isLogin(){
            if(this.$store.state.logname){
                MessageBox({
                    title: '提示',
                    message: '即将前往。。。。。',
                    showCancelButton: true
                })
            }else{
                MessageBox({
                    title: '提示',
                    message: '详情信息请在登录后查看',
                    showCancelButton: true
                })
            } 
        },
        toLogin(){
            this.$router.push('/login')
        },
        toShopcar(){
            if(this.$store.state.logname){
                this.$router.push("/shopcar")
            }else{
                MessageBox({
                    title: '提示',
                    message: '详情信息请在登录后查看',
                    showCancelButton: true
                })
            }
        },
        nolog(){
            MessageBox({
                title: '提示',
                message: '确认退出？',
                showCancelButton: true
            }).then(res => {
                this.isRes(res)
            })
        },
        isRes(data){
            if(data === 'confirm'){
                this.$store.commit("nolog")
            }
        }
    }
}
</script>
<style lang="less" scoped>
.main{
    width: 100%;
    background-color: #f4f4f4;
    .nowlogin{
        width: 100%;
        height: 200px;
        background-image: url('../../assets/images/logo/logo.jpg');
        background-size: 100%;
        background-repeat: no-repeat;
        color: white;
        overflow: hidden;
        i{
            display: block;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            text-align: center;
            line-height: 80px;
            background-color:rgba(255,255,255,0.6) ;
            margin: 50px 20px 20px 20px;
            font-size: 50px;
        }
        div{
            font-size: 18px;
            line-height:0px;
            margin:0 20px;
            color: white;
            width: 80px;
            text-align: center;
        }
    } 
    .order{
        display: flex;
        background-color: rgb(0, 0, 0);
        height: 80px;
        color: rgb(0, 203, 253);
        li{
            flex: 1;
            text-align: center;
            line-height: 28px;
            i{
                display: block;
                margin-top: 10px;
                font-size: 34px;
            }
            div{
                padding-top: 0;
            }
        }
    }
    .others{
        margin-top: 10px;
        li{
            line-height: 40px;
            font-size: 16px;
            padding-left: 20px;
            padding-right: 20px;
            border-bottom: 1px solid lightgray;
            background-color: white;
            .iconfont{
                font-size: 28px;
                vertical-align: middle;
            }
            .next{
                float: right;
                font-weight: bold;
            }
        }
    }
    .nolog{
        width: 100vw;
        background-color: rgb(255, 44, 44);
        color: black;
        line-height: 30px;
        text-align: center;
        outline: none;
        font-size: 18px;
    }
}
</style>