<template>
  <div>
    <city-header></city-header>
    <city-list></city-list>

  </div>
</template>

<script>

import cityHeader from './components/header'
import cityList from './components/list'

export default {
  name: 'City',
  components: {
    cityHeader,
    cityList
  }

}
  
</script>


<style lang="scss" scoped>


</style>