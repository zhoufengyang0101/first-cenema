<template>
<div class="film">
  <div>
    <swiper ref="myswiper"></swiper>
    <filmheader :class="isFixed?'fixed':''"></filmheader>
    <router-view> </router-view>
  </div>
</div>
</template>

<script>

import swiper from './films/Swiper'
import filmheader from './films/FilmHeader'
// import { Toast } from 'mint-ui'
// import { Indicator } from 'mint-ui'
export default {
  // name: 'Film.vue',
  data () {
    return {
      isFixed: false
    }
  },
  components: {
    swiper: swiper,
    filmheader: filmheader
  },
  mounted () {
    window.onscroll = this.handleScroll
    // Indicator.open('加载中...')
    // Toast('提示信息')
  },
  beforeUnmount () { // beforeDestroy报错,提示使用beforeUnmount
    // console.log('before')
    window.onscroll = null
    // Indicator.close()
  },
  methods: {
    handleScroll () {
      var scrolltop = document.documentElement.scrollTop // 滚动高度
      var height = this.$refs.myswiper.$el.offsetHeight // 获取轮播高度
      // console.log(document.documentElement.scrollTop, this.$refs.myswiper.$el.offsetHeight)
      if (scrolltop >= height) {
        // console.log('fixed')
        this.isFixed = true
      } else {
        // console.log('unfixd')
        this.isFixed = false
      }
    }
  }
}
</script>

<style scoped>
.film {
  width: 100%;
  /*height: 600px;*/
  background-color: #fafafa;
}
</style>
