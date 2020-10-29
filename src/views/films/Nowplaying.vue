<template>
    <div>
      <ul>
<!--        //编程式导航-->
        <li v-for="data in datalist" :key="data.filmId" @click="handleChangepage(data.filmId)">
          <img :src="data.poster" alt="">
          <span class="name">{{ data.name }}</span>
          <span class="item">{{ data.item.name }}</span>
          <p>观众评分：{{ data.grade }}</p>
          <p>主演：{{ data.director }}</p>
          <button>购票</button>
          <p>{{ data.nation }} | {{ data.runtime }}分钟</p>
        </li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Nowplaying.vue',
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    // 请求字段：X-Client-Info: {"a":"3000","ch":"1002","v":"5.0.4","e":"1603086751434277028200449"}
    // X-Host: mall.film-ticket.film.list
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2573023',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603086751434277028200449"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.films
    })
  },
  methods: {
    handleChangepage (id) {
      console.log('传给详情页的id', id)
      // 编程式导航，路径跳转，传id
      // this.$router.push('/detail')
      // this.$router.push(`/detail/${id}`)
      // 编程式导航，name跳转
      this.$router.push({ name: 'futuredetail', params: { id: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
ul {

  li {
    overflow: hidden;
    /*position: relative;*/
    img {
      width: 100px;
      float: left;
      margin: 0 10px 10px 10px ;
    }
    .name {
      color: #191a1b;
      font-size: 16px;
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
    }
    button {
      color: #ff5f16;
      padding: 3px 8px ;
      border: 1px solid #ff5f16;
      border-radius: 4px;
      background-color: #ffffff;
    }
  }
}
</style>
