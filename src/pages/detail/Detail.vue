<template>
  <div class="main-page">
    
    <detail-banner></detail-banner>


  </div>
</template>


<script>

import detailBanner from './components/banner'

export default {
  name: "detail",

  data() {
    return {
     
    }
  },

  components: {
    detailBanner,
  },


}
</script>


<style lang="scss" scoped>

@import '@scss/mixins.scss';

.main-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: #f5f5f5;
}



</style>
