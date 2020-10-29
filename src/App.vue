<template>
  <div>
<!--    v-show可以通过this.$store.state.isTabbarShow获取-->
    <tabbar v-show="isTabbarShow"></tabbar>
<!--    //路由容器-->
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from './components/Tabbar.vue'
import { mapState } from 'vuex'
// import bus from './bus'

// 局部定义
// ES6的导出
export default {
  data () {
    return {
      // isShow: true
    }
  },
  methods: {
  },
  // 局部组件
  components: {
    tabbar
  },
  mounted () {
    /* 在vue3.0中$on已被移除
   bus.$on('maizuo', () => {
    }) */
  },
  // computed: {
  //   isShow () {
  //     return this.$store.state.isTabbarShow
  //   }
  // },等同于下列方式
  computed: {
    ...mapState(['isTabbarShow']) // ES6合并展开运算符
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  html {
    height: 100%;
  }
  li {
    list-style: none;
  }
</style>
