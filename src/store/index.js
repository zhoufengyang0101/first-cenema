import { createStore } from 'vuex'
import axios from 'axios'
// Vuex,状态管理模式采用集中式存储管理应用的所有组件的状态
// 并以相应的规则保证状态以一种可预测的方式发生变化
export default createStore({
  state: {
    // 自定义的共享状态
    isTabbarShow: true,
    comingList: []
  },
  mutations: {
    // 唯一可以修改状态的位置
    HideDetailTabbar (state, data) {
      state.isTabbarShow = data
    },
    ShowDetailTabbar (state, data) {
      state.isTabbarShow = data
    },
    comingListMutation (state, data) {
      state.comingList = data
    }
  },
  actions: {
    getComingListAction (store) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=3705969',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603086751434277028200449","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data)
        // 数据传到mutation
        store.commit('comingListMutation', res.data.data.films)
      })
    }
  },
  modules: {
  }
})
