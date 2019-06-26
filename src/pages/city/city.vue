<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotcity="hotcity" :cities="cities"></city-list>

  </div>
</template>

<script>

import axios from 'axios'
import cityHeader from './components/header'
import cityList from './components/list'
import citySearch from './components/search'

export default {
  name: 'City',
  components: {
    cityHeader,
    cityList,
    citySearch,
  },
  data () {
    return {
      hotcity: [],
      cities: {},
    }
  },

  mounted () {
    axios.get('/api/city.json').then(res => {
      const data = res.data
      if (data.ret && data.data) {
        this.hotcity = data.data.hotCities
        this.cities = data.data.cities

        // console.log(this.hotcity, this.cities)
      }
    })
  },

}
  
</script>


<style lang="scss" scoped>


</style>