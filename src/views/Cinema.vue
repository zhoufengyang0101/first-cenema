<template>
<div>
  <span class="cinema-header">全部影院</span>
  <div class="cinema-scroll" :style="mystyle">
    <ul>
      <li v-for="data in datalist" :key="data.cinemaId">
        <span class="cinema-name">{{ data.name}}</span>
        <span class="cinema-address">{{ data.address }}</span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'cinema.vue',
  data () {
    return {
      datalist: [],
      mystyle: {
        height: '0px'
      }
    }
  },
  mounted () {
    // 定义div盒子高度，确保ul高度大于父盒子高度
    this.mystyle.height = document.documentElement.clientHeight - 100 + 'px'
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=745388',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603086751434277028200449","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.cinemas

      this.$nextTick(() => {
        // eslint-disable-next-line no-new,no-unused-vars
        const bs = new BScroll('.cinema-scroll', {
          // pullUpLoad: true,
          // click: true,
          // mousewheel: true,
          scrollbar: {
            fade: true,
            interactive: false
          }
        })
        console.log(bs)
        console.log(this.scroll)
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .cinema-header {
    display: block;
    height: 50px;
    text-align: left;
  }
.cinema-scroll {
  width: 100%;
  height: 500px;
  overflow: hidden;
  background-color: #fafafa;
  position: relative;
}
  li {
    height: 50px;
    .cinema-name {
      color: #191a1b;
      font-size: 15px;
      display: block;
    }
    .cinema-address {
      color: #797d82;
      font-size: 12px;
      margin-top: 5px;
    }
    .cinema-name, .cinema-address {
      display: block;
      max-width: 65%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
