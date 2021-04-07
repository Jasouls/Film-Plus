  
<template>
    <div class="main">
        <div class="nowlogin" @click="toLogin">
            <i class="iconfont icon-bussiness-man-fill"></i>
            <div>登录</div>
        </div>
        <ul class="order">
            <li @click="isLogin">
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
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
    name:'User',
    methods: {
        isLogin(){
            MessageBox({
                title: '提示',
                message: '详情信息请在登录后查看',
                showCancelButton: true
            })
        },
        toLogin(){
            this.$router.push('/login')
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
}
</style>