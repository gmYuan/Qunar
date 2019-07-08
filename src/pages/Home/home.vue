<template>
  <div>

    <div class="home-wrap">
      <home-header></home-header>
      <home-swiper :list = bannerList></home-swiper>
      <home-icons :list = iconList></home-icons>
      <home-hot :list = hotList></home-hot>
      <home-maylike :list = mayLikeList></home-maylike>
      <home-weekend :list = weekendList></home-weekend>
    </div>
    
  </div>
</template>

<script>
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcons from './components/Icons'
import homeHot from './components/Hot'
import homeMaylike from './components/Maylike'
import homeWeekend from './components/Weekend'
import axios from 'axios'

import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeHot,
    homeMaylike,
    homeWeekend,
  },

  data () {
   
    return {
      // city: '',     由数据获取+prop传入，改为子组件内部Vuex获取
      bannerList: [],
      iconList: [],
      hotList: [],
      mayLikeList: [],
      weekendList: [],

      //  keep-alive相关
      lastCity: '',      // 用来判断 选取的城市是否发生变化
    
    }
  }, 

  computed: {
    ...mapState(['currentCity']),  // 用作查询参数，获取当前城市对应的 首页数据

  },

  methods: {
    getHomeInfo () {
      axios.get(`/api/index.json?${this.currentCity}`).then( res => {
        // console.log(res)
        if (res.data && res.data.ret) {
          const data = res.data.data

          // this.city = data.city
          this.bannerList = data.bannerList
          this.iconList = data.iconList
          this.hotList = data.hotList
          this.mayLikeList = data.mayLikeList
          this.weekendList = data.weekendList
        }

      })

    },
  },

  mounted () {
    this.lastCity = this.currentCity
    this.getHomeInfo()
  },

  activated () {
    if (this.lastCity !== this.currentCity) {
      this.lastCity = this.currentCity
      this.getHomeInfo()
    }
  },
  
}
  
</script>


<style scoped>
.home-wrap {
  background: #F5F5F5;

}

</style>
