<template>
    <div class="swiper-container filmswiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="n in 6" :key="n">
<!--      <img src="https://static.maizuo.com/v5/upload/189bcf606b4bf49ad5de201a2ea5024d.jpg?x-oss-process=image/quality,Q_70" alt="">-->
          <!--  未找到接口，直接写死       -->
          <img src="../../../public/film-Swiper-1.jpg" alt="film_Swiper">
        </div>
      </div>
<!--      如果需要分页器-->
      <div class="swiper-pagination">sada</div>
<!--      如果需要导航按钮-->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
</template>

<script>
// import Vue from 'vue'
// import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'
import Swiper, { Pagination, Navigation } from 'swiper'
Swiper.use([Pagination, Navigation])

// Vue.use(Swiper)
export default {
  name: 'Swiper.vue',
  mounted () {
    // window.onload = function () {
    // swiper初始化new报错，百度解决方案
    // eslint-disable-next-line no-unused-vars
    var myswiper = new Swiper('.filmswiper', {
      // slidesPerView: "auto",
      observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, // 修改swiper的父元素是，自动初始化swiper
      centeredSlides: true, // 默认值为false使活动块居左，若为true活动块居中
      loop: true, // 环路，若为true开启loop模式（loop模式：即所有swiper-slide为一个环路）
      spaceBetween: 4, // slide之间的距离，单位：px
      speed: 1000, // 即slider自动滑动开始到结束的时间
      autoplay: {
        delay: 2000 // 2s切换一次
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets' // 分页器样式‘bullets’  圆点（默认）
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
      // keyboard: { //键盘，bug：未生效，原因未知
      //   enabled: true, //开启键盘控制
      //   onlyInViewport: true // 设置当swiper离开可视区域则无法切换，默认为true
      // }
    })
  }
  // }
}
</script>

<style scoped>

  img {
    width: 100%;
    height: 200px;
  }
</style>
