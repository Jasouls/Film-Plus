<template>
    <Tabbar>
      <Tabbaritem path="/home" fontcolor='blue'>
        <i class="iconfont icon-all-fill" slot="icon"></i>
        <div slot="title">首页</div>
      </Tabbaritem>
      <Tabbaritem path="/cinema" fontcolor='yellow'>
        <i class="iconfont icon-online-tracking-fill" slot="icon"></i>
        <div slot="title">影院</div>
      </Tabbaritem>
      <Tabbaritem path="/news" fontcolor='red'>
        <i class="iconfont icon-product" slot="icon"></i>
        <div slot="title">快讯</div>
      </Tabbaritem>
      <Tabbaritem path="/user" fontcolor='green'>
        <i class="iconfont icon-bussiness-man-fill" slot="icon"></i>
        <div slot="title">我的</div>
      </Tabbaritem>
    </Tabbar>
</template>
<script>
import Tabbar from '@/components/common/tabbar/Tabbar'
import Tabbaritem from '@/components/common/tabbar/Tabbaritem'
export default {
    components: {
        Tabbar,
        Tabbaritem
    }
}
</script>