<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.min.css'
import Swiper from 'swiper'

export default {
  name: 'DetailSwiper',
  props: ['perview', 'myclassname'],
  mounted: function () {
    // eslint-disable-next-line no-new,no-unused-vars
    var swiper = new Swiper('.' + this.myclassname, {
      // direction: 'horizontal', // 水平切换方式
      slidesPerView: this.perview, // 设置slider容器能够同时显示的slides数量
      freeMode: true, // 设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
      spaceBetween: 30
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
