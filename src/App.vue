<template>
  <div id="app">
    <router-view></router-view>
    <Tabbars v-show="$store.state.isTabbarShow"></Tabbars>
  </div>
</template>
<script>
import Tabbars from '@/components/base/tabbar/Tabbars'
export default {
  name:'app',
  components: {
    Tabbars
  }
}
</script>
