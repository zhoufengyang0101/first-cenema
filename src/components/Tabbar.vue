<template>
  <nav>
    <!--      声明式导航-->
    <ul>
<!--      tag="li" 未生效-->
      <li>
        <router-link to="/film" tag="li" active-class="active">file</router-link>
      </li>
      <li>
        <router-link to="/cinema" tag="li" active-class="active">cinema</router-link>
      </li>
      <li>
        <router-link to="/center" tag="li" active-class="active">center</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
</script>

 <style lang="scss" scoped>
  .active {
    color: #ff2ef6;
  }
  nav {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    background: white;
  }
  ul {
    display: flex;
    a {
      text-decoration: none;
    }
    li {
      flex: 1;
      line-height: 50px;
      text-align: center;
    }
  }
</style>
