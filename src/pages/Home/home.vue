<template>
  <div>

    <div class="home-wrap">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <home-hot></home-hot>
      <home-maylike></home-maylike>
      <home-weekend></home-weekend>
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

  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then( res => {
        console.log(res)

      })

    },
  },

  mounted () {
    this.getHomeInfo()
  }
  
}
  
</script>


<style scoped>
.home-wrap {
  background: #F5F5F5;

}

</style>
