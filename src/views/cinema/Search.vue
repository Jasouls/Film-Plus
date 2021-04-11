<template>
    <mt-search v-model="value" placeholder="请输入影院名称">
        <mt-cell
            v-for="item in filter"
            :title="item.name"
            :key="item.cinemaId"
            @click.native="cinemaView(item.cinemaId)">
        </mt-cell>
    </mt-search>
</template>
<script>
export default {
    data () {
        return {
            cinemas:[],
            value:''
        }
    },
    computed: {
        filter(){
          return this.cinemas.filter(item => item.name.includes(this.value))
        }  
    },
    mounted () {
        this.cinemas = this.$store.state.cinemadata
    },
    methods: {
        cinemaView(cinemaId){
            this.$store.commit('setCinemaId',cinemaId)
            this.$router.push('/cinemapage')
        }
    }
}
</script>