<template>
<div class="center">
  <h3>center</h3><br>
  <div>
    这里是一个页面<br>
    这里是一个单文件组件<br>
    这里是个人中心 <br>
    啦啦啦啦啦啦啦啦！！！
  </div>
</div>
</template>

<script>
export default {
  name: 'center.vue'
  // 局部守卫
  // beforRouEnter (to, from, next) {
  //   // 在渲染该组件的对应路由被confirm前调用
  //   // 不！能！获取组件实例`this`
  //   // 因为当守卫执行前，组件实例还没被创建
  //   console.log('局部盘查')
  //   if (true) {
  //     next()
  //   } else {
  //     next('/center')
  //   }
  // }
}
</script>

<style scoped>
.center {
  width: 100%;
  /*height: 600px;*/
  background-color: antiquewhite;
}
</style>
