<template>
  <div>

    <div class="home-wrap">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <home-hot></home-hot>
    </div>
    
  </div>
</template>

<script>
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcons from './components/Icons'
import homeHot from './components/Hot'


export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeHot,
  },
  
}
  
</script>


<style scoped>
.home-wrap {
  background: #F5F5F5;

}

</style>
