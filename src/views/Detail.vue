<template>
    <div v-if="filminfo"> <!-- v-if解决了一开始渲染filminfo为null时的报错，if filminfo = null 此div就不会进行渲染也就不会报错-->
      <div class="film-detail">
        <div class="span_poster">
          <img :src="filminfo.poster" alt="详情页图片">
        </div>
        <div class="film-detail-other">
          <span class="name">{{ filminfo.name }}</span>
          <span class="item">{{ filminfo.item.name }}</span>
          <p>{{ filminfo.category}}</p>
          <p>{{ filminfo.nation}} | {{ filminfo.runtime }} 分钟</p>
          <p>{{ filminfo.synopsis }}</p>
        </div>
      </div>

      <div class="detail-swiper">
        <span class="actors">演职人员</span>
        <swiper perview="4" class="actorswiper" myclassname="actorswiper">
          <div class="swiper-slide actor-photo" v-for="data in filminfo.actors" :key="data.name">
            <img :src="data.avatarAddress" alt="">
            <span class="actor-name">{{ data.name }}</span>
            <span class="actor-role">{{ data.role}}</span>
          </div>
        </swiper>
        <span class="photos">剧照</span>
        <swiper perview="3" class="photoswiper" myclassname="photoswiper">
          <div class="swiper-slide" v-for="data in filminfo.photos" :key="data.name">
            <img :src="data" alt="" class="photo">
          </div>
        </swiper>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import swiper from './Detail/DetailSwiper'
// import bus from '../bus'
export default {
  data () {
    return {
      filminfo: null
    }
  },
  name: 'Detail.vue',
  props: ['id'],

  beforeMount () {
    // bus.$emit('maizuo', false)
    // this.$store.state.isTabbarShaw = false
    this.$store.commit('HideDetailTabbar', false)
  },
  mounted () {
    // console.log('要id获取信息', this.$route.params.id)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=1152881`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603086751434277028200449"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data)
      this.filminfo = res.data.data.film
    })
  },

  beforeUnmount () {
    // bus.$emit('maizuo', true)
    // this.$store.state.isTabbarShaw = true
    this.$store.commit('ShowDetailTabbar', true)
  },
  components: {
    swiper
  }
}
</script>

<style lang="scss" scoped>
  .span_poster {
    height: 220px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .film-detail {
    .film-detail-other {
      padding: 15px;
      .name {
        color: #191a1b;
        font-size: 18px;
        height: 24px;
        line-height: 24px;
        margin-right: 7px;
      }
      .item {
        font-size: 9px;
        color: #ffffff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
      }
      p {
        font-size: 13px;
        color: #797d82;
        margin-top: 4px;
      }
    }
  }
  .detail-swiper {
    padding: 15px;
    .actors, .photos {
      display: inline-block;
      font-size: 16px;
      text-align: left;
      color: #191a1b;
      margin: 10px;
    }
  }
  .actor-photo {
    img {
      height: 80px;
    }
    span {
      display: block;
      text-align: center;
      width: 85px;
    }
  }
  .actor-name {
    padding-top: 10px;
    font-size: 12px;
    color: #191a1b;
    height: 18px;
    display: block;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .actor-role {
    font-size: 10px;
    color: #797d82;
  }
  .photo {
    height: 80px;
  }
</style>
