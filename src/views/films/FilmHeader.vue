<template>
    <div>
      <ul>
<!--        老问题：tag="li" 未生效-->
        <li><router-link to="/film/nowplaying" tag="li" activeClass="active">正在热映</router-link></li>
        <li><router-link to="/film/comingsoon" tag="li" activeClass="active">即将上映</router-link></li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'FilmHeader.vue'
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  li {
    a {
      text-decoration: none;
    }
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: white;
  }
}
  .active {
    color: #ff5f16;
    border-bottom: 2px solid #ff5f16;
  }

  .fixed {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 40px;
    background: white;
  }
</style>
